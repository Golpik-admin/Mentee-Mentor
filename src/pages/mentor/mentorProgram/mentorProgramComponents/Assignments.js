import React, { useState } from "react";
import {
  CloseSvg,
  DownloadSvg,
  PlaneRightSvg,
  PlusSvg,
  UploadSvg,
} from "../../../../assets/svgs/MentorProgramSvg";
import UploadAssignment from "./assingmentSections/UploadAssignment";
import UploadRecording from "./assingmentSections/UploadRecording";
import UploadSlides from "./assingmentSections/UploadSlides";
import UploadDocument from "./assingmentSections/UploadDocument";
import UploadLinks from "./assingmentSections/UploadLinks";

const Assignments = () => {
  const [openModals, setOpenModals] = useState({
    assignment: false,
    recording: false,
    slides: false,
    documents: false,
    links: false,
  });

  const openPopup = (modal) => {
    setOpenModals((prev) => ({ ...prev, [modal]: true }));
  };
  const closePopup = (modal) => {
    setOpenModals((prev) => ({ ...prev, [modal]: false }));
  };

  const Data = [
    {
      heading: "Assignment",
      btnText: "Upload Assignment",
      link: () => openPopup("assignment"),
    },
    {
      heading: "Recording",
      btnText: "Upload Recording",
      link: () => openPopup("recording"),
    },
    {
      heading: "Slides",
      btnText: "Upload Slides",
      link: () => openPopup("slides"),
    },
    {
      heading: "Documents",
      btnText: "Upload Documents",
      link: () => openPopup("documents"),
    },
    {
      heading: "Links",
      btnText: "Upload Links",
      link: () => openPopup("links"),
    },
  ];

  return (
    <div className="w-full h-full overflow-auto bg-colorWhite">
      {Data.map((item, i) => (
        <div className="border rounded-lg mb-4 shadow shadow-[#ccc] border-[#ccc] w-full h-full p-4">
          <div className="flex flex-row py-2 items-center justify-between">
            <p className="text-colorSecondary text-md font-bold">
              {item.heading}
            </p>
            <div className="flex flex-row items-center justify-row gap-2">
              <button
                onClick={item.link}
                type="submit"
                className=" text-colorWhite text-sm flex justify-center font-medium bg-colorPrimary flex flex-row cursor-pointer gap-4 items-center  px-4 py-2 rounded-lg"
              >
                <UploadSvg />
                {item.btnText}
              </button>
              <button className="w-[33px] h-[33px] text-colorPrimary text-md flex justify-center font-medium border border-colorPrimary cursor-pointer  items-center  rounded-lg">
                <PlusSvg />
              </button>
            </div>
          </div>
          {openModals.assignment && (
            <UploadAssignment
              isOpen={openModals.assignment}
              closePopup={() => closePopup("assignment")}
            />
          )}
          {openModals.recording && (
            <UploadRecording
              isOpen={openModals.recording}
              closePopup={() => closePopup("recording")}
            />
          )}
          {openModals.slides && (
            <UploadSlides
              isOpen={openModals.slides}
              closePopup={() => closePopup("slides")}
            />
          )}
          {openModals.documents && (
            <UploadDocument
              isOpen={openModals.documents}
              closePopup={() => closePopup("documents")}
            />
          )}
             {openModals.links && (
            <UploadLinks
              isOpen={openModals.links}
              closePopup={() => closePopup("links")}
            />
          )}


        </div>
      ))}
    </div>
  );
};

export default Assignments;
