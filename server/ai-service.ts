import OpenAI from "openai";
import type { ChatMessage, InsertOnboardingProfile } from "@shared/schema";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface AIChatResponse {
  message: string;
  error?: string;
}

export class AIService {
  private systemPrompt = `You are ReactorIX AI Assistant, an expert in cybersecurity, IT automation, and managed service provider (MSP) operations. You help users with:

1. Cybersecurity best practices and threat analysis
2. IT infrastructure automation and optimization
3. MSP service delivery and client management
4. Compliance and security framework implementation
5. Network security and endpoint protection
6. Cloud security and DevSecOps practices

You provide practical, actionable advice tailored to IT professionals, MSPs, and business leaders. Keep responses professional, informative, and focused on delivering reactor solutions that scale.`;

  async generateResponse(messages: ChatMessage[]): Promise<AIChatResponse> {
    try {
      // Convert our chat messages to OpenAI format
      const openaiMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        { role: "system", content: this.systemPrompt },
        ...messages.map(msg => ({
          role: msg.role as "user" | "assistant",
          content: msg.content
        }))
      ];

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: openaiMessages,
        max_tokens: 1000,
        temperature: 0.7,
      });

      const aiMessage = response.choices[0]?.message?.content;
      
      if (!aiMessage) {
        throw new Error("No response generated from AI service");
      }

      return { message: aiMessage };
    } catch (error) {
      console.error("AI Service Error:", error);
      return { 
        message: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment.",
        error: error instanceof Error ? error.message : "Unknown error"
      };
    }
  }

  async analyzeSentiment(text: string): Promise<{
    rating: number;
    confidence: number;
  }> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a sentiment analysis expert. Analyze the sentiment of the text and provide a rating from 1 to 5 stars and a confidence score between 0 and 1. Respond with JSON in this format: { 'rating': number, 'confidence': number }",
          },
          {
            role: "user",
            content: text,
          },
        ],
        response_format: { type: "json_object" },
      });

      const result = JSON.parse(response.choices[0].message.content || "{}");

      return {
        rating: Math.max(1, Math.min(5, Math.round(result.rating || 3))),
        confidence: Math.max(0, Math.min(1, result.confidence || 0.5)),
      };
    } catch (error) {
      console.error("Sentiment Analysis Error:", error);
      return { rating: 3, confidence: 0.5 };
    }
  }

  async generatePersonalizedOnboarding(profile: InsertOnboardingProfile): Promise<any> {
    try {
      const prompt = `Generate personalized onboarding content for a user with the following profile:
      
User Type: ${profile.userType}
Company Size: ${profile.companySize || 'Not specified'}
Industry: ${profile.industry || 'Not specified'}
Primary Goals: ${profile.primaryGoals?.join(', ') || 'Not specified'}
Experience Level: ${profile.experienceLevel}

Create personalized recommendations, custom tutorial paths, and relevant content suggestions. 
Respond with JSON in this format:
{
  "welcomeMessage": "Personalized welcome message",
  "recommendedTutorials": ["tutorial1", "tutorial2", "tutorial3"],
  "customTips": ["tip1", "tip2", "tip3"],
  "relevantFeatures": ["feature1", "feature2"],
  "estimatedCompletionTime": "X minutes",
  "personalizedGoals": ["goal1", "goal2"]
}`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are an expert onboarding consultant for ReactorIX, specializing in cybersecurity and IT automation solutions. Create highly personalized onboarding experiences based on user profiles.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        response_format: { type: "json_object" },
      });

      const result = JSON.parse(response.choices[0].message.content || "{}");
      return result;
    } catch (error) {
      console.error("Personalized Onboarding Generation Error:", error);
      // Return fallback personalized content
      return {
        welcomeMessage: `Welcome to ReactorIX! Let's get you started with ${profile.userType} solutions.`,
        recommendedTutorials: ["getting-started", "security-basics", "automation-intro"],
        customTips: ["Start with the basics", "Focus on your primary goals", "Take your time to learn"],
        relevantFeatures: ["Security Dashboard", "Automation Tools"],
        estimatedCompletionTime: "15 minutes",
        personalizedGoals: ["Enhanced Security", "Improved Efficiency"]
      };
    }
  }
}

export const aiService = new AIService();