import { 
  users, 
  consultationRequests, 
  chatSessions,
  chatMessages,
  onboardingProfiles,
  tutorialSteps,
  type User, 
  type InsertUser, 
  type InsertConsultationRequest, 
  type ConsultationRequest,
  type ChatSession,
  type InsertChatSession,
  type ChatMessage,
  type InsertChatMessage,
  type OnboardingProfile,
  type InsertOnboardingProfile,
  type TutorialStep,
  type InsertTutorialStep
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getConsultationRequests(): Promise<ConsultationRequest[]>;
  createChatSession(session: InsertChatSession): Promise<ChatSession>;
  getChatSession(sessionId: string): Promise<ChatSession | undefined>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessages(sessionId: string): Promise<ChatMessage[]>;
  
  // Onboarding methods
  createOnboardingProfile(profile: InsertOnboardingProfile): Promise<OnboardingProfile>;
  getOnboardingProfile(sessionId: string): Promise<OnboardingProfile | undefined>;
  updateOnboardingProfile(sessionId: string, updates: Partial<InsertOnboardingProfile>): Promise<OnboardingProfile>;
  
  // Tutorial steps methods
  createTutorialStep(step: InsertTutorialStep): Promise<TutorialStep>;
  getTutorialSteps(userType?: string): Promise<TutorialStep[]>;
  getTutorialStep(stepKey: string): Promise<TutorialStep | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest> {
    const [consultationRequest] = await db
      .insert(consultationRequests)
      .values({
        ...request,
        company: request.company || null,
      })
      .returning();
    return consultationRequest;
  }

  async getConsultationRequests(): Promise<ConsultationRequest[]> {
    return await db
      .select()
      .from(consultationRequests)
      .orderBy(consultationRequests.submittedAt);
  }

  async createChatSession(session: InsertChatSession): Promise<ChatSession> {
    const [chatSession] = await db
      .insert(chatSessions)
      .values(session)
      .returning();
    return chatSession;
  }

  async getChatSession(sessionId: string): Promise<ChatSession | undefined> {
    const [session] = await db
      .select()
      .from(chatSessions)
      .where(eq(chatSessions.sessionId, sessionId));
    return session || undefined;
  }

  async createChatMessage(message: InsertChatMessage): Promise<ChatMessage> {
    const [chatMessage] = await db
      .insert(chatMessages)
      .values(message)
      .returning();
    return chatMessage;
  }

  async getChatMessages(sessionId: string): Promise<ChatMessage[]> {
    return await db
      .select()
      .from(chatMessages)
      .where(eq(chatMessages.sessionId, sessionId))
      .orderBy(chatMessages.timestamp);
  }

  // Onboarding methods
  async createOnboardingProfile(profile: InsertOnboardingProfile): Promise<OnboardingProfile> {
    const [onboardingProfile] = await db
      .insert(onboardingProfiles)
      .values({
        ...profile,
        updatedAt: new Date()
      })
      .returning();
    return onboardingProfile;
  }

  async getOnboardingProfile(sessionId: string): Promise<OnboardingProfile | undefined> {
    const [profile] = await db
      .select()
      .from(onboardingProfiles)
      .where(eq(onboardingProfiles.sessionId, sessionId));
    return profile || undefined;
  }

  async updateOnboardingProfile(sessionId: string, updates: Partial<InsertOnboardingProfile>): Promise<OnboardingProfile> {
    const [profile] = await db
      .update(onboardingProfiles)
      .set({
        ...updates,
        updatedAt: new Date()
      })
      .where(eq(onboardingProfiles.sessionId, sessionId))
      .returning();
    return profile;
  }

  // Tutorial steps methods
  async createTutorialStep(step: InsertTutorialStep): Promise<TutorialStep> {
    const [tutorialStep] = await db
      .insert(tutorialSteps)
      .values(step)
      .returning();
    return tutorialStep;
  }

  async getTutorialSteps(userType?: string): Promise<TutorialStep[]> {
    let query = db
      .select()
      .from(tutorialSteps)
      .where(eq(tutorialSteps.isActive, true))
      .orderBy(tutorialSteps.order);

    const steps = await query;
    
    // Filter by user type if provided
    if (userType) {
      return steps.filter(step => step.userTypes.includes(userType));
    }
    
    return steps;
  }

  async getTutorialStep(stepKey: string): Promise<TutorialStep | undefined> {
    const [step] = await db
      .select()
      .from(tutorialSteps)
      .where(eq(tutorialSteps.stepKey, stepKey));
    return step || undefined;
  }
}

export const storage = new DatabaseStorage();
