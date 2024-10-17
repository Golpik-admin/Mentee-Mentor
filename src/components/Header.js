import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { label: "Home", link: "/webhome" },
    { label: "Knowledge", link: "/knowledge" },
    { label: "How it Works", link: "/howitworks" },
    { label: "Pricing", link: "/pricing" },
    { label: "FAQ", link: "/faq" },
    { label: "Contact Us", link: "/contactus" },
  ];

  return (
    <div className="bg-colorPrimary py-3">
      {/* Header container */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <img
          src={Logo}
          alt="Mentee Mentor"
          className="hidden sm:block w-[50px] sm:w-[178px] md:w-[178px] h-[30] cursor-pointer"
          onClick={() => navigate("/webhome")}
        />
        <img
          src={require("../assets/images/logo.png")}
          alt="Mentee Mentor"
          className="block sm:hidden w-[50px] sm:w-[178px] md:w-[178px] h-[30] cursor-pointer"
          onClick={() => navigate("/webhome")}
        />

        {/* Hamburger menu for mobile */}
        <div className="sm:hidden">
          <Icon
            icon="mdi:menu"
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        {/* Menu for larger screens */}
        <div className="hidden sm:flex items-center space-x-6">
          {menu.map((item, index) => (
            <li
              key={index}
              onClick={() => navigate(item.link)}
              className={`list-none cursor-pointer ${
                location.pathname === item.link ||
                (location.pathname === "/" && item.link === "/webhome")
                  ? "text-colorWhite"
                  : "text-gray-400"
              }`}
            >
              {item.label}
            </li>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <li
            onClick={() => navigate("login")}
            className="list-none text-colorWhite cursor-pointer"
          >
            Log in
          </li>
          <li
            onClick={() => navigate("signup")}
            className="list-none p-2 text-colorPrimary text-center cursor-pointer bg-colorWhite rounded-full"
          >
            Sign Up
          </li>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-start space-y-4 px-4 py-3 bg-colorPrimary">
          {menu.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                navigate(item.link);
                setMenuOpen(false); // Close menu after selection
              }}
              className={`list-none cursor-pointer ${
                location.pathname === item.link ||
                (location.pathname === "/" && item.link === "/webhome")
                  ? "text-colorWhite"
                  : "text-gray-400"
              }`}
            >
              {item.label}
            </li>
          ))}

          {/* Mobile Auth buttons */}
          <li
            onClick={() => navigate("login")}
            className="list-none text-colorWhite cursor-pointer"
          >
            Log in
          </li>
          <li
            onClick={() => navigate("signup")}
            className="list-none p-2 text-colorPrimary text-center cursor-pointer bg-colorWhite rounded-full"
          >
            Sign Up
          </li>
        </div>
      )}
    </div>
  );
};

export default Header;
