"use client";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { useChatStore } from "../../../store/chatStore";
import axios from "axios";
import { useAuthStore } from "../../../store/useAuthStore";


export default function MentorChatPage() {
  const { studentId } = useParams();
  const {
    socket,
    connectSocket,
    messages,
    startConversation,
    sendMessage,
  } = useChatStore();

  const [text, setText] = useState("");
  const [studentInfo, setStudentInfo] = useState(null);
  const [previousMessages, setPreviousMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {mentor, responseData} = useAuthStore();
  console.log("user response ", responseData);
  
  const scrollRef = useRef(null);

  const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  if(!mentor) {
    console.log("Mentor not found")
 
  }   
  const mentorId = mentor?._id

  // ✅ Connect socket
  useEffect(() => {
    console.log("Conecting socket")
    if (mentorId && !socket) {
      console.log("Mentor id found no socket connection")
      connectSocket(mentorId)
    };
  }, [mentorId, socket, connectSocket]);

  // ✅ Start conversation when socket is ready
  useEffect(() => {
    if (mentorId && studentId && socket) {

      startConversation(mentorId, studentId);
    }
  }, [mentorId, studentId, socket, startConversation]);

  // ✅ Fetch previous messages
  useEffect(() => {
    const fetchChat = async () => {
      try {
        console.log("fetching teh chat");
        
        setLoading(true);
        const res = await axios.get(
          `${baseURL}/user/mentor/previouseChat/${studentId}`,
          { withCredentials: true }
        );

        const fetched = res.data?.messages || [];
        console.log("fetching teh chat",fetched);
        const sorted = fetched.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        setPreviousMessages(sorted);
        setStudentInfo(res.data?.student || null);
      } catch (err) {
        console.error("Error fetching previous chat:", err);
      } finally {
        setLoading(false);
      }
    };

    if (studentId) fetchChat();
  }, [studentId]);

  // ✅ Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, previousMessages]);

  // ✅ Handle sending a message
  const handleSend = () => {
    console.log("sending messae to student")
    if (!text.trim()) return;

    const localMessage = {
      senderId: mentorId,
      receiverId: studentId,
      text,
      createdAt: new Date().toISOString(),
    };

    sendMessage(mentorId, studentId, text);
    setPreviousMessages((prev) => [...prev, localMessage]);
    setText("");
  };

  // ✅ Combine previous and live messages
  const allMessages = [
    ...previousMessages,
    ...messages.filter(
      (m) => !previousMessages.some((pm) => pm._id && pm._id === m._id)
    ),
  ].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  return (
    <div className="flex justify-center min-h-screen bg-[#0b0b0b] text-white">
      <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 border-x border-blue-500/20 bg-[#111]/90 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 bg-[#111] border-b border-blue-500/30 sticky top-0 z-10">
          {studentInfo?.profilePicture?.url ? (
            <img
              src={studentInfo.profilePicture.url}
              alt={studentInfo.name}
              className="w-10 h-10 rounded-full border border-blue-500/30 object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              👤
            </div>
          )}
          <div>
            <h2 className="font-semibold">{studentInfo?.name || "Student"}</h2>
            <p className="text-sm text-gray-400">Active now</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-blue-500/30">
          {loading ? (
            <p className="text-center text-gray-400 mt-10">Loading chat...</p>
          ) : allMessages.length === 0 ? (
            <p className="text-center text-gray-400 mt-10">
              No messages yet. Start a conversation 👋
            </p>
          ) : (
            allMessages.map((msg, i) => {
              const isMentor = msg.senderId === mentorId;
              const time =
                msg.createdAt && !isNaN(new Date(msg.createdAt))
                  ? new Date(msg.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "";

              return (
                <div
                  key={msg._id || i}
                  className={`flex ${isMentor ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`p-3 rounded-2xl max-w-xs md:max-w-md break-words ${
                      isMentor
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-800 text-gray-100 rounded-bl-none"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-xs text-gray-400 block text-right mt-1">
                      {time}
                    </span>
                  </div>
                </div>
              );
            })
          )}
          <div ref={scrollRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-3 p-4 bg-[#0f0f0f] border-t border-blue-500/30">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border border-blue-500/30 rounded-lg bg-transparent text-white outline-none focus:border-blue-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
