import React, { useState } from "react";
import FriendList from "../../components/FriendList";
import ChatContainer from "../../components/ChatContainer";
import { BackSvg } from "../../assets/svgs/MentorProgramSvg";
import { useNavigate } from "react-router-dom";
import UserHeader from "../../components/UserHeader";

const Messages = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const navigate = useNavigate();
  const friends = [
    {
      id: 1,
      name: "Jane Cooper",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      lastMessage: "Yeah sure, tell me...",
      time: "just now",
    },
    {
      id: 2,
      name: "Jenny Wilson",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
      lastMessage: "Thank you so much...",
      time: "2 days ago",
    },
    {
      id: 3,
      name: "Marvin McKinney",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      lastMessage: "You're Welcome",
      time: "1 min ago",
    },
    // Add more friends...
  ];

  return (
    <div className="w-full h-full overflow-auto bg-colorWhite">
      <UserHeader />
      <div className="px-8 py-6 ">
        <button
          onClick={() => navigate(-1)}
          className="border border-colorPrimary flex items-center gap-2  px-4 py-2 font-semibold rounded-lg text-colorPrimary"
        >
          <BackSvg />
          Back
        </button>

        <div className="flex h-screen gap-4">
          {/* Friend List (Left Sidebar) */}
          <FriendList friends={friends} onSelectFriend={setSelectedFriend} />

          {/* Chat Container (Right Chat Window) */}
          {selectedFriend ? (
            <ChatContainer selectedContact={selectedFriend} />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray font-lgiht text-md">
                Select a friend to start chatting
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
