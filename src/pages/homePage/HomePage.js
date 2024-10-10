import React, { useState } from "react";
import UserHeader from "../../components/UserHeader";
import { StarSvg } from "../../assets/svgs/HomeSvgs";
import { PlusSvg, SearchSvg } from "../../assets/svgs/MentorSvg";
import { useNavigate, useLocation } from "react-router-dom";
import CreateProgram from "../../components/CreateProgram";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || { userType: "mentee" };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full h-full flex flex-col min-h-screen overflow-auto bg-colorWhite">
      <UserHeader />
      <div className="flex gap-6 flex-row px-6 pt-10 pb-6 ">
        {/* Image  */}

        <div
          onClick={() => navigate("/profile", { state: { userType } })}
          className="cursor-pointer bg-[#F7F7F7] w-[20%] h-[667px] px-4 py-4 rounded "
        >
          <div className="flex justify-center flex-col items-center">
            <img
              className="w-[60px] h-[60px]"
              src={require("../../assets/images/profile.png")}
            />
            <p className="text-colorSecondary font-bold text-md mt-4">
              Jack Willson
            </p>
            <p className="text-colorSecondary font-regular text-sm mt-2">
              {" "}
              Certified Fitness Coach
            </p>
            <div className="flex items-center mt-4">
              <StarSvg />
              <StarSvg />
              <StarSvg />
              <StarSvg />
            </div>
          </div>
          <div className=" flex flex-row items-center gap-4 pt-6 justify-center">
            <div>
              <p className="text-colorSecondary font-semibold text-lg mt-2">
                48
              </p>
              <p className="text-colorSecondary font-regular text-xs pt-2">
                Total hours invested
              </p>
            </div>
            <div>
              <p className="text-colorSecondary font-semibold text-lg mt-2">
                18
              </p>
              <p className="text-colorSecondary font-regular text-xs pt-2">
                Total hours invested
              </p>
            </div>
          </div>
        </div>

        {/* right content */}

        <div className="w-[80%] flex flex-col">
          <div className=" flex flex-row items-center justify-between">
            <div>
              <p className="  text-colorSecondary font-bold text-lg">
                Current Program
              </p>
            </div>
            {userType === "mentee" ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate("/searchprogram")}
                  className="rounded-md bg-colorPrimary cursor-pointer flex justify-center px-4 py-2 flex flex-row items-center"
                >
                  <SearchSvg />
                  <p className="text-colorWhite pl-2 font-semibold text-sm">
                    Search Program
                  </p>
                </button>
                <button
                  onClick={() => navigate("/mentorprogram")}
                  className="rounded-md bg-colorTertiary cursor-pointer flex justify-center px-4 py-2 flex flex-row items-center"
                >
                  <p className="text-colorWhite pl-2 font-semibold text-sm">
                    View Program
                  </p>
                </button>
              </div>
            ) : (
              <button
                onClick={openModal}
                className="rounded-md bg-colorPrimary cursor-pointer flex justify-center px-4 py-2 flex flex-row items-center"
              >
                <PlusSvg />
                <p className="text-colorWhite pl-2 font-semibold text-sm">
                  Create Program
                </p>
              </button>
            )}

            {/* <button
              onClick={openModal}
              className="rounded-md bg-colorPrimary cursor-pointer flex justify-center px-4 py-2 flex flex-row items-center"
            >
              <PlusSvg />
              <p className="text-colorWhite pl-2 font-semibold text-sm">
                Create Program
              </p>
            </button> */}
          </div>

          <div className="shadow-sm shadow-[#F7F7F7] border overflow rounded-lg bg-colorWhite p-4 mt-4  w-full ">
            <div className="">
              <p className="text-colorSecondary font-semibold text-lg">
                Fitness Coaching
              </p>
              <p className="text-colorSecondary mt-2 font-semibold text-md">
                Fitness
              </p>
              <p className="text-colorSecondary mt-2 leading-loose w-[80%] font-regular text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="flex flex-row items-center gap-14">
                <div className="items-center pt-4 flex justify-center flex-col">
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src={require("../../assets/images/profile.png")}
                  />
                  <p className="text-colorSecondary mt-2 font-regular text-xs">
                    Cris Ronald
                  </p>
                  <p className="text-colorSecondary mt-2 font-medium text-xs">
                    Mentee 1
                  </p>
                </div>
                <div className="items-center  pt-4 flex justify-center flex-col">
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src={require("../../assets/images/profile.png")}
                  />
                  <p className="text-colorSecondary  mt-2 font-medium text-xs">
                    Devon Lane
                  </p>
                  <p className="text-colorSecondary  mt-2 font-medium text-xs">
                    Mentee 2
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="  text-colorSecondary font-bold text-lg pt-2">
              Previous Program
            </p>
          </div>

          <div className="shadow-sm shadow-[#F7F7F7] border overflow rounded-lg bg-colorWhite p-4 mt-4  w-full ">
            <div className="flex flex-row gap-4 items-center">
              <p className="text-colorSecondary font-semibold text-lg">
                Fitness Coaching
              </p>
              <StarSvg />
              <p className="text-colorSecondary font-semibold text-lg">3.6</p>
            </div>
            <p className="text-colorSecondary mt-2 font-semibold text-md">
              Fitness
            </p>
            <p className="text-colorSecondary mt-2 leading-loose w-[80%] font-regular text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex flex-row items-center gap-14">
              <div className="items-center pt-4 flex justify-center flex-col">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={require("../../assets/images/profile.png")}
                />
                <p className="text-colorSecondary mt-2 font-regular text-xs">
                  Cris Ronald
                </p>
                <p className="text-colorSecondary mt-2 font-medium text-xs">
                  Mentee 1
                </p>
              </div>
              <div className="items-center pt-4 flex justify-center flex-col">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={require("../../assets/images/profile.png")}
                />
                <p className="text-colorSecondary mt-2 font-regular text-xs">
                  Devon Lane
                </p>
                <p className="text-colorSecondary mt-2 font-medium text-xs">
                  Mentee 2
                </p>
              </div>
            </div>
            <p className="text-colorSecondary mt-4 font-semibold text-md">
              Mentee Feedback
            </p>
            <div className="flex flex-row  pt-6  gap-4">
              <div>
                <img
                  src={require("../../assets/images/profile.png")}
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div>
                <div className="flex flex-row items-center gap-4">
                  <p className="text-colorSecondary font-semibold text-sm">
                    Devon Lane
                  </p>
                  <p className="text-lg text-[#8A8394]">.</p>
                  <p className="text-colorSecondary font-regular text-sm">
                    October 03, 2022
                  </p>
                </div>
                <div className="pt-2">
                  <StarSvg />
                  <p className="text-colorSecondary w-[80%] mt-2 leading-loose font-regular text-xs">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex-shrink-0 mt-auto pb-4">
        <div className="border border-[#EDEDED]  w-full my-4" />
        <p className="text-[#C3C1C1] text-sm text-center font-medium">
          2024 MyMenteeMentor inc. All Rights Reserved
        </p>
      </div> */}

      <CreateProgram isOpen={isModalOpen} closePopup={closeModal} />
    </div>
  );
};

export default HomePage;
