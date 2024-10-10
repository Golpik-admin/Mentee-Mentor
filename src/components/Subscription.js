import React, { useState } from "react";
import {
  CardSvg,
  CreditCardSvg,
  ManuSvg,
} from "../assets/svgs/AccountSettingSvg";
import { CloseSvg } from "../assets/svgs/MentorSvg";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const [showCard, setShowCard] = useState(false);
  const [openModals, setOpenModals] = useState(false);
  const [openSubscriptionModals, setSubscriptionOpenModals] = useState(false);

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

  const openModal = () => {
    setSubscriptionOpenModals(true);
  };

  const closeModal = () => {
    setSubscriptionOpenModals(false);
  };

  const [value, setValue] = useState({
    bankName: "",
    accountTitle: "",
    ibnNumber: "",
  });

  return (
    <div className="p-6 ">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-colorSecondary text-2xl font-semibold">
            Subscription
          </p>
          <p className="text-colorSecondary text-sm mt-2 font-medium">
            Subscription Standard monthly subscription plan active since July
            16, 2021
          </p>
        </div>
        <button
          onClick={openModal}
          className="rounded-md  bg-colorPrimary text-colorWhite cursor-pointer items-center px-4 py-3"
        >
          Cancel Subscription
        </button>
      </div>

      <div className="mt-4 flex items-center gap-6">
        <div className="px-8 py-4 border shadow shadow-[#F7F7F7] rounded-md">
          <div className="flex flex-row justify-between gap-4">
            <div>
              <p className="text-colorSecondary text-lg font-semibold">
                Next Payment
              </p>

              <div className="flex mt-2 items-center gap-4">
                <p className="text-colorSecondary  text-lmdg font-semibold">
                  **** 6521
                </p>
              </div>

              <div className="flex flex-row items-center gap-4">
                <div className="flex flex-col ">
                  <p className="mt-2 text-colorSecondary text-sm font-semibold">
                    Plan type:
                  </p>
                  <p className="mt-1 text-colorSecondary text-sm font-semibold">
                    Next Invoice:
                  </p>
                </div>
                <div className="flex flex-col ">
                  <p className="mt-2 text-[#8A8394] text-sm font-regular">
                    Standard (monthly)
                  </p>
                  <p className="mt-1 text-[#8A8394] text-sm font-regular">
                    Aug 16, 2021
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#E8F7FF] w-[64px] h-[64px] rounded-full  flex justify-center items-center ">
              <CreditCardSvg />
            </div>
          </div>
        </div>

        <div className="px-8 py-4 border shadow shadow-[#F7F7F7] rounded-md">
          <div className="flex flex-row justify-between gap-4">
            <div>
              <p className="text-colorSecondary text-lg font-semibold">
                Payment method
              </p>
              <div className="flex mt-2 items-center gap-4">
                <CreditCardSvg />
                <p className="text-colorSecondary  text-lmdg font-semibold">
                  **** 6521
                </p>
              </div>

              <div className="flex flex-row items-center gap-4">
                <div className="flex flex-col ">
                  <p className="mt-2 text-colorSecondary text-sm font-semibold">
                    Account Title:
                  </p>
                  <p className="mt-1 text-colorSecondary text-sm font-semibold">
                    Bank Name:
                  </p>
                </div>
                <div className="flex flex-col ">
                  <p className="mt-2 text-[#8A8394] text-sm font-regular">
                    Jack Willson
                  </p>
                  <p className="mt-1 text-[#8A8394] text-sm font-regular">
                    Wells Fargo Bank
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
        Billing Details
      </p>
      <div className=" p-0  w-full mt-4 border shadow  shadow-[#F7F7F7] rounded-md">
        <div className="flex flex-col justify-between w-full ">
          <div className="flex flex-row items-center bg-[#F7F7F7] p-4 flex justify-between">
            <p className=" text-colorSecondary  text-center w-[25%] text-sm font-bold">
              Date
            </p>
            <p className=" text-colorSecondary  text-center w-[25%] text-sm font-bold">
              Payment Type
            </p>
            <p className=" text-colorSecondary  text-center w-[25%]  text-sm font-bold">
              Amount
            </p>
            <p className=" text-colorSecondary   text-center w-[25%] text-sm font-bold">
              Amount
            </p>
          </div>
          <div className="flex items-center flex-row p-2 pb-4  flex justify-between">
            <p className=" text-colorSecondary   text-center w-[25%] text-sm font-regular mt-4">
              Apr 16, 2021 at 09:01 PM
            </p>
            <p className=" text-colorSecondary  text-center  w-[25%] text-sm font-regular mt-4">
              Standard subcription (monthly)
            </p>
            <p className=" text-colorSecondary  text-center  w-[25%] text-sm font-regular mt-4">
              $30.00
            </p>
            <p className=" text-[#009CFF]  w-[25%] text-center text-sm font-regular mt-4">
              #00126
            </p>
          </div>
          {/* <div className="flex flex-col items-center">
          </div>
          <div className="flex flex-col items-center">
          </div> */}
        </div>
      </div>

      {openModals && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-colorWhite px-4 py-4 rounded-lg shadow-lg w-[50%]">
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

      {openSubscriptionModals && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-colorWhite px-4 py-4 rounded-lg shadow-lg w-[25%] ">
            <div
              className="cursor-pointer flex  justify-end "
              onClick={closeModal}
            >
              <CloseSvg />
            </div>

            <div className="flex flex-col pt-2 items-center justify-between">
              <p className="text-lg text-center font-bold text-colorSecondary">
                Are you sure you want to cancel your subscription?
              </p>

              <p className="text-xs text-center mt-2  font-light text-[#8A8394]">
                Your subscription will be ended this month on
                <br />
                20th November 2024
              </p>
            </div>

            <div className="flex flex-row pt-6 items-center justify-center gap-4">
              <button
                onClick={closeModal}
                className=" px-4 py-2 border border-colorPrimary text-colorPrimary font-semibold text-sm rounded"
              >
                Keep My Plan
              </button>
              <button
                // onClick={closeModal}
                onClick={() => navigate("/login")}
                className="px-4 py-2  bg-colorPrimary text-colorWhite font-semibold text-sm rounded"
              >
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
