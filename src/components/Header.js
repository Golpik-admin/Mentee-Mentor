import React, { useState } from "react";
import _ from "lodash";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo.svg";

const Header = () => {
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
      <div className="w-11/12 max-w-[1100px] flex items-center justify-between m-auto">
        <img
          src={Logo}
          alt="Mentee Mentor"
          className="w-[50px] sm:w-[178px] md:w-[178px] h-[30] cursor-pointer"
        />
        {/* logo */}
        <div className="flex items-center">
          <li className="list-none text-colorWhite pr-10 cursor-pointer">
            Home
          </li>
          <li className="list-none text-colorWhite pr-10 cursor-pointer">
            Knowledge
          </li>
          <li className="list-none text-colorWhite pr-10 cursor-pointer">
            How it Works
          </li>
          <li className="list-none text-colorWhite pr-10 cursor-pointer">
            Pricing
          </li>
          <li className="list-none text-colorWhite pr-10 cursor-pointer">
            FAQ
          </li>
          <li className="list-none text-colorWhite pr-10 cursor-pointer">
            Contact Us
          </li>
        </div>

        <div className="flex flex-row items-center space-x-4">
          <li className="list-none text-colorWhite cursor-pointer">Log in</li>
          <li className="list-none p-2 text-colorPrimary text-center  cursor-pointer bg-colorWhite  rounded-full">
            Sign Up
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
