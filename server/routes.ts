import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertWaitlistSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get("/api/auth/user", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Waitlist routes
  app.post("/api/waitlist", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      console.log("Waitlist POST - User ID:", userId);
      console.log("Waitlist POST - Request body:", JSON.stringify(req.body));
      
      // Validate request body
      const validatedData = insertWaitlistSchema.parse({
        ...req.body,
        userId,
      });
      console.log("Waitlist POST - Validated data:", JSON.stringify(validatedData));

      const waitlistEntry = await storage.createWaitlistEntry(validatedData);
      console.log("Waitlist POST - Created entry:", JSON.stringify(waitlistEntry));
      res.status(201).json(waitlistEntry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Waitlist POST - Validation error:", JSON.stringify(error.errors));
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      console.error("Waitlist POST - Error creating waitlist entry:", error);
      res.status(500).json({ message: "Failed to create waitlist entry" });
    }
  });

  app.get("/api/waitlist", isAuthenticated, async (req, res) => {
    try {
      const entries = await storage.getWaitlistEntries();
      res.json(entries);
    } catch (error) {
      console.error("Error fetching waitlist:", error);
      res.status(500).json({ message: "Failed to fetch waitlist" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
