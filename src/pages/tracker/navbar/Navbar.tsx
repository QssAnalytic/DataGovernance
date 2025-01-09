import { useState } from "react";
import { ParticipantList } from "../participant/ParticipantList";
import { TrainerHours } from "../Trainer/TrainerHours";
import { AttendanceSheet } from "../attendance/AttendanceSheet";
import { ExecutiveReport } from "../executiveReport/ExecutiveReport";
import { ParticipantSatisfaction } from "../participantSatisFaction/ParticipantSatisfaction";

export const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState("ParticipantList");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "ParticipantList":
        return <ParticipantList />;
      case "TrainerHours":
        return <TrainerHours />;
      case "AttendanceSheet":
        return <AttendanceSheet />;
      case "ExecutiveReport":
        return <ExecutiveReport />;
      case "ParticipantSatisfaction":
        return <ParticipantSatisfaction />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ul className="flex items-center h-[45px] gap-[20px] text-[#BCBCBC] border-b-[1px] border-[#ECECEC] p-[0px_379px_1px_40px]">
        <li
          className={`text-center font-[Montserrat] text-[16px] not-italic font-semibold leading-normal cursor-pointer ${activeComponent === "ParticipantList" ? "text-black" : ""
            }`}
          onClick={() => setActiveComponent("ParticipantList")}
        >
          Participant list
        </li>
        <li
          className={`text-center text-[16px] not-italic font-semibold leading-normal cursor-pointer ${activeComponent === "TrainerHours" ? "text-black" : ""
            }`}
          onClick={() => setActiveComponent("TrainerHours")}
        >
          Trainer hours
        </li>
        <li
          className={`text-center text-[16px] not-italic font-semibold leading-normal cursor-pointer ${activeComponent === "AttendanceSheet" ? "text-black" : ""
            }`}
          onClick={() => setActiveComponent("AttendanceSheet")}
        >
          Attendance sheet
        </li>
        <li
          className={`text-center text-[16px] not-italic font-semibold leading-normal cursor-pointer ${activeComponent === "ExecutiveReport" ? "text-black" : ""
            }`}
          onClick={() => setActiveComponent("ExecutiveReport")}
        >
          Executive report
        </li>
        <li
          className={`text-center text-[16px] not-italic font-semibold leading-normal cursor-pointer ${activeComponent === "ParticipantSatisfaction" ? "text-black" : ""
            }`}
          onClick={() => setActiveComponent("ParticipantSatisfaction")}
        >
          BC-Participant overall satisfaction
        </li>
      </ul>

      <div className="mt-4">{renderActiveComponent()}</div>
    </div>
  );
};
