import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LinkedInSvg,
  SocialLinksSvg,
  TwitterSvg,
  WebsiteSvg,
  YoutubeSvg,
} from "../../../assets/svgs/CreateProfileSvg";

const ScoialLinks = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    websiteLink: "",
    linkedInLink: "",
    twitterLink: "",
    youtubeLink: "",
    addInterest: "",
  });

  return (
    <div className="mt-14">
      <div className="mt-4">
        <div>
          <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
            Personal website
          </label>
          <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
            <WebsiteSvg />
            <input
              type="text"
              name="websiteLink"
              placeholder="Personal website or portfolio url..."
              value={value.websiteLink}
              // onChange={handleChange}
              // onBlur={handleBlur}
              className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
            />
          </div>
        </div>
        <div>
          <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
            Linkedin
          </label>
          <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
            <LinkedInSvg />
            <input
              type="text"
              name="linkedInLink"
              placeholder="Personal website or portfolio url..."
              value={value.linkedInLink}
              // onChange={handleChange}
              // onBlur={handleBlur}
              className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
            />
          </div>
        </div>
        <div>
          <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
            Twitter
          </label>
          <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
            <TwitterSvg />
            <input
              type="text"
              name="twitterLink"
              placeholder="Personal website or portfolio url..."
              value={value.twitterLink}
              // onChange={handleChange}
              // onBlur={handleBlur}
              className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
            />
          </div>
        </div>
        <div>
          <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
            Youtube
          </label>
          <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
            <YoutubeSvg />
            <input
              type="text"
              name="youtubeLink"
              placeholder="Personal website or portfolio url..."
              value={value.youtubeLink}
              // onChange={handleChange}
              // onBlur={handleBlur}
              className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
            />
          </div>
        </div>
        <div>
          <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
            Add your Interests
          </label>
          <div className="border  border-colorPrimary rounded-md px-4 py-3 my-2  w-full flex flex-row items-center">
            <SocialLinksSvg />
            <input
              type="text"
              name="name"
              placeholder="Personal website or portfolio url..."
              value={value.addInterest}
              // onChange={handleChange}
              // onBlur={handleBlur}
              className="w-full text-sm font-regular text-colorLightTertiary px-4 focus:outline-none  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoialLinks;
