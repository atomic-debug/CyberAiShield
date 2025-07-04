import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertConsultationRequestSchema, 
  insertChatSessionSchema, 
  insertChatMessageSchema, 
  insertOnboardingProfileSchema, 
  insertTutorialStepSchema,
  loginUserSchema,
  registerUserSchema
} from "@shared/schema";
import { z } from "zod";
import { aiService } from "./ai-service";
import { randomUUID } from "crypto";
import { getSessionConfig, requireAuth, optionalAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup session middleware
  app.use(getSessionConfig());
  app.use(optionalAuth);

  // Authentication routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const validatedData = registerUserSchema.parse(req.body);
      
      // Check if username already exists
      const existingUser = await storage.getUserByUsername(validatedData.username);
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Username already exists"
        });
      }

      const user = await storage.registerUser(validatedData);
      
      // Log the user in automatically after registration
      req.session.userId = user.id;
      
      res.json({
        success: true,
        message: "Registration successful",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid registration data",
          errors: error.errors
        });
      } else {
        console.error("Registration error:", error);
        res.status(500).json({
          success: false,
          message: "Registration failed"
        });
      }
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const validatedData = loginUserSchema.parse(req.body);
      
      const user = await storage.verifyPassword(validatedData.username, validatedData.password);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid username or password"
        });
      }

      // Create session
      req.session.userId = user.id;
      
      res.json({
        success: true,
        message: "Login successful",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid login data",
          errors: error.errors
        });
      } else {
        console.error("Login error:", error);
        res.status(500).json({
          success: false,
          message: "Login failed"
        });
      }
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error("Logout error:", err);
        return res.status(500).json({
          success: false,
          message: "Logout failed"
        });
      }
      
      res.clearCookie('connect.sid');
      res.json({
        success: true,
        message: "Logout successful"
      });
    });
  });

  app.get("/api/auth/user", (req, res) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated"
      });
    }

    res.json({
      success: true,
      user: req.user
    });
  });

  // Create consultation request
  app.post("/api/consultation", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      const consultationRequest = await storage.createConsultationRequest(validatedData);
      res.json({ 
        success: true, 
        message: "Thank you for your interest! We will contact you soon to schedule your consultation.",
        id: consultationRequest.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit consultation request" 
        });
      }
    }
  });

  // Get all consultation requests (for admin purposes)
  app.get("/api/consultation-requests", async (req, res) => {
    try {
      const requests = await storage.getConsultationRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch consultation requests" 
      });
    }
  });

  // Create a new chat session
  app.post("/api/chat/session", async (req, res) => {
    try {
      const sessionId = randomUUID();
      const validatedData = insertChatSessionSchema.parse({ sessionId });
      const session = await storage.createChatSession(validatedData);
      res.json({ success: true, sessionId: session.sessionId });
    } catch (error) {
      console.error("Create chat session error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to create chat session" 
      });
    }
  });

  // Send a message and get AI response
  app.post("/api/chat/message", async (req, res) => {
    try {
      const { sessionId, message } = req.body;
      
      if (!sessionId || !message) {
        return res.status(400).json({ 
          success: false, 
          message: "Session ID and message are required" 
        });
      }

      // Verify session exists
      const session = await storage.getChatSession(sessionId);
      if (!session) {
        return res.status(404).json({ 
          success: false, 
          message: "Chat session not found" 
        });
      }

      // Save user message
      const userMessageData = insertChatMessageSchema.parse({
        sessionId,
        role: "user",
        content: message
      });
      await storage.createChatMessage(userMessageData);

      // Get chat history for context
      const chatHistory = await storage.getChatMessages(sessionId);
      
      // Generate AI response
      const aiResponse = await aiService.generateResponse(chatHistory);
      
      if (aiResponse.error) {
        return res.status(500).json({ 
          success: false, 
          message: aiResponse.message 
        });
      }

      // Save AI response
      const aiMessageData = insertChatMessageSchema.parse({
        sessionId,
        role: "assistant", 
        content: aiResponse.message
      });
      const savedAiMessage = await storage.createChatMessage(aiMessageData);

      res.json({ 
        success: true, 
        message: savedAiMessage.content,
        messageId: savedAiMessage.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid message data", 
          errors: error.errors 
        });
      } else {
        console.error("Chat message error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to process chat message" 
        });
      }
    }
  });

  // Get chat history for a session
  app.get("/api/chat/history/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const messages = await storage.getChatMessages(sessionId);
      res.json({ success: true, messages });
    } catch (error) {
      console.error("Get chat history error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch chat history" 
      });
    }
  });

  // Create onboarding profile
  app.post("/api/onboarding/profile", async (req, res) => {
    try {
      const sessionId = randomUUID();
      const profileData = { ...req.body, sessionId };
      const validatedData = insertOnboardingProfileSchema.parse(profileData);
      
      // Generate personalized content using AI
      const personalizedContent = await aiService.generatePersonalizedOnboarding(validatedData);
      
      const profile = await storage.createOnboardingProfile({
        ...validatedData,
        personalizedContent: JSON.stringify(personalizedContent)
      });
      
      res.json({ 
        success: true, 
        profile,
        sessionId 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid profile data", 
          errors: error.errors 
        });
      } else {
        console.error("Create onboarding profile error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to create onboarding profile" 
        });
      }
    }
  });

  // Get onboarding profile
  app.get("/api/onboarding/profile/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const profile = await storage.getOnboardingProfile(sessionId);
      
      if (!profile) {
        return res.status(404).json({ 
          success: false, 
          message: "Onboarding profile not found" 
        });
      }
      
      res.json({ success: true, profile });
    } catch (error) {
      console.error("Get onboarding profile error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch onboarding profile" 
      });
    }
  });

  // Update onboarding progress
  app.patch("/api/onboarding/progress/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const { currentStep, completedSteps, isCompleted } = req.body;
      
      const updates: any = {};
      if (currentStep !== undefined) updates.currentStep = currentStep;
      if (completedSteps !== undefined) updates.completedSteps = completedSteps;
      if (isCompleted !== undefined) updates.isCompleted = isCompleted;
      
      const profile = await storage.updateOnboardingProfile(sessionId, updates);
      res.json({ success: true, profile });
    } catch (error) {
      console.error("Update onboarding progress error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to update onboarding progress" 
      });
    }
  });

  // Get tutorial steps
  app.get("/api/tutorial/steps", async (req, res) => {
    try {
      const { userType } = req.query;
      const steps = await storage.getTutorialSteps(userType as string);
      res.json({ success: true, steps });
    } catch (error) {
      console.error("Get tutorial steps error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch tutorial steps" 
      });
    }
  });

  // Get specific tutorial step
  app.get("/api/tutorial/step/:stepKey", async (req, res) => {
    try {
      const { stepKey } = req.params;
      const step = await storage.getTutorialStep(stepKey);
      
      if (!step) {
        return res.status(404).json({ 
          success: false, 
          message: "Tutorial step not found" 
        });
      }
      
      res.json({ success: true, step });
    } catch (error) {
      console.error("Get tutorial step error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch tutorial step" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
