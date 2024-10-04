import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../../../actions/UserActions";
import { resetPasswordSchema } from "../../../schemas";
import { LockLightSvg } from "../../../assets/svgs/AuthSvg";
import { Icon } from "@iconify/react";
import Spinner from "../../../elements/Spinner";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const { error, loading, message } = useSelector((state) => state.userReducer);

  const token = queryParams.get("token");
  const email = queryParams.get("email");
  const [timer, setTimer] = useState(4);

  const initialFields = {
    password: "",
    password_confirmation: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialFields,
      validationSchema: resetPasswordSchema,
      onSubmit: (values) => {
        dispatch(
          resetPasswordAction({ ...values, email: email, token: token }),
          navigate("/login")
        );
      },
    });

  const [showPassword, setShowPassword] = useState({
    password: false,
    password_confirmation: false,
  });

  const handleShowPassword = (name) => {
    setShowPassword({
      ...showPassword,
      [name]: !showPassword[name],
    });
  };
  //   useEffect(() => {
  //     if (message && timer > 0) {
  //         const countdownInterval = setInterval(() => {
  //             setTimer(timer - 1);

  //             if(timer <= 1) {
  //                 navigate('/login');
  //             }
  //         }, 1000);

  //         return () => {
  //             clearInterval(countdownInterval);
  //         };
  //     }
  // }, [message, timer])

  return (
    <div className="w-full">
      <div className="flex flex-row  h-full">
        {/* Image */}

        <div
          className="w-[50%] h-screen bg-cover bg-center flex justify-center items-center"
          style={{
            backgroundImage: `url(${require("../../../assets/images/loginbanner.png")})`,
          }}
        />

        {/* Form */}

        <div className="w-[50%] h-auto  items-center px-14 py-10 ">
          <p className="text-colorPrimary text-center font-bold text-3xl">
            Reset your password
          </p>
          <p className="text-colorSecondary text-center pt-2 font-regular text-md">
            Create a new password to regain access to your account. Make sure
            it’s strong and secure.
          </p>

          <form className="m-auto mt-10" onSubmit={handleSubmit}>
            <div className="">
              <div>
                <label className="text-colorSecondary font-medium text-md">
                  New Password
                </label>
                <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
                  <LockLightSvg />
                  <input
                    type={showPassword.password ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
                  />
                  {values.password !== "" && (
                    <div
                      onClick={() => handleShowPassword("password")}
                      // onClick={() => setShowPassword(!showPassword)}
                      className=" text-[#6B7280] cursor-pointer"
                    >
                      <Icon
                        icon={
                          showPassword.password
                            ? "clarity:eye-show-line"
                            : "clarity:eye-hide-line"
                        }
                        className="w-full h-auto text-2xl"
                      />
                    </div>
                  )}
                </div>
                {errors.password && touched.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
              </div>
              <div>
                <label className="text-colorSecondary font-medium text-md ">
                  Confirm Password
                </label>
                <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
                  <LockLightSvg />
                  <input
                    type={showPassword.password_confirmation ? "text" : "password"}
                    name="password_confirmation"
                    placeholder="Enter your password"
                    value={values.password_confirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
                  />
                  {values.password_confirmation !== "" && (
                    <div
                      onClick={() =>
                        handleShowPassword("password_confirmation")
                      }
                      // onClick={() => setShowPassword(!showPassword)}
                      className=" text-[#6B7280] cursor-pointer"
                    >
                      <Icon
                        icon={
                          showPassword.password_confirmation
                            ? "clarity:eye-show-line"
                            : "clarity:eye-hide-line"
                        }
                        className="w-full h-auto text-2xl"
                      />
                    </div>
                  )}
                </div>
                {errors.password_confirmation &&
                  touched.password_confirmation && (
                    <p className="text-red-500 text-xs">
                      {errors.password_confirmation}
                    </p>
                  )}
              </div>

              <div>
                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full h-14 flex items-center justify-center bgGradient text-colorWhite hover:text-colorWhite text-base sm:text-lg font-semibold rounded-lg cursor-pointer px-4"
                  >
                    {loading ? (
                      <Spinner rootClass="w-5 h-5 text-colorTertiary fill-colorPrimary" />
                    ) : (
                      "Save Password"
                    )}
                  </button>
                </div>
                <div className="text-sm flex items-center justify-center space-x-2 mt-6">
                  <div
                    onClick={() => navigate("/login")}
                    className="border-b border-colorPrimary text-colorPrimary hover:text-colorPrimaryLight font-semibold cursor-pointer"
                  >
                    Back to login
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

export default ResetPassword;
