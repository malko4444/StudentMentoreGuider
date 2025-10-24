import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  conversationId: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
  senderId: { type: mongoose.Schema.Types.ObjectId, required: true },
  text: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);
