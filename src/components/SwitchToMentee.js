import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevSvg } from "../assets/svgs/AccountSettingSvg";

const SwitchToMentee = ({ userType }) => {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <p className="text-colorSecondary mt-0 mb-3  text-2xl font-semibold">
        Become a Mentee
      </p>

      <p className="text-colorSecondary text-sm font-regular leading-loose">
        We wanted to inform you that your membership on the platform will be
        ending this month. However, starting next month, you will have the
        opportunity to become a mentee. As a mentee, you can continue learning
        and growing with guidance from experienced mentors in our community.
        <br />
        Your membership will end this month, and you will continue as a mentee
        from next month. Click
        <span className="text-md cursor-pointer text-colorPrimary font-semibold">
          "Become Mentee"{" "}
        </span>
        proceed
      </p>

      <button className="mt-6 items-center bg-colorPrimary px-4 py-3 rounded-lg text-sm  font-semibold text-colorWhite items-center ">
        Become a Mentee
      </button>
    </div>
  );
};

export default SwitchToMentee;
