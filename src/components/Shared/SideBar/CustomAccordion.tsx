import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { useMenuStore } from "@/services/store/useMenuStore";
import { cn } from "@/lib/utils";

// Interface to extend props and include `data-state`
interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  isOpen?: boolean; // Add isOpen prop
}

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ children, ...props }, ref) => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const [openValues, setOpenValues] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (!isMenuOpen) {
      setOpenValues([]); // Close all accordions when the menu is closed
    }
  }, [isMenuOpen]);

  return (
    <AccordionPrimitive.Root
      ref={ref}
      value={openValues} // Controlled open state
      onValueChange={(values: any) => setOpenValues(values)} // Update open states
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps // Use the extended props type
>(({ className, children, isOpen, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 w-[223px] items-center justify-between pb-2 pt-2 px-[23px] mb-[10px] font-medium transition-all rounded-xl hover:bg-[rgba(34,56,95,1)] hover:text-white",
          className,
          isOpen && "bg-[rgba(34,56,95,1)] text-white" // Apply styles when open
        )}
        {...props}
      >
        {children}
        {isOpen ? (
          <div className="w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center">
            <Minus className="h-4 w-4 shrink-0 transition-transform duration-200 text-[#22385F]" />
          </div>
        ) : (
          <div className="w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center">
            <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 text-[#22385F]" />
          </div>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
