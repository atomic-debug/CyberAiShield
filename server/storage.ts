import { users, consultationRequests, type User, type InsertUser, type InsertConsultationRequest, type ConsultationRequest } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getConsultationRequests(): Promise<ConsultationRequest[]>;
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
}

export const storage = new DatabaseStorage();
