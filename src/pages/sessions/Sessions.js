// import React, { useState } from "react";

// const Calendar = () => {
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const hours = Array.from({ length: 13 }, (_, i) => `${i + 7} AM`);

//   const [sessions, setSessions] = useState([
//     { day: 1, time: "8:30 AM", name: "Lecture Name", status: "start" },
//     { day: 1, time: "10:30 AM", name: "Lecture Name", status: "completed" },
//   ]);

//   const openModal = (day, time) => {
//     // Your modal logic to schedule a session
//     console.log(`Open modal for day: ${day}, time: ${time}`);
//   };

//   return (
//     <div className="p-4">
//       <div className="grid grid-cols-8 border">
//         {/* Days Header */}
//         <div className="border-b border-r h-12"></div>
//         {days.map((day, index) => (
//           <div
//             key={index}
//             className="text-center border-b border-r h-12 flex justify-center items-center"
//           >
//             {day}
//           </div>
//         ))}

//         {/* Time Slots */}
//         {hours.map((hour, index) => (
//           <React.Fragment key={index}>
//             {/* Time Label */}
//             <div className="border-r flex items-center justify-center h-12">
//               {hour}
//             </div>
//             {/* Slots for Each Day */}
//             {days.map((_, dayIndex) => (
//               <div
//                 key={dayIndex}
//                 className="border-r  h-12 relative cursor-pointer hover:bg-gray-100"
//                 onClick={() => openModal(dayIndex, hour)}
//               >
//                 {/* Display the session if it exists */}
//                 {sessions
//                   .filter(
//                     (session) =>
//                       session.day === dayIndex && session.time === hour
//                   )
//                   .map((session, idx) => (
//                     <div
//                       key={idx}
//                       className={`absolute bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm px-2 py-1 rounded ${
//                         session.status === "completed"
//                           ? "bg-green-200"
//                           : "bg-blue-200"
//                       }`}
//                     >
//                       {session.name}
//                     </div>
//                   ))}
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calendar;

import React, { useState } from "react";
import { BackSvg, SessionSvg } from "../../assets/svgs/MentorProgramSvg";
import UserHeader from "../../components/UserHeader";
import { useLocation, useNavigate } from "react-router-dom";
import ScheduleSession from "../../components/ScheduleSession";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showScheduleSession, setShowScheduleSession] = useState(false);
  const [month, setMonth] = useState(selectedDate.getMonth());
  const [year, setYear] = useState(selectedDate.getFullYear());
  const location = useLocation();
  const { userType } = location.state || { userType: "mentee" };
  const [openScheduleSession, setOpenScheduleSession] = useState(false);
  const openSchedulaPopup = () => {
    setOpenScheduleSession(true);
  };

  const closeSchedulePopup = () => {
    setOpenScheduleSession(false);
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const navigate = useNavigate();
  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
  };

  const handleDateChange = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  const handleScheduleSessionClick = () => {
    setShowScheduleSession(!showScheduleSession);
  };

  const numDays = daysInMonth(year, month);

  return (
    <div className="w-full h-screen overflow-auto bg-colorWhite ">
      <UserHeader />
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="border border-colorPrimary flex items-center gap-2  px-4 py-2 font-semibold rounded-lg text-colorPrimary"
        >
          <BackSvg />
          Back
        </button>
        <div className="flex justify-between items-center pt-6 py-4">
          <div className="flex items-center  gap-4 ">
            <div className="text-md font-semibold text-colorSecondary">
              Month
            </div>
            <div className="">
              <select
                value={month}
                onChange={handleMonthChange}
                className="bg-white border border-gray-300 block p-2.5 text-sm text-gray-700 rounded-lg"
              >
                {months.map((monthName, index) => (
                  <option key={index} value={index}>
                    {monthName}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-md font-semibold text-colorSecondary">
              Year
            </div>
            <div className="">
              <input
                type="number"
                value={year}
                onChange={handleYearChange}
                className="bg-white border border-gray-300 p-2.5 text-sm text-gray-700 rounded-lg"
              />
            </div>
          </div>
          {userType === "mentee" ? (
            ""
          ) : (
            <div className="flex items-center">
              <button
                onClick={openSchedulaPopup}
                className="rounded-md px-2 py-2 text-colorWhite bg-colorPrimary cursor-pointer flex justify-center gap-2 flex flex-row items-center"

                // onClick={handleScheduleSessionClick}
              >
                <SessionSvg />
                Schedule Session
              </button>
            </div>
          )}
        </div>

        {/* Calendar */}
        <div className="flex-1 pt-6">
          <div className="grid grid-cols-7 gap-4">
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
              (day, index) => (
                <div key={index} className="text-gray-600">
                  {day}
                </div>
              )
            )}
          </div>
          <div className="grid grid-cols-7 gap-4 mt-4">
            {Array(numDays)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`${
                    selectedDate.getDate() === index + 1 &&
                    selectedDate.getMonth() === month
                      ? "bg-indigo-500 text-white"
                      : "bg-white"
                  } p-4 border border-gray-200 rounded`}
                  onClick={() => handleDateChange(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
          </div>
        </div>
      </div>
      <ScheduleSession
        isOpen={openScheduleSession}
        closePopup={closeSchedulePopup}
      />
    </div>
  );
}

export default Calendar;
