import React, { useState } from "react";
import UserHeader from "../../components/UserHeader";
import { BackSvg } from "../../assets/svgs/MentorProgramSvg";
import { useNavigate } from "react-router-dom";
import {
  GlobeSvg,
  LinkedInSvg,
  TwitterSvg,
  YoutubeSvg,
} from "../../assets/svgs/MentorProfileSvg";

const EditProfile = () => {
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
      <div className="p-4 md:p-10">
        <div
          onClick={() => navigate(-1)}
          className="rounded-md border border-colorPrimary cursor-pointer flex justify-center gap-2 w-[92px] h-[42px] flex-row items-center"
        >
          <BackSvg />
          <p className="text-colorPrimary font-semibold text-sm">Back</p>
        </div>
      </div>
      <div className="mx-4 md:mx-10 border-b border gap-4 flex p-4 md:p-8 shadow shadow-[#ccc] flex-col md:flex-row">
        <div className="w-full md:w-[85%]">
          <p className="text-colorSecondary font-semibold text-lg">
            Edit Profile
          </p>
          <div className="flex flex-wrap pt-6 gap-4">
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={value.firstName}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={value.lastName}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={value.jobTitle}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={value.companyName}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
                Certification
              </label>
              <input
                type="text"
                name="certification"
                placeholder="Certification"
                value={value.certification}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
                Language
              </label>
              <input
                type="text"
                name="language"
                placeholder="Language"
                value={value.language}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={value.location}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-[#8A8394]"
              />
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
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
          <div className="py-3">
            <label className="text-colorSecondary font-medium text-sm">
              About me
            </label>
            <textarea
              name="aboutMe"
              placeholder="Tell us a little bit about yourself"
              value={value.aboutMe}
              rows="4"
              maxLength="140"
              className="h-auto min-h-[8rem] resize-none w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md border border-[#8A8394] focus:border-[#8A8394] focus:outline-none transition-colors duration-200 ease-in-out"
            />
          </div>

          <p className="mt-2 text-colorSecondary font-semibold text-lg">
            Social Profile
          </p>

          <div className="flex flex-wrap pt-4 gap-4">
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
                Personal website
              </label>
              <div className="border border-[#8A8394] rounded-md px-4 py-3 my-2 w-full flex items-center">
                <GlobeSvg />
                <input
                  type="text"
                  name="personalWebsite"
                  placeholder="Personal website"
                  value={value.personalWebsite}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
                Twitter
              </label>
              <div className="border border-[#8A8394] rounded-md px-4 py-3 my-2 w-full flex items-center">
                <TwitterSvg />
                <input
                  type="text"
                  name="twitter"
                  placeholder="Twitter"
                  value={value.twitter}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
                Youtube
              </label>
              <div className="border border-[#8A8394] rounded-md px-4 py-3 my-2 w-full flex items-center">
                <YoutubeSvg />
                <input
                  type="text"
                  name="youtube"
                  placeholder="Youtube"
                  value={value.youtube}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-colorSecondary font-medium text-sm">
                LinkedIn
              </label>
              <div className="border border-[#8A8394] rounded-md px-4 py-3 my-2 w-full flex items-center">
                <LinkedInSvg />
                <input
                  type="text"
                  name="linkedIn"
                  placeholder="LinkedIn"
                  value={value.linkednin}
                  className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none"
                />
              </div>
            </div>
            <p className="mt-0 text-colorSecondary font-semibold text-lg">
              Interest
            </p>
            <div className="w-full ">
              <label className="text-colorSecondary font-medium text-sm">
                Interests
              </label>
              <input
                type="text"
                name="interest"
                placeholder="Interests (comma separated)"
                value={value.interest}
                className="w-full mt-2 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none rounded-md border border-[#8A8394]"
                onChange={(e) =>
                  setValue({ ...value, interest: e.target.value })
                }
              />
            </div>
            <button className="mt-4 bg-colorPrimary text-colorWhite text-sm font-semibold py-4 px-6 rounded">
              Save Changes
            </button>
          </div>
        </div>

        <div className="hidden md:block md:w-[15%] w-full h-[280px] bg-[#F5F7FA] pt-10 flex justify-center">
          <img
            className=" w-[200px] h-[200px]"
            src={require("../../assets/images/mentors.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
