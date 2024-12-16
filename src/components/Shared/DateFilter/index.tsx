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


  const handleCloseModal = () => {
    setIsCustomOpen(false)
  }


  return (
    <div className="max-w-md  bzmx-auto relative z-50">
      <div>
        <Select value={selectedRange} onValueChange={handleRangeChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="text-black" value="today">
              Today
            </SelectItem>
            <SelectItem className="text-black" value="yesterday">
              Yesterday
            </SelectItem>
            <SelectItem className="text-black" value="last7days">
              Last 7 days
            </SelectItem>
            <SelectItem className="text-black" value="last30days">
              Last 30 days
            </SelectItem>
            <SelectItem className="text-black" value="thismonth">
              This month
            </SelectItem>
            <SelectItem className="text-black" value="lastmonth">
              Last month
            </SelectItem>
            <SelectItem className="text-black" value="custom">
              Custom Range
            </SelectItem>
          </SelectContent>
        </Select>

        {isCustomOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-white w-[408px] rounded-lg shadow-lg p-6">
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

export default DateFilter;



