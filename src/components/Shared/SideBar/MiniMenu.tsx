import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { IoPricetagsOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import { BiChalkboard } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";

import { FiBriefcase } from "react-icons/fi";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./CustomAccordion";

export const MiniMenu = ({ isMenuOpen, toggleMenu, closeMenu }: { isMenuOpen: boolean; toggleMenu: () => void;closeMenu: () => void; }) => {
    const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
        sales: false,
        finance: false,
        training: false,
        internship: false,
        career: false,
    });

    useEffect(() => {
        if (!isMenuOpen ) {
            setOpenAccordions({
                sales: false,
                finance: false,
                training: false,
                internship: false,
                career: false,
            });
        }
    }, [isMenuOpen]);

    const handleAccordionToggle = (accordion: string) => {
        setOpenAccordions((prev) => ({
            ...prev,
            [accordion]: !prev[accordion],
        }));
    };

    return (
        <div className={`mini w-full flex flex-col items-start gap-y-[40px] overflow-hidden`} onMouseLeave={closeMenu}>
            <div className='flex items-center gap-x-[34px]'>
                <div onClick={toggleMenu} className='miniBarIcon group flex p-2 items-center rounded-xl justify-center hover:bg-[rgba(34,56,95,1)]'>
                    <FiMenu className='group-hover:text-white text-[rgba(34,56,95,1)] w-[24px] h-[24px]' />
                </div>
                <p className='pl-[1.3rem] text-[rgba(34,56,95,1)] font-bold'>Menu</p>
            </div>

            <div className='flex items-start gap-x-[34px]'>
                <div className={`miniBarIcon group h-fit flex p-2 items-start rounded-xl justify-center hover:bg-[rgba(34,56,95,1)] ${openAccordions.sales ? "bg-[rgba(34,56,95,1)]" : ""}`}>
                    <IoPricetagsOutline className={`group-hover:text-white rotate-[270deg] text-[rgba(34,56,95,1)] w-[24px] h-[24px] ${openAccordions.sales ? "text-white" : ""}`} />
                </div>
                <Accordion type="single"  collapsible onClick={() => handleAccordionToggle("sales")}>
                    <AccordionItem value="item-1" >
                        <AccordionTrigger isOpen={openAccordions.sales} className={`text-[#22385F] ${openAccordions.sales ? "bg-[rgba(34,56,95,1)] text-white" : ""}`}>
                            Sales
                        </AccordionTrigger>
                        <AccordionContent className="flex items-center gap-x-[8px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group">
                            <span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Application Data
                        </AccordionContent>
                        <AccordionContent className="flex items-center gap-x-[8px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group">
                            <span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Lead Details
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Finance Section */}
            <div className='flex items-start gap-x-[34px]'>
                <div className={`miniBarIcon group flex p-2 items-start rounded-xl justify-center hover:bg-[rgba(34,56,95,1)] ${openAccordions.finance ? "bg-[rgba(34,56,95,1)]" : ""}`}>
                    <FaRegChartBar className={`group-hover:text-white text-[rgba(34,56,95,1)] w-[24px] h-[24px] ${openAccordions.finance ? "text-white" : ""}`} />
                </div>
                <Accordion type="single" collapsible onClick={() => handleAccordionToggle("finance")}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger isOpen={openAccordions.finance} className={`text-[#22385F]  ${openAccordions.finance ? "bg-[rgba(34,56,95,1)] text-white" : ""}` }>
                            Finance
                        </AccordionTrigger>
                        <AccordionContent className="flex items-center gap-x-[10px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group">
                            <span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Raw Data
                        </AccordionContent>
                        <AccordionContent className="flex items-center gap-x-[10px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group">
                            <span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Report
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Training Section */}
            <div className='flex items-start gap-x-[34px]'>
                <div className={`miniBarIcon group flex p-2 items-center rounded-xl justify-center hover:bg-[rgba(34,56,95,1)] ${openAccordions.training ? "bg-[rgba(34,56,95,1)]" : ""}`}>
                    <BiChalkboard className={`group-hover:text-white text-[rgba(34,56,95,1)] w-[24px] h-[24px] ${openAccordions.training ? "text-white" : ""}`} />
                </div>
                <Accordion type="single" collapsible onClick={() => handleAccordionToggle("training")}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger isOpen={openAccordions.training} className={`text-[#22385F]  ${openAccordions.training ? "bg-[rgba(34,56,95,1)] text-white" : ""}`}>
                            Training
                        </AccordionTrigger>
                        <AccordionContent className="flex items-center gap-x-[10px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group">
                            <span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Tracker
                        </AccordionContent>
                        <AccordionContent className="flex items-center gap-x-[10px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group">
                            <span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Checklist
                        </AccordionContent>
                        <AccordionContent className="flex items-center gap-x-[10px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group">
                            <span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Report
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Internship Section */}
            <div className='flex items-start gap-x-[34px]'>
                <div className={`miniBarIcon group flex p-2 items-center rounded-xl justify-center hover:bg-[rgba(34,56,95,1)] ${openAccordions.internship ? "bg-[rgba(34,56,95,1)]" : ""}`}>
                    <FiFileText className={`group-hover:text-white text-[rgba(34,56,95,1)] w-[24px] h-[24px] ${openAccordions.internship ? "text-white" : ""}`} />
                </div>
                <Accordion type="single" collapsible onClick={() => handleAccordionToggle("internship")}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger isOpen={openAccordions.internship} className={`text-[#22385F]  ${openAccordions.internship ? "bg-[rgba(34,56,95,1)] text-white" : ""}`}>Internship</AccordionTrigger>
                        <AccordionContent className="flex items-center gap-x-[10px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Interns Situations</AccordionContent>
                        <AccordionContent className="flex items-center gap-x-[10px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Daily Dataset</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Career Section */}
            <div className='flex items-start gap-x-[34px]'>
                <div className={`miniBarIcon group flex p-2 items-center rounded-xl justify-center hover:bg-[rgba(34,56,95,1)] ${openAccordions.career ? "bg-[rgba(34,56,95,1)]" : ""}`}>
                    <FiBriefcase className={`group-hover:text-white text-[rgba(34,56,95,1)] w-[24px] h-[24px] ${openAccordions.career ? "text-white" : ""}`} />
                </div>
                <Accordion type="single" collapsible onClick={() => handleAccordionToggle("career")}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger isOpen={openAccordions.career} className={`text-[#22385F]  ${openAccordions.career ? "bg-[rgba(34,56,95,1)] text-white" : ""}`}>Career</AccordionTrigger>
                        <AccordionContent className="flex items-center gap-x-[10px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Opportunities</AccordionContent>
                        <AccordionContent className="flex items-center gap-x-[10px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Talent Pool</AccordionContent>
                        <AccordionContent className="flex items-center gap-x-[10px] pl-[1.7rem] text-[#22385F] py-[2px] hover:bg-[rgba(34,56,95,0.39)] hover:text-white hover:cursor-pointer duration-200 rounded-xl group"><span className="w-[5px] h-[5px] rounded-full bg-[#22385F] group-hover:bg-white"></span>Vacancies</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};
