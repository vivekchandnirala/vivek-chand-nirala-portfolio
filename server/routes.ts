import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form (just a placeholder for now)
  app.post("/api/contact", (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate form data
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: "All fields are required" 
        });
      }
      
      // In a real application, you would send an email or store the contact request
      
      res.status(200).json({ 
        success: true, 
        message: "Message received! We'll get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again later." 
      });
    }
  });
  
  // Create a sample resume PDF for download
  app.get("/resume.pdf", (req, res) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Vivek_Chand_Nirala_Resume.pdf');
    
    // Send a placeholder PDF response
    const placeholderResponse = 'This is a placeholder for Vivek Chand Nirala\'s resume PDF.';
    res.send(Buffer.from(placeholderResponse));
  });

  const httpServer = createServer(app);

  return httpServer;
}
