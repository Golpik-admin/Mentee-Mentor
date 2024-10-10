import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmailSvg, ProfileSvg, SubjectSvg } from "../../assets/svgs/AuthSvg";
import Spinner from "../../elements/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas";
import { registerAction } from "../../actions/UserActions";

const ContactUs = () => {
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
    subject: "",
    message: "",
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

  return (
    <div className="w-full overflow-auto bg-colorWhite ">
      <div className="items-center pt-8 flex justify-center flex-col">
        <p className="text-3xl text-colorPrimary font-bold ">ContactUs</p>
        <p className="text-md text-colorPrimary font-regular mt-2">
          Any question or remarks? Just write us a message!{" "}
        </p>
        <form className="w-[50%] m-auto mt-10" onSubmit={handleSubmit}>
          <div className="">
            <div>
              <label className="text-colorSecondary font-medium text-md">
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
              <label className="text-colorSecondary font-medium text-md">
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
              <label className="text-colorSecondary font-medium text-md">
                Subject
              </label>
              <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
                <SubjectSvg />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
                />
              </div>
              {errors.email && touched.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>
            <div className="my-2 ">
              <label className="text-colorSecondary font-medium text-sm">
                Description of Course
              </label>
              <textarea
                type="text"
                name="message"
                placeholder="Write description of course here..."
                value={values.message}
                // onChange={handleChange}
                // onBlur={handleBlur}
                rows="6"
                maxLength="200"
                className="h-auto min-h-[8rem] resize-none w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md  border border-[#8A8394] focus:border-[#8A8394] focus:outline-none transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="">
              <button
                type="submit"
                className="w-full h-14 flex items-center justify-center bgGradient text-colorWhite hover:text-colorWhite text-base sm:text-lg font-semibold rounded-lg cursor-pointer px-4"
              >
                {loading ? (
                  <Spinner rootClass="w-5 h-5 text-colorTertiary fill-colorPrimary" />
                ) : (
                  "Sned Message"
                )}
              </button>
            </div>
          </div>
        </form>
        <div className="flex-col gap-2 flex items-center pt-10 pb-8">
          <p className="text-2xl text-colorPrimary font-bold ">
            Contact Information
          </p>
          <p className="text-colorSecondary text-sm  font-regular">
            Have any questions or comments? Feel free to send us a message!
          </p>
          <div className="text-colorPrimary font-semibold text-md gap-2 flex items-center cursor-pointer">
            <EmailSvg />
            hi@myMenteeMentorteam.co
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
