import React, { useState } from "react";
import { EmailSvg, LockSvg } from "../assets/svgs/AuthSvg";

const ChangeEmail = () => {
  const [value, setValue] = useState({
    currentEmail: "",
  });
  return (
    <div className=" p-6 ">
      <p className="text-colorSecondary text-2xl font-semibold">
        Email Address
      </p>
      <div className="pt-4">
        <label className="text-colorSecondary font-medium text-md">
          Current Email
        </label>
        <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-[80%] flex flex-row items-center">
          <EmailSvg />
          <input
            type="email"
            name="currentEmail"
            placeholder="Current email address"
            value={value.currentEmail}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none"
          />
        </div>
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className=" items-center  bg-colorPrimary text-colorWhite  text-lg font-semibold rounded-lg cursor-pointer py-4 px-4"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ChangeEmail;
