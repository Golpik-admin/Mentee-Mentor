import React, { useState } from "react";
import UserHeader from "../../components/UserHeader";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BackSvg,
  ChevDownSvg,
  StartSvg,
} from "../../assets/svgs/MentorProgramSvg";
import { MagnifySvg } from "../../assets/svgs/MentorSvg";
import { StarSvg } from "../../assets/svgs/HomeSvgs";

const SearchProgram = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const location = useLocation();
  const { userType } = location.state || { userType: "mentee" };
  const handleSearch = () => {
    if (searchQuery) {
      setSearchSubmitted(true);
    }
  };

  const handleSearchAgain = () => {
    setSearchQuery("");
    setSearchSubmitted(false);
  };

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

        {!searchSubmitted ? (
          <div className="mt-8">
            <p className="text-xl text-colorSecondary font-semibold">
              Search Subjects for Mentorship
            </p>
            <div className="flex items-center pt-4 w-[100%] gap-4">
              <div className="px-4 h-[49px] gap-2 py-3 w-[75%] rounded-md border border-colorSecondary flex">
                <MagnifySvg />
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm font-regular text-colorLightTertiary focus:outline-none"
                />
              </div>
              <button
                onClick={handleSearch}
                className={`h-[49px] w-[15%] bg-colorPrimary text-colorWhite rounded-lg text-sm font-medium ${
                  !searchQuery ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!searchQuery} // Disable button if searchQuery is empty
              >
                Search Program
              </button>
            </div>
            <div className="flex mt-6 items-center justify-center">
              <img
                className="w-[400px] h-[350px]"
                src={require("../../assets/images/bannerStar.png")}
                alt="banner"
              />
            </div>
            <div className="w-full  mt-6 border shadow rounded-lg">
              <div className="bg-[#EBEEF7] p-4 flex items-center  justify-between">
                <p className="text-md text-colorSecondary font-semibold">
                  Previous Search
                </p>
                <ChevDownSvg />
              </div>
              <div className="px-4 py-8 flex items-center  justify-between">
                <p className="text-sm   text-colorPrimary border-b border-colorPrimary font-medium">
                  Fitness Coaching
                </p>
                <p className="text-sm  text-[#F2290F] font-medium">Delete</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 items-center flex flex-col justify-center">
            <p className="text-xl text-colorSecondary font-semibold">
              Available Mentors
            </p>
            <div className="flex justify-center items-center gap-4 w-[100%]">
              <div className="bg-[#F7F7F7] items-center mt-4 w-[20%] py-4 flex flex-col rounded-lg">
                <div className="px-4 items-center flex justify-center flex-col ">
                  <img
                    className="w-[90px] h-[90px]"
                    src={require("../../assets/images/ellipse.png")}
                    alt="mentor"
                  />
                  <p className="text-sm mt-2 text-colorSecondary font-semibold">
                    Available Mentors
                  </p>
                  <p className="text-xs my-2 text-colorSecondary font-regular">
                    Certified Fitness Coach
                  </p>
                  <StarSvg />
                </div>
                <div className="px-4 pt-6 w-full flex justify-between">
                  <p className="text-sm text-colorSecondary font-semibold">
                    Fitness Coaching
                  </p>
                  <p className="text-xs text-colorSecondary font-regular">
                    Fitness
                  </p>
                </div>
                <div className="w-full border-b mt-4 border-[#ccc]" />
                <div className="px-4 pt-6 w-full flex justify-between">
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-colorSecondary font-bold">08</p>
                    <p className="text-xs text-colorSecondary font-medium">
                      Total hours
                    </p>
                  </div>
                  <div className="h-[40px] w-[1px] bg-[#ccc]" />
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-colorSecondary font-bold">06</p>
                    <p className="text-xs text-colorSecondary font-medium">
                      Total Graduates
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/profile", {state: {userType}} )}
                  className="text-sm py-2 text-colorPrimary bg-colorWhite px-4 rounded-full mt-10 items-center font-semibold"
                >
                  View Profile
                </button>
              </div>
            </div>

            <button
              onClick={handleSearchAgain}
              className="bg-colorPrimary rounded-lg mt-8 text-sm text-colorWhite font-medium px-4 py-2"
            >
              Search Again
            </button>
          </div>
        )}

        {/* <div className="mt-8 items-center flex flex-col justify-center">
          <p className="text-xl  text-colorSecondary font-semibold">
            Available Mentors
          </p>
          <div className="flex justify-center items-center gap-4 w-[100%]">
            <div className="bg-[#F7F7F7] items-center mt-4  w-[20%] py-4 flex flex-col rounded-lg">
              <div className="px-4 items-center flex justify-center flex-col ">
                <img
                  className="w-[90px]   h-[90px]"
                  src={require("../../assets/images/ellipse.png")}
                />
                <p className="text-sm mt-2   text-colorSecondary font-semibold">
                  Available Mentors
                </p>
                <p className="text-xs my-2  text-colorSecondary font-regular">
                  Certified Fitness Coach
                </p>
                <StarSvg />
              </div>
              <div className="px-4 pt-6 w-full flex justify-between">
                <p className="text-sm  text-colorSecondary font-semibold">
                  Fitness Coaching
                </p>
                <p className="text-xs  text-colorSecondary font-regular">
                  Fitness
                </p>
              </div>
              <div className="w-full border-b mt-4 border-[#ccc]" />

              <div className="px-4 pt-6 w-full flex justify-between">
                <div className="flex flex-col items-center">
                  <p className="text-sm  text-colorSecondary font-bold">08</p>
                  <p className="text-xs  text-colorSecondary font-medium">
                    Total hours
                  </p>
                </div>
                <div className="h-[40px] w-[1px] bg-[#ccc]" />
                <div className="flex flex-col items-center">
                  <p className="text-sm  text-colorSecondary font-bold">06</p>
                  <p className="text-xs  text-colorSecondary font-medium">
                    Total Graduates
                  </p>
                </div>
              </div>

              <p className="text-sm py-2 text-colorPrimary bg-colorWhite px-4 rounded-full mt-10 items-center font-semibold">
                View Profile
              </p>
            </div>
          </div>

          <button className="bg-colorPrimary rounded-lg mt-8 text-sm text-colorWhite font-medium px-4 py-2">
            Search Again
          </button>
        </div> */}

        {/* <div className="mt-8">
          <p className="text-xl  text-colorSecondary font-semibold">
            Search Subjects for Mentorship
          </p>
          <div className="flex items-center pt-4 w-[100%] gap-4">
            <div className="px-4 h-[49px] gap-2 py-3 w-[75%] rounded-md border border-colorSecondary flex">
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
            <button className="h-[49px] w-[15%] bg-colorPrimary text-colorWhite rounded-lg text-sm font-medium">
              Search Program
            </button>
          </div>
          <div className="flex mt-6 items-center justify-center">
            <img
              className="w-[400px] h-[350px]"
              src={require("../../assets/images/bannerStar.png")}
            />
          </div>
          <div className="w-full  mt-6 border shadow rounded-lg">
            <div className="bg-[#EBEEF7] p-4 flex items-center  justify-between">
              <p className="text-md text-colorSecondary font-semibold">
                Previous Search
              </p>
              <ChevDownSvg />
            </div>
            <div className="px-4 py-8 flex items-center  justify-between">
              <p className="text-sm   text-colorPrimary border-b border-colorPrimary font-medium">
                Fitness Coaching
              </p>
              <p className="text-sm  text-[#F2290F] font-medium">Delete</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SearchProgram;
