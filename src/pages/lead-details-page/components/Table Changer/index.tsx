import { useState } from "react";
import DetailsIcon from "../../../../assets/icons/detailsIcon.svg";
import EducationIcon from "../../../../assets/icons/educationIcon.svg";
import EmploymentIcon from "../../../../assets/icons/employmentIcon.svg";
import ActiveDetailsIcon from "../../../../assets/icons/activeDetailsIcon.svg";
import ActiveEducationIcon from "../../../../assets/icons/activeEducationIcon.svg";
import ActiveEmploymentIcon from "../../../../assets/icons/activeEmploymentIcon.svg";

interface TableChangerProps {
  onChangeTable: (tables: string[]) => void;
}

const TableChanger: React.FC<TableChangerProps> = ({ onChangeTable }) => {
  const [activeTab, setActiveTab] = useState<"Icmal" | "Tam">("Icmal");
  const [activeOption, setActiveOption] = useState<string>("details");
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["details"]);

  const options = [
    {
      label: "Details",
      value: "details",
      icon: DetailsIcon,
      activeIcon: ActiveDetailsIcon,
    },
    {
      label: "Education Status",
      value: "education",
      icon: EducationIcon,
      activeIcon: ActiveEducationIcon,
    },
    {
      label: "Employment Status",
      value: "employment",
      icon: EmploymentIcon,
      activeIcon: ActiveEmploymentIcon,
    },
  ];

  const handleTabClick = (tab: "Icmal" | "Tam") => {
    setActiveTab(tab);
    if (tab === "Icmal") {
      const newSelection = ["details"];
      setActiveOption("details");
      setSelectedOptions(newSelection);
      onChangeTable(newSelection);
    } else {
      const defaultSelections = ["details"];
      setActiveOption("");
      setSelectedOptions(defaultSelections);
      onChangeTable(defaultSelections);
    }
  };

  const handleOptionClick = (option: { label: string; value: string }) => {
    if (activeTab === "Icmal") {
      if (activeOption !== option.value) {
        setActiveOption(option.value);
        const newSelection = [option.value];
        setSelectedOptions(newSelection);
        onChangeTable(newSelection);
      }
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
              : "bg-[#F4F7FD] text-[#5D7988] rounded-tr-[12px] rounded-br-[12px]"
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
            <img
              src={
                activeOption === option.value ? option.activeIcon : option.icon
              }
              alt={`${option.label} icon`}
              className="w-4 h-4"
            />
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableChanger;
