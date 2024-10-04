import React, { useState } from "react";
import { Icon } from "@iconify/react";
// import { StarSvg } from "../../assets/svgs/HomeSvgs";
import { useNavigate } from "react-router-dom";
import {
  DeleteSvg,
  DotsSvg,
  EditSvg,
  StarSvg,
} from "../../../../assets/svgs/HomeSvgs";
import GiveRecommendation from "../../../../components/GiveRecommendation";

const Feedback = () => {
  const navigate = useNavigate();
  const [showComment, setShowComment] = useState(true);

  const initialComments = [
    {
      id: 1,
      name: "Devon Lane",
      date: "October 03, 2022",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      name: "Jane Doe",
      date: "October 04, 2022",
      text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    },
  ];

  const [comments, setComments] = useState(initialComments);
  const [visibleEditDelete, setVisibleEditDelete] = useState(null);
  const [openModals, setOpenModals] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleShowComment = () => {
    setShowComment((prev) => !prev);
  };

  const handleToggleMenu = (commentId) => {
    setVisibleEditDelete(visibleEditDelete === commentId ? null : commentId);
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };


  const openPopup = () => {
      setModalType('edit')
    setOpenModals(true);
  };

  const closePopup = () => {
    setOpenModals(false);
  };

  const handleEditModal = () => {
    setModalType("edit"); // Set modal type to edit
    openPopup();
  };

  return (
    <div className="w-full h-full overflow-auto bg-colorWhite">
      <p className="text-colorSecondary mt-4 font-semibold text-md">
        Mentee Feedback
      </p>
      <div className="border rounded-lg mt-4 shadow shadow-[#F7F7F7]  w-full h-full p-6 ">
        <div className="flex flex-row  gap-4">
          <div>
            <img
              src={require("../../../../assets/images/profile.png")}
              className="w-[40px] h-[40px]"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-row items-center gap-2">
                <p className="text-colorSecondary font-semibold text-sm">
                  Devon Lane
                </p>
                <p className="text-lg text-[#8A8394]">.</p>
                <p className="text-colorSecondary font-regular text-sm">
                  October 03, 2022
                </p>
              </div>
              <div
                onClick={handleShowComment}
                className=" text-[#6B7280] cursor-pointer"
              >
                <Icon
                  icon={
                    showComment
                      ? "clarity:eye-show-line"
                      : "clarity:eye-hide-line"
                  }
                  className="text-2xl"
                />
              </div>
            </div>
            <div
              className={`${
                showComment ? "visible" : "invisible"
              } transition-all`}
            >
              <StarSvg />
              <p className="text-colorSecondary w-[80%] mt-2 leading-loose font-medium text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4 flex flex-row  gap-4">
          <div>
            <img
              src={require("../../../../assets/images/profile.png")}
              className="w-[40px] h-[40px]"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-row items-center gap-2">
                <p className="text-colorSecondary font-semibold text-sm">
                  Devon Lane
                </p>
                <p className="text-lg text-[#8A8394]">.</p>
                <p className="text-colorSecondary font-regular text-sm">
                  October 04, 2022
                </p>
              </div>
              <div
                onClick={handleShowComment}
                className=" text-[#6B7280] cursor-pointer"
              >
                <Icon
                  icon={
                    showComment
                      ? "clarity:eye-show-line"
                      : "clarity:eye-hide-line"
                  }
                  className="text-2xl"
                />
              </div>
            </div>
            <div
              className={`${
                showComment ? "visible" : "invisible"
              } transition-all`}
            >
              <StarSvg />
              <p className="text-colorSecondary w-[80%] mt-2 leading-loose font-medium text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-colorSecondary mt-4 font-semibold text-md">
        Recommendation Given
      </p>
      <div className="border rounded-lg mt-4 shadow shadow-[#F7F7F7] w-full h-full p-6">

        {comments.map((comment) => (
          <div key={comment.id} className="pb-6">
            <div className="flex  justify-between  w-full flex-row gap-4">
              <div className="flex gap-4">
                <div>
                  <img
                    src={require("../../../../assets/images/profile.png")}
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <div className="w-full">
                  <div className="flex   flex-row items-center gap-2">
                    <p className="text-colorSecondary font-semibold text-sm">
                      {comment.name}
                    </p>
                    <p className="text-lg text-[#8A8394]">.</p>
                    <p className="text-colorSecondary font-regular text-sm">
                      {comment.date}
                    </p>
                  </div>

                  <div className="mt-2">
                    <StarSvg />
                    <p className="text-colorSecondary w-[80%] mt-2 leading-loose font-medium text-xs">
                      {comment.text}
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => handleToggleMenu(comment.id)}
                className="text-[#6B7280] flex flex-col cursor-pointer"
              >
                <div className="flex justify-end">
                  <DotsSvg />
                </div>

                <div
                  className={`${
                    visibleEditDelete === comment.id ? "visible" : "invisible"
                  } mt-2 transition-all`}
                >
                  <div className="shadow shadow-[#F7F7F7] rounded-lg gap-4 border bg-colorWhite flex  p-2 px-4 flex-col">
                    <button
                      onClick={handleEditModal} // Navigate to account settings on edit
                      className="flex gap-2 items-center flex-row text-colorSecondary text-sm font-medium "
                    >
                      <EditSvg />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteComment(comment.id)} // Delete comment
                      className="flex gap-2 items-center flex-row text-colorSecondary text-sm font-medium "
                    >
                      <DeleteSvg />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <GiveRecommendation modalType={modalType} closePopup={closePopup} isOpen={openModals} />
    </div>
  );
};

export default Feedback;
