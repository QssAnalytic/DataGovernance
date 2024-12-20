import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/pages/app-data/components/uiSelect";
import React, { useState } from "react";
import { DatePickerWithRange } from "../CustomRange";
import { DateRange } from "react-day-picker";
import { LuCalendar1 } from "react-icons/lu";


const DateFilter: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<string>("today");
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [customRangeLabel, setCustomRangeLabel] = useState<string | null>(null); // To display custom range label

  const dateRanges = [
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
    { value: "last7days", label: "Last 7 Days" },
    { value: "last30days", label: "Last 30 Days" },
    { value: "thismonth", label: "This Month" },
    { value: "lastmonth", label: "Last Month" },
    { value: "custom", label: "Custom Range" },
  ];

  const handleRangeChange = (value: string) => {
    setSelectedRange(value);
    setCustomRangeLabel(null); // Reset custom range label if a predefined range is selected
    setIsCustomOpen(value === "custom"); // Open modal only for custom range
  };

  const onCustomDateSelect = (dateRange: DateRange | undefined) => {
    if (dateRange) {
      const formattedRange = `${dateRange.from?.toLocaleDateString("en-GB")} - ${dateRange.to?.toLocaleDateString("en-GB")}`;
      setCustomRangeLabel(formattedRange); // Save the formatted custom range label
      setSelectedRange("custom"); // Ensure "custom" value is still selected
    }
  };

  

  return (
    <div className="max-w-md mx-auto relative z-50">
      <div className="flex justify-center" >
        <Select value={selectedRange}  onValueChange={handleRangeChange}>

          <SelectTrigger className="w-[280px] h-[46px] border-[1px] border-[#22385F] focus:outline-none focus:ring-0 ">
      <LuCalendar1 className="text-[#22385F]  text-[20px]" />

            <SelectValue  placeholder="Select a range">
                  {customRangeLabel || dateRanges.find((range) => range.value === selectedRange)?.label || "Select"}
               </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {dateRanges.map((range) => (
              <SelectItem key={range.value} className="text-[#22385F]" value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {isCustomOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <DatePickerWithRange
                onDateSelect={onCustomDateSelect}
                closeModal={() => setIsCustomOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateFilter;
