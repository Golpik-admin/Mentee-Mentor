import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CloseSvg } from "../assets/svgs/MentorSvg";

const ScheduleSession = ({ isOpen, closePopup }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || { userType: "mentee" };
  const [value, setValue] = useState({
    titleProgram: "",
    subject: "",
    description: "",
  });

  if (!isOpen) return null;

  return (
    <div className="">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-colorWhite px-4 py-4 rounded-lg shadow-lg w-[40%] ">
            {/* show={showModal} onHide={handleClose} */}

            <div className="flex flex-row items-center justify-between">
              <h2 className="text-lg font-bold text-colorSecondary">
                Schedule Session
              </h2>

              <div className="cursor-pointer" onClick={closePopup}>
                <CloseSvg />
              </div>
            </div>

            <div className="my-2 ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Course name
              </label>
              <input
                type="text"
                name="courseName"
                placeholder="Write name of course here..."
                value={value.courseName}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
              />
            </div>
            <div className="flex flex-row flex-wrap items-center gap-4 w-full">
              <div className="my-2 w-full md:w-auto">
                <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                  Choose date
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  value={value.date}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
                />
              </div>

              <div className="my-2 w-full md:w-auto">
                <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                  Start time
                </label>
                <input
                  type="time"
                  name="startTime"
                  placeholder="Start time"
                  value={value.startTime}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
                />
              </div>

              <div className="mb-2 w-full md:w-auto">
                <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                  End time
                </label>
                <input
                  type="time"
                  name="endTime"
                  placeholder="End time"
                  value={value.endTime}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
                />
              </div>
            </div>

            <div className="my-2 ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Meeting Link
              </label>
              <input
                type="link"
                name="meetingLink"
                placeholder="https://etsu.zoom.us/test"
                value={value.meetingLink}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
              />
            </div>
            <div className="border border-[#EDEDED]  w-full my-4" />
            <div className="flex flex-row  items-center justify-end gap-4">
              <button
                className="rounded border border-colorPrimary  text-colorPrimary font-semibold text-sm w-[125px] h-[35px]"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                onClick={closePopup}
                // onClick={() => navigate("/sessions")}
                className=" w-[155px] h-[35px] bg-colorPrimary text-colorWhite font-semibold text-sm rounded"
              >
                Schedule Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleSession;
