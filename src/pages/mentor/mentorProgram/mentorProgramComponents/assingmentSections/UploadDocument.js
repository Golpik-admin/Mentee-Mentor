import React, { useState } from "react";
import { CloseSvg } from "../../../../../assets/svgs/MentorProgramSvg";

const UploadDocument = ({ isOpen, closePopup }) => {
  const [value, setValue] = useState({
    documentName:'',
  })
  if (!isOpen) return null;

  return (
    <div className="pt-4">
      <div className="border shadow   w-full h-full ">
        {/* upload word document */}
        <div className="flex flex-col  gap-6 pl-6 pt-4 ">
          <div className="flex flex-row  gap-2 ">
            <img
              className="w-[35px] h-[35px]"
              src={require("../../../../../assets/images/wordImg.png")}
            />
            <div>
              <p className="text-colorSecondary text-sm font-semibold">
                Create account on webflow.ppt
              </p>
              <p className="text-colorLightTertiary text-xs font-medium">
                12.5 MB
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
                Upload Document
              </h1>
              <div className="cursor-pointer" onClick={closePopup}>
                <CloseSvg />
              </div>
            </div>
            <div className="border w-full mt-2" />
            <div className="px-4">
              <div className="my-2 ">
                <label className="text-colorSecondary font-medium text-sm ">
                  Document Name
                </label>
                <input
                  type="text"
                  name="documentName"
                  placeholder="Write name of document here..."
                  value={value.documentName}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow shadow-[#FCFCFC] rounded-md border border-colorLightTertiary"
                />
              </div>

              <div className="mt-4 flex-col flex justify-center items-center w-full h-[200px] border border-dashed border-colorLightTertiary rounded-md ">
                <img
                  className="w-[35px] h-[35px]"
                  src={require("../../../../../assets/images/uploadImg.png")}
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

export default UploadDocument;
