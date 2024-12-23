import React, { useState } from "react";
import { DatePickerWithRange } from "../CustomRange";
import { DateRange } from "react-day-picker";
import { LuCalendar1 } from "react-icons/lu";
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

  // Helper function to format dates
  const formatDateRange = (from: Date, to: Date): string => {
    const formattedFrom = from.toLocaleDateString("en-GB");
    const formattedTo = to.toLocaleDateString("en-GB");
    return `${formattedFrom} - ${formattedTo}`;
  };

  // Helper function to calculate predefined date ranges
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
    return formatDateRange(from, to);
  };

  const handleRangeChange = (value: string) => {
    setSelectedRange(value);

    if (value === "custom") {
      setIsCustomOpen(true);
      return;
    }

    // Update range label for predefined ranges
    const predefinedRangeLabel = calculateDateRange(value);
    if (predefinedRangeLabel) {
      setCustomRangeLabel(predefinedRangeLabel);
    }
  };

  const onCustomDateSelect = (dateRange: DateRange | undefined) => {
    if (dateRange && dateRange.from && dateRange.to) {
      const formattedRange = formatDateRange(dateRange.from, dateRange.to);
      setCustomRangeLabel(formattedRange);
      setSelectedRange("custom");
    }
    setIsCustomOpen(false);
  };


  const handleCloseModal = () => {
    setIsCustomOpen(false);
    setCustomRangeLabel(null);
  }

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
                closeModal={handleCloseModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const dateRanges = [
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "last7days", label: "Last 7 Days" },
  { value: "last30days", label: "Last 30 Days" },
  { value: "thismonth", label: "This Month" },
  { value: "lastmonth", label: "Last Month" },
  { value: "custom", label: "Custom Range" },
];

export default DateFilter;
