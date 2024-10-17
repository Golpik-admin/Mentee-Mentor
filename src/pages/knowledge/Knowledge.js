import React from "react";

const Knowledge = () => {
  return (
    <div className="w-full overflow-auto bg-colorWhite">
      <div className="md:px-16 lg:px-28 px-4 w-full py-0">
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="md:w-[60%] flex-col justify-center">
            <p className="colorSecondary text-4xl font-bold leading-tight">
              Connecting Mentors and
              <br />
              Mentees
            </p>
            <p className="text-[#322F37] text-sm mt-4 leading-loose font-regular">
              At the Knowledge Hub, you’ll find a vast collection of resources
              spanning diverse fields like Engineering, Finance,
              <br /> Language, Mathematics, Medicine, and Science. Whether
              you're a student eager to learn or a professional looking to
              <br />
              deepen your expertise, this platform offers the tools and insights
              to enhance your knowledge. Delve into expertly
              <br />
              curated topics, discover essential concepts, and stay ahead in
              your field with our easy-to-navigate sections.
              <br />
              Start exploring today!
            </p>
          </div>
          <div className="md:w-[40%] items-center flex justify-center">
            <img
              src={require("../../assets/images/mentormenteeconnect.png")}
              alt="Mentor and Mentee"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8 bg-[#F8F8FE] rounded-md md:px-8 py-12">
          <div className="md:w-[40%]">
            <img
              src={require("../../assets/images/finance.png")}
              alt="Finance"
            />
          </div>
          <div className="md:w-[60%] flex-col pt-4">
            <p className="colorSecondary text-4xl font-bold leading-tight">
              Finance – Managing Resources and <br /> Building Wealth
            </p>
            <p className="text-[#322F37] text-sm mt-4 leading-loose font-regular">
              Finance is more than just numbers; it’s the engine that drives
              businesses, governments, and personal growth.
              <br />
              Whether you’re managing your own savings or making million-dollar
              decisions for a company, finance provides
              <br /> the tools to understand money flow, investments, and risk
              management.
            </p>
            {FinanceData.map((item, i) => (
              <div
                key={i}
                className="flex pb-3 mt-3 flex-row items-center gap-2"
              >
                <div className="w-[20px] h-[20px] text-xs flex items-center justify-center bg-colorPrimary text-colorWhite rounded-full">
                  ✓
                </div>
                <p className="text-sm text-colorSecondary font-regular">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8 items-center">
          <div className="md:w-[60%] flex-col">
            <p className="colorSecondary text-4xl font-bold leading-tight">
              Language – Unlocking
              <br />
              Communication and Understanding
            </p>
            <p className="text-[#322F37] text-sm mt-4 leading-loose font-regular">
              Language is the key to connection, expression, and understanding
              across cultures.
              <br />
              Whether you're learning a new language or diving deep into
              linguistics, this subject
              <br />
              will open doors to new ways of thinking and communicating.
            </p>
            {CommunicationData.map((item, i) => (
              <div key={i} className="flex mt-4 flex-row items-center gap-2">
                <div className="w-[20px] h-[20px] text-xs flex items-center justify-center bg-colorPrimary text-colorWhite rounded-full">
                  ✓
                </div>
                <p className="text-xs text-colorSecondary font-regular">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="md:w-[40%] flex justify-center">
            <img
              src={require("../../assets/images/communication.png")}
              alt="Communication"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8 bg-[#F8F8FE] rounded-md md:px-8 py-12">
          <div className="md:w-[40%]">
            <img
              src={require("../../assets/images/engineering.png")}
              alt="Engineering"
            />
          </div>
          <div className="md:w-[60%] flex-col">
            <p className="colorSecondary text-4xl font-bold leading-tight">
              Engineering – Shaping the World
              <br />
              Around Us
            </p>
            <p className="text-[#322F37] text-sm mt-4 leading-loose font-regular">
              Engineering is the backbone of innovation. It’s all about creating
              solutions to real-world problems
              <br />
              through design, technology, and scientific principles. From
              bridges and buildings to cutting-edge
              <br />
              robotics and software, engineering affects every part of our
              lives.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8 items-center">
          <div className="md:w-[60%] flex-col">
            <p className="colorSecondary text-4xl font-bold leading-tight">
              Mathematics – The Foundation of
              <br />
              Logic and Problem-Solving
            </p>
            <p className="text-[#322F37] text-sm mt-4 leading-loose font-regular">
              Mathematics is the language of the universe. It provides the
              logical framework for everything
              <br />
              from basic problem-solving to advanced scientific research.
            </p>
          </div>
          <div className="md:w-[40%] flex justify-center">
            <img
              src={require("../../assets/images/mathematics.png")}
              alt="Mathematics"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8 bg-[#F8F8FE] rounded-md md:px-8 py-12">
          <div className="md:w-[40%]">
            <img
              src={require("../../assets/images/medicalhealth.png")}
              alt="Medical Health"
            />
          </div>
          <div className="md:w-[60%] flex-col pt-8">
            <p className="colorSecondary text-4xl font-bold leading-tight">
              Medicine – Advancing Health and
              <br />
              Well-Being
            </p>
            <p className="text-[#322F37] text-sm mt-4 leading-loose font-regular">
              Medicine is where science meets compassion. It’s a field dedicated
              to diagnosing, treating, and preventing
              <br />
              illness, improving the quality of life for people everywhere.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row mt-8 items-center">
          <div className="md:w-[60%] flex-col ">
          <p className="colorSecondary leading text-4xl font-bold leading-tight">
              Science – Exploring the Natural World
            </p>
            <p className="text-[#322F37] text-sm mt-4  leading-loose font-regular ">
              Science is the ultimate quest for knowledge, seeking to understand
              the world and universe we live in.
              <br />
              Whether you’re fascinated by the stars or curious about the
              smallest particles of matter, science offers
              <br />a path to discovery.
            </p>
            {ExploreSciencenData.map((item, i) => (
              <div className="flex  mt-4 flex-row items-center gap-2">
                <div className="w-[20px] h-[20px] text-xs flex items-center justify-center bg-colorPrimary text-colorWhite rounded-full">
                  ✓
                </div>
                <p className="text-xs text-colorSecondary font-regular">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="md:w-[40%] flex items-center justify-center">
            <img
              className="w-full h-full]"
              src={require("../../assets/images/exploringworld.png")}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8 items-center">
          <div className="md:w-[60%] flex-col pt-0">
            <p className="colorSecondary text-5xl font-bold leading-tight">
              Connecting Mentors <br /> and Mentees
            </p>
            <p className="text-[#322F37] text-xs mt-4 leading-loose font-regular">
              At the Knowledge Hub, you’ll find a vast collection of resources
              spanning diverse fields like Engineering, Finance, Language,
              Mathematics, Medicine, and Science.
            </p>
            <div className="flex items-center gap-4 pt-6">
              <button className="bg-colorPrimary text-colorWhite text-sm font-medium px-10 rounded py-3">
                Mentor
              </button>
              <button className="border border-colorPrimary text-colorPrimary text-sm font-medium px-10 rounded py-3">
                Mentee
              </button>
            </div>
          </div>
          <div className="md:w-[40%] items-center flex justify-center">
            <img
              className="w-full h-full"
              src={require("../../assets/images/connectingMentor.png")}
              alt="Connecting Mentors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;

const FinanceData = [
  {
    text: "Personal Finance: How to manage your money, savings, and investments.",
  },
  {
    text: "Corporate Finance: Understanding financial statements, balance sheets & profitability.",
  },
  {
    text: "Investments: Exploring stocks, bonds, and alternative assets to build wealth.",
  },
  {
    text: "Risk Management: Minimizing financial risks through smart decisions.",
  },
];

const CommunicationData = [
  {
    text: "Language Learning: Practical methods for mastering new languages.",
  },
  {
    text: "Linguistics: The science behind language structures and communication.",
  },
  {
    text: "Cultural Understanding: Breaking down barriers through language.",
  },
];

const ExploreSciencenData = [
  {
    text: "Language Learning: Practical methods for mastering new languages.",
  },
  {
    text: "Linguistics: The science behind language structures and communication.",
  },
  {
    text: "Translation: The art of conveying meaning across different languages.",
  },
  {
    text: "Cultural Insights: How language reflects the values and customs of societies.",
  },
];
