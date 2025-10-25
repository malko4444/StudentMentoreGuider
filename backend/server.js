import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";

import Conversation from "./models/conversationModel.js";
import Message from "./models/messageModel.js";

// import chatRoutes from "./routes/chatRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import studentRouter from "./routes/studentRoutes.js";

dotenv.config();

// -------------------- APP SETUP --------------------
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
// At the top of your Express app (before routes)
// const cors = require('cors');

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3006', // Your Next.js URL
  credentials: true, // CRITICAL: Allows cookies to be sent
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(helmet());
app.use(rateLimit({ windowMs: 60 * 1000, max: 100 }));
app.use(cookieParser());

// Routes
app.use("/user/mentor", mentorRoutes);
app.use("/admin", adminRouter);
app.use("/user/student", studentRouter);
// app.use("/chat", chatRoutes);

// -------------------- SOCKET.IO SETUP --------------------
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3006", // frontend URL in production
    methods: ["GET", "POST"],
  },
});

const onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log("🟢 New user connected:", socket.id);

  // user joins with their id
  socket.on("join", (userId) => {
    onlineUsers.set(userId, socket.id);
    console.log(`✅ User joined: ${userId}`);
  });

  // start conversation between student and mentor
  socket.on("start_conversation", async ({ senderId, receiverId }) => {
    try {
      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
      });

      if (!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, receiverId],
        });
      }

      socket.emit("conversation_started", conversation);
    } catch (error) {
      console.error("❌ Error starting conversation:", error.message);
      socket.emit("error_message", "Failed to start conversation");
    }
  });

  // send message event
  socket.on("send_message", async ({ senderId, receiverId, text }) => {
    try {
      if (!senderId || !text) {
        return socket.emit("error_message", "Missing required fields");
      }

      console.log("Sending message: ", senderId, receiverId, text)

      // const message = await Message.create({
      //   receiverId,
      //   senderId,
      //   text,
      // });

      // const conversation = await Conversation.findById(conversationId);
      // if (!conversation) {
      //   return socket.emit("error_message", "Conversation not found");
      // }

      // const receiverId = conversation.participants.find(
      //   (id) => id.toString() !== senderId
      // );

      const receiverSocketId = onlineUsers.get(receiverId.toString());
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("receive_message", message);
      }

      socket.emit("message_sent", message);
    } catch (error) {
      console.error("❌ Error sending message:", error.message);
      socket.emit("error_message", "Failed to send message");
    }
  });

  // handle disconnect
  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
    for (const [userId, socketId] of onlineUsers.entries()) {
      if (socketId === socket.id) {
        onlineUsers.delete(userId);
      }
    }
  });
});

// -------------------- DATABASE + SERVER START --------------------
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
