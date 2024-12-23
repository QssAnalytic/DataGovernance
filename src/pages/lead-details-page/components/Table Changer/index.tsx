import { useState } from "react";

interface TableChangerProps {
  onChangeTable: (tables: string | string[]) => void;
}

const TableChanger: React.FC<TableChangerProps> = ({ onChangeTable }) => {
  const [activeTab, setActiveTab] = useState<"Icmal" | "Tam">("Icmal");
  const [activeOption, setActiveOption] = useState<string>("contact");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options = [
    { label: "Contact Status", value: "contact" },
    { label: "Education Status", value: "education" },
    { label: "Employment Status", value: "employment" },
  ];

  const handleTabClick = (tab: "Icmal" | "Tam") => {
    setActiveTab(tab);

    if (tab === "Icmal") {
      setActiveOption("contact");
      setSelectedOptions([]); // Clear Tam selections
      onChangeTable("contact"); // Default to showing contact table for Icmal
    } else {
      // Default to Contact and Education tables for Tam
      const defaultSelections = ["contact", "education"];
      setActiveOption(""); // Clear single option
      setSelectedOptions(defaultSelections);
      onChangeTable(defaultSelections); // Show default combined tables
    }
  };

  const handleOptionClick = (option: { label: string; value: string }) => {
    if (activeTab === "Icmal") {
      setActiveOption(option.value);
      onChangeTable(option.value); // Show the single selected table
    } else if (activeTab === "Tam") {
      // Toggle the option for multi-selection
      const updatedSelections = selectedOptions.includes(option.value)
        ? selectedOptions.filter((item) => item !== option.value)
        : [...selectedOptions, option.value];
      setSelectedOptions(updatedSelections);

      // Combine the selected tables
      onChangeTable(updatedSelections); // Pass updated selections to parent
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
              : "bg-[#F4F7FD] text-[#22385F] rounded-tr-[11px] rounded-br-[11px]"
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
                  selectedOptions.includes(option.value)
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
