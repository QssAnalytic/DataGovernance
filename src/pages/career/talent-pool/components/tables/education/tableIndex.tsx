import { useState } from "react";
import { FiRotateCw, FiEdit, FiTrash2 } from "react-icons/fi";
import PaginationControls from "@/pages/lead-details-page/components/Pagination Controller";
import { EducationData } from "@/pages/career/talent-pool/components/ExportedData";
import { EditModalStore } from "@/pages/career/talent-pool/services/store/useUIStore";
import { EducationEditModal } from "../../EditModal/EducationEditModal";
import { AnimatePresence } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface EducationRowData {
    id: number;
    nameS: string;
    bootN: number;
    bachDegree: string;
    uniScore: number;
    bachMajor: string;
    masterDegree: string;
    MathScore: number;
    masterMajor: string;
    uniPHD: string;
    phdMajor: string;
    languageSkills: string;
}

export const EducationTable = () => {
    const { OverviewEditOpen, setOverviewEditOpen } = EditModalStore();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedData, setSelectedData] = useState<EducationRowData | null>(null);
    const rowsPerPage = 10;

    const [data, setData] = useState(EducationData);

    const handleDelete = (id: number) => {
        setData(prevData => prevData.filter(item => item.id !== id));
        const totalPages = Math.ceil((data.length - 1) / rowsPerPage);
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    };

    const handleEdit = (rowData: EducationRowData) => {
        setSelectedData(rowData);
        setOverviewEditOpen(true);
    };

    const paginatedData = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const truncateText = (text: string) => {
        const words = text.split(' ');
        if (words.length > 2) {
            return words.slice(0, 2).join(' ') + '...';
        }
        return text;
    };

    return (
        <div className="w-full flex flex-col">
            <div className="w-full overflow-x-auto mb-4">
                <div className="min-w-max">
                    <div className="tableHeader flex justify-between items-center">
                        <div className="leftHeader flex">
                            <div className="text-[12px] font-bold w-[46px] h-[49px] flex items-center p-[16px]">ID</div>
                            <div className="text-[12px] font-bold w-[171px] h-[49px] flex items-center p-[16px]">Ad və Soyad</div>
                            <div className="text-[12px] font-bold w-[123px] h-[49px] flex items-center p-[16px]">Bootcamp №</div>
                            <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Bachelor Degree</div>
                            <div className="text-[12px] font-bold w-[100px] h-[49px] flex items-center p-[16px]">Uni Score</div>
                            <div className="text-[12px] font-bold w-[170px] h-[49px] flex items-center p-[16px]">Bachelor Major</div>
                            <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Master Degree</div>
                            <div className="text-[12px] font-bold w-[100px] h-[49px] flex items-center p-[16px]">Math Score</div>
                            <div className="text-[12px] font-bold w-[170px] h-[49px] flex items-center p-[16px]">Master Major</div>
                            <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">PHD University</div>
                            <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">PHD Major</div>
                            <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Language Skills</div>
                        </div>
                        <div className="rightHeader w-[95px] h-[49px] flex items-center justify-center p-[16px] ml-[92px]">
                            <FiRotateCw className="w-[24px] h-[24px]" />
                        </div>
                    </div>

                    <div className="tableBody h-[408px]">
                        {paginatedData.map((rowData) => (
                            <div className="row flex justify-between items-center h-[60px]" key={rowData.id}>
                                <div className="rowLeft flex">
                                    <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[46px]">{rowData.id}</div>
                                    <div className="p-[16px] flex items-center font-medium text-[14px] w-[171px]">{rowData.nameS}</div>
                                    <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[123px]">{rowData.bootN}</div>
                                    <TooltipProvider>
                                        <Tooltip delayDuration={200}>
                                            <TooltipTrigger asChild>
                                                <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">
                                                    {truncateText(rowData.bachDegree)}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white p-2 text-sm max-w-[300px] shadow-lg rounded-md border">
                                                <p className="text-gray-700">{rowData.bachDegree}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[100px]">{rowData.uniScore}</div>
                                    <TooltipProvider>
                                        <Tooltip delayDuration={200}>
                                            <TooltipTrigger asChild>
                                                <div className="p-[16px] flex items-center font-medium text-[14px] w-[170px]">
                                                    {truncateText(rowData.bachMajor)}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white p-2 text-sm max-w-[300px] shadow-lg rounded-md border">
                                                <p className="text-gray-700">{rowData.bachMajor}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{rowData.masterDegree}</div>
                                    <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[100px]">{rowData.MathScore}</div>
                                    <TooltipProvider>
                                        <Tooltip delayDuration={200}>
                                            <TooltipTrigger asChild>
                                                <div className="p-[16px] flex items-center font-medium text-[14px] w-[170px]">
                                                    {truncateText(rowData.masterMajor)}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white p-2 text-sm max-w-[300px] shadow-lg rounded-md border">
                                                <p className="text-gray-700">{rowData.masterMajor}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{rowData.uniPHD}</div>
                                    <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{rowData.phdMajor}</div>
                                    <TooltipProvider>
                                        <Tooltip delayDuration={200}>
                                            <TooltipTrigger asChild>
                                                <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">
                                                    {truncateText(rowData.languageSkills)}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white p-2 text-sm max-w-[300px] shadow-lg rounded-md border">
                                                <p className="text-gray-700">{rowData.languageSkills}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <div className="rowRight flex gap-x-[12px] w-[95px] justify-center items-center ml-[92px]">
                                    <div className="">
                                        <FiEdit 
                                            className="w-[24px] h-[24px] hover:cursor-pointer"
                                            onClick={() => handleEdit(rowData)}
                                        />
                                    </div>
                                    <div className="">
                                        <FiTrash2 
                                            className="w-[24px] h-[24px] hover:cursor-pointer"
                                            onClick={() => handleDelete(rowData.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <PaginationControls
                    data={data}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    rowsPerPage={rowsPerPage}
                />
            </div>
            <AnimatePresence>
                {OverviewEditOpen && <EducationEditModal data={selectedData} />}
            </AnimatePresence>
        </div>
    );
};
