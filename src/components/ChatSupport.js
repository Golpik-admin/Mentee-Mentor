import React, { useState, useEffect } from "react";
import { SendSvg, TypeSvg } from "../assets/svgs/AccountSettingSvg";
// import io from "socket.io-client";

// const socket = io("http://localhost:3001");

const ChatSupport = ({ selectedContact }) => {
  // const [message, setMessage] = useState([
  //   {
  //     //   sender: selectedContact.name,
  //     text: "Hello! How can I assist you?",
  //     time: "2 min ago",
  //   },
  //   { sender: "You", text: "Hi, I need some help.", time: "1 min ago" },
  // ]);

  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [userId, setUserId] = useState("User123");

  // useEffect(() => {
  //   socket.emit("join", { userId });
  //   socket.on("chatMessage", ({ message, userId }) => {
  //     setChatMessages((prevMessages) => [...prevMessages, { message, userId }]);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const sendMessage = () => {
    if (message) {
      // socket.emit("chatMessage", { message, userId });
      setMessage("");
    }
  };

  // const handleSendMessage = () => {
  //   if (newMessage.trim()) {
  //     setMessages([
  //       ...messages,
  //       { sender: "You", text: newMessage, time: "just now" },
  //     ]);
  //     setNewMessage("");
  //   }
  // };

  return (
    <div className="h-screen flex-1 flex flex-col flex-1">
      {/* Chat Header */}
      <p className="font-semibold p-4 text-xl">Chat Support</p>

      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            // alt={selectedContact.name}
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-lg">dsfasd</p>
            <span className="text-xs text-green-500">Active Now</span>
          </div>
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-4 overflow-y-auto">
        {chatMessages.map((chat, index) => (
          <div
            key={index}
            // className={chat.userId === userId ? 'my-message' : 'admin-message'}
            className={`flex ${
              chat.userId === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg mb-2 ${
                chat.userId === "You"
                  ? "bg-colorPrimary text-colorWhite"
                  : "bg-gray-200 text-colorSecondary font-medium"
              }`}
            >
              <p>{chat.message}</p>
              {/* <span className="text-xs text-gray font-light">{chat.time}</span> */}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-4  border-t">
        <div className="flex items-center gap-2">
          <TypeSvg />
          <input
            type="text"
            className="flex-1 p-2 border text-sm font-medium text-colorSecondary rounded mr-2 outline-none"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="flex items-center gap-2 bg-colorPrimary text-colorWhite px-4 py-2 rounded"
            onClick={sendMessage}
          >
            <SendSvg />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
