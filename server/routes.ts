import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationRequestSchema, insertChatSessionSchema, insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";
import { aiService } from "./ai-service";
import { randomUUID } from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  // AI Contextual Suggestions
  app.post('/api/suggestions', async (req, res) => {
    try {
      const { userBehavior, context } = req.body;
      const suggestions = await aiService.generateContextualSuggestions(userBehavior, context);
      res.json({ success: true, suggestions });
    } catch (error) {
      console.error('Error generating suggestions:', error);
      res.status(500).json({ success: false, error: 'Failed to generate suggestions' });
    }
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

  const httpServer = createServer(app);
  return httpServer;
}
