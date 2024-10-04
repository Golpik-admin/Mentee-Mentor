import React, { useState } from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import Logo from "../logo.svg";
import {
  CloseSvg,
  LogoutSvg,
  MessageSvg,
  NotificationSvg,
  ProfileSvg,
  SearchSvg,
  SettingSvg,
} from "../assets/svgs/MentorSvg";

const UserHeader = () => {
  const [openModals, setOpenModals] = useState({});

  const navigate = useNavigate();

  const menu = [
    {
      label: "Home",
      link: "/home",
    },
    {
      label: "Knowledge",
      link: "/",
    },
    {
      label: "How it Works",
      link: "/",
    },
    {
      label: "Pricing",
      link: "/",
    },
    {
      label: "FAQ",
      link: "/",
    },
    {
      label: "Contact Us",
      link: "/",
    },
  ];


  const openPopup = (modal) => {
    setOpenModals((prev) => ({ ...prev, [modal]: true }));
  };

  const closePopup = (modal) => {
    setOpenModals((prev) => ({ ...prev, [modal]: false }));
  };

  return (
    <div className="bg-colorPrimary py-3">
      {/* header */}
      <div className=" px-14 flex items-center justify-between m-auto">
        <img
          src={Logo}
          alt="Mentee Mentor"
          className="w-[50px] sm:w-[178px] md:w-[178px] h-[30] cursor-pointer"
        />
        {/* logo */}

        <div className="flex flex-row items-center space-x-4">
          <a
            onClick={() => navigate("login")}
            className="list-none text-colorWhite cursor-pointer"
          >
            <SearchSvg />
          </a>
          <a
            onClick={() => navigate("signup")}
            className="list-none text-colorWhite cursor-pointer"
          >
            <NotificationSvg />
          </a>
          <a
            onClick={() => navigate("signup")}
            className="list-none text-colorWhite cursor-pointer"
          >
            <MessageSvg />
          </a>
          <a
            onClick={() => openPopup("settings")}
            className="list-none text-colorWhite cursor-pointer"
          >
            <SettingSvg />
          </a>
        </div>
      </div>

      {openModals.settings && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex  p-14 justify-end">
          <div className="bg-colorWhite py-2 rounded-lg shadow-lg w-[20%] h-[170px]">
            <div className="px-2 flex flex-row  justify-between">
              <div className="flex gap-2 items-center">
                <img
                  className="w-[56px] h-[56px] rounded-full"
                  src={require("../assets/images/profile.png")}
                />
                <div className="">
                  <h1 className="text-lg font-semibold text-colorSecondary">
                    Jack Willson
                  </h1>
                  <p className="text-sm font-regular text-colorSecondary">
                    Certified Fitness Coach
                  </p>
                </div>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => closePopup("settings")}
              >
                <CloseSvg />
              </div>
            </div>

            <div className="border w-full mt-2" />

            <div className="flex mt-2 px-2  flex-col">
              <button
                onClick={() => navigate('/accountsetting')}
                className="flex gap-2 items-center flex-row text-colorSecondary text-sm font-semibold py-2 rounded"
              >
                <ProfileSvg />
                Account Setting
              </button>
              <button
                // onClick={handleFileUpload}
                className="flex gap-2 items-center flex-row text-colorSecondary text-sm font-semibold py-2 rounded"
              >
                <LogoutSvg />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserHeader;
