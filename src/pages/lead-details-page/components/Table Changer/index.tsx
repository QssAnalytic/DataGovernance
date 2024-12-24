import { useState } from "react";

interface TableChangerProps {
  onChangeTable: (tables: string[]) => void;
}

const TableChanger: React.FC<TableChangerProps> = ({ onChangeTable }) => {
  const [activeTab, setActiveTab] = useState<"Icmal" | "Tam">("Icmal");
  const [activeOption, setActiveOption] = useState<string>("contact");
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["contact"]);

  const options = [
    { label: "Contact Status", value: "contact" },
    { label: "Education Status", value: "education" },
    { label: "Employment Status", value: "employment" },
  ];

  const handleTabClick = (tab: "Icmal" | "Tam") => {
    setActiveTab(tab);
    if (tab === "Icmal") {
      const newSelection = ["contact"];
      setActiveOption("contact");
      setSelectedOptions(newSelection);
      onChangeTable(newSelection);
    } else {
      const defaultSelections = ["contact"];
      setActiveOption("");
      setSelectedOptions(defaultSelections);
      onChangeTable(defaultSelections);
    }
  };

  const handleOptionClick = (option: { label: string; value: string }) => {
    if (activeTab === "Icmal") {
      setActiveOption(option.value);
      onChangeTable([option.value]);
    } else {
      const updatedSelections = selectedOptions.includes(option.value)
        ? selectedOptions.length > 1
          ? selectedOptions.filter((item) => item !== option.value)
          : selectedOptions
        : [...selectedOptions, option.value];

      setSelectedOptions(updatedSelections);
      onChangeTable(updatedSelections);
    }
  };

  return (
    <div className="border border-solid border-[#E9E9E9] rounded-[12px] flex gap-[12px]">
      <div className="flex">
        <div
          className={`w-[72px] flex items-center justify-center h-[56px] text-[14px] px-[16px] py-[12px] cursor-pointer ${
            activeTab === "Icmal"
              ? "bg-[#5D7988] text-white rounded-tl-[11px] rounded-bl-[11px]"
              : "bg-[#F4F7FD] text-[#5D7988] rounded-tl-[12px] rounded-bl-[12px]"
          }`}
          onClick={() => handleTabClick("Icmal")}
        >
          Icmal
        </div>
        <div
          className={`w-[72px] flex items-center justify-center h-[56px] text-[14px] px-[16px] py-[12px] cursor-pointer ${
            activeTab === "Tam"
              ? "bg-[#5D7988] text-white rounded-tr-[11px] rounded-br-[11px]"
              : "bg-[#F4F7FD] text-[#5D7988] rounded-tr-[11px] rounded-br-[11px]"
          }`}
          onClick={() => handleTabClick("Tam")}
        >
          Tam
        </div>
      </div>

      <div className="flex items-center">
        {options.map((option) => (
          <div
            key={option.value}
            className={`py-[12px] px-[16px] text-[14px] font-[500] flex items-center gap-[8px] cursor-pointer ${
              activeTab === "Icmal" && activeOption === option.value
                ? "text-[#5D7988]"
                : activeTab === "Icmal"
                ? "text-[#BCBCBC]"
                : "text-[#5D7988]"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {activeTab === "Tam" && (
              <span
                className={`w-[16px] h-[16px] rounded-full border border-solid ${
                  selectedOptions.includes(option.value)
                    ? "bg-[#5D7988] border-[#5D7988]"
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
