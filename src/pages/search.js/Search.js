import React from "react";
import { BackSvg } from "../../assets/svgs/MentorProgramSvg";
import UserHeader from "../../components/UserHeader";
import { MagnifySvg } from "../../assets/svgs/MentorSvg";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full overflow-auto bg-colorWhite">
      <UserHeader />
      <div className="p-10">
        <button
          onClick={() => navigate(-1)}
          className="border border-colorPrimary flex items-center gap-2  px-4 py-2 font-semibold rounded-lg text-colorPrimary"
        >
          <BackSvg />
          Back
        </button>
        <p className="text-xl mt-6 text-colorSecondary font-semibold">
          Search Results
        </p>
        <div className="px-4 mt-2 gap-2 py-3 w-[400px] rounded-md border border-colorSecondary flex items-center justify-between">
          <MagnifySvg />
          <input
            type="text"
            name="search"
            placeholder="Search"
            // value={value.search}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full text-sm font-regular text-colorLightTertiary  focus:outline-none"
          />
        </div>
        <div className="w-full p-6 mt-6 border shadow rounded-lg">
          <div className="w-full p-4 border flex justify-between  shadow rounded-lg">
            <div className="flex flex-row items-center gap-2">
              <img
                className="w-[97px] h-[97px]"
                src={require("../../assets/images/ellipse.png")}
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-md text-colorSecondary font-semibold">
                    Jack Willison
                  </p>
                  <p className="text-sm text-colorSecondary font-semibold bg-[#E7E8E9] px-4 py-1 rounded-full">
                    mentor
                  </p>
                </div>
                <p className="text-sm  mt-1 text-colorSecondary font-medium">
                  Fitness Coaching
                </p>
              </div>
            </div>
            <button className="h-[49px] w-[133px] bg-colorPrimary text-colorWhite rounded-lg text-sm font-medium">
              View profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
