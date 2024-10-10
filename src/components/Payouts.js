import React, { useState } from "react";
import { CardSvg, ManuSvg } from "../assets/svgs/AccountSettingSvg";
import { CloseSvg } from "../assets/svgs/MentorSvg";
import { useNavigate } from "react-router-dom";

const Payouts = () => {
  const [showCard, setShowCard] = useState(false);
  const [openModals, setOpenModals] = useState(false);
  const navigate = useNavigate();

  const handleCard = () => {
    setShowCard(!showCard);
  };

  const openPopup = () => {
    setOpenModals(true);
  };

  const closePopup = () => {
    setOpenModals(false);
  };

  const [value, setValue] = useState({
    bankName: "",
    accountTitle: "",
    ibnNumber: "",
  });

  return (
    <div className=" p-6 ">
      <p className="text-colorSecondary text-2xl font-semibold">Payouts</p>

      <div className="mt-4 flex items-center gap-6">
        <div className="px-8 py-4 border shadow shadow-[#F7F7F7] rounded-md">
          <p className="text-colorSecondary text-lg font-semibold">
            This Month
          </p>
          <p className="mt-2 text-colorSecondary text-2xl font-semibold">
            $ 1,750
          </p>

          <p className="mt-3 text-colorSecondary text-sm font-regular">
            Sep 9, 2024 - Sep 15, 2024
          </p>
        </div>
        <div className="px-8 py-4  border shadow shadow-[#F7F7F7] rounded-md">
          <div className="flex flex-row justify-between gap-4">
            <div>
              <p className="text-colorSecondary text-lg font-semibold">
                Payment method
              </p>
              <div className="flex flex-row items-center gap-4">
                <div className="flex flex-col ">
                  <p className="mt-2 text-colorSecondary text-sm font-semibold">
                    Account Title:
                  </p>
                  <p className="mt-1 text-colorSecondary text-sm font-semibold">
                    Bank Name:
                  </p>
                  <p className="mt-1 text-colorSecondary text-sm font-semibold">
                    IBAN:
                  </p>
                </div>
                <div className="flex flex-col ">
                  <p className="mt-2 text-colorSecondary text-sm font-regular">
                    Jack Willson
                  </p>
                  <p className="mt-1 text-colorSecondary text-sm font-regular">
                    Wells Fargo Bank
                  </p>
                  <p className="mt-1 text-colorSecondary text-sm font-regular">
                    9/26
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => handleCard(showCard)}
                className="p-0 flex justify-end m-0 cursor-pointer"
              >
                <ManuSvg />
              </div>

              {showCard && (
                <div
                  onClick={openPopup}
                  className="cursor-pointer p-4 mt-4 gap-4 h-[48px] border shadow shadow-[#F7F7F7] rounded-md flex flex-row items-center"
                >
                  <CardSvg />
                  <p className="text-colorSecondary text-md font-regular">
                    Update details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-colorSecondary text-2xl font-semibold">
        All Payouts
      </p>
      <div className=" p-4  w-full mt-4 border shadow shadow-[#F7F7F7] rounded-md">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col items-center">
            <p className=" text-colorSecondary text-sm font-semibold">
              Payment Month
            </p>
            <p className=" text-colorSecondary text-sm font-regular mt-4">
              June
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-colorSecondary text-sm font-semibold">
              Payment ID
            </p>
            <p className=" text-[#009CFF] text-sm font-regular mt-4">#00125</p>
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-colorSecondary text-sm font-semibold">Date</p>
            <p className=" text-colorSecondary text-sm font-regular mt-4">
              June 16, 2021 at 11:34 PM
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-colorSecondary text-sm font-semibold">Amount</p>
            <p className=" text-colorSecondary text-sm font-regular mt-4">
              $30.00
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-colorSecondary text-sm font-semibold">Status</p>
            <p className=" text-colorSecondary text-sm font-regular mt-4">
              Issued
            </p>
          </div>
        </div>
      </div>

      {openModals && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-colorWhite px-4 py-4 rounded-lg shadow-lg w-[50%] ">
            {/* show={showModal} onHide={handleClose} */}

            <div className="flex flex-row items-center justify-between">
              <h2 className="text-lg font-bold text-colorSecondary">
                Update Payment Details
              </h2>
              <div className="cursor-pointer" onClick={closePopup}>
                <CloseSvg />
              </div>
            </div>

            <div className="my-2 ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Bank Name
              </label>
              <input
                type="text"
                name="bankName"
                placeholder="Enter the name of your bank “"
                // value={value.bankName}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
              />
            </div>

            <div className="my-2 ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Account Title
              </label>
              <input
                type="text"
                name="accountTitle"
                placeholder="Enter the account holder's name “ john Doe"
                // value={value.accountTitle}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
              />
            </div>

            <div className="my-2 ">
              <label className="text-colorSecondary font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                IBAN (International Bank Account Number)
              </label>
              <input
                type="text"
                name="ibnNumber"
                placeholder="Enter your IBAN"
                // value={value.ibnNumber}
                // onChange={handleChange}
                // onBlur={handleBlur}
                className="w-full mt-1 text-sm font-regular text-colorLightTertiary px-4 py-3 focus:outline-none  rounded-md border border-colorPrimary"
              />
            </div>
            <div className="border border-[#EDEDED]  w-full my-4" />
            <div className="flex flex-row  items-center justify-end gap-4">
              <button
                onClick={closePopup}
                // onClick={() => navigate("/payouts")}
                className=" w-[125px] h-[35px] bg-colorPrimary text-colorWhite font-semibold text-sm rounded"
              >
                Save Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payouts;
