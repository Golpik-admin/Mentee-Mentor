import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../elements/Spinner";
import { useSelector } from "react-redux";

const Faq = () => {
  const { loading } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const [selectBtn, setSelectBtn] = useState("Mentor");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  const mentorFaqData = [
    {
      question: "How do I sign up as a mentor?",
      answer:
        "Yes, you can try us for free for 30 days. We’ll provide you with a free, personalized 30-minute onboarding call.",
    },
    {
      question: "How do I prepare for my first meeting with a mentee?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      question: "What should I do if my mentee is not engaging?",
      answer:
        "Use the useState hook to add state to functional components and manage dynamic content.",
    },
    {
      question: "Can I mentor multiple mentees at the same time?",
      answer:
        "Props are used to pass data from one component to another. You can mentor multiple mentees by managing scheduling effectively.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing details for mentors can be found under the billing section of the platform.",
    },
    {
      question: "What communication tools are available on the platform?",
      answer:
        "The platform supports various communication tools like chat, video conferencing, and file sharing.",
    },
  ];

  const menteeFaqData = [
    {
      question: "How do I get the most out of my mentorship??",
      answer:
        "To find the right mentor, consider what you want to achieve from the mentorship. Look for someone whose skills, experience, and background align with your personal or professional goals. Our platform's matching system will also suggest mentors based on your profile",
    },
    {
      question: "What should I do if my mentor is unavailable?",
      answer:
        "You can browse through available mentors based on your interests and requirements.",
    },
    {
      question: "What should I do if I face challenges during the mentorship?",
      answer:
        "Your first meeting will focus on setting goals and establishing a working relationship with your mentor.",
    },
    {
      question: "Can I switch mentors if the match isn’t right?",
      answer:
        "Yes, you can engage with multiple mentors if needed, depending on your goals.",
    },
    {
      question: "How does billing work?",
      answer:
        "The platform provides tools for tracking progress and milestones through shared documents and progress updates.",
    },
    {
      question: "What communication tools are available on the platform?",
      answer:
        "Costs vary depending on the mentor. Some mentors may offer free services while others charge fees.",
    },
  ];

  const faqData = selectBtn === "Mentor" ? mentorFaqData : menteeFaqData;

  return (
    <div className="w-full overflow-auto bg-colorWhite ">
      <div className="items-center pt-8 flex justify-center flex-col">
        <p className="text-3xl px-8 text-colorPrimary font-bold ">
          Frequently Asked Questions
        </p>
        <p className="text-md text-colorPrimary font-regular mt-2">
          Got Questions? We’ve Got Answers!
        </p>

        <div className="bg-[#F5F5F5] mt-6 p-2 rounded-full ">
          <button
            onClick={() => setSelectBtn("Mentor")}
            className={`rounded-full ${
              selectBtn === "Mentor" ? "text-colorWhite" : "text-colorPrimary"
            } text-sm w-[132px] h-[40px] ${
              selectBtn === "Mentor" ? "bg-colorPrimary" : "bg-[#F5F5F5]"
            }`}
          >
            Mentor
          </button>

          <button
            onClick={() => setSelectBtn("Mentee")}
            className={`rounded-full  ${
              selectBtn === "Mentee" ? "text-colorWhite" : "text-colorPrimary"
            }  text-sm w-[132px] h-[40px] ${
              selectBtn === "Mentee" ? "bg-colorPrimary" : "bg-[#F5F5F5]"
            }`}
          >
            Mentee
          </button>
        </div>

        <div className="w-[90%] pt-8">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg border-[#EAEAEA] p-4 mb-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <p className="text-md font-semibold">{faq.question}</p>
                <span className="text-xl w-[25px] p-0 m-0 h-[25px] items-center flex justify-center border rounded-full border-colorSecondary">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="mt-2 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="flex-col gap-2 flex items-center pt-10 pb-8">
          <p className="text-2xl text-colorPrimary font-bold ">
            Still have a question?
          </p>
          <p className="text-colorSecondary text-center text-sm  font-regular">
            If you can't find an answer to your question in our FAQ, you can
            always contact us. <br /> We will answer you shortly.
          </p>
          <button
            onClick={() => navigate("/contactus")}
            type="submit"
            className="h-12 mt-1 bg-colorPrimary items-center text-colorWhite hover:text-colorWhite text-base sm:text-lg font-medium rounded-lg cursor-pointer px-8"
          >
            {loading ? (
              <Spinner rootClass="w-5 h-5 text-colorTertiary fill-colorPrimary" />
            ) : (
              "Contact Us"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
