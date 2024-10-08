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
      <div className=" px-14 flex items-center justify-between m-auto">
        <img
          src={Logo}
          alt="Mentee Mentor"
          className="w-[50px] sm:w-[178px] md:w-[178px] h-[30] cursor-pointer"
        />
        {/* logo */}
        <div className="flex items-center">
          <li
            onClick={() => navigate("webhome")}
            className="list-none text-colorWhite pr-10 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => navigate("knowledge")}
            className="list-none text-colorWhite pr-10 cursor-pointer"
          >
            Knowledge
          </li>
          <li
            onClick={() => navigate("howitworks")}
            className="list-none text-colorWhite pr-10 cursor-pointer"
          >
            How it Works
          </li>
          <li
            onClick={() => navigate("pricing")}
            className="list-none text-colorWhite pr-10 cursor-pointer"
          >
            Pricing
          </li>
          <li
            onClick={() => navigate("faq")}
            className="list-none text-colorWhite pr-10 cursor-pointer"
          >
            FAQ
          </li>
          <li
            onClick={() => navigate("contactus")}
            className="list-none text-colorWhite pr-10 cursor-pointer"
          >
            Contact Us
          </li>
        </div>

        <div className="flex flex-row items-center space-x-4">
          <li
            onClick={() => navigate("login")}
            className="list-none text-colorWhite cursor-pointer"
          >
            Log in
          </li>
          <li
            onClick={() => navigate("signup")}
            className="list-none p-2 text-colorPrimary text-center  cursor-pointer bg-colorWhite  rounded-full"
          >
            Sign Up
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
