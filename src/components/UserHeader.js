import React, { useState } from "react";
import _ from "lodash";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo.svg";
import {
  CloseSvg,
  LogoutSvg,
  MessageSvg,
  NotificationSvg,
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

  // if (!isOpen) return null;

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
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-colorWhite py-4 rounded-lg shadow-lg w-[30%]">
            <div className="px-4 flex flex-row items-center justify-between">
              <h1 className="text-lg font-semibold text-colorSecondary">
                Upload Assignment
              </h1>
              <div
                className="cursor-pointer"
                onClick={() => closePopup("settings")}
              >
                <CloseSvg />
              </div>
            </div>
            <div className="border w-full mt-2" />
            <div className="px-4"></div>

            {/* Submit button */}
            <div className="flex  justify-end mt-4 px-4 gap-4 items-center flex-row">
              <button
                // onClick={handleFileUpload}
                className="flex gap-2 items-center flex-row text-colorSecondary text-sm font-semibold py-2 px-6 rounded"
              >
                <LogoutSvg/>
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
