import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../elements/Spinner";
import { RightArrowSvg } from "../../assets/svgs/AuthSvg";

const Pricing = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState("");

  const Data = [
    {
      text: "One on One communication with mentor",
    },
    {
      text: "Full access to premium content",
    },
    {
      text: "Advance Mentorship Programs",
    },
    {
      text: "Customer Support",
    },
    {
      text: "Progress Tracking",
    },
  ];

  return (
    <div className="w-full overflow-auto bg-colorWhite ">
      <div className="items-center pt-8 flex justify-center flex-col">
        <p className="text-3xl text-colorPrimary font-bold ">
          Join the platform right now
        </p>
        <p className="text-md text-colorPrimary font-regular mt-2">
          Start your companionship with Mentors
        </p>

        <div className="bg-colorWhite  border border-colorPrimary mt-6  rounded-lg ">
          <div className="bg-colorPrimary p-4 items-center flex justify-center flex-col">
            <p className="text-xl text-colorWhite font-medium ">Contribution</p>
            <p className="text-xs text-center text-colorWhite font-regular mt-2 leading-loose">
              Vestibulum ante ipsum primis in faucibus orci <br /> luctus et
              ultrices posuere.
            </p>
            <div className="flex flex-row  gap-2 mt-2">
              <p className="text-3xl text-colorWhite font-bold">$1</p>
              <p className="text-xs flex justify-end  text-colorWhite font-regular">
                /day
              </p>
            </div>
          </div>

          <div className="p-4 ">
            {Data.map((item, i) => (
              <div className="flex pb-3 flex-row items-center gap-2">
                <div className="w-[20px] h-[20px] text-xs flex items-center justify-center bg-colorPrimary text-colorWhite rounded-full">
                  ✓
                </div>
                <p className="text-sm text-colorSecondary font-regular">
                  {item.text}
                </p>
              </div>
            ))}
            <button
              onClick={() => "/"}
              className="flex mt-2 flex-row justify-center gap-4 w-full text-colorWhite py-2 rounded-lg text-sm bg-colorPrimary"
            >
              Get Started
              <RightArrowSvg />
            </button>
          </div>
        </div>

        <div className="flex-col gap-2 flex items-center pt-10 pb-8">
          <p className="text-2xl text-colorPrimary font-bold ">
            Still have a question?
          </p>
          <p className="text-colorSecondary text-center text-sm opacity-50 font-regular">
            If you can't find an answer to your question in our FAQ, you can
            always contact us. <br /> We will answer you shortly.
          </p>
          <button
            onClick={() => navigate("/contactus")}
            type="submit"
            className="h-12 mt-1 bg-colorPrimary items-center text-colorWhite hover:text-colorWhite text-base sm:text-lg font-medium rounded-lg cursor-pointer px-8"
          >
            {loading ? (
              <Spinner rootClass="w-5 h-5 text-colorTertiary fill-colorPrimary" />
            ) : (
              "Contact Us"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
