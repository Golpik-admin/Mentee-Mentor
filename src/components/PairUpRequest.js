import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PairUpRequest = ({ userType }) => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const { userType } = location.state || { userType: "mentee" };
  return (
    <div className="p-6">

      <p className="text-colorSecondary mt-0 mb-3  text-2xl font-semibold">
        {userType === "mentee" ? "Pair-Up Sent" : "Pair-Up Request"}
      </p>

      <div className="cursor-pointer order shadow h-full shadow-[#F7F7F7] rounded-lg p-6 bg-[#F7F7F7] flex justify-between items-center">
        <p className="text-colorSecondary text-lg font-semibold">Profile</p>
        <p className="text-colorSecondary text-lg font-semibold">
          Certification
        </p>
        <p className="text-colorSecondary text-lg font-semibold">Profession</p>
        <p className="text-colorSecondary text-lg font-semibold">Location</p>
        <p className="text-colorSecondary text-lg font-semibold">Actions</p>
      </div>

      <div className="cursor-pointer pt-10 flex justify-between items-center">
        <div
          onClick={() => navigate("/profile")}
          className="gap-4 flex flex-row items-center"
        >
          <img
            className="w-[40px] h-[40px]"
            src={require("../assets/images/ellipse.png")}
          />

          <div>
            <p className="text-colorSecondary text-md font-semibold">
              Dianne Russell
            </p>
            <p className="text-colorSecondary text-xs font-regular">
              Program Name · Feb 24
            </p>
          </div>
        </div>

        <div className="gap-4 flex flex-row items-center">
          <button className=" bg-colorPrimary px-4 py-2 rounded-lg text-sm font-semibold text-colorWhite items-center ">
            Accept
          </button>
          <button className=" bg-[#DF4C4C] px-4 py-2 rounded-lg text-sm  font-semibold text-colorWhite items-center ">
            Cancel Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default PairUpRequest;
