import React from "react";

const Knowledge = () => {
  return (
    <div className="w-full overflow-auto bg-colorWhite ">
      <div className="px-28 w-[100%] py-0">
        <div className="flex  gap-8 mt-8">
          <div className="w-[60%] flex-col  flex justify-center">
            <p className="colorSecondary leading text-4xl font-bold leading-tight">
              Connecting Mentors and
              <br />
              Mentees
            </p>
            <p className="text-[#322F37] text-sm mt-4  leading-loose font-regular ">
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
          <div className="w-[40%] items-center flex justify-center">
            <img
              //   className="w-[100%] h-[100%]"
              src={require("../../assets/images/mentormenteeconnect.png")}
            />
          </div>
        </div>
        <div className="flex gap-8 mt-8 bg-[#F8F8FE] rounded-md px-8 py-12">
          <div className="w-[40%]">
            <img
              // className="w-[100%] h-[100%]"
              src={require("../../assets/images/finance.png")}
            />
          </div>
          <div className="w-[60%] flex-col pt-4">
            <p className="colorSecondary leading text-4xl font-bold leading-tight">
              Finance – Managing Resources and <br /> Building Wealth
            </p>
            <p className="text-[#322F37] text-sm mt-4  leading-loose font-regular ">
              Finance is more than just numbers; it’s the engine that drives
              businesses, governments, and personal growth.
              <br />
              Whether you’re managing your own savings or making million-dollar
              decisions for a company, finance provides
              <br /> the tools to understand money flow, investments, and risk
              management.
            </p>
            {FinanceData.map((item, i) => (
              <div className="flex pb-3 mt-3 flex-row items-center gap-2">
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
        <div className="flex gap-8 mt-8 items-center">
          <div className="w-[60%] flex-col">
            <p className="colorSecondary leading text-4xl font-bold leading-tight">
              Language – Unlocking
              <br />
              Communication and Understanding
            </p>
            <p className="text-[#322F37] text-sm mt-4  leading-loose font-regular ">
              Language is the key to connection, expression, and understanding
              across cultures.
              <br />
              Whether you're learning a new language or diving deep into
              linguistics, this subject
              <br />
              will open doors to new ways of thinking and communicating.
            </p>
            {CommunicationData.map((item, i) => (
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
          <div className="w-[40%] flex justify-center">
            <img
              // className="w-[100%] h-[100%]"
              src={require("../../assets/images/communication.png")}
            />
          </div>
        </div>
        <div className="flex gap-8 mt-8 bg-[#F8F8FE] rounded-md px-8 py-12">
          <div className="w-[40%]">
            <img
              // className="w-[100%] h-[100%]"
              src={require("../../assets/images/engineering.png")}
            />
          </div>
          <div className="w-[60%] flex-col">
            <p className="colorSecondary leading text-4xl font-bold leading-tight">
              Engineering – Shaping the World
              <br />
              Around Us
            </p>
            <p className="text-[#322F37] text-sm mt-4  leading-loose font-regular ">
              Engineering is the backbone of innovation. It’s all about creating
              solutions to real-world problems
              <br />
              through design, technology, and scientific principles. From
              bridges and buildings to cutting-edge
              <br />
              robotics and software, engineering affects every part of our
              lives. In this section, we’ll explore various
              <br />
              branches of engineering, like civil, mechanical, electrical, and
              software engineering. You'll discover how
              <br />
              these fields come together to shape the future, drive progress,
              and solve the biggest challenges
              <br />
              facing society today.
            </p>
          </div>
        </div>
        <div className="flex gap-8 mt-8 items-center">
          <div className="w-[60%] flex-col">
            <p className="colorSecondary leading text-4xl font-bold leading-tight">
              Mathematics – The Foundation of
              <br />
              Logic and Problem-Solving
            </p>
            <p className="text-[#322F37] text-sm mt-4  leading-loose font-regular ">
              Mathematics is the language of the universe. It provides the
              logical framework for everything
              <br />
              from basic problem-solving to advanced scientific research. In
              this section, you’ll explore the
              <br />
              beauty of numbers, shapes, and patterns, and see how math is used
              in engineering, economics,
              <br />
              science, and even art. Whether it’s algebra, geometry, calculus,
              or statistics, math gives you
              <br />
              the tools to make sense of the world around you and solve
              real-world problems with precision.
            </p>
          </div>
          <div className="w-[40%] flex justify-center">
            <img
              // className="w-[100%] h-[100%]"
              src={require("../../assets/images/mathematics.png")}
            />
          </div>
        </div>
        <div className="flex gap-8 mt-8 bg-[#F8F8FE] rounded-md px-8 py-12">
          <div className="w-[40%]">
            <img
              // className="w-[440px] h-[390px]"
              src={require("../../assets/images/medicalhealth.png")}
            />
          </div>
          <div className="w-[60%] flex-col pt-8">
            <p className="colorSecondary leading text-4xl font-bold leading-tight">
              Medicine – Advancing Health and
              <br />
              Well-Being
            </p>
            <p className="text-[#322F37] text-sm mt-4  leading-loose font-regular ">
              Medicine is where science meets compassion. It’s a field dedicated
              to diagnosing, treating, and preventing
              <br />
              illness, improving the quality of life for people everywhere.
              Whether you're interested in how the human body functions or how
              medical professionals develop treatments for complex diseases,
              this section will take you through the fundamentals of human
              biology, pharmacology, and healthcare innovations. You’ll also
              learn about various medical specialties and the latest
              advancements in healthcare technology.
            </p>
          </div>
        </div>
        <div className="flex gap-8 mt-8 items-center">
          <div className="w-[60%] flex-col">
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
          <div className="w-[40%] flex justify-center">
            <img
              // className="w-[100%] h-[100%]"
              src={require("../../assets/images/exploringworld.png")}
            />
          </div>
        </div>
        <div className="flex gap-8 mt-8 items-center">
          <div className="w-[60%] flex-col pt-0">
            <p className="colorSecondary leading text-5xl font-bold leading-tight">
              Connecting Mentors <br /> and Mentees
            </p>
            <p className="text-[#322F37] text-xs mt-4  leading-loose font-regular ">
              At the Knowledge Hub, you’ll find a vast collection of resources
              spanning diverse fields like Engineering, Finance, Language,
              <br />
              Mathematics, Medicine, and Science. Whether you're a student eager
              to learn or a professional looking to deepen your expertise,
              <br />
              this platform offers the tools and insights to enhance your
              knowledge. Delve into expertly curated topics, discover essential
              <br />
              concepts, and stay ahead in your field with our easy-to-navigate
              sections. Start exploring today!
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
          <div className="w-[40%] items-center flex justify-center">
            <img
              className="w-[100%] h-[100%]"
              src={require("../../assets/images/connectingMentor.png")}
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
    text: "Translation: The art of conveying meaning across different languages.",
  },
  {
    text: "Cultural Insights: How language reflects the values and customs of societies.",
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
