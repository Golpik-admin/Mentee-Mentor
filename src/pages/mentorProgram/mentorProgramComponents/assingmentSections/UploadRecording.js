import React, { useState } from "react";
import {
  CloseSvg,
} from "../../../../assets/svgs/MentorProgramSvg";

const UploadRecording = ({ isOpen, closePopup }) => {
  const [value, setValue] = useState({
    recordingTitle: "",
    sessionNumber: "",
    sessionTime: "",
  });
  if (!isOpen) return null;

  return (
    <div className="pt-4">
      <div className="border shadow   w-full h-full ">
        {/*upload Recording */}
        <div className="rounded-lg border border-lg shadow w-[302px]  p-2">
          <img
            className="w-[278px] h-[87px]"
            src={require("../../../../assets/images/bannerbg.png")}
          />
          <div className="flex flex-col gap-2 pt-2 ">
            <p className="text-colorSecondary text-xs font-medium">
              Course Name
            </p>
            <div className="flex flex-row items-center gap-2 ">
              <p className="text-colorSecondary text-xs font-medium">1:30hrs</p>
              <p className="text-colorSecondary text-xs font-medium">
                Session 1
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 ">
              <a className="rounded-md bg-colorPrimary p-2 border border-lg text-colorWhite text-xs font-medium">
                Watch Now
              </a>
              <a className="rounded-md text-colorPrimary p-2 border border-lg bg-[#F0F3F6]  text-xs font-medium">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-colorWhite py-4 rounded-lg shadow-lg w-[30%] h-[594px]">
            <div className="px-4 flex flex-row items-center justify-between">
              <h1 className="text-lg font-semibold text-colorSecondary">
                Upload Recording
              </h1>
              <div className="cursor-pointer" onClick={closePopup}>
                <CloseSvg />
              </div>
            </div>
            <div className="border w-full mt-2" />
            <div className="px-4">
              <div className="my-2 ">
                <label className="text-colorSecondary font-medium text-sm ">
                  Title of Recording
                </label>
                <input
                  type="text"
                  name="recordingTitle"
                  placeholder="Write title  here..."
                  value={value.recordingTitle}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow shadow-[#FCFCFC] rounded-md border border-colorLightTertiary"
                />
              </div>
              <div className="my-2 ">
                <label className="text-colorSecondary font-medium text-sm ">
                  Session Number
                </label>
                <input
                  type="number"
                  name="sessionNumber"
                  placeholder="Session Number"
                  value={value.sessionNumber}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow shadow-[#FCFCFC] rounded-md border border-colorLightTertiary"
                />
              </div>
              <div className="my-2 ">
                <label className="text-colorSecondary font-medium text-sm ">
                  Session Time
                </label>
                <input
                  type="text"
                  name="sessionTime"
                  placeholder="Session Time"
                  value={value.sessionTime}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow shadow-[#FCFCFC] rounded-md border border-colorLightTertiary"
                />
              </div>
              <div className="mt-4 flex flex-col justify-center items-center w-full h-[200px] border border-dashed border-colorLightTertiary rounded-md ">
                <img
                  className="w-[35px] h-[35px]"
                  src={require("../../../../assets/images/uploadImg.png")}
                />
                <p className="text-colorSecondary font-medium text-sm pt-2">
                  Drag & drop or Browse
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-4 px-4 gap-4 items-center flex-row ">
              <button
                onClick={closePopup}
                className="text-colorPrimary text-sm font-semibold rounded py-2 px-6 border border-colorPrimary"
              >
                Cancel
              </button>
              <button
                onClick={closePopup}
                className="bg-colorPrimary text-colorWhite text-sm font-semibold py-2 px-6 rounded"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadRecording;
