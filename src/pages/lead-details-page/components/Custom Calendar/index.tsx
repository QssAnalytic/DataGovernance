"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerDemo({ placeholder }: { placeholder: string }) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "focus:outline-none w-[100%] focus:ring-0 border py-[12px] px-[16px] rounded-[12px] justify-between text-left font-normal",
            !date ? "text-muted-foreground" : "text-black" // Add black text color when a date is selected
          )}
          style={{ height: "auto", lineHeight: "1.7" }} // Ensure consistent height/line-height
        >
          <span className="placeholder:text-[#969696]">
            {date ? format(date, "PPP") : placeholder}
          </span>
          <CalendarIcon className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 rounded-[12px]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
