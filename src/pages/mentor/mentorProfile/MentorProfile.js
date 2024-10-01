import React, { useState } from "react";
import UserHeader from "../../../components/UserHeader";
import { StarSvg } from "../../../assets/svgs/HomeSvgs";
import {
  CertificateSvg,
  FitnessSvg,
  GlobeSvg,
  InterestSvg,
  LinkedInSvg,
  LocationSvg,
  PancilSvg,
  PlaySvg,
  ProfileSvg,
  TwitterSvg,
} from "../../../assets/svgs/MentorProfileSvg";
import { BackSvg } from "../../../assets/svgs/MentorProgramSvg";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const MentorProfile = () => {
  const [showComment, setShowComment] = useState(true);

  const handleShowComment = () => {
    setShowComment((prev) => !prev);
  };

  const navigate = useNavigate();
  return (
    <div className="w-full h-screen overflow-auto bg-colorWhite pb-8">
      <UserHeader />
      <div className="p-6">
        <div
          onClick={() => navigate(-1)}
          className="rounded-md border border-colorPrimary cursor-pointer flex justify-center gap-2 w-[92px] h-[42px] flex flex-row items-center"
        >
          <BackSvg />
          <p className="text-colorPrimary font-semibold text-sm">Back</p>
        </div>
      </div>
      <div className="flex flex-row justify-between p-10">
        <div className=" flex flex-row gap-6">
          <div className="">
            <img
              className="w-[100px] h-[100px]"
              src={require("../../../assets/images/profile.png")}
            />
          </div>
          <div className=" flex-col items-center">
            <p className="text-colorPrimary font-bold text-md mt-4">
              Jack Willson
            </p>
            <p className="text-colorSecondary font-bold text-lg mt-2">
              Certified Fitness Coach
            </p>
            <p className="text-colorSecondary font-regular text-sm mt-2">
              Certified Fitness Coach
            </p>
            <div className="flex items-center mt-2">
              <StarSvg />
              <StarSvg />
              <StarSvg />
              <StarSvg />
            </div>
            <div className=" flex flex-row items-center gap-4 pt-4">
              <div>
                <p className="text-colorSecondary font-semibold text-lg">48</p>
                <p className="text-colorSecondary font-medium text-sm pt-1">
                  Total hours
                </p>
              </div>
              <div className="border-b border h-[35px] " />

              <div>
                <p className="text-colorSecondary font-semibold text-lg">18</p>
                <p className="text-colorSecondary font-medium text-sm pt-1">
                  Total graduated
                </p>
              </div>
              <div className="border-b border h-[35px] " />
              <div>
                <p className="text-colorSecondary font-semibold text-lg">24</p>
                <p className="text-colorSecondary font-medium text-sm pt-1">
                  Total earnings
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => navigate("/editprofilementor")}
            type="submit"
            className=" text-colorWhite text-sm flex justify-center font-medium bg-colorPrimary flex flex-row cursor-pointer gap-4 items-center  px-4 py-2 rounded-lg"
          >
            <PancilSvg />
            Edit Profile
          </button>
        </div>
      </div>
      <div className="p-10">
        <p className="text-colorSecondary text-md font-bold">About Me:</p>
        <p className="leading-loose w-[80%] mt-2  text-colorSecondary text-sm font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="flex flex-row gap-6 pt-4">
          <div className="flex flex-col ">
            <div className="flex flex-row items-center  gap-2">
              <CertificateSvg />
              <p className="text-colorSecondary text-sm font-medium">
                Certifications in Professional Fitness
              </p>
            </div>
            <div className="flex flex-row items-center pt-3  gap-2">
              <GlobeSvg />
              <p className="text-colorSecondary text-sm font-medium">
                French, English
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row items-center  gap-2">
              <FitnessSvg />
              <p className="text-colorSecondary text-sm font-medium">
                Works at Toronto Fitness Centre
              </p>
            </div>
            <div className="flex flex-row items-center pt-3  gap-2">
              <LocationSvg />
              <p className="text-colorSecondary text-sm font-medium">
                Toronto, Canada
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center pt-8 gap-4">
          <ProfileSvg />
          <p className="text-colorSecondary text-md font-bold">
            Social Profile
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 pt-4">
          <div className="rounded-full border shadow shadow-[#ccc] cursor-pointer flex justify-center gap-2 w-[140px] h-[46px] flex flex-row items-center">
            <LinkedInSvg />
            <p className="text-colorPrimary font-semibold text-sm">Username</p>
          </div>
          <div className="rounded-full border shadow shadow-[#ccc] cursor-pointer flex justify-center gap-2 w-[140px] h-[46px] flex flex-row items-center">
            <PlaySvg />
            <p className="text-colorPrimary font-semibold text-sm">Username</p>
          </div>
          <div className="rounded-full border shadow shadow-[#ccc] cursor-pointer flex justify-center gap-2 w-[140px] h-[46px] flex flex-row items-center">
            <TwitterSvg />
            <p className="text-colorPrimary font-semibold text-sm">Username</p>
          </div>
        </div>
        <div className="flex flex-row items-center pt-8 gap-4">
          <InterestSvg />
          <p className="text-colorSecondary text-md font-bold">Interests</p>
        </div>
        <div className="flex flex-row items-center gap-4 pt-4">
          <div className="rounded-full border shadow shadow-[#ccc] cursor-pointer px-4 py-2 items-center">
            <p className="text-colorPrimary font-semibold text-sm">
              Body building
            </p>
          </div>
          <div className="rounded-full border shadow shadow-[#ccc] cursor-pointer px-4 py-2 items-center">
            <p className="text-colorPrimary font-semibold text-sm">
              Basket ball
            </p>
          </div>
          <div className="rounded-full border shadow shadow-[#ccc] cursor-pointer px-4 py-2 items-center">
            <p className="text-colorPrimary font-semibold text-sm">Hiking</p>
          </div>
          <div className="rounded-full border shadow shadow-[#ccc] cursor-pointer px-4 py-2 items-center">
            <p className="text-colorPrimary font-semibold text-sm">
              Photography
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 pt-6">
        <p className="text-colorSecondary text-md font-bold">My Programs</p>
      </div>
      <div className="px-10 pt-10">
        <p className="text-colorSecondary text-md font-bold">
          Current Programs
        </p>
      </div>

      <div className="mx-10 mt-6  shadow shadow-[#ccc] z-1 border overflow rounded-md p-4  ">
        <p className="text-colorSecondary font-semibold text-lg">
          Fitness Coaching
        </p>
        <p className="text-colorSecondary mt-2 font-semibold text-md">
          Fitness
        </p>
        <p className="text-colorSecondary mt-2 leading-loose w-[80%] font-medium text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex flex-row items-center gap-6">
          <div className="items-center pt-4 flex justify-center flex-col">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={require("../../../assets/images/profile.png")}
            />
            <p className="text-colorSecondary mt-2 font-medium text-xs">
              Cris Ronald
            </p>
          </div>
          <div className="items-center pt-4 flex justify-center flex-col">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={require("../../../assets/images/profile.png")}
            />
            <p className="text-colorSecondary mt-2 font-medium text-xs">
              Devon Lane
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6 px-10">
        <p className="text-colorSecondary text-md font-bold">
          Previous Programs
        </p>
      </div>

      <div className="shadow shadow-[#ccc] z-1 border overflow rounded-md  p-4 mx-10 mt-6  ">
        <div className="flex flex-row gap-2 items-center">
          <p className="text-colorSecondary font-semibold text-lg">
            Fitness Coaching
          </p>
          <StarSvg />
          <p className="text-colorSecondary font-semibold text-lg">3.6</p>
        </div>
        <p className="text-colorSecondary mt-2 font-semibold text-md">
          Fitness
        </p>
        <p className="text-colorSecondary mt-2 leading-loose w-[80%] font-medium text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <p className="text-colorSecondary mt-4 font-semibold text-md">
          Mentee Feedback
        </p>
        <div className="border-b w-full mt-3" />
        <div className="flex flex-row  pt-6  gap-4">
          <div>
            <img
              src={require("../../../assets/images/profile.png")}
              className="w-[40px] h-[40px]"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-row items-center gap-2">
                <p className="text-colorSecondary font-semibold text-sm">
                  Devon Lane
                </p>
                <p className="text-lg text-[#8A8394]">.</p>
                <p className="text-colorSecondary font-regular text-sm">
                  October 03, 2022
                </p>
              </div>
              <div
                onClick={handleShowComment}
                className=" text-[#6B7280] cursor-pointer"
              >
                <Icon
                  icon={
                    showComment
                      ? "clarity:eye-show-line"
                      : "clarity:eye-hide-line"
                  }
                  className="text-2xl"
                />
              </div>
            </div>
            <div
              className={`${
                showComment ? "visible" : "invisible"
              } transition-all`}
            >
              <StarSvg />
              <p className="text-colorSecondary w-[80%] mt-2 leading-loose font-medium text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
