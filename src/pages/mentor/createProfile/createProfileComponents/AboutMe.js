import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import defaultProfileImage from "../../../../assets/images/profile.png"; // Import the default image

const AboutMe = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    aboutMe: "",
    language: "",
    location: "",
  });

  const [selectedImage, setSelectedImage] = useState(null); // Initially, no uploaded image
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Replace background with the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input when image container is clicked
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="">
      <div className="items-center mt-12 flex justify-center">
        {/* Display the image */}
        <div
          className="cursor-pointer w-[100px] h-[100px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              selectedImage ? selectedImage : defaultProfileImage
            })`, // Show selected or default image
          }}
          onClick={handleImageClick} // Click handler to open file picker
        />

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }} // Hide the input
        />
      </div>
      <div className="mt-4">
        <div className="my-2 ">
          <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
            About Me
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
            className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md  border border-colorPrimary focus:border-colorPrimary focus:outline-none transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="my-2 ">
          <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
            Language
          </label>
          <input
            type="text"
            name="language"
            placeholder="Add your language"
            value={value.language}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
          />
        </div>
        <div className="my-2 ">
          <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter your location"
            value={value.location}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md border focus:outline-none  border-colorPrimary"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
