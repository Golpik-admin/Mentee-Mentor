import React, { useState } from "react";

const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = Array.from({ length: 13 }, (_, i) => `${i + 7} AM`);

  const [sessions, setSessions] = useState([
    { day: 1, time: "8:30 AM", name: "Lecture Name", status: "start" },
    { day: 1, time: "10:30 AM", name: "Lecture Name", status: "completed" },
  ]);

  const openModal = (day, time) => {
    // Your modal logic to schedule a session
    console.log(`Open modal for day: ${day}, time: ${time}`);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-8 border">
        {/* Days Header */}
        <div className="border-b border-r h-12"></div>
        {days.map((day, index) => (
          <div
            key={index}
            className="text-center border-b border-r h-12 flex justify-center items-center"
          >
            {day}
          </div>
        ))}

        {/* Time Slots */}
        {hours.map((hour, index) => (
          <React.Fragment key={index}>
            {/* Time Label */}
            <div className="border-r flex items-center justify-center h-12">
              {hour}
            </div>
            {/* Slots for Each Day */}
            {days.map((_, dayIndex) => (
              <div
                key={dayIndex}
                className="border-r  h-12 relative cursor-pointer hover:bg-gray-100"
                onClick={() => openModal(dayIndex, hour)}
              >
                {/* Display the session if it exists */}
                {sessions
                  .filter(
                    (session) =>
                      session.day === dayIndex && session.time === hour
                  )
                  .map((session, idx) => (
                    <div
                      key={idx}
                      className={`absolute bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm px-2 py-1 rounded ${
                        session.status === "completed"
                          ? "bg-green-200"
                          : "bg-blue-200"
                      }`}
                    >
                      {session.name}dsfdsfas
                    </div>
                  ))}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
