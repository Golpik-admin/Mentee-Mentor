import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutMe from "./createProfileComponents/AboutMe";
import Profession from "./createProfileComponents/Profession";
import ScoialLinks from "./createProfileComponents/SocialLinks";
import { CheckSvg } from "../../assets/svgs/CreateProfileSvg";
import Spinner from "../../elements/Spinner";

const CreateProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || { userType: "mentee" };
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [stepChecked, setStepChecked] = useState([false, false, false]);

  const stepContent = [
    "Let's start with an introduction about you",
    "What is your profession and qualification?",
    "Any social profiles, connections, and interests?",
  ];

  const handleNextOrSave = () => {
    if (currentStep < 3) {
      setStepChecked((prev) => {
        const newChecked = [...prev];
        newChecked[currentStep - 1] = true;
        return newChecked;
      });
      setCurrentStep(currentStep + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStepChecked((prev) => {
          const newChecked = [...prev];
          newChecked[2] = true;
          return newChecked;
        });
        navigate("/payment", { state: { userType } });
      }, 2000);
    }
  };

  return (
    <div className="w-full flex flex-row justify-center bg-colorWhite  h-full">
      {/* Image */}
      <div
        className="w-[50%] h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${require("../../assets/images/createpPofile.png")})`,
        }}
      />

      {/* Form */}
      <div className="w-[50%] h-screen items-center px-14 py-10">
        <p className="text-colorPrimary text-center font-bold text-3xl">
          Complete your Profile
        </p>

        <p className="text-colorSecondary text-center pt-2 font-regular text-md">
          {stepContent[currentStep - 1]}
        </p>

        <div className="flex flex-row justify-center mt-4 items-center relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div
              className={`border ${
                currentStep >= 1
                  ? "border-colorPrimary bg-colorPrimary text-white"
                  : "border-colorLightTertiary bg-transparent text-colorLightTertiary"
              } rounded-full w-10 h-10 items-center flex justify-center`}
            >
              {stepChecked[0] ? (
                <CheckSvg /> // Iconify checkmark
              ) : (
                <p className="text-center font-regular text-sm">01</p>
              )}
            </div>
            <p
              className={`absolute text-center font-regular text-sm top-12 ${
                currentStep >= 1
                  ? "text-colorPrimary"
                  : "text-colorLightTertiary"
              }`}
            >
              About You
            </p>
          </div>

          {/* Line 1 */}
          <div
            className={`border-b ${
              currentStep >= 2
                ? "border-colorPrimary"
                : "border-colorLightTertiary"
            } w-[200px] h-0.5`}
          />

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div
              className={`border ${
                currentStep >= 2
                  ? "border-colorPrimary bg-colorPrimary text-white"
                  : "border-colorLightTertiary bg-transparent text-colorLightTertiary"
              } rounded-full w-10 h-10 items-center flex justify-center`}
            >
              {stepChecked[1] ? (
                <CheckSvg /> // Iconify checkmark
              ) : (
                <p className="text-center font-regular text-sm">02</p>
              )}
            </div>
            <p
              className={`absolute text-center font-regular text-sm top-12 ${
                currentStep >= 2
                  ? "text-colorPrimary"
                  : "text-colorLightTertiary"
              }`}
            >
              Profession
            </p>
          </div>

          {/* Line 2 */}
          <div
            className={`border-b ${
              currentStep >= 3
                ? "border-colorPrimary"
                : "border-colorLightTertiary"
            } w-[200px] h-0.5`}
          />

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div
              className={`border ${
                currentStep === 3 && !loading // Show checkmark when saved
                  ? "border-colorPrimary bg-colorPrimary text-white"
                  : "border-colorLightTertiary bg-transparent text-colorLightTertiary"
              } rounded-full w-10 h-10 items-center flex justify-center`}
            >
              {stepChecked[2] ? (
                <CheckSvg /> // Iconify checkmark
              ) : (
                <p className="text-center font-regular text-sm">03</p>
              )}
            </div>
            <p
              className={`absolute text-center font-regular text-sm top-12 ${
                currentStep >= 3
                  ? "text-colorPrimary"
                  : "text-colorLightTertiary"
              }`}
            >
              Social Links
            </p>
          </div>
        </div>

        <div className="mt-0">
          {currentStep === 1 && <AboutMe />}
          {currentStep === 2 && <Profession />}
          {currentStep === 3 && <ScoialLinks />}
        </div>

        <div className="mt-4">
          {/* Submit button */}
          <button
            onClick={handleNextOrSave}
            type="button"
            className="w-full mt-10 h-14 flex items-center justify-center bgGradient text-colorWhite hover:text-colorWhite text-base sm:text-lg font-semibold rounded-lg cursor-pointer px-4"
          >
            {loading ? <Spinner /> : currentStep === 3 ? "Save" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
