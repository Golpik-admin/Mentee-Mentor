import React, { useState } from "react";
import { PlaneRightSvg } from "../../../../assets/svgs/MentorProgram";

const Chat = ({ userId }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Update the chat UI with the new message
      const newMessage = { sender: userId, message };
      setChat((prevChat) => [...prevChat, newMessage]);
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="chat-container w-full h-full overflow-auto bg-colorWhite">
      <div className="chat-messages flex-grow overflow-y-auto rounded-lg">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message mb-2 p-2 rounded-lg ${
              msg.sender === userId
                ? "bg-[#F2F2F7] text-colorSecondary self-end"
                : "bg-[#F2F2F7]"
            }`}
          >
            <p className="text-colorSecondary text-sm font-medium">
              {msg.message}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex mt-4 gap-6">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input flex-grow border border-gray-300 focus:outline-none p-2 rounded-lg"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className=" text-colorWhite text-md font-medium bg-colorPrimary flex flex-row cursor-pointer gap-2 items-center  px-4 py-2 rounded-lg"
        >
          <PlaneRightSvg />
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
