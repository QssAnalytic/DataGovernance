import * as React from "react";
import { ChevronsUpDown, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion from Framer Motion

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/pages/career/talent-pool/components/popover";

// Define the type for the framework
type Framework = {
  value: string;
  label: string;
};

interface ComboboxDemoProps {
  frameworks: Framework[];
}

export function ComboboxDemo({ frameworks }: ComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const [isSearchActive, setIsSearchActive] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSelect = (currentValue: string) => {
    if (selectedValues.includes(currentValue)) {
      setSelectedValues(selectedValues.filter((value) => value !== currentValue));
    } else {
      setSelectedValues([...selectedValues, currentValue]);
    }
  };

  const handleSelectAll = () => {
    if (selectedValues.length === frameworks.length) {
      setSelectedValues([]); // Deselect all
    } else {
      setSelectedValues(frameworks.map((framework) => framework.value)); // Select all
    }
  };

  const handleReset = () => {
    setSelectedValues([]);
  };

  const handleSend = () => {
    console.log("Selected values:", selectedValues);
  };

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
    if (isSearchActive) {
      setSearchQuery(""); // Clear search query if closing the search input
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[294px] justify-between"
        >
          Select frameworks...
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[258px] p-0 overflow-hidden">
        <Command>
          {/* Buttons and Search Input Side by Side */}
          <div className="flex px-3 pt-3 items-center gap-x-[20px] relative">
            <p
              onClick={handleSelectAll}
              className="bg-white text-[rgba(29,126,183,1)] cursor-pointer"
            >
              Hamısını seç
            </p>
            <div className="h-[4px] bg-[rgba(29,126,183,1)] w-[4px] rounded-full"></div>
            <p
              onClick={handleReset}
              className="bg-white text-[rgba(29,126,183,1)] cursor-pointer"
            >
              Sıfırla
            </p>

            {/* Search Icon to toggle search input */}
            <Search
              className="cursor-pointer text-[rgba(29,126,183,1)]"
              onClick={handleSearchToggle}
            />
          </div>

          {/* Conditionally show the search input with animation */}
          <AnimatePresence>
            {isSearchActive && (
              <motion.div
                initial={{ x: 300 }} // Start from right (off-screen)
                animate={{ x: 0 }} // Slide to its original position
                exit={{ x: 300 }} // Slide to the right (off-screen) when closing
                 // Smooth spring animation
                className="absolute left-0 top-[-10px] px-3 pt-3 w-full bg-white"
                style={{ zIndex: 10 }} // Ensure it overlays on top of other content
              >
                <div className="flex items-center gap-x-2">
                  <CommandInput
                    placeholder="Search framework..."
                    className="flex-1"
                    value={searchQuery}
                    onChange={(e: any) => setSearchQuery(e.target.value)}
                  />
                  <X
                    className="cursor-pointer text-[rgba(29,126,183,1)]"
                    onClick={() => setIsSearchActive(false)}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {/* Framework Options */}
              {frameworks
                .filter((framework) =>
                  framework.label.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={() => handleSelect(framework.value)}
                    className="flex justify-between items-start"
                  >
                    {framework.label}
                    <div
                      className={cn(
                        "w-[16px] h-[16px] rounded-full border",
                        selectedValues.includes(framework.value)
                          ? "bg-[rgba(34,56,95,1)] border-[rgba(34,56,95,1)]"
                          : "bg-white border-[rgba(34,56,95,1)]"
                      )}
                    ></div>
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
        {/* Send Button */}
        <div className="p-2">
          <button
            className="w-full h-[43px] text-white rounded-[12px] bg-[rgba(34,56,95,1)]"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
