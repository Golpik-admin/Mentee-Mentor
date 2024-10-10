import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-full overflow-auto bg-colorWhite ">
      <div className="px-28 w-[100%]">
        <div className="flex pt-14">
          <div className="w-[60%] flex-col pt-10">
            <p className="colorSecondary leading text-5xl font-bold leading-tight">
              Empower Through <br /> Mentorship Connections
            </p>
            <p className="text-[#322F37] text-xs mt-4  leading-loose font-regular ">
              myMentorMentee helps you build and strengthen your human network
              through <br /> tailored mentorship programs. These programs are
              designed to foster genuine <br /> connections and facilitate
              personal growth, allowing you to enhance the skills, <br />{" "}
              culture, and capabilities of your team members quickly and
              effectively.
            </p>
          </div>
          <div className="w-[40%] items-center flex justify-center">
            <img
              className="w-[100%] h-[100%]"
              src={require("../../assets/images/working.png")}
            />
          </div>
        </div>
        <div className="flex pt-14">
          <div className="w-[60%]  flex-col pt-10">
            <p className="colorSecondary leading text-5xl font-bold leading-tight">
              How it works?
            </p>
            <p className="text-[#322F37] text-xs mt-4  leading-loose font-regular ">
              We make mentorship easy. Sign up, get matched with the right{" "}
              <br /> mentor or mentee, and start working towards your goals
              through our <br /> seamless platform. It’s that simple!
            </p>
          </div>
          <div className="w-[40%] items-center ">
            {Data.map((item, i) => (
              <div className="flex flex-col items-center">
                <div className="flex  items gap-4 pb-8">
                  <img className="w-[66px] h-[62px]" src={item.img} />
                  <div>
                    <p className="colorSecondary leading text-lg font-bold leading-tight">
                      {item.head}
                    </p>
                    <p className="text-[#322F37] pt-2 text-xs  leading-loose font-regular ">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex pt-14">
          <div className="w-[60%] flex-col pt-10">
            <p className="colorSecondary leading text-5xl font-bold leading-tight">
              Connecting Mentors <br /> and Mentees
            </p>
            <p className="text-[#322F37] text-xs mt-4  leading-loose font-regular ">
              myMentorMentee helps you strengthen your human network with
              scalable <br /> mentorship programs, and rapidly grow the skills,
              culture, and capabilities of your <br /> people.
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

export default HowItWorks;

const Data = [
  {
    head: "Create Your Profile",
    text: "Sign up as a mentor or mentee, detailing your expertise or goals, to help establish a productive connection from  the start.",
    img: require("../../assets/images/profileIcon.png"),
  },
  {
    head: "Search for the Perfect Mentor",
    text: "Once you've found potential mentors or mentees, our algorithm suggests the best fit based on common goals and interests, ensuring a meaningful connection for both.",
    img: require("../../assets/images/searchIcon.png"),
  },
  {
    head: "Connect and Engage",
    text: "Once a suitable mentor is found, users can connect through the platform’s messaging or scheduling tools.",
    img: require("../../assets/images/connectIcon.png"),
  },
];
