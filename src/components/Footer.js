import React from "react";
import Logo from "../logo.svg";
import { FacebookSvg, InstagramSvg, LinkedIn } from "../assets/svgs/HomeSvgs";

const Footer = () => {
  return (
    <div className="bg-[#151318] w-full px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section - Logo and Text */}
        <div className="md:w-[50%] mb-6 md:mb-0">
          <img
            src={Logo}
            alt="Mentee Mentor"
            className="w-[170px]  h-auto cursor-pointer"
          />
          <p className="text-colorWhite leading-loose text-sm  pt-4 font-semibold">
            Find the best way to learn
            <br />
            new things to improve your
            <br />
            skills
          </p>
        </div>

        {/* Right Section - Links and Social Icons */}
        <div className="md:w-[50%] w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Company Column */}
            <div>
              <h2 className="text-white text-base font-bold mb-4">Company</h2>
              <ul>
                <li className="mb-2 hover:text-white text-[#7B7584] font-medium text-base sm:text-sm cursor-pointer">
                  Knowledge
                </li>
                <li className="mb-2 hover:text-white text-[#7B7584] font-medium text-base sm:text-sm cursor-pointer">
                  How it Works
                </li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div>
              <h2 className="text-white font-bold text-base mb-4">Contact Us</h2>
              <ul>
                <li className="mb-2 hover:text-colorWhite text-[#7B7584] font-medium text-base sm:text-sm cursor-pointer">
                  Contact us
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h2 className="text-colorWhite font-bold  text-base mb-4">Support</h2>
              <ul>
                <li className="mb-2 hover:text-colorWhite text-[#7B7584] font-medium text-base sm:text-sm cursor-pointer">
                  FAQ
                </li>
                <li className="mb-2 hover:text-colorWhite text-[#7B7584] font-medium text-base sm:text-sm cursor-pointer">
                  Pricing
                </li>
              </ul>
            </div>

            {/* Find Us Column */}
            <div>
              <h2 className="text-colorWhite text-base font-bold mb-4">Find Us</h2>
              <ul className="flex space-x-3">
                <li className="hover:text-colorWhite items-center justify-center flex rounded-full w-[45px] border border-colorSecondary h-[45px] cursor-pointer">
                  <FacebookSvg />
                </li>
                <li className="hover:text-colorWhite items-center justify-center flex rounded-full w-[45px] border border-colorSecondary h-[45px] cursor-pointer">
                  <LinkedIn />
                </li>
                <li className="hover:text-colorWhite items-center justify-center flex rounded-full w-[45px] border border-colorSecondary h-[45px] cursor-pointer">
                  <InstagramSvg />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
