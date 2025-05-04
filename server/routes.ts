import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage"; // Keep this if needed for other features
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form route with email sending
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate form data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create reusable transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // ✅ Your Gmail
        pass: process.env.GMAIL_PASS,  // ✅ App Password (no spaces)
      },
    });

    const mailOptions = {
      from: email,
      to: "vivekchandnirala28@gmail.com", // Your destination email
      subject: subject,
      text: `From: ${name} <${email}>\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({
        success: true,
        message: "Message received and email sent successfully!",
      });
    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later.",
      });
    }
  });

  // Resume download route
  app.get("/resume.pdf", (req, res) => {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Vivek_Chand_Nirala_Resume.pdf"
    );

    // Send placeholder content as PDF
    const placeholderResponse =
      "This is a placeholder for Vivek Chand Nirala's resume PDF.";
    res.send(Buffer.from(placeholderResponse));
  });

  const httpServer = createServer(app);
  return httpServer;
}
