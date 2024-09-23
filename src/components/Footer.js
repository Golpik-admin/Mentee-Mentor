import React from "react";
import Logo from "../logo.svg";
import {
  EmailSvg,
  FacebookSvg,
  InstagramSvg,
  LinkedIn,
  PhoneSvg,
} from "../assets/svgs/HomeSvgs";

const Footer = () => {
  return (
    <div className="bg-[#151318] w-full h-[305px] px-6 py-3  ">

      <div className="flex flex-row items-center flex justifty-center pt-10">
        <div className="w-[50%] bg-red ">
          <img
            src={Logo}
            alt="Mentee Mentor"
            className="w-[50px] sm:w-[178px] md:w-[178px] h-[30] cursor-pointer"
          />
          <p className="text-colorWhite leading-loose text-xs pt-4 font-semibold">
            Find the best way to learn
            <br />
            new things to improve your
            <br />
            skills
          </p>
        </div>

        <div className="w-[50%]   ">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Column */}
            <div>
              <h2 className="text-white font-bold mb-4">Company</h2>
              <ul>
                <li className="mb-2 hover:text-white-400 text-[#7B7584] font-medium text-sm cursor-pointer">
                  Knowledge
                </li>
                <li className="mb-2 hover:text-white-400 text-[#7B7584] font-medium text-sm cursor-pointer">
                  How it Works
                </li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div>
              <h2 className="text-white font-bold mb-4">Contact Us</h2>
              <ul>
                <li className="mb-2 hover:text-white-400 text-[#7B7584] font-medium text-sm cursor-pointer">
                  Contact us
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h2 className="text-white font-bold mb-4">Support</h2>
              <ul>
                <li className="mb-2 hover:text-white-400 text-[#7B7584] font-medium text-sm cursor-pointer">
                  FAQ
                </li>
                <li className="mb-2 hover:text-white-400 text-[#7B7584] font-medium text-sm cursor-pointer">
                  Pricing
                </li>
              </ul>
            </div>

            {/* Find Us Column */}
            <div>
              <h2 className="text-white font-bold mb-4">Find Us</h2>
              <ul className="flex flex-row item-center">
                <li className="mb-2  hover:text-white-400 items-center justify-center flex rounded-full w-[55px] border border-colorSecondary h-[45px] cursor-pointer">
                  <FacebookSvg />
                </li>
                <li className="mb-2  ml-3 hover:text-white-400 items-center justify-center flex rounded-full w-[55px] border border-colorSecondary h-[45px] cursor-pointer">
                  <LinkedIn />
                </li>
                <li className="mb-2 ml-3 hover:text-white-400 items-center justify-center flex rounded-full w-[55px] border border-colorSecondary h-[45px] cursor-pointer">
                  <InstagramSvg />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-end mt-10">
        <div className="border-b border-[#322F37]  w-full my-4" />
        <p className="text-[#6D6775] text-sm text-center font-medium">
          2024 MyMenteeMentor inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
