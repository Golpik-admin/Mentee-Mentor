import React, { useState } from "react";
import UserHeader from "../../components/UserHeader";
import { BackSvg } from "../../assets/svgs/MentorProgramSvg";
import { useLocation, useNavigate } from "react-router-dom";
import {
  EmailSvg,
  LockSvg,
  PayoutSvg,
  ReportSvg,
} from "../../assets/svgs/AccountSettingSvg";
import ChangeEmail from "../../components/ChangeEmail";
import ChangePassword from "../../components/ChangePassword";
import ReportIssue from "../../components/ReportIssue";
import Payouts from "../../components/Payouts";
import PairUpRequest from "../../components/PairUpRequest";
import DeleteAccount from "../../components/DeleteAccount";
import Subscription from "../../components/Subscription";

const AccountSetting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || { userType: "mentee" };

  const hiddenComponentsForMentee = ["Subscription"];

  const filteredData = Data.filter(
    (item) =>
      !(hiddenComponentsForMentee.includes(item.name) && userType === "mentee")
  );

  const [activeTab, setActiveTab] = useState(filteredData[0]?.name);

  return (
    <div className=" w-full h-full flex flex-col min-h-screen overflow-auto bg-colorWhite">
      <UserHeader />
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="rounded-md border border-colorPrimary cursor-pointer flex justify-center gap-2 w-[92px] h-[42px] flex flex-row items-center"
        >
          <BackSvg />
          <p className="text-colorPrimary font-semibold text-sm">Back</p>
        </button>

        <p className="py-6 text-colorSecondary text-2xl font-bold">
          Account Settings
        </p>
        <div className="flex flex-row gap-4 w-[100%] ">
          <div className="w-[20%]  py-2 border shadow h-full shadow-[#F7F7F7] rounded-lg">
            {filteredData.map((item, i) => (
              <div>
                <div
                  onClick={() => setActiveTab(item.name)}
                  className={`flex px-4 py-4 flex-row items-center gap-2 cursor-pointer ${
                    activeTab === item.name ? "bg-[#F7F7F7]" : ""
                  }`}
                >
                  {item.svg}
                  <p className="text-colorSecondary text-md font-medium">
                    {item.name}
                  </p>
                </div>
                <div
                  className={` ${
                    item.name === "Pair Up Requests"
                      ? ""
                      : "border-b w-full border-[#D7D7D7]"
                  } `}
                />
              </div>
            ))}
          </div>

          <div className="w-[80%] border shadow h-full shadow-[#F7F7F7] rounded-lg">
            {filteredData.map((item, i) => (
              <div
                key={i}
                className={`${activeTab === item.name ? "block" : "hidden"}`}
              >
                {React.createElement(item.component.type, { userType })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;

const Data = [
  {
    name: "Change Email Address",
    svg: <EmailSvg />,
    component: <ChangeEmail />,
  },
  {
    name: "Change Password",
    svg: <LockSvg />,
    component: <ChangePassword />,
  },
  {
    name: "Payouts",
    svg: <PayoutSvg />,
    component: <Payouts />,
  },
  {
    name: "Subscription",
    svg: <PayoutSvg />,
    component: <Subscription />,
  },
  {
    name: "Report an issue",
    svg: <ReportSvg />,
    component: <ReportIssue />,
  },
  {
    name: "Delete Account",
    svg: <EmailSvg />,
    component: <DeleteAccount />,
  },
  {
    name: "Pair Up Requests",
    svg: <EmailSvg />,
    component: <PairUpRequest />,
  },
];
