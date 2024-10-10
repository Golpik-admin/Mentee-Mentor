import React, { useState } from "react";

const DeleteAccount = () => {
  const [isChecked, setIsChecked] = useState({});

  const handleCheckboxChange = (id) => {
    setIsChecked((prevIsChecked) => ({
      ...prevIsChecked,
      [id]: !prevIsChecked[id],
    }));
  };

  const [value, setValue] = useState({
    writeReasons: "",
  });

  return (
    <div className=" p-6 ">
      <p className="text-colorSecondary text-2xl font-semibold">
        Delete your account
      </p>
      <p className="text-colorSecondary  mt-4 text-sm font-medium">
        Please select a reason for deleting your account. Your feedback helps us
        improve our services.
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
        We value your feedback and would love to improve. If you'd like to share
        more details, please let us know below:
      </p>
      <div className="mt-4">
        <textarea
          // type="describeIssue"
          name="writeReasons"
          placeholder="Write reason here (optional)"
          //   value={value.writeReasons}
          // onChange={handleChange}
          // onBlur={handleBlur}
          rows="4"
          maxLength="200"
          className="h-auto min-h-[8rem] resize-none w-[80%] mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md  border border-[#8A8394] focus:border-[#8A8394] focus:outline-none transition-colors duration-200 ease-in-out"
        />
      </div>

      <button
        type="submit"
        className="items-center mt-8 bg-colorPrimary text-colorWhite text-lg font-semibold rounded-lg cursor-pointer py-4 px-4"
      >
        Delete account
      </button>
    </div>
  );
};

export default DeleteAccount;

const Data = [
  {
    id: 1,
    text: "Unfit mentor or mentee match",
  },
  {
    id: 2,
    text: "Issues with the platform (technical problems)",
  },
  {
    id: 3,
    text: "Not satisfied with subject matter/content",
  },
  {
    id: 4,
    text: "Found a better alternative",
  },
  {
    id: 5,
    text: "No longer needed the service",
  },
  {
    id: 6,
    text: "Other",
  },
];
