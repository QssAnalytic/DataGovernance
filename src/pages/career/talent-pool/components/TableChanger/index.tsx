import { useState } from "react";

const TableChanger = () => {
    const options = ["Overview", "Education", "Job status"];
    const [activeTab, setActiveTab] = useState("Icmal");
    const [activeOptions, setActiveOptions] = useState<string[]>([options[0]]);


    const handleOptionClick = (option: string) => {
        if (activeTab === "Tam") {
            if (activeOptions.includes(option)) {
                setActiveOptions(activeOptions.filter((o) => o !== option));
            } else {
                setActiveOptions([...activeOptions, option]);
            }
        } else {
            setActiveOptions([option]);
        }
    };

    return (
        <div className="border border-solid border-[#E9E9E9] rounded-[12px] flex gap-[12px]">
            <div className="flex">
                <div
                    className={`w-[72px] flex items-center justify-center h-[56px] text-[14px] px-[16px] py-[12px] cursor-pointer duration-200 ${activeTab === "Icmal"
                            ? "bg-[#22385F] text-white rounded-tl-[11px] rounded-bl-[11px]"
                            : "bg-[#F4F7FD] text-[#22385F]"
                        }`}
                    onClick={() => {
                        setActiveTab("Icmal");
                        setActiveOptions([options[0]]); // Reset selection when switching tabs
                    }}
                >
                    Icmal
                </div>
                <div
                    className={`w-[72px] flex items-center justify-center h-[56px] text-[14px] px-[16px] py-[12px] cursor-pointer duration-200 ${activeTab === "Tam"
                            ? "bg-[#22385F] text-white rounded-tr-[11px] rounded-br-[11px]"
                            : "bg-[#F4F7FD] text-[#22385F]"
                        }`}
                    onClick={() => {
                        setActiveTab("Tam");
                        setActiveOptions([options[0]]); // Set the first option as selected by default
                    }}
                >
                    Tam
                </div>
            </div>

            <div className="flex items-center">
                {options.map((option) => (
                    <div
                        key={option}
                        className={`py-[12px] px-[16px] text-[14px] font-[600] flex items-center gap-[8px] cursor-pointer ${activeTab === "Icmal" && activeOptions.includes(option)
                                ? "text-[#22385F]"
                                : activeTab === "Icmal"
                                    ? "text-[#BCBCBC]"
                                    : activeOptions.includes(option)
                                        ? "text-[#22385F]"
                                        : "text-[#BCBCBC]"
                            }`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {activeTab === "Tam" && (
                            <span
                                className={`w-[16px] h-[16px] rounded-full border border-solid ${activeOptions.includes(option)
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
