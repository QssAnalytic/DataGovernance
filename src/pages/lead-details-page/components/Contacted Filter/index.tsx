import { useState, useEffect, useRef } from "react";
import ChevronDown from "../../../../assets/icons/chevronDown.svg";
import CloseIcon from "../../../../assets/icons/closeIcon.svg";

const ContactedFilter = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<"Yes" | "No" | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: "Yes" | "No") => {
    setSelectedOption(option);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className="py-[12px] px-[16px]  flex items-center h-[100%] gap-[10px] border rounded-[12px] cursor-pointer"
      >
        <span className="text-[#969696]">Contacted</span>
        <img
          src={ChevronDown}
          alt="chevron down"
          className={`w-[16px] h-[16px] transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {isDropdownOpen && (
        <div className="absolute top-full w-[323px] right-0 mt-[8px] p-[20px] bg-white border rounded-[8px] shadow-md z-10">
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between items-center">
              <span className="font-[600] text-[#22385F]">Contact status</span>
              <img
                src={CloseIcon}
                alt="close"
                className="cursor-pointer"
                onClick={closeDropdown}
              />
            </div>

            <div className="flex flex-col gap-[16px]">
              {["Yes", "No"].map((option) => (
                <div
                  key={option}
                  onClick={() => handleOptionClick(option as "Yes" | "No")}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span className="text-[14px] text-[#22385F]">{option}</span>
                  <span
                    className={`w-[16px] h-[16px] rounded-full border-[1px] border-solid ${
                      selectedOption === option
                        ? "bg-[#22385F] border-[#22385F]"
                        : "bg-transparent border-[#22385F}"
                    }`}
                  ></span>
                </div>
              ))}
            </div>

            <button
              className="bg-[#22385F] text-white py-[12px] px-[16px] rounded-[12px]"
              onClick={closeDropdown} // Close the dropdown on button click
            >
              Göstər
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactedFilter;
