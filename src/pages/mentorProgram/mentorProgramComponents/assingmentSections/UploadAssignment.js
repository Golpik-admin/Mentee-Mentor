import React, { useState } from "react";
import { CloseSvg, DownloadSvg } from "../../../../assets/svgs/MentorProgramSvg";

const UploadAssignment = ({ isOpen, closePopup }) => {
  const [value, setValue] = useState({
    assignmentTitle: "",
    menteeName: "",
    dueDate: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  // Handle input changes for assignment details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadStatus(""); // Reset the status when a new file is selected
  };

  // Handle file upload
  const handleFileUpload = async (event) => {
    event.preventDefault();

    if (!value.assignmentTitle || !value.menteeName || !value.dueDate || !selectedFile) {
      setUploadStatus("Please fill in all fields and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("assignmentTitle", value.assignmentTitle);
    formData.append("menteeName", value.menteeName);
    formData.append("dueDate", value.dueDate);

    try {
      console.log("Attempting file upload...");
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("File uploaded successfully!");
        closePopup(); // Close modal after successful upload
      } else {
        const errorText = await response.text();
        console.error("Upload failed. Response:", errorText);
        setUploadStatus(`File upload failed: ${errorText}`);
      }
    } catch (error) {
      console.error("Error during file upload:", error);
      setUploadStatus("Error uploading file: " + error.message);
    }
  };

  // Close modal if it's not open
  if (!isOpen) return null;

  return (
    <div className="pt-4">
      {/* Upload document data */}
      <div className="border shadow w-full h-full">
        <div className="bg-[#F5F5F5] p-4 flex justify-between w-[100%] flex-row items-center">
          <h1 className="w-[20%] text-center text-colorSecondary text-sm font-semibold">
            Assignment Title
          </h1>
          <h1 className="w-[20%] text-colorSecondary text-center text-sm font-semibold">
            Due Date
          </h1>
          <h1 className="w-[20%] text-colorSecondary text-center text-sm font-semibold">
            Mentee Name
          </h1>
          <h1 className="w-[20%] text-colorSecondary text-center text-sm font-semibold">
            Download File
          </h1>
          <h1 className="w-[20%] text-colorSecondary text-center text-sm font-semibold">
            Status
          </h1>
        </div>
        <div className="w-[100%] p-4 flex justify-between flex-row items-center">
          <p className="w-[20%] text-center text-colorSecondary text-xs font-medium">
            {value.assignmentTitle || "Assignment Title"}
          </p>
          <p className="w-[20%] text-center text-colorSecondary text-xs font-medium">
            {value.dueDate || "Due Date"}
          </p>
          <p className="w-[20%] text-center text-colorSecondary text-xs font-medium">
            {value.menteeName || "Mentee Name"}
          </p>
          <div className="w-[20%] justify-center flex flex-row items-center gap-2">
            {selectedFile ? (
              <>
                <img
                  className="w-[30px] h-[30px]"
                  src={require("../../../../assets/images/pdfImg.png")}
                  alt="pdf-icon"
                />
                <div>
                  <p className="text-colorSecondary text-xs font-medium">
                    {selectedFile.name}
                  </p>
                  <p className="text-colorLightTertiary text-xs font-medium">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
                <DownloadSvg />
              </>
            ) : (
              <p className="text-colorLightTertiary text-xs font-medium">
                No File Uploaded
              </p>
            )}
          </div>
          <p className="w-[20%] text-center text-colorSecondary text-xs font-medium">
            Submitted
          </p>
        </div>
      </div>

      {/* Modal for uploading assignment */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-colorWhite py-4 rounded-lg shadow-lg w-[30%]">
            <div className="px-4 flex flex-row items-center justify-between">
              <h1 className="text-lg font-semibold text-colorSecondary">
                Upload Assignment
              </h1>
              <div className="cursor-pointer" onClick={closePopup}>
                <CloseSvg />
              </div>
            </div>
            <div className="border w-full mt-2" />
            <div className="px-4">
              <div className="my-2">
                <label className="text-colorSecondary font-medium text-sm">
                  Assignment Title
                </label>
                <input
                  type="text"
                  name="assignmentTitle"
                  placeholder="Write title of assignment here..."
                  value={value.assignmentTitle}
                  onChange={handleInputChange}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow rounded-md border border-colorLightTertiary"
                />
              </div>
              <div className="my-2">
                <label className="text-colorSecondary font-medium text-sm">
                  Mentee Name
                </label>
                <input
                  type="text"
                  name="menteeName"
                  placeholder="Mentee Name"
                  value={value.menteeName}
                  onChange={handleInputChange}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow rounded-md border border-colorLightTertiary"
                />
              </div>
              <div className="my-2">
                <label className="text-colorSecondary font-medium text-sm">
                  Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={value.dueDate}
                  onChange={handleInputChange}
                  className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none shadow rounded-md border border-colorLightTertiary"
                />
              </div>

              {/* File upload section */}
              <form
                onSubmit={handleFileUpload}
                className="mt-4 flex flex-col justify-center items-center w-full h-[200px] border border-dashed border-colorLightTertiary rounded-md"
              >
                <img
                  className="w-[35px] h-[35px]"
                  src={require("../../../../assets/images/uploadImg.png")}
                  alt="upload-icon"
                />
                <input type="file" onChange={handleFileChange} />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer mt-2 text-colorSecondary font-medium text-sm underline"
                >
                  Drag & drop or Browse
                </label>
              </form>

              {/* Upload status message */}
              {uploadStatus && (
                <p className="text-sm text-center mt-2">{uploadStatus}</p>
              )}
            </div>

            {/* Submit button */}
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

export default UploadAssignment;
