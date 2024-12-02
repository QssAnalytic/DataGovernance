import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FiMenu } from "react-icons/fi";
import { IoPricetagsOutline } from "react-icons/io5";

export const OverMenu = ({isMenuOpen,toggleMenu,}: {isMenuOpen: boolean;toggleMenu: () => void;}) => {
  return (
    <div className={`w-[370px] overMenu ${isMenuOpen ? 'translate-x-[0]' : 'translate-x-[-390px]'} bg-white absolute top-[120px] transition ease-in-out duration-200`}>
      <div className={`flex  gap-x-[34px] ${isMenuOpen? 'items-center':'items-start'}`}>
        <FiMenu className='group-hover:text-white text-[rgba(34,56,95,1)] w-[24px] h-[24px]' onClick={toggleMenu} />
        <p>Menu</p>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Sales
          </AccordionTrigger>
          <AccordionContent className="flex items-center gap-x-[8px] pl-2"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F]"></span>Application Data</AccordionContent>
          <AccordionContent className="flex items-center gap-x-[8px] pl-2"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F]"></span>Lead Details</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Finance</AccordionTrigger>
          <AccordionContent className="flex items-center gap-x-[8px] pl-2"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F]"></span>Raw Data</AccordionContent>
          <AccordionContent className="flex items-center gap-x-[8px] pl-2"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F]"></span>Report</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Training</AccordionTrigger>
          <AccordionContent className="flex items-center gap-x-[8px] pl-2"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F]"></span>Tracker</AccordionContent>
          <AccordionContent className="flex items-center gap-x-[8px] pl-2"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F]"></span>Checklist</AccordionContent>
          <AccordionContent className="flex items-center gap-x-[8px] pl-2"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F]"></span>Report</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Internship</AccordionTrigger>
          <AccordionContent className="flex items-center gap-x-[8px] pl-2"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F]"></span>Interns Situations</AccordionContent>
          <AccordionContent className="flex items-center gap-x-[8px] pl-2"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F]"></span>Daily Dataset</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Career</AccordionTrigger>
          <AccordionContent className="flex items-center gap-x-[8px] pl-2"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F]"></span>Talent Pool</AccordionContent>
          <AccordionContent className="flex items-center gap-x-[8px] pl-2"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F]"></span>Vacancies</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}