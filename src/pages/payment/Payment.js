import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { userType } = location.state || { userType: "mentee" };
  const navigate = useNavigate();

  return (
    <div className="w-full h-full overflow-auto bg-colorWhite">
      <div className="flex w-[100%]">
        <img
          className="w-[50%] h-screen bg-cover bg-center flex justify-center items-center"
          src={require("../../assets/images/paymentImg.png")}
        />
        <div className="w-[50%] h-screen items-center px-14 py-10 flex justify-center">
          <button
            onClick={() => navigate("/homepage", { state: { userType } })}
            type="button"
            className="w-full mt-10 h-14 flex items-center justify-center bgGradient text-colorWhite hover:text-colorWhite text-base sm:text-lg font-semibold rounded-lg cursor-pointer px-4"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
