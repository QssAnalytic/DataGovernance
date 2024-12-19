import * as React from "react";
import { Check, ChevronsUpDown, Search, X } from "lucide-react";
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
} from "@/components/ui/popover";
import { IoClose } from "react-icons/io5";

interface Framework {
  value: string;
  label: string;
}

interface ComboboxCustomProps {
  frameworks: Framework[];
}

export function ComboboxCustom({ frameworks }: ComboboxCustomProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const [showSearch, setShowSearch] = React.useState(false);

  const toggleSelect = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const selectAll = () => {
    setSelectedValues(frameworks.map((framework) => framework.value));
  };

  const resetSelection = () => {
    setSelectedValues([]);
    setShowSearch(false);
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const closeSearch = () => {
    setTimeout(() => setShowSearch(false), 300);
  };

  return (
    <div className="relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[300px] justify-between"
          >
            {selectedValues.length > 0
              ? `${selectedValues.length} selected`
              : "Select frameworks..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0" align="start">
          <div className="flex flex-col">
            

            <div className="flex items-center justify-between p-2 border-b">
              <Button variant="ghost" size="sm" onClick={selectAll}>
                Select All
              </Button>
              <Button variant="ghost" size="sm" onClick={resetSelection}>
                Reset
              </Button>
              <Button variant="ghost" size="sm" onClick={toggleSearch}>
                <Search className="h-4 w-4" />
              </Button>
            </div>
              <p>salam</p>
            <Command>
              <div className={cn(
                "relative",
                showSearch ? "block" : "hidden"
              )}>
                <CommandInput placeholder="Search framework..." />
                <button
                  onClick={closeSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={() => toggleSelect(framework.value)}
                    >
                      {framework.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          selectedValues.includes(framework.value)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
