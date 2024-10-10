import React, { useState } from "react";
import { SelectSvg } from "../assets/svgs/AuthSvg";
import { CloseSvg } from "../assets/svgs/MentorSvg";

const ReportIssue = () => {
  const [isChecked, setIsChecked] = useState({});

  const handleCheckboxChange = (id) => {
    setIsChecked((prevIsChecked) => ({
      ...prevIsChecked,
      [id]: !prevIsChecked[id],
    }));
  };

  const [value, setValue] = useState({
    describeIssue: "",
    attachSreenshot: "",
  });

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFile(reader.result); // Set file as base64
        setValue({ attachSreenshot: file.name }); // Set file name
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  };

  // Handle file removal
  const handleFileRemove = (e) => {
    e.stopPropagation(); // Prevents the file dialog from opening
    setUploadedFile(null);
    setValue({ attachSreenshot: "" });
  };
  return (
    <div className=" p-6 ">
      <p className="text-colorSecondary text-2xl font-semibold">
        Report an Issue
      </p>
      <p className="text-colorSecondary  mt-4 text-sm font-medium">
        Facing a problem? Let us know so we can help you resolve it quickly.
      </p>
      <div className="pt-4">
        {Data.map((item, i) => (
          <div className="flex flex-row items-center gap-4 pb-3 ">
            <input
              type="checkbox"
              id={`checkbox-${item.id}`}
              name="terms"
              // checked={isChecked}
              checked={isChecked[item.id] || false}
              onChange={() => handleCheckboxChange(item.id)}
              className="appearance-none h-4 w-4 checked:bg-colorPrimary checked:before:content-['✓'] checked:before:text-xs checked:before:flex checked:before:justify-center checked:before:text-white  rounded border border-colorPrimary  focus:ring-colorSecondary"
            />
            <p className="text-colorSecondary text-sm font-regular">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <p className="text-colorSecondary mt-2 text-sm font-medium">
        If you're facing an issue or have additional details to share, please
        let us know below:
      </p>
      <div className="mt-4">
        <textarea
          // type="describeIssue"
          name="aboutMe"
          placeholder="Describe the issue"
          //   value={value.describeIssue}
          // onChange={handleChange}
          // onBlur={handleBlur}
          rows="4"
          maxLength="200"
          className="h-auto min-h-[8rem] resize-none w-[80%] mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md  border border-[#8A8394] focus:border-[#8A8394] focus:outline-none transition-colors duration-200 ease-in-out"
        />
      </div>
      <p className="text-colorSecondary mt-2 text-sm font-medium">
        Attach Screenshot (Optional)
      </p>
      <input
        type="file"
        id="file-upload"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
      <button
        className="border border-[#8A8394] rounded-md px-4 py-3 my-2 w-[80%] flex justify-between flex-row items-center"
        onClick={() => document.getElementById("file-upload").click()}
      >
        <p className="text-sm font-regular text-colorLightTertiary">
          {value.attachSreenshot
            ? `Uploaded: ${value.attachSreenshot}`
            : "Attach screenshot here"}
        </p>
        {uploadedFile ? (
          <button
            type="button"
            className="focus:outline-none"
            onClick={handleFileRemove}
          >
            <CloseSvg />
          </button>
        ) : (
          <SelectSvg />
        )}
      </button>
      {/* Preview the uploaded image */}
      {/* {uploadedFile && (
        <div className="mt-2">
          <img
            src={uploadedFile}
            alt="Uploaded"
            className="w-32 h-32 object-cover rounded"
          />
        </div>
      )} */}
      <button
        type="submit"
        className="items-center mt-8 bg-colorPrimary text-colorWhite text-lg font-semibold rounded-lg cursor-pointer py-4 px-4"
      >
        Submit Report
      </button>
    </div>
  );
};

export default ReportIssue;

const Data = [
  {
    id: 1,
    text: "Technical Problem (e.g., login issues, page not loading)",
  },
  {
    id: 2,
    text: "Program Content (e.g., missing or incorrect material)",
  },
  {
    id: 3,
    text: "Communication (e.g., issues with mentor/mentee chats)",
  },
  {
    id: 4,
    text: "Account Problem (e.g., login/password problems)",
  },
  {
    id: 5,
    text: "Other",
  },
];
