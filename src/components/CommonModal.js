import React, { useEffect, useRef } from "react";
import { logoutAction } from "../actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CommonModal = ({ isOpen, closeModal, heading, text, btnText }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup listener
    };
  }, [isOpen, closeModal]);

  //   loadUserAction
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//       if (!isAuthenticated) {
//           navigate("/login");
//         }
//     }, [isAuthenticated, navigate]);
    
    const logoutUser = () => {
        dispatch(logoutAction());
        navigate("/login");
    };

    if (!isOpen) return null;

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex p-16 items-center justify-center">
          <div className="bg-colorWhite rounded-lg p-4  shadow-lg w-[20%] h-[175px]">
            <div className="">
              <div className="gap-1 flex items-center flex-col">
                <p className="text-xl font-bold text-colorSecondary">
                  {heading}
                </p>
                <div className="border w-full " />
                <p className="text-sm mt-3 font-semibold text-colorSecondary">
                  {/* Are you sure you want to logout? */}
                  {text}
                </p>
              </div>

              <div className="flex  mt-6 gap-6 justify-center">
                <button
                  onClick={closeModal}
                  className="items-center text-colorSecondary text-sm font-semibold px-6 p-2 border border-colorPrimary rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={logoutUser}
                  className=" items-center text-colorWhite bg-colorPrimary text-sm font-semibold px-6 p-2 rounded"
                >
                  {btnText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonModal;
