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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const initialFields = {
    name: "",
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialFields,
      validationSchema: registerSchema,
      onSubmit: (values) => {
        dispatch(registerAction(values));
        navigate("/createprofile");
      },
    });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <div className="flex flex-row  h-full">
        {/* Image */}

        <div
          className="w-[50%] h-screen bg-cover bg-center flex justify-center items-center"
          style={{
            backgroundImage: `url(${require("../../../assets/images/signupImg.png")})`,
          }}
        />

        {/* Form */}

        <div className="w-[50%] h-auto  items-center px-14 py-10 ">
          <p className="text-colorPrimary text-center font-bold text-3xl">
            SignUp
          </p>
          <p className="text-colorSecondary text-center pt-2 font-regular text-md">
            True legacy through uplifting people's intellect
          </p>

          <div className="flex flex-row pt-10  flex justify-center items-center ">
            <div className="w-[50%]  flex justify-center items-center">
              <label className="text-colorPrimary text-center  font-medium text-lg cursor-pointer">
                I'm a mentee
              </label>
            </div>
            <div className="w-[50%]  flex justify-center items-center">
              <label className="text-colorPrimary text-center font-medium text-lg cursor-pointer">
                I'm a mentor
              </label>
            </div>
          </div>
          <div className="border-b border-colorPrimary" />

          <form className="m-auto mt-10" onSubmit={handleSubmit}>
            <div className="">
              <div>
                <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
                  Name
                </label>
                <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
                  <ProfileSvg />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
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
                <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
                  <EmailSvg />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
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
                <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
                  <LockLightSvg />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className=" text-[#6B7280] cursor-pointer"
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
                <div className="flex items-start items-center my-6">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="appearance-none h-4 w-4 checked:bg-colorPrimary checked:before:content-['✓'] checked:before:text-xs checked:before:flex checked:before:justify-center checked:before:text-white  rounded border border-colorPrimary  focus:ring-colorSecondary"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm text-colorSecondary-600"
                  >
                    By clicking <span className="font-medium">"Sign Up"</span>{" "}
                    you accept the&nbsp;
                    <a
                      href="#"
                      className="text-colorPrimary-700 hover:underline"
                    >
                      Terms of Service
                    </a>
                    &nbsp;and&nbsp;
                    <a
                      href="#"
                      className="text-colorPrimary-700 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
                {/* Submit button */}
                <div className="">
                  <button
                    type="submit"
                    className="w-full h-14 flex items-center justify-center bgGradient text-colorWhite hover:text-colorWhite text-base sm:text-lg font-semibold rounded-lg cursor-pointer px-4"
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
    </div>
  );
};

export default SignUp;
