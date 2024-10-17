import React, { useState, useRef } from "react";
import {
  ClockSvg,
  CloseSvg,
  SessionsSvg,
} from "../../../../assets/svgs/MentorProgramSvg";

const UploadRecording = ({ isOpen, closePopup, onUpload }) => {
  const [value, setValue] = useState({
    recordingTitle: "",
    sessionNumber: "",
  });

  const [showDetails, setShowDetails] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [videoDuration, setVideoDuration] = useState(null);
  const [videoURL, setVideoURL] = useState("");
  const videoRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({ ...prev, [name]: inputValue }));
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
      videoRef.current.play();
      videoRef.current.play(false);
      // setIsPlaying(true);
    }
  };

  const handleDownloadVideo = () => {
    const link = document.createElement("a");
    link.href = videoURL;
    link.download = value.recordingTitle || "video";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedVideo(file);
    const videoUrl = URL.createObjectURL(file);
    videoRef.current.src = videoUrl;
    videoRef.current.onloadedmetadata = () => {
      setVideoDuration(videoRef.current.duration);
    };
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoURL(url);
    }
  };

  const handleFileUpload = () => {
    if (!value.recordingTitle || !value.sessionNumber || !selectedVideo) {
      setUploadStatus("Please fill in all fields and select a video.");
      return;
    }
    setUploadStatus("Uploading...");
    setTimeout(() => {
      setUploadStatus("File uploaded successfully!");
      onUpload({
        title: value.recordingTitle,
        sessionNum: value.sessionNumber,
        file: selectedVideo,
      });
      setShowDetails(true);
      handleClose();
    }, 2000);
  };

  const handleClose = () => {
    closePopup();
  };

  return (
    <div className="pt-2">
      {showDetails && (
        <div className="w-full h-full">
          <div className="rounded-lg border border-lg shadow w-[302px] p-2">
            {videoURL && (
              <div className="mt-2">
                <video
                  ref={videoRef}
                  className="w-full h-[180px] rounded-md"
                  controls={false}
                  src={videoURL}
                  alt="Uploaded Video"
                />
              </div>
            )}
            <div className="flex flex-col gap-2 pt-2">
              <p className="text-colorSecondary text-xs font-medium">
                {value.recordingTitle}
              </p>
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row items-center gap-1">
                  <ClockSvg />
                  <p className="text-colorSecondary text-xs font-medium">
                    {videoDuration
                      ? `${Math.floor(videoDuration / 60)}:${(
                          "0" + Math.floor(videoDuration % 60)
                        ).slice(-2)}`
                      : "00:00"}{" "}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <SessionsSvg />
                  <p className="text-colorSecondary text-xs font-medium">
                    {value.sessionNumber}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <button
                  onClick={handlePlayVideo}
                  className="rounded-md bg-colorPrimary p-2 border border-lg text-colorWhite text-xs font-medium"
                >
                  Watch Now
                </button>
                <button
                  onClick={handleDownloadVideo}
                  className="rounded-md text-colorPrimary p-2 border border-lg bg-[#F0F3F6] text-xs font-medium"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-colorWhite py-4 rounded-lg shadow-lg w-[30%]">
            <div className="px-4 flex flex-row items-center justify-between">
              <h1 className="text-lg font-semibold text-colorSecondary">
                Upload Recording
              </h1>
              <div className="cursor-pointer" onClick={handleClose}>
                <CloseSvg />
              </div>
            </div>
            <div className="border w-full mt-2" />
            <div className="px-4">
              <div className="my-2">
                <label className="text-colorSecondary font-medium text-sm">
                  Title of Recording
                </label>
                <input
                  type="text"
                  name="recordingTitle"
                  placeholder="Write title here..."
                  value={value.recordingTitle}
                  onChange={handleInputChange}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow shadow-[#FCFCFC] rounded-md border border-colorLightTertiary"
                />
              </div>
              <div className="my-2">
                <label className="text-colorSecondary font-medium text-sm">
                  Session Number
                </label>
                <input
                  type="number"
                  name="sessionNumber"
                  placeholder="Session Number"
                  value={value.sessionNumber}
                  onChange={handleInputChange}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow shadow-[#FCFCFC] rounded-md border border-colorLightTertiary"
                />
              </div>
              <div className="mt-4 flex flex-col justify-center items-center w-full h-[200px] border border-dashed border-colorLightTertiary rounded-md">
                <video
                  ref={videoRef}
                  className="w-1/2 h-1/2"
                  controls={false}
                  style={{ display: selectedVideo ? "block" : "none" }}
                />
                <label className="cursor-pointer">
                  <img
                    className="w-[35px] h-[35px]"
                    src={require("../../../../assets/images/uploadImg.png")}
                    alt="Upload Icon"
                  />
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  // className="hidden" // Hide the default input
                />
              </div>
              {uploadStatus && (
                <p className="text-sm text-center mt-2">{uploadStatus}</p>
              )}
            </div>
            <div className="flex justify-end mt-4 px-4 gap-4 items-center flex-row">
              <button
                onClick={handleFileUpload}
                className="bg-colorPrimary text-colorWhite text-sm font-semibold py-2 px-6 rounded"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadRecording;
