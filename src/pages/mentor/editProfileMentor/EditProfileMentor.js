import React, { useState } from "react";
import UserHeader from "../../../components/UserHeader";
import { BackSvg } from "../../../assets/svgs/MentorProgramSvg";
import { useNavigate } from "react-router-dom";
import {
  GlobeSvg,
  LinkedInSvg,
  TwitterSvg,
  YoutubeSvg,
} from "../../../assets/svgs/MentorProfileSvg";

const EditProfileMentor = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    certification: "",
    language: "",
    location: "",
    gender: "",
    aboutMe: "",
    personalWebsite: "",
    twitter: "",
    youtube: "",
    linkednin: "",
    typeHere: "",
    linkednin: "",
    interest: "",
  });
  const navigate = useNavigate();
  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div className="w-full h-screen overflow-auto bg-colorWhite pb-8">
      <UserHeader />
      <div className="p-10">
        <div
          onClick={() => navigate(-1)}
          className="rounded-md border border-colorPrimary cursor-pointer flex justify-center gap-2 w-[92px] h-[42px] flex flex-row items-center"
        >
          <BackSvg />
          <p className="text-colorPrimary font-semibold text-sm">Back</p>
        </div>
      </div>
      <div className="mx-10 my-4 border-b border  flex p-12 shadow shadow-[#ccc]">
        <div className="w-[85%] ">
          <p className="text-colorSecondary font-semibold text-lg">
            Edit Profile
          </p>
          <div className="flex pt-6 items-center flex-wrap flex-row gap-4">
            <div className="w-[49%] ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={value.firstName}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-[49%] ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={value.lastName}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-[49%] ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={value.jobTitle}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-[49%] ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={value.companyName}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-[49%] ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Certification
              </label>
              <input
                type="text"
                name="certification"
                placeholder="Certification"
                value={value.certification}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-[49%] ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Language
              </label>
              <input
                type="text"
                name="language"
                placeholder="Language"
                value={value.language}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-[49%] ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Location
              </label>
              <input
                type="text"
                name="Language"
                placeholder="Location"
                value={value.location}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-[49%]">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Gender
              </label>
              <select
                name="gender"
                value={gender}
                onChange={handleGenderChange}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none rounded-md border border-[#8A8394] bg-white"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
              About me
            </label>
            <textarea
              // type="aboutMe"
              name="aboutMe"
              placeholder="Tell us a litte bit about yourself"
              value={value.aboutMe}
              // onChange={handleChange}
              // onBlur={handleBlur}
              rows="4"
              maxLength="140"
              className="h-auto min-h-[8rem] resize-none w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md  border border-[#8A8394] focus:border-[#8A8394] focus:outline-none transition-colors duration-200 ease-in-out"
            />
          </div>

          <p className="mt-8 text-colorSecondary font-semibold text-lg">
            Social Profile
          </p>

          <div className="flex items-center flex-wrap pt-4 flex-row gap-4">
            <div className="w-[49%] ">
              <label className="text-colorSecondary font-medium text-sm">
                Personal website
              </label>
              <div className="border  border-[#8A8394] rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
                <GlobeSvg />
                <input
                  type="text"
                  name="personalWebsite"
                  placeholder="Personal website"
                  value={value.personalWebsite}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
                />
              </div>
            </div>
            <div className="w-[49%] ">
              <label className="text-colorSecondary font-medium text-sm">
                Twitter
              </label>
              <div className="border  border-[#8A8394] rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
                <TwitterSvg />
                <input
                  type="text"
                  name="twitter"
                  placeholder="Twitter"
                  value={value.twitter}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
                />
              </div>
            </div>
            <div className="w-[49%] ">
              <label className="text-colorSecondary font-medium text-sm">
                Youtube
              </label>
              <div className="border  border-[#8A8394] rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
                <YoutubeSvg />
                <input
                  type="text"
                  name="youtube"
                  placeholder="Youtube"
                  value={value.youtube}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
                />
              </div>
            </div>
            <div className="w-[49%] ">
              <label className="text-colorSecondary font-medium text-sm">
                Linkednin
              </label>
              <div className="border  border-[#8A8394] rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
                <LinkedInSvg />
                <input
                  type="text"
                  name="linkednin"
                  placeholder="Linkednin"
                  value={value.linkednin}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
                />
              </div>
            </div>
          </div>

          <p className="mt-8 text-colorSecondary font-semibold text-lg">
            Interest
          </p>
          <div className="w-[100%] mt-6">
            <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
              Add your Interests
            </label>
            <input
              type="text"
              name="interest"
              placeholder="Type Here"
              value={value.interest}
              // onChange={handleChange}
              // onBlur={handleBlur}
              className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
            />
          </div>
          <button
            // onClick={closePopup}
            className="mt-6 bg-colorPrimary text-colorWhite text-sm font-semibold py-4 px-6 rounded"
          >
            Save Changes
          </button>
        </div>
        <div className="w-[15%] h-[280px] bg-[#F5F7FA] pt-10 flex justify-center">
          <img
            className="w-[200px] h-[200px]"
            src={require("../../../assets/images/mentors.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfileMentor;
