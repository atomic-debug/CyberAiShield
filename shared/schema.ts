import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const consultationRequests = pgTable("consultation_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

export const chatSessions = pgTable("chat_sessions", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  role: text("role").notNull(), // 'user' or 'assistant'
  content: text("content").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const onboardingProfiles = pgTable("onboarding_profiles", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull().unique(),
  userType: text("user_type").notNull(), // 'msp', 'it_admin', 'security_manager', 'executive'
  companySize: text("company_size"), // 'startup', 'small', 'medium', 'enterprise'
  industry: text("industry"), // 'healthcare', 'finance', 'technology', 'manufacturing', 'other'
  primaryGoals: text("primary_goals").array(), // ['security', 'automation', 'compliance', 'efficiency']
  experienceLevel: text("experience_level").notNull(), // 'beginner', 'intermediate', 'expert'
  currentStep: integer("current_step").default(0).notNull(),
  completedSteps: text("completed_steps").array().default([]),
  isCompleted: boolean("is_completed").default(false).notNull(),
  personalizedContent: text("personalized_content"), // JSON string with AI-generated content
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const tutorialSteps = pgTable("tutorial_steps", {
  id: serial("id").primaryKey(),
  stepKey: text("step_key").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  userTypes: text("user_types").array().notNull(), // Which user types see this step
  order: integer("order").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertConsultationRequestSchema = createInsertSchema(consultationRequests).pick({
  name: true,
  email: true,
  company: true,
  message: true,
});

export const insertChatSessionSchema = createInsertSchema(chatSessions).pick({
  sessionId: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).pick({
  sessionId: true,
  role: true,
  content: true,
});

export const insertOnboardingProfileSchema = createInsertSchema(onboardingProfiles).pick({
  sessionId: true,
  userType: true,
  companySize: true,
  industry: true,
  primaryGoals: true,
  experienceLevel: true,
  currentStep: true,
  completedSteps: true,
  isCompleted: true,
  personalizedContent: true,
});

export const insertTutorialStepSchema = createInsertSchema(tutorialSteps).pick({
  stepKey: true,
  title: true,
  description: true,
  userTypes: true,
  order: true,
  isActive: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertConsultationRequest = z.infer<typeof insertConsultationRequestSchema>;
export type ConsultationRequest = typeof consultationRequests.$inferSelect;
export type InsertChatSession = z.infer<typeof insertChatSessionSchema>;
export type ChatSession = typeof chatSessions.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertOnboardingProfile = z.infer<typeof insertOnboardingProfileSchema>;
export type OnboardingProfile = typeof onboardingProfiles.$inferSelect;
export type InsertTutorialStep = z.infer<typeof insertTutorialStepSchema>;
export type TutorialStep = typeof tutorialSteps.$inferSelect;
