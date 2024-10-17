import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../actions/UserActions";
import { registerSchema } from "../../../schemas";
import {
  EmailSvg,
  LockLightSvg,
  ProfileSvg,
} from "../../../assets/svgs/AuthSvg";
import { Icon } from "@iconify/react";
import Spinner from "../../../elements/Spinner";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, loading, message } = useSelector((state) => state.userReducer);

  const [userType, setUserType] = useState("mentee");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const initialFields = {
    name: "",
    email: "",
    password: "",
    role: userType,
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialFields,
      validationSchema: registerSchema,
      onSubmit: (values) => {
        dispatch(registerAction(values));
        navigate("/createprofile", { state: { userType } });
      },
    });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-screen overflow-auto bg-colorWhite flex items-center justify-center flex-col md:flex-row">
      {/* Image */}
      <div
        className="lg:w-1/2 lg:h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${require("../../../assets/images/signupImg.png")})`,
        }}
      />

      {/* Form */}
      <div className="flex-1 h-auto items-center px-4 py-10 md:px-14 md:py-10">
        <p className="text-colorPrimary text-center font-bold text-3xl">
          SignUp
        </p>
        <p className="text-colorSecondary text-center pt-2 font-regular text-md">
          True legacy through uplifting people's intellect
        </p>

        <div className="flex flex-row pt-10 justify-center items-center">
          <div
            className={`flex-1 flex justify-center items-center cursor-pointer ${
              userType === "mentee"
                ? "border-b-2 border-colorPrimary"
                : "border-b border-[#ccc]"
            }`}
            onClick={() => setUserType("mentee")}
          >
            <label
              className={`cursor-pointer ${
                userType === "mentee"
                  ? "text-colorSecondary font-bold text-xl"
                  : "text-[#8A8394]"
              } text-center font-medium text-lg`}
            >
              I'm a mentee
            </label>
          </div>
          <div
            className={`flex-1 flex justify-center items-center cursor-pointer ${
              userType === "mentor"
                ? "border-b-2 border-colorPrimary"
                : "border-b border-[#ccc]"
            }`}
            onClick={() => setUserType("mentor")}
          >
            <label
              className={`cursor-pointer ${
                userType === "mentor"
                  ? "text-colorSecondary font-bold"
                  : "text-[#8A8394]"
              } text-center font-medium text-lg`}
            >
              I'm a mentor
            </label>
          </div>
        </div>

        <form className="m-auto mt-10" onSubmit={handleSubmit}>
          <div>
            <div>
              <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
                Name
              </label>
              <div className="border border-colorPrimary rounded-md px-4 py-3 my-2 w-full flex flex-row items-center">
                <ProfileSvg />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none"
                />
              </div>
              {errors.name && touched.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
                Email
              </label>
              <div className="border border-colorPrimary rounded-md px-4 py-3 my-2 w-full flex flex-row items-center">
                <EmailSvg />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none"
                />
              </div>
              {errors.email && touched.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
                Password
              </label>
              <div className="border border-colorPrimary rounded-md px-4 py-3 my-2 w-full flex flex-row items-center">
                <LockLightSvg />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#6B7280] cursor-pointer"
                >
                  <Icon
                    icon={
                      showPassword
                        ? "clarity:eye-show-line"
                        : "clarity:eye-hide-line"
                    }
                    className="w-full h-auto text-2xl"
                  />
                </div>
              </div>
              {errors.password && touched.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
            </div>

            <div>
              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full mt-6 h-14 flex items-center justify-center bgGradient text-colorWhite hover:text-colorWhite text-base sm:text-lg font-semibold rounded-lg cursor-pointer px-4"
                >
                  {loading ? (
                    <Spinner rootClass="w-5 h-5 text-colorTertiary fill-colorPrimary" />
                  ) : (
                    "Signup"
                  )}
                </button>
              </div>
              <div className="text-sm flex items-center justify-center space-x-2 mt-4">
                <p className="text-colorTertiary font-light">
                  Already have an Account?
                </p>
                <div
                  onClick={() => navigate("/login")}
                  className="text-colorPrimary hover:text-colorPrimaryLight font-semibold cursor-pointer"
                >
                  Signin
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
