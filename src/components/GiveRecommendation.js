import React, { useState } from "react";
import { CloseSvg } from "../assets/svgs/MentorProgramSvg";

const GiveRecommendation = ({ isOpen, closePopup, modalType }) => {
  const [value, setValue] = useState({
    description: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="px-4 bg-colorWhite py-4 rounded-lg shadow-lg w-[30%]">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-lg font-semibold text-colorSecondary">
                {modalType === "archive"
                  ? "Give Recommendation"
                  : "Edit Recommendation"}
              </h1>
              <div className="cursor-pointer" onClick={closePopup}>
                <CloseSvg />
              </div>
            </div>

            {modalType === "archive" && (
              <>
                <div className="my-2">
                  <div className="flex items-center gap-2 pb-2 ">
                    <img
                      src={require("../assets/images/profile.png")}
                      className="w-[20px] h-[20px]"
                    />
                    <label className="text-colorSecondary font-medium text-sm">
                      Cris Ronald
                    </label>
                  </div>
                  <textarea
                    type="text"
                    name="description"
                    placeholder="Write description of course here..."
                    value={value.description}
                    onChange={handleChange} // Handle textarea changes
                    rows="4"
                    maxLength="200"
                    className="h-auto min-h-[100px] resize-none w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md border border-[#8A8394] focus:border-[#8A8394] focus:outline-none transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="my-2">
                  <div className="flex items-center gap-2 pb-2 ">
                    <img
                      src={require("../assets/images/profile.png")}
                      className="w-[20px] h-[20px]"
                    />
                    <label className="text-colorSecondary font-medium text-sm">
                      Cris Gail
                    </label>
                  </div>
                  <textarea
                    type="text"
                    name="additionalDescription"
                    placeholder="Write additional description here..."
                    value={value.additionalDescription}
                    onChange={handleChange} // Handle textarea changes
                    rows="4"
                    maxLength="200"
                    className="h-auto min-h-[100px] resize-none w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md border border-[#8A8394] focus:border-[#8A8394] focus:outline-none transition-colors duration-200 ease-in-out"
                  />
                </div>
              </>
            )}

            {/* Conditionally render this section based on modalType */}
            {modalType === "edit" && (
              <div className="my-2">
                <div className="flex items-center gap-2 pb-2 ">
                  <img
                    src={require("../assets/images/profile.png")}
                    className="w-[20px] h-[20px]"
                  />
                  <label className="text-colorSecondary font-medium text-sm">
                    Cris Ronald
                  </label>
                </div>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Write description of course here..."
                  value={value.description}
                  onChange={handleChange} // Handle textarea changes
                  rows="4"
                  maxLength="200"
                  className="h-auto min-h-[100px] resize-none w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md border border-[#8A8394] focus:border-[#8A8394] focus:outline-none transition-colors duration-200 ease-in-out"
                />
              </div>
            )}

            <div className="flex justify-center">
              <button
                onClick={closePopup} // You can add specific logic here for saving changes
                className="bg-colorPrimary w-full text-colorWhite text-sm font-semibold py-2 px-6 rounded"
              >
                {modalType === "archive" ? "End Program" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiveRecommendation;
