import React, { useState, useEffect } from 'react';

interface MultiSelectProps {
    activeTab: string;
    setActiveSubTab: (tab: string) => void;
    handleTableSelect: (tables: string[]) => void;
}

export const MultiSelect = ({ activeTab, setActiveSubTab, handleTableSelect }: MultiSelectProps) => {
    const options = ["Overview", "Education", "Job status"];
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    useEffect(() => {
        // Reset selections when switching tabs
        if (activeTab === "Icmal") {
            setSelectedOptions([]);
        }
    }, [activeTab]);

    const handleOptionClick = (option: string) => {
        if (activeTab === "Tam") {
            // Toggle selection for Tam mode
            const newSelection = selectedOptions.includes(option)
                ? selectedOptions.filter(item => item !== option)
                : [...selectedOptions, option];
            
            setSelectedOptions(newSelection);
            handleTableSelect(newSelection.length > 0 ? newSelection : ["Overview"]);
        } else {
            // Single selection for Icmal mode
            setActiveSubTab(option);
            handleTableSelect([option]);
        }
    };

    return (
        <div className="flex items-center">
            {options.map((option) => (
                <div
                    key={option}
                    className={`py-[12px] px-[16px] text-[14px] font-[600] flex items-center gap-[8px] cursor-pointer ${
                        selectedOptions.includes(option) && activeTab === "Tam" 
                            ? "text-[#22385F]" 
                            : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                >
                    {activeTab === "Tam" && (
                        <span className={`w-[16px] h-[16px] rounded-full border border-solid ${
                            selectedOptions.includes(option) ? "bg-[#22385F]" : ""
                        }`}></span>
                    )}
                    {option}
                </div>
            ))}
        </div>
    );
}; 