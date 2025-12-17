import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const validationError = fromError(validatedData.error);
        return res.status(400).json({ 
          error: "Dados inválidos", 
          details: validationError.toString() 
        });
      }

      const lead = await storage.createLead(validatedData.data);
      return res.status(201).json(lead);
    } catch (error) {
      console.error("Error creating lead:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  });

  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      return res.json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  });

  return httpServer;
}
