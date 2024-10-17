import React, { useState } from "react";
import {
  CloseSvg,
  RatingSvg,
  StarSvg,
  SubmitSvg,
} from "../assets/svgs/MentorProgramSvg";
import { useLocation, useNavigate } from "react-router-dom";
import { EmailSvg } from "../assets/svgs/AuthSvg";

const TransferProgram = ({ isOpen, closeModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || { userType: "mentee" };

  const [value, setValue] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className=" bg-colorWhite py-4 rounded-lg shadow-lg w-1/2">
            <div className="px-4 flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={require("../assets/images/programTransfer.png")} />
                <div className="flexflex-col ">
                  <p className="text-colorSecondary font-semibold text-lg">
                    Transfer Program
                  </p>
                  <p className="text-colorSecondary font-medium text-sm">
                    Enter email address to transfer profile or search mentor
                  </p>
                </div>
              </div>
              <div className="cursor-pointer" onClick={closeModal}>
                <CloseSvg />
              </div>
            </div>
            <div className="border w-full border-[#E3E3E3] mt-2" />

            <div className="pb-2 pt-4 px-4">
              <label className="text-colorSecondary font-regular text-sm">
                Feedback (Optional)
              </label>
              <div className="gap-2 flex w-full px-2 mt-2 py-2 rounded-md border border-[#8A8394]">
                <EmailSvg />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email address or mentor search..."
                  value={value.email}
                  onChange={handleChange}
                  className="resize-none w-full text-sm font-regular text-colorLightTertiary focus:outline-none "
                />
              </div>
              <div className="flex justify-end pt-4">
                <button
                  onClick={closeModal}
                  className="p-2 text-colorWhite font-semibold text-sm rounded-md  bg-colorPrimary cursor-pointer gap-2 items-center"
                >
                  Transfer Program
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferProgram;
