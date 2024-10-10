import React, { useState } from "react";
import { LockSvg } from "../assets/svgs/AuthSvg";
import { Icon } from "@iconify/react";

const ChangePassword = () => {
  const [value, setValue] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Separate state for each password field
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className=" p-6 ">
      <p className="text-colorSecondary text-2xl font-semibold">
        Password & Security
      </p>

      <div className="pt-4">
        <label className="text-colorSecondary font-medium text-md">
          Current Password
        </label>
        <div className="border border-colorPrimary rounded-md px-4 py-3 my-2 w-[80%] flex flex-row items-center">
          <LockSvg />
          <input
            type={showCurrentPassword ? "text" : "password"}
            name="currentPassword"
            placeholder="Current Password"
            // value={value.currentPassword}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="focus:outline-none"
          >
            <Icon
              icon={
                showCurrentPassword
                  ? "clarity:eye-show-line"
                  : "clarity:eye-hide-line"
              }
              className="w-full h-auto text-2xl"
            />
          </button>
        </div>
      </div>

      {/* New Password Field */}
      <div className="pt-4">
        <label className="text-colorSecondary font-medium text-md">
          New Password
        </label>
        <div className="border border-colorPrimary rounded-md px-4 py-3 my-2 w-[80%] flex flex-row items-center">
          <LockSvg />
          <input
            type={showNewPassword ? "text" : "password"}
            name="newPassword"
            placeholder="New Password"
            // value={value.newPassword}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="focus:outline-none"
          >
            <Icon
              icon={
                showNewPassword
                  ? "clarity:eye-show-line"
                  : "clarity:eye-hide-line"
              }
              className="w-full h-auto text-2xl"
            />
          </button>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="pt-4">
        <label className="text-colorSecondary font-medium text-md">
          Confirm Password
        </label>
        <div className="border border-colorPrimary rounded-md px-4 py-3 my-2 w-[80%] flex flex-row items-center">
          <LockSvg />
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            // value={value.confirmPassword}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="focus:outline-none"
          >
            <Icon
              icon={
                showConfirmPassword
                  ? "clarity:eye-show-line"
                  : "clarity:eye-hide-line"
              }
              className="w-full h-auto text-2xl"
            />
          </button>
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="items-center bg-colorPrimary text-colorWhite text-lg font-semibold rounded-lg cursor-pointer py-4 px-4"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
