import { useState } from "react";

interface TableChangerProps {
  onChangeTable: (table: string) => void;
}

const TableChanger: React.FC<TableChangerProps> = ({ onChangeTable }) => {
  const [activeTab, setActiveTab] = useState<"Icmal" | "Tam">("Icmal");
  const [activeOption, setActiveOption] = useState<string>("contact");

  const options = [
    { label: "Contact Status", value: "contact" },
    { label: "Education Status", value: "education" },
    { label: "Employment Status", value: "employment" },
  ];

  const handleTabClick = (tab: "Icmal" | "Tam") => {
    setActiveTab(tab);
    if (tab === "Icmal") {
      onChangeTable("contact"); // Show contact table by default for Icmal
    } else {
      onChangeTable(""); // No table for Tam tab
    }
  };

  const handleOptionClick = (option: { label: string; value: string }) => {
    setActiveOption(option.value);
    // Show the corresponding table based on the selected option for Icmal tab
    if (activeTab === "Icmal" && option.value === "contact") {
      onChangeTable("contact"); // Show Contact Status table
    } else if (activeTab === "Icmal" && option.value === "education") {
      onChangeTable("education"); // Show Education Status table
    } else if (activeTab === "Icmal" && option.value === "employment") {
      onChangeTable("employment"); // Show Employment Status table
    } else {
      onChangeTable(""); // No table for other conditions
    }
  };

  return (
    <div className="border border-solid border-[#E9E9E9] rounded-[12px] flex gap-[12px]">
      {/* Tab selection: Icmal & Tam */}
      <div className="flex">
        <div
          className={`w-[72px] flex items-center justify-center h-[56px] text-[14px] px-[16px] py-[12px] cursor-pointer ${
            activeTab === "Icmal"
              ? "bg-[#22385F] text-white rounded-tl-[11px] rounded-bl-[11px]"
              : "bg-[#F4F7FD] text-[#22385F] rounded-tl-[12px] rounded-bl-[12px]"
          }`}
          onClick={() => handleTabClick("Icmal")}
        >
          Icmal
        </div>
        <div
          className={`w-[72px] flex items-center justify-center h-[56px] text-[14px] px-[16px] py-[12px] cursor-pointer ${
            activeTab === "Tam"
              ? "bg-[#22385F] text-white rounded-tr-[11px] rounded-br-[11px]"
              : "bg-[#F4F7FD] text-[#22385F] rounded-tl-[11px] rounded-bl-[11px]"
          }`}
          onClick={() => handleTabClick("Tam")}
        >
          Tam
        </div>
      </div>

      {/* Options selection */}
      <div className="flex items-center">
        {options.map((option) => (
          <div
            key={option.value}
            className={`py-[12px] px-[16px] text-[14px] font-[500] flex items-center gap-[8px] cursor-pointer ${
              activeTab === "Icmal" && activeOption === option.value
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
                  activeOption === option.value
                    ? "bg-[#22385F] border-[#22385F]"
                    : "bg-transparent border-[#BCBCBC]"
                }`}
              ></span>
            )}
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableChanger;
