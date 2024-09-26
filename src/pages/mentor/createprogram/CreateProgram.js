import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CloseSvg } from "../../../assets/svgs/MentorSvg";

const CreateProgram = ({ isOpen, onClose, title, children }) => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    titleProgram: "",
    subject: "",
    description: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  // if (!isOpen) return null;
  return (
    <div className="w-full h-full bg-colorWhite flex justify-center items-center">
      <div
      // show={showModal} onHide={handleClose}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center ">
            <img
              className="w-[51px] h-[51px]"
              src={require("../../../assets/images/onlineLearning.png")}
            />
            <h2 className="text-lg font-bold text-colorSecondary">
              Create a New Program
            </h2>
          </div>
          <div className="cursor-pointer" onClick={handleClose}>
            <CloseSvg />
          </div>
        </div>

        <div className="my-2 ">
          <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
            Title of Program
          </label>
          <input
            type="text"
            name="titleProgram"
            placeholder="Write name of course here..."
            value={value.titleProgram}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
          />
        </div>

        <div className="my-2 ">
          <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Web Designing"
            value={value.subject}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
          />
        </div>

        <div className="my-2 ">
          <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
            Description of Course
          </label>
          <textarea
            // type="aboutMe"
            name="description"
            placeholder="Write description of course here..."
            value={value.description}
            // onChange={handleChange}
            // onBlur={handleBlur}
            rows="6"
            maxLength="200"
            className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md  border border-colorPrimary focus:border-colorPrimary focus:outline-none transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="border border-[#EDEDED]  w-full my-4" />
        <div className="flex flex-row  items-center justify-end gap-4">
          <button
            className="rounded border border-colorPrimary  text-colorPrimary font-semibold text-sm w-[125px] h-[35px]"
            // onClick={handleClose} className="mt-4"
          >
            Cancel
          </button>
          <button
            onClick={() => navigate("/mentorprogram")}
            className=" w-[125px] h-[35px] bg-colorPrimary text-colorWhite font-semibold text-sm rounded"
          >
            Create Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProgram;
