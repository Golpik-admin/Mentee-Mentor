import React, { useState } from "react";
import { CloseSvg } from "../../../../assets/svgs/MentorProgramSvg";

const UploadSlides = ({ isOpen, closePopup }) => {
  const [value, setValue] = useState({
    slideName: "",
  });

  if (!isOpen) return null;

  return (
    <div className="pt-4">
      <div className="border shadow   w-full h-full ">
        {/* upload Slides */}
        <div className="flex flex-col  gap-6 pl-6 pt-4 ">
          <div className="flex flex-row  gap-2 ">
            <img
              className="w-[35px] h-[35px]"
              src={require("../../../../assets/images/pdfImg.png")}
            />
            <div>
              <p className="text-colorSecondary text-sm font-semibold">
                Assignment-2
              </p>
              <p className="text-colorLightTertiary text-xs font-medium">
                12.5 mb
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-colorWhite py-4 rounded-lg shadow-lg w-[30%] ">
            <div className="px-4 flex flex-row items-center justify-between">
              <h1 className="text-lg font-semibold text-colorSecondary">
                Upload Slides
              </h1>
              <div className="cursor-pointer" onClick={closePopup}>
                <CloseSvg />
              </div>
            </div>
            <div className="border w-full mt-2" />
            <div className="px-4">
              <div className="my-2 ">
                <label className="text-colorSecondary font-medium text-sm ">
                  Slide Name
                </label>
                <input
                  type="text"
                  name="slideName"
                  placeholder="Slide Name"
                  value={value.slideName}
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

export default UploadSlides;
