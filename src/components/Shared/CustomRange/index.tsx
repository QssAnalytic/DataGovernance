// DatePickerWithRange.tsx
import * as React from "react";
import { addDays, format } from "date-fns";
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
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  React.useEffect(() => {
    onDateSelect(date);
  }, [date, onDateSelect]);

  return (
    <div className="p-4">
      <h2 className="font-bold text-black mb-2">Select Date Range</h2>
      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={1}
        
             />
      <Button onClick={closeModal} className="mt-4">
        Close
      </Button>
    </div>
  );
}
