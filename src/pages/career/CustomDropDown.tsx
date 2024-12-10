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

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export function ComboboxCustom() {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const [showSearch, setShowSearch] = React.useState(false);

  // Toggle selection of individual items
  const toggleSelect = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // Deselect
        : [...prev, value] // Select
    );
  };

  // Select all items
  const selectAll = () => {
    setSelectedValues(frameworks.map((framework) => framework.value));
  };

  // Reset selected items
  const resetSelection = () => {
    setSelectedValues([]);
    setShowSearch(false); // Close search input
  };

  // Toggle search visibility
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };
  const closeSearch = () => {
    setTimeout(()=>setShowSearch(false), 300)
  };
  

  return (
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
      <PopoverContent className="w-[300px] p-0">
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
        <Command>
          <div
            className={cn(
              "absolute top-0 left-0 overflow-hidden transition-all duration-300 w-full bg-white",
              showSearch
                ? "animate-slide-in  translate-x-0"
                : "animate-slide-out translate-x-[250px] pointer-events-none"
            )}
          >
            {showSearch && <CommandInput placeholder="Search framework..."  className=""/>}
            <X onClick={closeSearch} className="h-4 w-4 absolute top-0 right-0 z-10"/>
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
      </PopoverContent>
    </Popover>
  );
}
