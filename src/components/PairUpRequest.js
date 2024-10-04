import React from "react";

const PairUpRequest = () => {
  return (
    <div>
      <p className="text-colorSecondary text-2xl font-semibold">
        Pair up Requests
      </p>
      <div  className="pt-10 flex justify-between items-center">

      <div className="gap-4 flex flex-row items-center">
        <img
          className="w-[40px] h-[40px]"
          src={require("../assets/images/ellipse.png")}
        />
        <div>
          <p className="text-colorSecondary text-md font-semibold">
            Dianne Russell
          </p>
          <p className="text-colorSecondary text-xs font-regular">
            Program Name · Feb 24
          </p>
        </div>
      </div>

      <div className="gap-4 flex flex-row items-center">
        <button className="border border-colorPrimary w-[119px] h-[40px] rounded-lg text-sm text-colorPrimary items-center ">
          View profile
        </button>
        <button className=" bg-colorPrimary w-[119px] h-[40px] rounded-lg text-sm text-colorWhite items-center ">
         Accept
        </button>
        <button className=" bg-[#DF4C4C] w-[119px] h-[40px] rounded-lg text-sm text-colorWhite items-center ">
          Cancel
        </button>
      </div>
      </div>
    </div>
  );
};

export default PairUpRequest;
