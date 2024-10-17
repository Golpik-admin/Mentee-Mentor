import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordAction } from "../../../actions/UserActions";
import { forgotPasswordSchema } from "../../../schemas";
import { EmailSvg } from "../../../assets/svgs/AuthSvg";
import Spinner from "../../../elements/Spinner";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.userReducer);

  const initialFields = {
    email: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialFields,
      validationSchema: forgotPasswordSchema,
      onSubmit: (values) => {
        dispatch(forgotPasswordAction(values));
        navigate("/resetpassword");
      },
    });

  return (
<div className="h-screen w-full flex flex-col md:flex-row items-center justify-center bg-colorWhite">
{/* Image */}
      <div
        className="md:w-1/2 md:h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${require("../../../assets/images/loginbanner.png")})`,
        }}
      />

      {/* Form */}
      <div className="md:w-1/2 h-auto flex flex-col  items-center px-4 md:px-14 py-10">
        <p className="text-colorPrimary text-center font-bold text-3xl">
          Forgot Your Password?
        </p>
        <p className="text-colorSecondary text-center pt-2 font-regular text-md">
          Enter your email below for password reset.
        </p>

        <form className="w-full m-auto mt-10" onSubmit={handleSubmit}>
          <div className="w-full">
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
              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full h-14 flex items-center justify-center bgGradient text-colorWhite hover:text-colorWhite text-base sm:text-lg font-semibold rounded-lg cursor-pointer"
                >
                  {loading ? (
                    <Spinner rootClass="w-5 h-5 text-colorTertiary fill-colorPrimary" />
                  ) : (
                    "Send reset link"
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
  );
};

export default ForgotPassword;
