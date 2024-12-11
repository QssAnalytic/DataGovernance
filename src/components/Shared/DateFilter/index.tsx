// DateFilter.tsx
import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { DatePickerWithRange } from "../CustomRange";
import { DateRange } from "react-day-picker";

const DateFilter: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<string>("today");
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState<DateRange | undefined>(
    undefined
  );

  const handleRangeChange = (value: string) => {
    setSelectedRange(value);
    if (value === "custom") {
      setIsCustomOpen(true);
    } else {
      setIsCustomOpen(false);
    }
  };

  const onCustomDateSelect = (dateRange: DateRange | undefined) => {
    setSelectedDates(dateRange);
    console.log("Custom selected range:", dateRange);
  };

  return (
    <div className="max-w-md mx-auto relative z-20">
      {/* Dropdown */}
      <select
        id="date-range"
        className="w-full border text-gray-700 rounded-md p-2"
        value={selectedRange}
        onChange={(e) => handleRangeChange(e.target.value)}
      >
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        <option value="last7days">Last 7 Days</option>
        <option value="custom">Custom Range</option>
      </select>

      {/* Custom Modal for Date Picker */}
      {isCustomOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <DatePickerWithRange
              onDateSelect={onCustomDateSelect}
              closeModal={() => setIsCustomOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilter;

