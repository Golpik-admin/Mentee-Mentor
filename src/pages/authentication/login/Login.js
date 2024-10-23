import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../actions/UserActions";
import { loginSchema } from "../../../schemas";
import { EmailSvg, LockLightSvg } from "../../../assets/svgs/AuthSvg";
import { Icon } from "@iconify/react";
import Spinner from "../../../elements/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.userReducer
  );

  const [isChecked, setIsChecked] = useState(false);
  const [userType, setUserType] = useState("mentee");
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const getDeviceInfo = () => {
    const device_token = "";
    const device_type = "web";
    return { device_token, device_type };
  };

  const initialFields = {
    email: "",
    password: "",
    device_token: getDeviceInfo().device_token,
    device_type: getDeviceInfo().device_type,
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialFields,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        dispatch(loginAction(values)).then(() => {
          navigate("/mentorprogram");
        });
      },
    });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/mentorprogram", { state: { userType } });
    }
  }, [dispatch, isAuthenticated, navigate]);

  return (
    <div className="w-full h-screen items-center justify-center overflow-auto bg-colorWhite flex flex-col lg:flex-row">
      {/* Image */}
      <div
        className="lg:w-1/2 lg:h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${require("../../../assets/images/loginbanner.png")})`,
        }}
      />

      {/* Form */}
      <div className="lg:w-1/2 w-full h-auto items-center px-6 py-10 lg:px-14 lg:py-10">
        <p className="text-colorPrimary text-center font-bold text-3xl">
          Welcome!
        </p>
        <p className="text-colorSecondary text-center pt-2 font-regular text-md">
          Please log in to access your account.
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
              <label className="text-colorSecondary font-medium text-md">
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
              <label className="text-colorSecondary font-medium text-md">
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
              <div className="flex justify-between items-center">
                <div className="flex items-start my-6">
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
                    className="ml-2 text-sm text-colorSecondary font-medium"
                  >
                    Remember Me
                  </label>
                </div>
                <button
                  onClick={() => navigate("/forgotpassword")}
                  className="cursor-pointer text-sm text-colorSecondary font-medium border-b border-colorSecondary"
                >
                  Forgot Password
                </button>
              </div>

              {/* Submit button */}
              <div className="">
                <button
                  type="submit"
                  className="w-full h-14 flex items-center justify-center bgGradient text-colorWhite hover:text-colorWhite text-base sm:text-lg font-semibold rounded-lg cursor-pointer px-4"
                >
                  {loading ? <Spinner /> : "Signin"}
                </button>
                {error?.data?.code === 402 && error?.data?.message ? (
                  <div className="flex items-center justify-center space-x-2">
                    <p className="text-red-500 text-xs font-bold text-center">
                      {error?.data?.message}
                    </p>
                  </div>
                ) : error?.data?.message ? (
                  <p className="text-red-500 text-xs font-bold text-center">
                    {error?.data?.message}cdsds
                  </p>
                ) : null}
              </div>
              <div className="text-sm flex items-center justify-center space-x-2 mt-4">
                <p className="text-colorTertiary font-light">
                  Don't have an account?
                </p>
                <div
                  onClick={() => navigate("/signup")}
                  className="text-colorPrimary hover:text-colorPrimaryLight font-semibold cursor-pointer"
                >
                  Signup
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
