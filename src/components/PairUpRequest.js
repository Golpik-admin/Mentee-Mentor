import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevSvg } from "../assets/svgs/AccountSettingSvg";

const PairUpRequest = ({ userType }) => {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <p className="text-colorSecondary mt-0 mb-3  text-2xl font-semibold">
        {userType === "mentee" ? "Pair-Up Request Sent" : "Pair up Requests"}
      </p>
      {userType === "mentee" ? (
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
      ) : (
        <div className="cursor-pointer h-full   flex flex-col">
          <div className="flex  shadow w-[100%]  p-6 bg-[#F7F7F7] shadow-[#F7F7F7] rounded-lg">
            <div className="w-[25%] flex justify-center items-center gap-2">
              <p className="text-colorSecondary text-lg font-semibold ">
                Profile
              </p>
            </div>
            <div className="w-[25%] flex justify-center items-center gap-2">
              <p className="text-colorSecondary text-lg font-semibold ">
                Certification
              </p>
              <ChevSvg />
            </div>
            <div className="w-[25%] flex justify-center items-center gap-2">
              <p className="text-colorSecondary  text-lg font-semibold ">
                Profession
              </p>
              <ChevSvg />
            </div>
            <div className="w-[25%] flex justify-center items-center gap-2">
              <p className="text-colorSecondary  text-lg font-semibold ">
                Location
              </p>
              <ChevSvg />
            </div>
            <div className="w-[25%] flex justify-center items-center gap-2">
              <p className="text-colorSecondary text-lg font-semibold ">
                Actions
              </p>
            </div>
          </div>
          <div className="cursor-pointer w-[100%]  pt-5 flex justify-between items-center">
            <div
              onClick={() => navigate("/profile")}
              className="gap-4 flex flex-row  items-center w-[25%]"
            >
              <img
                className="w-[40px] h-[40px]"
                src={require("../assets/images/ellipse.png")}
              />

              <div>
                <p className="text-colorSecondary    text-md font-semibold">
                  Dianne Russell
                </p>
                <p className="text-colorSecondary   text-xs font-regular">
                  Program Name · Feb 24
                </p>
              </div>
            </div>
            <p className="text-colorSecondary  text-center  text-sm font-medium w-[25%]">
              ACCA Certified
            </p>
            <p className="text-colorSecondary  text-center text-sm font-medium w-[25%]">
              Finance Executive
            </p>
            <p className="text-colorSecondary text-center text-sm font-medium w-[25%]">
              California
            </p>
            <div className="gap-4 flex flex-row items-center ">
              <button className=" bg-colorPrimary px-4 py-2 rounded-lg text-sm font-semibold text-colorWhite items-center ">
                Accept
              </button>
              <button className=" bg-[#DF4C4C] px-4 py-2 rounded-lg text-sm  font-semibold text-colorWhite items-center ">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PairUpRequest;
