import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineDown } from "react-icons/ai";

const DateFilter: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<string>("today");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="max-w-md z-20 mx-auto mt-[10rem]">
      <label htmlFor="date-range" className="block text-gray-700 font-medium mb-2">
        Select a date range:
      </label>
      <div className="relative">
        <select
          id="date-range"
          className="w-full border text-red-500 border-gray-300 rounded-md p-2 pr-10 appearance-none focus:outline-none 0"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="last7days">Last 7 Days</option>
          <option value="custom">Custom Range</option>
        </select>
        <AiOutlineDown className="absolute top-3 right-3 text-gray-500 pointer-events-none" />
      </div>

      {selectedRange === "custom" && (
        <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
                Start Date:
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                placeholderText="Select start date"
              />
            </div>
            <div>
              <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
                End Date:
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                placeholderText="Select end date"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilter;

