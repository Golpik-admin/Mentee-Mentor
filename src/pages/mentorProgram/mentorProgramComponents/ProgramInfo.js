import React, { useState } from "react";
import {
  ArchiveSvg,
  LeaveSvg,
  SessionSvg,
  StartSvg,
  TransferSvg,
} from "../../../assets/svgs/MentorProgramSvg";
import { useLocation, useNavigate } from "react-router-dom";
import GiveRecommendation from "../../../components/GiveRecommendation";
import WriteReview from "../../../components/WriteReview";
import { DeleteSvg, DotsSvg } from "../../../assets/svgs/HomeSvgs";
import TransferProgram from "../../../components/TransferProgram";

const ProgramInfo = () => {
  const navigate = useNavigate();
  const [openModals, setOpenModals] = useState(false);
  const [isProgramStarted, setIsProgramStarted] = useState(false);
  const [isSessionVisible, setIsSessionVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [visibleBorder, setVisibleBorder] = useState(false);
  const [transferProgramModal, setTransferProgramModal] = useState("");
  const [giveReview, setGiveReview] = useState("");

  const location = useLocation();
  const { userType } = location.state || { userType: "mentee" };

  const handleStartProgram = () => {
    if (!isProgramStarted) {
      setIsProgramStarted(true);
      setIsSessionVisible(true);
    } else {
      setModalType("archive");
      openPopup();
    }
  };

  const handleTransferProgram = () => {
    setVisibleBorder(!visibleBorder);
  };

  const openPopup = () => {
    setOpenModals(true);
  };

  const closePopup = () => {
    setOpenModals(false);
  };

  const openModal = (modalName) => {
    if (modalName === "giveReview") {
      setGiveReview(true);
    } else if (modalName === "transferProgramModal") {
      setTransferProgramModal(true);
    }
  };

  const closeModal = (modalName) => {
    if (modalName === "giveReview") {
      setGiveReview(false);
    } else if (modalName === "transferProgramModal") {
      setTransferProgramModal(false);
    }
  };

  return (
    <div className="w-full h-full overflow-auto bg-colorWhite">
      <div className=" flex flex-row mt-10 justify-between items-center">
        <div>
          <p className="text-colorSecondary font-semibold text-md">
            Current Program
          </p>
          {isProgramStarted && (
            <div className="flex items-center gap-2 pt-2">
              <div className="bg-[#259726] rounded-full w-[7px] h-[7px]" />
              <p className="text-colorSecondary font-semibold text-sm">Live</p>
            </div>
          )}
        </div>

        {userType === "mentee" ? (
          <div className="flex flex-row gap-4 items-center">
            <button
              onClick={() => openModal("giveReview")}
              className="rounded-md border text-colorPrimary font-semibold text-sm border-colorPrimary cursor-pointer flex justify-center gap-2 w-[182px] h-[42px] flex flex-row items-center"
            >
              <LeaveSvg />
              Leave Program
            </button>
            <button
              onClick={() => navigate("/sessions", { state: { userType } })}
              className="text-colorWhite font-semibold text-sm rounded-md border border-colorPrimary bg-colorPrimary cursor-pointer flex justify-center gap-2 w-[131px] h-[42px] flex flex-row items-center"
            >
              <SessionSvg />
              Sessions
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 items-center">
              <button
                onClick={handleStartProgram}
                className="text-colorPrimary font-semibold text-sm rounded-md border border-colorPrimary cursor-pointer flex justify-center gap-2 w-[182px] h-[42px] flex flex-row items-center"
              >
                {isProgramStarted ? <ArchiveSvg /> : <StartSvg />}
                {isProgramStarted ? "Archive Program" : "Start Program"}
              </button>

              {isSessionVisible && (
                <button
                  onClick={() => navigate("/sessions", { state: { userType } })}
                  className="text-colorWhite font-semibold text-sm rounded-md border border-colorPrimary bg-colorPrimary cursor-pointer flex justify-center gap-2 w-[131px] h-[42px] flex flex-row items-center"
                >
                  <SessionSvg />
                  Sessions
                </button>
              )}

              <button onClick={() => handleTransferProgram()}>
                <DotsSvg />
              </button>
            </div>
            <div className="flex justify-end pt-4">
              {visibleBorder && (
                <div className="shadow  shadow-[#F7F7F7] rounded-lg gap-4 border bg-colorWhite flex  p-2 px-4 flex-col">
                  <button
                    onClick={() => openModal("transferProgramModal")}
                    className="flex gap-2 items-center flex-row text-colorSecondary text-sm font-medium "
                  >
                    <TransferSvg />
                    Transfer Program
                  </button>
                  <button
                    // onClick={() => handleDeleteComment(comment.id)}
                    className="flex gap-2 items-center flex-row text-colorSecondary text-sm font-medium"
                  >
                    <DeleteSvg />
                    Delete Program
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
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
      <TransferProgram
        isOpen={transferProgramModal}
        closeModal={() => closeModal("transferProgramModal")}
      />
      <WriteReview
        closeModal={() => closeModal("giveReview")}
        isOpen={giveReview}
      />
    </div>
  );
};

export default ProgramInfo;
