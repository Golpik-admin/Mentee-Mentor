import React, { useState } from "react";
import { PlusSvg, UploadSvg } from "../../../assets/svgs/MentorProgramSvg";
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

  const [uploadedData, setUploadedData] = useState({
    assignment: [],
    recording: [],
    slides: [],
    documents: [],
    links: [],
  });

  const openPopup = (modal) => {
    setOpenModals((prev) => ({ ...prev, [modal]: true }));
  };

  const closePopup = (modal) => {
    setOpenModals((prev) => ({ ...prev, [modal]: false }));
  };

  const handleUpload = (type, data) => {
    setUploadedData((prevData) => ({
      ...prevData,
      [type]: [...prevData[type], data],
    }));
  };

  const Data = [
    {
      heading: "Assignment",
      btnText: "Upload Assignment",
      link: () => openPopup("assignment"),
      uploads: uploadedData.assignment,
      component: (
        <UploadAssignment
          isOpen={openModals.assignment}
          closePopup={() => closePopup("assignment")}
          onUpload={(data) => handleUpload("assignment", data)}
        />
      ),
    },
    {
      heading: "Recording",
      btnText: "Upload Recording",
      link: () => openPopup("recording"),
      uploads: uploadedData.recording,
      component: (
        <UploadRecording
          isOpen={openModals.recording}
          closePopup={() => closePopup("recording")}
          onUpload={(data) => handleUpload("recording", data)}
        />
      ),
    },
    {
      heading: "Slides",
      btnText: "Upload Slides",
      link: () => openPopup("slides"),
      uploads: uploadedData.slides,
      component: (
        <UploadSlides
          isOpen={openModals.slides}
          closePopup={() => closePopup("slides")}
          onUpload={(data) => handleUpload("slides", data)}
        />
      ),
    },
    {
      heading: "Documents",
      btnText: "Upload Documents",
      link: () => openPopup("documents"),
      uploads: uploadedData.documents,
      component: (
        <UploadDocument
          isOpen={openModals.documents}
          closePopup={() => closePopup("documents")}
          onUpload={(data) => handleUpload("documents", data)}
        />
      ),
    },
    {
      heading: "Links",
      btnText: "Upload Links",
      link: () => openPopup("links"),
      uploads: uploadedData.links,
      component: (
        <UploadLinks
          isOpen={openModals.links}
          closePopup={() => closePopup("links")}
          onUpload={(data) => handleUpload("links", data)}
        />
      ),
    },
  ];

  return (
    <div className="w-full h-full overflow-auto bg-colorWhite">
      {Data.map((item, i) => (
        <div
          key={i}
          className="border rounded-lg mb-4 shadow shadow-[#F7F7F7] w-full h-full p-4"
        >
          <div className="flex flex-row py-2 items-center justify-between">
            <p className="text-colorSecondary text-md font-bold">
              {item.heading}
            </p>
            <div className="flex flex-row items-center justify-row gap-2">
              <button
                onClick={item.link}
                type="submit"
                className="text-colorWhite text-sm flex justify-center font-medium bg-colorPrimary flex flex-row cursor-pointer gap-4 items-center px-4 py-2 rounded-lg"
              >
                <UploadSvg />
                {item.btnText}
              </button>
            </div>
          </div>

          {/* Render uploaded content with custom layouts */}
          {/* <div>
            {item.uploads.map((upload, index) => (
              <div key={index} className="py-1">
                {item.heading === "Assignment" && (
                  <div className="assignment-layout">
                    <p className="text-colorSecondary text-sm font-semibold">
                      {upload.title} - Assignment Content
                    </p>
                    <p>{upload.name}</p>
                    <p>{upload.date}</p>
                    <p>{upload.file}</p>

                  </div>
                )}
                {item.heading === "Recording" && (
                  <div className="recording-layout">
                    <p className="text-colorSecondary text-sm font-semibold">
                      {upload.title} - Recording Details
                    </p>
                    <audio controls src={upload.url}>
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
                {item.heading === "Slides" && (
                  <div className="slides-layout">
                    <p className="text-colorSecondary text-sm font-semibold">
                      {upload.title} - Slides Overview
                    </p>
                    <p>{upload.description}</p>
                  </div>
                )}
                {item.heading === "Documents" && (
                  <div className="documents-layout">
                    <p className="text-colorSecondary text-sm font-semibold">
                      {upload.title} - Document Information
                    </p>
                    <a href={upload.url} target="_blank" rel="noopener noreferrer">
                      View Document
                    </a>
                  </div>
                )}
                {item.heading === "Links" && (
                  <div className="links-layout">
                    <p className="text-colorSecondary text-sm font-semibold">
                      {upload.title}
                    </p>
                    <a
                      href={upload.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4E7EFF] border-b border-[#4E7EFF] text-xs font-medium"
                    >
                      {upload.url}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div> */}

          {/* Render the upload component (modal) for each section */}
          {item.component}
        </div>
      ))}
    </div>
  );
};

export default Assignments;
