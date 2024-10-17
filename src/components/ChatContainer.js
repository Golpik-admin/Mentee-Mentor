import React, { useState } from "react";

const ChatContainer = ({ selectedContact }) => {
  const [messages, setMessages] = useState([
    {
      sender: selectedContact.name,
      text: "Hello! How can I assist you?",
      time: "2 min ago",
    },
    { sender: "You", text: "Hi, I need some help.", time: "1 min ago" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { sender: "You", text: newMessage, time: "just now" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-colorWhite mt-6 border rounded-lg shadow shadow-[#ccc]">
      {/* Chat Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={selectedContact.avatar}
            alt={selectedContact.name}
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <h3 className="font-semibold text-lg">{selectedContact.name}</h3>
            <span className="text-xs text-green-500">Active Now</span>
          </div>
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg mb-2 ${
                msg.sender === "You"
                  ? "bg-blue-500 text-colorWhite"
                  : "bg-gray-200 text-gray font-medium"
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs text-gray font-light">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-4  border-t">
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-2 border text-sm font-medium text-colorSecondary rounded mr-2 outline-none"
            placeholder="Type your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-colorWhite px-4 py-2 rounded"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
