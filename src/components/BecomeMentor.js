import React from "react";
import { useNavigate } from "react-router-dom";

const BecomeMentor = ({ userType }) => {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <p className="text-colorSecondary mt-0 mb-3  text-2xl font-semibold">
        Become a Mentor
      </p>

      <p className="text-colorSecondary text-sm font-regular leading-loose">
        We want to inform you that your membership on the platform will be
        ending this month. We appreciate all your contributions and support
        during your time as a member. Starting next month, you will transition
        to a mentor role, where you can continue to share your knowledge and
        help others in the community.<br/>You membership on the platform will be
        ended this month and you will continue as mentor from next month. Click <span className="text-md cursor-pointer text-colorPrimary font-semibold">"Become Mentor" </span>
        to proceed
      </p>

      <button className="mt-6 items-center bg-colorPrimary px-4 py-3 rounded-lg text-sm  font-semibold text-colorWhite items-center ">
        Become a Mentor
      </button>
    </div>
  );
};

export default BecomeMentor;
