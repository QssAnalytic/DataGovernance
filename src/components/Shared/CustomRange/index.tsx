import * as React from "react";
import { addDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

  React.useEffect(() => {
    onDateSelect(date);
  }, [date, onDateSelect]);

  selectedFrom(date?.from);
  selectedTo(date?.to);

  return (
    <div className="w-[300px] mx-5">
      <h2 className="font-bold  text-black mb-2">Select Date Range</h2>
      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from || new Date()} // Default to today's date
        selected={date}
        onSelect={setDate}
        className="flex justify-center"
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
    onClick={closeModal}
    className="mt-4 w-[120px] font-montserrat text-[14px] h-[56px] bg-transparent text-[#22385F] border border-[#22385F] rounded-lg hover:bg-[#22385F] hover:text-white transition duration-300"
  >
    Yadda Saxla
  </Button>
</div>
    </div>
  );
}

export const selectedFrom: any = (value: any) => {
  return value;
};

export const selectedTo: any = (value: any) => {
  return value;
};




