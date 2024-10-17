import React, { useState } from "react";
import { CloseSvg } from "../../../../assets/svgs/MentorProgramSvg";

const UploadSlides = ({ isOpen, closePopup, onUpload }) => {
  const [value, setValue] = useState({
    slideName: "",
  });

  const [showDetails, setShowDetails] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({ ...prev, [name]: inputValue }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!value.slideName || !selectedFile) {
      setUploadStatus("Please fill in all fields and select a file.");
      return;
    }
    setUploadStatus("Uploading...");
    setTimeout(() => {
      setUploadStatus("File uploaded successfully!");
      onUpload({
        name: value.documentName,
        file: selectedFile,
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
        <div className="border shadow   w-full h-full ">
          {/* upload Slides */}
          <div className="flex flex-col  gap-6 px-6 py-4 ">
            <div className="flex flex-row  gap-2 ">
              <img
                className="w-[35px] h-[35px]"
                src={require("../../../../assets/images/pdfImg.png")}
              />
              <div>
                <p className="text-colorSecondary text-sm font-semibold">
                  {value.slideName}
                </p>
                <p className="text-colorLightTertiary text-xs font-medium">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-colorWhite py-4 rounded-lg shadow-lg w-[30%] ">
            <div className="px-4 flex flex-row items-center justify-between">
              <h1 className="text-lg font-semibold text-colorSecondary">
                Upload Slides
              </h1>
              <div className="cursor-pointer" onClick={handleClose}>
                <CloseSvg />
              </div>
            </div>
            <div className="border w-full mt-2" />
            <div className="px-4">
              <div className="my-2 ">
                <label className="text-colorSecondary font-medium text-sm ">
                  Slide Name
                </label>
                <input
                  type="text"
                  name="slideName"
                  placeholder="Slide Name"
                  value={value.slideName}
                  onChange={handleInputChange}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow shadow-[#FCFCFC] rounded-md border border-colorLightTertiary"
                />
              </div>

              <div className="mt-4 flex flex-col justify-center items-center w-full h-[200px] border border-dashed border-colorLightTertiary rounded-md ">
                <img
                  className="w-[35px] h-[35px]"
                  src={require("../../../../assets/images/uploadImg.png")}
                />
                <input type="file" onChange={handleFileChange} />
              </div>
              {uploadStatus && (
                <p className="text-sm text-center mt-2">{uploadStatus}</p>
              )}
            </div>

            <div className="flex justify-end mt-4 px-4 gap-4 items-center flex-row ">
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

export default UploadSlides;
