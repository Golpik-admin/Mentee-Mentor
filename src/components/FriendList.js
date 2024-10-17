import React, { useState } from "react";

const FriendList = ({ friends, onSelectFriend }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-colorWhite mt-6  w-1/4 border rounded-lg shadow shadow-[#ccc]">
      <div className="p-4">
        <p className="text-2xl mb-4 text-colorSecondary font-bold">Chat</p>
        <input
          type="text"
          className="w-full p-4 border text-colorSecondary text-sm rounded font-regular outline-none"
          placeholder="Search Friends"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="overflow-y-auto">
        {filteredFriends.map((friend) => (
          <li
            key={friend.id}
            className="flex items-center justify-between p-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelectFriend(friend)}
          >
            <div className="flex items-center">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold text-colorSecondary text-md">
                  {friend.name}
                </p>
                <span className="text-xs text-gray font-light">
                  {friend.lastMessage}
                </span>
              </div>
            </div>
            <span className="text-xs text-gray font-light">{friend.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
