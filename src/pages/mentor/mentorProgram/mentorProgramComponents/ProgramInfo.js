import React, { useState } from "react";
import {
  ArchiveSvg,
  SessionSvg,
  StartSvg,
} from "../../../../assets/svgs/MentorProgramSvg";
import { useNavigate } from "react-router-dom";
import GiveRecommendation from "../../../../components/GiveRecommendation";
import ScheduleSession from "../../../../components/ScheduleSession";

const ProgramInfo = () => {
  const navigate = useNavigate();
  const [openModals, setOpenModals] = useState(false);
  const [openScheduleSession, setOpenScheduleSession] = useState(false);

  const [isProgramStarted, setIsProgramStarted] = useState(false);
  const [isSessionVisible, setIsSessionVisible] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleStartProgram = () => {
    if (!isProgramStarted) {
      setIsProgramStarted(true);
      setIsSessionVisible(true);
    } else {
      setModalType("archive");
      openPopup();
    }
  };

  const openPopup = () => {
    setOpenModals(true);
  };

  const closePopup = () => {
    setOpenModals(false);
  };

  const openSchedulaPopup = () => {
    setOpenScheduleSession(true);
  };

  const closeSchedulePopup = () => {
    setOpenScheduleSession(false);
  };

  return (
    <div className="w-full h-full overflow-auto bg-colorWhite">
      <div className="flex flex-row mt-10 justify-between items-center">
        <p className="text-colorSecondary font-semibold text-sm">
          Current Program
        </p>

        <div className="flex flex-row gap-4 items-center">
          <button
            onClick={handleStartProgram}
            className="rounded-md border border-colorPrimary cursor-pointer flex justify-center gap-2 w-[182px] h-[42px] flex flex-row items-center"
          >
            {isProgramStarted ? <ArchiveSvg /> : <StartSvg />}
            <p className="text-colorPrimary font-semibold text-sm">
              {isProgramStarted ? "Archive Program" : "Start Program"}
            </p>
          </button>
          {isSessionVisible && (
            <button
              onClick={openSchedulaPopup}
              className="rounded-md border border-colorPrimary bg-colorPrimary cursor-pointer flex justify-center gap-2 w-[131px] h-[42px] flex flex-row items-center"
            >
              <SessionSvg />
              <p className="text-colorWhite font-semibold text-sm">Sessions</p>
            </button>
          )}
        </div>
      </div>

      <div className="shadow-xs shadow-[#F7F7F7] z-1 overflow rounded-lg bg-colorWhite p-4 mt-8  w-full border ">
        <div className="flex flex-row items-center justify-between">
          <p className="text-colorSecondary font-semibold text-lg">
            Fitness Coaching
          </p>
          <p className="text-colorLightTertiary font-regular text-xs">
            18th March, 2024
          </p>
        </div>
        <p className="text-colorSecondary font-medium text-md">Fitness</p>
        <p className="text-colorSecondary mt-2 leading-loose w-[80%] font-medium text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden.
        </p>
      </div>
      <GiveRecommendation
        modalType={modalType}
        closePopup={closePopup}
        isOpen={openModals}
      />

      <ScheduleSession
        isOpen={openScheduleSession}
        closePopup={closeSchedulePopup}
      />
    </div>
  );
};

export default ProgramInfo;
