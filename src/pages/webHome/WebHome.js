import React, { useRef, useState } from "react";
import bannerbg from "../../assets/images/bannerbg.png";
import {
  ChevLeft,
  ChevRight,
  StarSvg,
  Welcome,
} from "../../assets/svgs/HomeSvgs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const WebHome = () => {
  const [activeButton, setActiveButton] = useState(0);
  const swiperRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    if (rotation === 0) {
      setRotation(-100);
    } else if (rotation === -100) {
      setRotation(-200);
    } else {
      setRotation(0);
    }
  };
  // const getRotationClass = () => {
  //   switch (clickCount) {
  //     case 0:
  //       return "rotate-original"; // Original position
  //     case 1:
  //       return "rotate-left-25"; // Rotate left 25 degrees
  //     case 2:
  //       return "rotate-left-25"; // Rotate left 50 degrees
  //     default:
  //       return "rotate-original"; // Fallback
  //   }
  // };

  return (
    <div className="w-full overflow-auto bg-colorWhite ">
      {/* banner  */}
      <div
        className="w-full h-[550px] sm:h-[600px] lg:h-[678px] flex flex-col md:flex-row justify-center py-4 px-6 sm:px-10 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bannerbg})` }}
      >
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h1 className="text-colorWhite text-3xl sm:text-4xl lg:text-5xl font-bold">
            Companionship with Knowledge
          </h1>
          <p className="text-colorWhite text-xs sm:text-sm lg:text-base leading-loose pt-6 sm:pt-10">
            Vitae integer pellentesque platea ipsum tristique turpis eros, ante
            sollicitudin. Ut sed eleifend duis morbi. Turpis id in nam aliquam
            amet, duis sed volutpat sit ipsum facilisis. Mauris id fusce lectus
            justo
          </p>

          <div className="flex flex-row pt-4 items-center space-x-4">
            <a className="p-2 px-6 text-colorPrimary text-center cursor-pointer bg-colorWhite rounded-md">
              Mentor
            </a>
            <a className="text-colorWhite p-2 px-6 rounded-md border border-colorWhite cursor-pointer">
              Mentee
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
          <img
            src={require("../../assets/images/bannerStar.png")}
            alt="Description"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 1s ease", // Smooth transition
            }}
            className="w-2/3 sm:w-1/2 lg:w-3/4 h-auto cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>

      {/* Welcome to menteeMentor */}

      <div className="pt-12 pb-20 bg-[#F5F5F5] px-10 ">
        <div className="bg-colorWhite p-4 shadow-sm w-full flex flex-col justify-between h-[455px] sm:h-[615px] items-center rounded-lg">
          <div className="relative mx-auto  ">
            <div className="relative  bg-colorWhite z-20 shadow-lg p-4 w-[100%] border sm:w-[423px] h-[138px]  items-center rounded">
              <div className="flex justify-center">
                <Welcome />
              </div>
              <p className="text-colorSecondary text-center pt-2 text-base font-medium">
                Welcome to MentorMentee!
              </p>
              <p className="tex-colorTertiary pt-2 text-center  text-xs font-regular">
                Real companionship based guidance. Let's connect and grow to
                succeed together !
              </p>
            </div>

            <div className="absolute top-[65px]  z-10">
              <img
                alt="Star"
                className="w-[550px] h-auto continuous-jump-rotate"
                src={require("../../assets/images/bannerStar.png")}
              />
            </div>

            <div className="absolute  z-0">
              <img
                alt="StarShadow"
                className="w-[480px] h-auto"
                src={require("../../assets/images/starShadow.png")}
              />
            </div>
          </div>

          <div className=" flex flex-row px-6 justify-center w-full pt-4 items-center gap-12 ">
            <a className="font-bold text-xs  py-2.5 px-7 text-colorWhite text-center  cursor-pointer bg-colorPrimary  rounded-md">
              Mentor
            </a>
            <a className=" py-2.5 px-7 font-bold text-xs text-colorWhite text-center  cursor-pointer bg-colorPrimary  rounded-md">
              Mentee
            </a>
          </div>
        </div>

        {/* Mentorship programs */}

        <div className="items-center flex justify-center flex-col pt-10">
          <p className="tex-colorSecondary text-center text-3xl font-bold">
            Mentorship Programs
          </p>
          <div className="w-[100%] sm:w-[30%] items-center">
            <p className="tex-colorLightTertiary pt-2 text-center leading-loose text-base font-regular">
              Elit quam cras sollicitudin ridiculus commodo a eget. Quisque
              magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
            </p>
          </div>
          <div className="p-4 mt-6 bg-colorWhite rounded-full flex flex flex-wrap justify-center items-center space-x-2">
            {buttonLabels.map((label, index) => (
              <button
                key={label}
                onClick={() => setActiveButton(index)}
                className={`text-sm font-bold p-2 rounded-full transition-colors ${
                  activeButton === index
                    ? "bg-colorPrimary text-colorWhite"
                    : "text-colorLightTertiary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {boxesData[buttonLabels[activeButton]].map((box, i) => (
              <div
                key={i}
                className="h-[376px] w-[286px] bg-colorWhite p-2 rounded shadow"
              >
                <div className="flex justify-center">
                  <img
                    src={require("../../assets/images/one.png")}
                    alt="Description"
                    className="w-[272px] h-[145px]"
                  />
                </div>
                <p className="text-colorSecondary pt-3 text-sm font-bold">
                  {box.name}
                </p>
                <div className="flex items-center mt-3">
                  {Array.from({ length: box.rating }).map((_, starIndex) => (
                    <StarSvg key={starIndex} />
                  ))}
                  <p className="text-colorSecondary text-xs pl-1 font-bold">
                    ({box.rating})
                  </p>
                </div>
                <div className="border-b border-gray-300 my-3" />
                <div className="flex justify-center items-center bg-[#5BB6D2] bg-opacity-10 rounded-sm w-[84px] h-[34px]">
                  <p className="text-colorPrimary text-xs font-bold">
                    {buttonLabels[activeButton]}
                  </p>
                </div>
                <p className="text-colorLightTertiary pt-3 text-xs font-regular">
                  Elit quam cras sollicitudin ridiculus commodo a eget. Quisque
                  magna tempus urna lectus. Nec tortor, vehicula nunc...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet our mentor */}
      <div className="py-16 bg-colorPrimary px-10 items-center flex justify-center flex-col">
        <h1 className="text-colorWhite text-4xl text-center font-bold">
          Meet Our Mentor{" "}
        </h1>
        <p className="text-colorLightTertiary text-xs text-center font-regular pt-3">
          Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna{" "}
          <br />
          tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
        </p>
        <img
          src={require("../../assets/images/mentors.png")}
          alt="Description"
          className="pt-10 "
          // className="w-2/3 md:w-3/4 lg:w-3/4 h-auto"
        />
      </div>

      {/* Mentee say about us*/}

      <div className="py-16 bg-[#F5F5F5]">
        <div className="sm:flex flex-row w-full  hidden sm:block">
          {/* Heading */}
          <div className="w-[40%] pl-10 hidden sm:block">
            <p className="text-colorBlack text-5xl font-bold">
              What our Mentees
              <br />
              say about us
            </p>
            <div className=" mt-4">
              <p className="leading-loose text-colorLightTertiary  text-xs font-regular">
                Elit quam cras sollicitudin ridiculus commodo a eget. Quisque
                <br />
                magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
                <br />
                Nunc urna, vitae sit sapien diam diam cursus. Cras tempus
                venenatis
                <br />
                consequat.
              </p>
            </div>
            <div className="hidden sm:flex flex-row gap-4 pt-6 mx-auto">
              <div>
                <a
                  className="bg-colorWhite w-[80px] h-[80px] flex justify-center items-center rounded-full cursor-pointer"
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                  <ChevLeft />
                </a>
              </div>
              <div>
                <a
                  className="bg-colorPrimary w-[80px] h-[80px] flex justify-center items-center rounded-full cursor-pointer"
                  onClick={() => swiperRef.current.swiper.slideNext()}
                >
                  <ChevRight />
                </a>
              </div>
            </div>
          </div>

          {/* Swiper Container - visible on larger screens */}
          <div className="w-[60%]  flex flex-row">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={2.2}
              navigation={false}
            >
              {Data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="w-[336px] h-[369px]  p-4 bg-colorWhite rounded flex flex-col">
                    <img src={item.img} alt="Description" className="mx-auto" />
                    <p className="text-colorSecondary leading-loose text-sm font-regular pt-5">
                      {item.text}
                    </p>
                    <div className="border-b border-gray-300 my-4" />
                    <h1 className="text-colorSecondary text-sm font-bold">
                      {item.name}
                    </h1>
                    <p className="text-colorLightTertiary pt-2 text-xs font-medium">
                      {item.head}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Buttons - hidden on small screens */}
        </div>

        {/* Content for small screens */}
        <div className="flex flex-col w-full sm:hidden px-8">
          <div className="">
            <p className="text-colorBlack text-3xl sm:text-5xl font-bold text-center">
              What our Mentees say about us
            </p>
            <p className="leading-loose mt-4 text-colorLightTertiary text-center  text-base font-regular">
              Elit quam cras sollicitudin ridiculus commodo a eget. Quisque
              magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
              Nunc urna, vitae sit sapien diam diam cursus. Cras tempus
              venenatis consequat.
            </p>
          </div>
          <div className="w-full mt-6">
            {Data.map((item, i) => (
              <div
                key={i}
                className="w-full mb-4 p-4 bg-colorWhite rounded flex flex-col"
              >
                <img src={item.img} alt="Description" className="mx-auto" />
                <p className="text-colorSecondary leading-loose text-base font-regular pt-5">
                  {item.text}
                </p>
                <div className="border-b border-gray-300 my-4" />
                <h1 className="text-colorSecondary text-lg font-bold">
                  {item.name}
                </h1>
                <p className="text-colorLightTertiary pt-2 text-base font-medium">
                  {item.head}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebHome;

const buttonLabels = [
  "Engineering",
  "Finance",
  "Language",
  "Mathematics",
  "Medicine",
  "Science",
];

const boxesData = {
  Engineering: Array(8).fill({
    name: "Adriana Key",
    rating: 7,
  }),
  Finance: Array(8).fill({
    name: "John Doe",
    rating: 5,
  }),
  Language: Array(8).fill({
    name: "Maria Smith",
    rating: 4,
  }),
  Mathematics: Array(8).fill({
    name: "Alex Johnson",
    rating: 6,
  }),
  Medicine: Array(8).fill({
    name: "Rachel Green",
    rating: 8,
  }),
  Science: Array(8).fill({
    name: "Ross Geller",
    rating: 9,
  }),
};

const Data = [
  {
    img: require("../../assets/images/ellipse.png"),
    text: "Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.",
    name: "Frederica Koen",
    head: "Strength & Conditioning Mastery",
  },
  {
    img: require("../../assets/images/ellipse.png"),
    text: "Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.",
    name: "Frederica Koen",
    head: "Strength & Conditioning Mastery",
  },
  {
    img: require("../../assets/images/ellipse.png"),
    text: "Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.",
    name: "Frederica Koen",
    head: "Strength & Conditioning Mastery",
  },
  {
    img: require("../../assets/images/ellipse.png"),
    text: "Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.",
    name: "Frederica Koen",
    head: "Strength & Conditioning Mastery",
  },
  {
    img: require("../../assets/images/ellipse.png"),
    text: "Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.",
    name: "Frederica Koen",
    head: "Strength & Conditioning Mastery",
  },
];
