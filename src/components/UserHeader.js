import React, { useState, useRef } from "react";
import _ from "lodash";
import { useLocation, useNavigate } from "react-router-dom";
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
import Notifications from "./Notifications";
import CommonModal from "./CommonModal";

const UserHeader = () => {
  const [openModals, setOpenModals] = useState({});
  const [openLogoutModal, setLogoutModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || { userType: "mentee" };

  const openPopup = (modal) => {
    setOpenModals((prev) => ({ ...prev, [modal]: true }));
  };

  const closePopup = (modal) => {
    setOpenModals((prev) => ({ ...prev, [modal]: false }));
  };

  const visiblePopup = () => {
    setLogoutModal(true);
  };

  const unvisiblePopup = () => {
    setLogoutModal(false);
  };

  const notificationRef = useRef(null);

  const handleOpenNotifications = () => {
    if (notificationRef.current) {
      notificationRef.current.openModal();
    }
  };

  return (
    <div className="bg-colorPrimary py-2.5">
      {/* Header */}
      <div className="px-14 flex items-center justify-between m-auto">
        {/* Large screen logo */}
        <img
          src={Logo}
          alt="Mentee Mentor"
          className="hidden sm:block w-[50px] sm:w-[178px] md:w-[178px] h-[30] cursor-pointer"
          onClick={() => navigate("/webhome")} // Clicking logo navigates to home
        />

        {/* Small screen logo */}
        <img
          src={require("../assets/images/logo.png")}
          alt="Mentee Mentor"
          className="block sm:hidden w-[50px] sm:w-[178px] md:w-[178px] h-[30] cursor-pointer"
          onClick={() => navigate("/webhome")} // Clicking logo navigates to home
        />

        <div className="flex flex-row items-center space-x-4">
          <a
            onClick={() => navigate("/search")}
            className="list-none text-colorWhite cursor-pointer"
          >
            <SearchSvg />
          </a>
          <a
            onClick={handleOpenNotifications}
            className="list-none text-colorWhite cursor-pointer"
          >
            <NotificationSvg />
          </a>
          <a
            onClick={() => navigate("/messages")}
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
        <Notifications ref={notificationRef} />
      </div>

      {openModals.settings && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex p-16 justify-end">
          <div className="bg-colorWhite rounded-lg py-2 shadow-lg w-[20%] h-[175px]">
            <div className="px-2 flex flex-row justify-between">
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

            <div className="flex mt-2 px-2 flex-col">
              <button
                onClick={() =>
                  navigate("/accountsetting", { state: { userType } })
                }
                className="flex gap-2 items-center flex-row text-colorSecondary text-sm font-semibold py-2 rounded"
              >
                <ProfileSvg />
                Account Setting
              </button>
              <button
                onClick={visiblePopup}
                className="flex gap-2 items-center flex-row text-colorSecondary text-sm font-semibold py-2 rounded"
              >
                <LogoutSvg />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <CommonModal
        text={"Are you sure you want to logout?"}
        heading={"Logout"}
        btnText={"Logout"}
        isOpen={openLogoutModal}
        closeModal={unvisiblePopup}
      />
    </div>
  );
};

export default UserHeader;
