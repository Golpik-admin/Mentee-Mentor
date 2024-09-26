import React, { useState } from "react";
import {
  CloseSvg,
  PlaneRightSvg,
  PlusSvg,
  UploadSvg,
} from "../../../../assets/svgs/MentorProgram";

const Assignments = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setIsOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full h-full overflow-auto bg-colorWhite">
      {Data.map((item, i) => (
        <div className="border rounded-lg mb-4 shadow shadow-[#ccc] border-[#ccc] w-full h-full p-4">
          <div className="flex flex-row py-2 items-center justify-between">
            <p className="text-colorSecondary text-md font-bold">
              {item.heading}
            </p>
            <div className="flex flex-row items-center justify-row gap-2">
              <button
                type="submit"
                className=" text-colorWhite text-sm flex justify-center font-medium bg-colorPrimary flex flex-row cursor-pointer gap-4 items-center  px-4 py-2 rounded-lg"
              >
                <UploadSvg />
                {item.btnText}
              </button>
              <button className="w-[33px] h-[33px] text-colorPrimary text-md flex justify-center font-medium border border-colorPrimary cursor-pointer  items-center  rounded-lg">
                <PlusSvg />
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={openPopup}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Open Popup
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-colorWhite py-4 rounded-lg shadow-lg w-[30%] h-[514px]">
            <div className="px-4 flex flex-row items-center justify-between">
              <h1 className="text-lg font-semibold text-colorSecondary">
                Upload Assignment
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
                  name="subject"
                  placeholder="Write title  here..."
                  // value={value.subject}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow shadow-[#FCFCFC] rounded-md border border-colorLightTertiary"
                />
              </div>
              <div className="my-2 ">
                <label className="text-colorSecondary font-medium text-sm ">
                  Session
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Write name of course here..."
                  // value={value.subject}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow shadow-[#FCFCFC] rounded-md border border-colorLightTertiary"
                />
              </div>
              <div className="mt-4 flex justify-center items-center w-full h-[200px] border border-dashed border-colorLightTertiary rounded-md ">
                <div>
                  <p className="text-colorSecondary font-medium text-sm ">
                    Drag & drop or Browse
                  </p>
                </div>
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

export default Assignments;

const Data = [
  {
    heading: "Assignment",
    btnText: "Upload Assignment",
    link: "",
  },
  {
    heading: "Recording",
    btnText: "Upload Recording",
    link: "",
  },
  {
    heading: "Slides",
    btnText: "Upload Slides",
    link: "",
  },
  {
    heading: "Documents",
    btnText: "Upload Documents",
    link: "",
  },
  {
    heading: "Links",
    btnText: "Upload Links",
    link: "",
  },
];
