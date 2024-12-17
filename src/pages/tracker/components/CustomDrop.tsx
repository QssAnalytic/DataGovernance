import * as React from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/pages/career/talent-pool/components/popover";

// Fixed CommandInput Component
export const CommandInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props} // Spread all props to the native input
      className={`command-input ${props.className || ""}`} // Add a default class
    />
  );
});

CommandInput.displayName = "CommandInput";

// Define the type for the framework
type Framework = {
  value: string;
  label: string;
};

interface ComboboxDemoProps {
  frameworks: Framework[];
  placeholder?: string; // Add placeholder prop
  triggerWidth?: string; // Add placeholder prop
}

export function ComboboxDemo({ frameworks, placeholder = "Search framework...", triggerWidth = '182px' }: ComboboxDemoProps) {
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
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="rounded-[12px] border-[0.5px] border-[rgba(34,56,95,1)]">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between"
          onClick={() => setOpen(!open)}
          style={{ width: triggerWidth }}
        >
          <span className="text-[14px] text-[rgba(150,150,150,1)] ">{placeholder}</span>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown className="opacity-50" />
          </motion.div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[258px] p-0 pop-content" style={{ overflow: "hidden" }}>
        <Command>
          {/* Buttons and Search Input Side by Side */}
          <div className="flex px-3 pt-3 items-center gap-x-[17px] relative z-40 bg-white">
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
            {
              isSearchActive ?
                <IoMdClose
                  className="cursor-pointer text-[rgba(29,126,183,1)] w-[24px] h-[24px]"
                  onClick={handleSearchToggle}
                />
                :
                <Search
                  className="cursor-pointer text-[rgba(29,126,183,1)]"
                  onClick={handleSearchToggle}
                />
            }
          </div>

          {/* Conditionally show the search input with animation */}
          <AnimatePresence>
            {isSearchActive && (
              <motion.div
                initial={{ y: "-100%" }} // Slide-in from right
                animate={{ y: 0 }} // Stop at the container edge
                exit={{ y: "-100%" }} // Slide-out to the right
                transition={{ type: "tween", duration: 0.3 }}
                className="px-3 py-1.5 w-full bg-white"
              >
                <div className="flex items-center  h-[38px] border border-[#c8c8c8] rounded-[12px]">
                  {/* Search Icon */}
                  <div className="w-6 h-6">
                    <Search
                      className="cursor-pointer text-[rgba(29,126,183,1)] w-full h-full pl-[5px]"
                      onClick={handleSearchToggle}
                    />
                  </div>

                  {/* Search Input */}
                  <CommandInput
                    placeholder={placeholder} // Use the placeholder prop
                    className="flex-1"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
            Göndər
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
