import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

const Profession = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    industryName: "",
    companyNnme: "",
    qualification: "",
  });

  return (
    <div className="mt-14">
      <div className="mt-4">
        <div className="my-2 ">
          <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
            Industry
          </label>
          <input
            type="text"
            name="industryName"
            placeholder="Enter Industry here..."
            value={value.industryName}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
          />
        </div>
        <div className="my-2 ">
          <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
            Company Name
          </label>
          <input
            type="text"
            name="companyNnme"
            placeholder="Enter your Company Name here"
            value={value.companyNnme}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
          />
        </div>
        <div className="my-2 ">
          <label className="text-colorSecondary font-medium text-md after:content-['*'] after:ml-0.5 after:text-red-500">
            Qualification
          </label>
          <input
            type="text"
            name="qualification"
            placeholder="Enter your Qualification here"
            value={value.qualification}
            // onChange={handleChange}
            // onBlur={handleBlur}
            className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 rounded-md border focus:outline-none  border-colorPrimary"
          />
        </div>
      </div>
    </div>
  );
};

export default Profession;
