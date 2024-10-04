import React, { useState } from "react";
import UserHeader from "../../../components/UserHeader";
import {
  AssignmentSvgOne,
  AssignmentSvgTwo,
  BackSvg,
  FeedbackSvgOne,
  FeedbackSvgTwo,
  InfoSvgOne,
  InfoSvgTwo,
  StreamSvgOne,
  StreamSvgTwo,
} from "../../../assets/svgs/MentorProgramSvg";
import { useNavigate } from "react-router-dom";
import ProgramInfo from "./mentorProgramComponents/ProgramInfo";
import Chat from "./mentorProgramComponents/Chat";
import Assignments from "./mentorProgramComponents/Assignments";
import Feedback from "./mentorProgramComponents/Feedback";

const MentorProgram = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen overflow-auto bg-colorWhite">
      <UserHeader />
      <div className="px-6 py-4">
        <div
          onClick={() => navigate(-1)}
          className="rounded-md border border-colorPrimary cursor-pointer flex justify-center gap-2 w-[92px] h-[42px] flex flex-row items-center"
        >
          <BackSvg />
          <p className="text-colorPrimary font-semibold text-sm">Back</p>
        </div>
        {/* Sections */}
        <div>
          <div className="flex justify-between mt-8 items-center flex-row">
            <div
              onClick={() => handleTabClick(1)}
              className={`flex flex-row gap-2 pb-2 items-center cursor-pointer ${
                activeTab === 1 ? "border-b-2  border-colorPrimary" : ""
              }`}
            >
              {activeTab === 1 ? <InfoSvgTwo /> : <InfoSvgOne />}
              <p
                className={`text-md font-medium  ${
                  activeTab === 1
                    ? "text-colorPrimary "
                    : "text-colorLightTertiary"
                }`}
              >
                Program Information
              </p>
            </div>
            <div
              onClick={() => handleTabClick(2)}
              className={`flex flex-row gap-2 pb-2 items-center cursor-pointer ${
                activeTab === 2 ? "border-b-2 border-colorPrimary" : ""
              }`}
            >
              {activeTab === 2 ? <StreamSvgTwo /> : <StreamSvgOne />}
              <p
                className={`text-md font-medium ${
                  activeTab === 2
                    ? "text-colorPrimary"
                    : "text-colorLightTertiary"
                }`}
              >
                Discussion
              </p>
            </div>
            <div
              onClick={() => handleTabClick(3)}
              className={`flex flex-row gap-2 pb-2 items-center cursor-pointer ${
                activeTab === 3 ? "border-b-2 border-colorPrimary" : ""
              }`}
            >
              {activeTab === 3 ? <AssignmentSvgTwo /> : <AssignmentSvgOne />}
              <p
                className={`text-md font-medium ${
                  activeTab === 3
                    ? "text-colorPrimary"
                    : "text-colorLightTertiary"
                }`}
              >
                Assignment
              </p>
            </div>
            <div
              onClick={() => handleTabClick(4)}
              className={`flex flex-row gap-2 pb-2 items-center cursor-pointer ${
                activeTab === 4 ? "border-b-2 border-colorPrimary" : ""
              }`}
            >
              {activeTab === 4 ? <FeedbackSvgTwo /> : <FeedbackSvgOne />}
              <p
                className={`text-md font-medium ${
                  activeTab === 4
                    ? "text-colorPrimary"
                    : "text-colorLightTertiary"
                }`}
              >
                Feedback
              </p>
            </div>
          </div>

          <div className="w-full  border-b border-colorLightTertiary" />
        </div>

        <div className="tab-content mt-4">
          {activeTab === 1 && <ProgramInfo />}
          {activeTab === 2 && <Chat />}
          {activeTab === 3 && <Assignments />}
          {activeTab === 4 && <Feedback/>}
        </div>
      </div>
    </div>
  );
};

export default MentorProgram;
