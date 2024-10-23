import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

const Notifications = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null); // Reference for detecting clicks outside

  // Open and close modal functions
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Allow the parent component to trigger open and close
  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  // Close the modal when clicking outside of the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal(); // Close modal when clicking outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 px-4 pt-14 flex  justify-end">
          <div
            ref={modalRef}
            className="p-4 bg-colorWhite rounded-xl h-1/2 shadow-lg w-[30%]"
          >
            <div className="flex items-center justify-between">
              <p className="text-colorSecondary text-lg font-bold">
                Notifications
              </p>
              <a className="cursor-pointer text-colorSecondary text-md border-b border-colorLightTertiary font-regular">
                Mark all read
              </a>
            </div>

            <div className="flex justify-between items-center pb-1 pt-2 gap-6 ">
              <a
                onClick={() => setActiveTab("all")}
                className={`text-lg font-medium cursor-pointer ${
                  activeTab === "all"
                    ? "text-colorPrimary font-semibold border-b-2 border-colorPrimary"
                    : "text-[#8A8394]"
                }`}
              >
                All
              </a>
              <a
                onClick={() => setActiveTab("pair")}
                className={`text-lg font-medium cursor-pointer ${
                  activeTab === "pair"
                    ? "text-colorPrimary font-semibold border-b-2 border-colorPrimary"
                    : "text-[#8A8394]"
                }`}
              >
                Pair Up Requests
              </a>
            </div>

            {activeTab === "all" && (
              <div className="flex items-center pt-4 gap-2">
                <img
                  className="w-[40px] h-[40px]"
                  src={require("../assets/images/ellipse.png")}
                  alt="Notification"
                />
                <div className="flex flex-col">
                  <p className="text-colorSecondary text-md font-semibold">
                    One New Assignment by Jack Willson
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-colorSecondary text-sm font-regular">
                      Course Name
                    </p>
                    <p className="text-colorSecondary text-sm font-regular">
                      Mar 4
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "pair" && (
              <div className="flex pt-4 gap-2">
                <img
                  className="w-[40px] h-[40px]"
                  src={require("../assets/images/ellipse.png")}
                  alt="Notification"
                />
                <div className="flex flex-col">
                  <p className="text-colorSecondary text-sm font-semibold">
                    One New Assignment by Jack Willson
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-colorSecondary text-sm font-regular">
                      Course Name
                    </p>
                    <p className="text-colorSecondary text-sm font-regular">
                      Mar 4
                    </p>
                  </div>
                  <div className="flex items-center pt-3 gap-2">
                    <button className="py-2 rounded-lg px-4 bg-colorPrimary text-colorWhite text-sm font-medium">
                      Accept
                    </button>
                    <button className="py-2 px-4 rounded-lg bg-[#DF4C4C] text-colorWhite text-sm font-medium">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
});

export default Notifications;
