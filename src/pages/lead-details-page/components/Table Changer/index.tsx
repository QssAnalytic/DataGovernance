import { useState } from "react";

const TableChanger = () => {
  const [activeTab, setActiveTab] = useState("Icmal");
  const [activeOption, setActiveOption] = useState("Contact Details");

  const options = ["Contact Details", "Education Status", "Employment Status"];

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div className="border border-solid border-[#E9E9E9] rounded-[12px] flex gap-[12px]">
      {/* Icmal & Tam part */}
      <div className="flex">
        <div
          className={`w-[72px] flex items-center justify-center h-[56px] text-[14px] px-[16px] py-[12px] cursor-pointer ${
            activeTab === "Icmal"
              ? "bg-[#22385F] text-white rounded-tl-[11px] rounded-bl-[11px]"
              : "bg-[#F4F7FD] text-[#22385F] rounded-tl-[12px] rounded-bl-[12px]"
          }`}
          onClick={() => setActiveTab("Icmal")}
        >
          Icmal
        </div>
        <div
          className={`w-[72px] flex items-center justify-center h-[56px] text-[14px] px-[16px] py-[12px] cursor-pointer ${
            activeTab === "Tam"
              ? "bg-[#22385F] text-white rounded-tr-[11px] rounded-br-[11px]"
              : "bg-[#F4F7FD] text-[#22385F] rounded-tl-[11px] rounded-bl-[11px]"
          }`}
          onClick={() => setActiveTab("Tam")}
        >
          Tam
        </div>
      </div>

      {/* Other 3 options part  */}

      <div className="flex items-center">
        {options.map((option) => (
          <div
            key={option}
            className={`py-[12px] px-[16px] text-[14px] font-[500] flex items-center gap-[8px] cursor-pointer ${
              activeTab === "Icmal" && activeOption === option
                ? "text-[#22385F]"
                : activeTab === "Icmal"
                ? "text-[#BCBCBC]"
                : "text-[#22385F]"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {activeTab === "Tam" && (
              <span
                className={`w-[16px] h-[16px] rounded-full border border-solid ${
                  activeOption === option
                    ? "bg-[#22385F] border-[#22385F]"
                    : "bg-transparent border-[#BCBCBC]"
                }`}
              ></span>
            )}
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableChanger;
