import React, { useState } from "react";
import {
  CloseSvg,
  RatingSvg,
  StarSvg,
  SubmitSvg,
} from "../assets/svgs/MentorProgramSvg";
import { useNavigate } from "react-router-dom";

const WriteReview = ({ isOpen, closeModal }) => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState({
    feedback: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleStarClick = (index) => {
    setRating(index);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className=" bg-colorWhite py-4 rounded-lg shadow-lg w-[30%]">
            <div className="px-4 flex flex-row items-center justify-between">
              <p className="text-colorSecondary font-semibold text-lg">
                Write a Review
              </p>
              <div className="cursor-pointer" onClick={closeModal}>
                <CloseSvg />
              </div>
            </div>
            <div className="border w-full border-[#E3E3E3] mt-2" />

            <div className="my-2 px-4">
              <div className="justify-center flex flex-col items-center gap-2 pb-2 ">
                <p className="text-colorSecondary font-medium text-sm">
                  {rating}.0
                </p>

                <div className="flex items-center">
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <div
                        key={index}
                        onClick={() => handleStarClick(index + 1)}
                      >
                        {rating > index ? <RatingSvg /> : <StarSvg />}
                      </div>
                    ))}
                </div>
              </div>
              <label className="text-colorSecondary font-regular text-sm">
                Feedback (Optional)
              </label>
              <textarea
                type="text"
                name="feedback"
                placeholder="Write down your feedback here..."
                value={value.feedback}
                onChange={handleChange}
                rows="4"
                maxLength="200"
                className="h-auto min-h-[100px] resize-none w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md border border-[#8A8394] focus:border-[#8A8394] focus:outline-none transition-colors duration-200 ease-in-out"
              />
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => navigate("/sessions")}
                  className="p-2 text-colorWhite font-semibold text-sm rounded-md  bg-colorPrimary cursor-pointer flex gap-2 items-center"
                >
                  Submit Review
                  <SubmitSvg />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteReview;
