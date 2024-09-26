import React, { useState } from "react";
import _ from "lodash";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo.svg";
import {
  MessageSvg,
  NotificationSvg,
  SearchSvg,
  SettingSvg,
} from "../assets/svgs/MentorSvg";

const UserHeader = () => {
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
            onClick={() => navigate("signup")}
            className="list-none text-colorWhite cursor-pointer"
          >
            <SettingSvg />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
