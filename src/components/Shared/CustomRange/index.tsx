import * as React from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { IoCloseOutline } from "react-icons/io5";



interface DatePickerWithRangeProps {
  onDateSelect: (dateRange: DateRange | undefined) => void;
  closeModal: () => void;
}


export function DatePickerWithRange({
  onDateSelect,
  closeModal,
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(), // Start with today's date
    to: addDays(new Date(), 20), // Add 20 days from today
  });

  const handleSave = () => {
    if (date) {
      onDateSelect(date); // Pass the selected range back to the parent
    }
    closeModal(); // Close the modal
  };

  const formatDateRange = () => {
    if (!date) return "No date selected";
    const from = date.from ? format(date.from, "MMM d") : "Start";
    const to = date.to ? format(date.to, "MMM d") : "End";
  
    return (
      <>
        <span className="text-black">{from}</span>
        {" - "}
        <span className="text-[#00000099]">{to}</span>
      </>
    );
  };
  return (
    <div className="w-[320px] mx-5">
      <div className="flex justify-between">
        <h2 className='font-montserrat font-normal text-[16px] text-[#00000099] mt-1 leading-7 '>SELECT DATE RANGE</h2>
        <div className="w-[44px] cursor-pointer h-[44px] border-[1px] mb-2 rounded-[12px] border-[#22385F] pl-[5px] pt-[5px]"  onClick={closeModal}>
        <IoCloseOutline  className="text-[#000000]  text-[30px] " />
         </div>
       </div>

      <h1 className="font-montserrat font-normal leading-3 text-[25px] ">
        {formatDateRange()}
      </h1>
      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from || new Date()} // Default to today's date
        selected={date}
        onSelect={setDate}
        className="flex mt-5 justify-center text-black"
        numberOfMonths={1}
      />
      <div className="flex justify-around">
        <Button
          onClick={closeModal}
          className="mt-4 w-[120px] font-montserrat text-[14px] h-[56px] bg-transparent text-[#22385F] border border-[#22385F] rounded-lg hover:bg-[#22385F] hover:text-white transition duration-300"
        >
          Ləğv etmək
        </Button>
        <Button
          onClick={handleSave}
          className="mt-4 w-[120px] font-montserrat text-[14px] h-[56px] bg-transparent text-[#22385F] border border-[#22385F] rounded-lg hover:bg-[#22385F] hover:text-white transition duration-300"
        >
          Yadda Saxla
        </Button>
      </div>
    </div>
  );
}
