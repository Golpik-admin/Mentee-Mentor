import React, { useState } from "react";
import { BackSvg, SessionSvg } from "../../assets/svgs/MentorProgramSvg";
import UserHeader from "../../components/UserHeader";
import { useLocation, useNavigate } from "react-router-dom";
import ScheduleSession from "../../components/ScheduleSession";

const Session = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [scheduledSessions, setScheduledSessions] = useState({});
  const [openScheduleSession, setOpenScheduleSession] = useState(false);
  const [month, setMonth] = useState(selectedDate.getMonth());
  const [year, setYear] = useState(selectedDate.getFullYear());

  const location = useLocation();
  const { userType } = location.state || { userType: "mentee" };
  const navigate = useNavigate();

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

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleDateChange = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
  };

  const handleSchedule = (sessionData) => {
    const key = `${sessionData.date}-${sessionData.startTime}`;
    setScheduledSessions((prevSessions) => ({
      ...prevSessions,
      [key]: sessionData,
    }));
    setOpenScheduleSession(false);
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
                onChange={(e) => setMonth(parseInt(e.target.value))}
                className="bg-white border block p-2.5 text-sm rounded-lg"
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
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="bg-white border border-gray-300 p-2.5 text-sm text-gray-700 rounded-lg"
              />
            </div>
          </div>
          {userType === "mentee" ? (
            ""
          ) : (
            <div className="flex items-center">
              <button
                onClick={() => setOpenScheduleSession(true)}
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
          {/* <div className="grid grid-cols-7 gap-4 mt-4">
            {Array(numDays)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`${
                    selectedDate.getDate() === index + 1 &&
                    selectedDate.getMonth() === month
                      ? "bg-[#E8E8E8]  "
                      : "bg-colorWhite"
                  } p-4 border border-gray-200 rounded-md`}
                  onClick={() => handleDateChange(index + 1)}
                >
                  <p className="text-lg text-colorSecondary font-bold">
                    Date: {index + 1}
                  </p>
                  <div>
                    <p className="text-sm mt-1 text-colorSecondary font-medium">
                      Time
                    </p>
                    <p
                      className="
                        text-sm mt-1 text-colorSecondary font-medium"
                    >
                      Lecture Name
                    </p>
                    <button className="bg-colorPrimary  text-colorWhite text-sm mt-2 p-2 rounded-md  font-medium">
                      {userType === "mentee" ? "join Session" : "Start Session"}
                    </button>
                  </div>
                </div>
              ))}
          </div> */}
          <div className="grid grid-cols-7 gap-4 mt-4">
            {Array(numDays)
              .fill(0)
              .map((_, index) => {
                const day = index + 1;
                const formattedDate = `${year}-${month + 1}-${day
                  .toString()
                  .padStart(2, "0")}`;

                const session = Object.values(scheduledSessions).find(
                  (session) => session.date === formattedDate
                );

                return (
                  <div
                    key={index}
                    className={`p-4 border rounded-md ${
                      session ? "bg-[#E8E8E8]" : "bg-colorWhite"
                    }`}
                    onClick={() => handleDateChange(day)}
                  >
                    <p className="text-lg text-colorSecondary font-medium">
                     {day}
                    </p>
                    {session ? (
                      <>
                        <p className="text-sm mt-1 text-colorSecondary">
                          Time: {session.startTime} - {session.endTime}
                        </p>
                        <p className="text-sm mt-1  mb-2 text-colorSecondary">
                          Course: {session.courseName}
                        </p>
                        <a
                          href={session.meetingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm bg-colorPrimary p-2 text-colorWhite rounded-md "
                        >
                          {userType === "mentee"
                            ? "Join Session"
                            : "Start Session"}
                        </a>
                      </>
                    ) : (
                      ''
                      // <p className="text-sm mt-1 text-colorSecondary">
                      //   No session scheduled
                      // </p>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <ScheduleSession
        closePopup={() => setOpenScheduleSession(false)}
        onSchedule={handleSchedule}
        isOpen={openScheduleSession}
      />
    </div>
  );
};

export default Session;


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