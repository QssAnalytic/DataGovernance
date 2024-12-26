import React, { useState, useEffect } from "react";
import { DatePickerWithRange } from "../CustomRange";
import { DateRange } from "react-day-picker";
import { LuCalendar1 } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/pages/app-data/components/uiSelect";

const DateFilter: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<string>("today");
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [customRangeLabel, setCustomRangeLabel] = useState<string | null>(null);

  // Set the default range to today when the component is mounted
  useEffect(() => {
    const todayRange = calculateDateRange("today");
    setCustomRangeLabel(todayRange);
  }, []);

  const calculateDateRange = (range: string): string | null => {
    const today = new Date();
    let from: Date, to: Date;

    switch (range) {
      case "today":
        from = to = today;
        break;
      case "yesterday":
        from = to = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
        break;
      case "last7days":
        from = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        to = today;
        break;
      case "last30days":
        from = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);
        to = today;
        break;
      case "thismonth":
        from = new Date(today.getFullYear(), today.getMonth(), 1);
        to = today;
        break;
      case "lastmonth":
        from = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        to = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      default:
        return null;
    }

    // Format the date range for today and yesterday separately
    if (range === "today" || range === "yesterday") {
      return formatDate(from);
    }

    return formatDateRange(from, to);
  };

  // Helper function to format date in "dd/mm/yyyy" format
  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Helper function to format date range (e.g., "dd/mm/yyyy - dd/mm/yyyy")
  const formatDateRange = (from: Date, to: Date): string => {
    return `${formatDate(from)} - ${formatDate(to)}`;
  };

  const handleRangeChange = (value: string) => {
    if (value === "custom") {
      // Reopen the modal and ensure it resets to the current custom range
      setIsCustomOpen(false);
      setTimeout(() => setIsCustomOpen(true), 0);
    } else {
      // Handle predefined ranges
      setIsCustomOpen(false);
      const predefinedRangeLabel = calculateDateRange(value);
      setCustomRangeLabel(predefinedRangeLabel || "");
    }
  
    setSelectedRange(value); // Update the selected range
  };
  
  const onCustomDateSelect = (dateRange: DateRange | undefined) => {
    if (dateRange && dateRange.from && dateRange.to) {
      const formattedRange = formatDateRange(dateRange.from, dateRange.to);
      setCustomRangeLabel(formattedRange);
      setSelectedRange("custom");
    }
    setIsCustomOpen(false); // Close the modal after selection
  };


  return (
    <div className="max-w-md mx-auto relative z-50">
      <div className="flex justify-center">
        <Select value={selectedRange} onValueChange={handleRangeChange}>
          <SelectTrigger className="w-[280px] h-[46px] border-[1px] border-[#22385F] focus:outline-none focus:ring-0">
            <LuCalendar1 className="text-[#22385F] text-[20px]" />
            <SelectValue placeholder="Select a range">
              {customRangeLabel || "Select"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {dateRanges.map((range) => (
              <SelectItem
                key={range.value}
                className="text-[#22385F] cursor-pointer appearance-none"
                value={range.value}
              >
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
const customRangeContent = <div className="flex cursor-pointer w-[300px] justify-between">
<p>Custom Range</p>
<MdKeyboardArrowRight className="text-[24px]" />
</div> 
const dateRanges = [
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "last7days", label: "Last 7 Days" },
  { value: "last30days", label: "Last 30 Days" },
  { value: "thismonth", label: "This Month" },
  { value: "lastmonth", label: "Last Month" },
  { value: "custom", label: customRangeContent },
];

export default DateFilter;
