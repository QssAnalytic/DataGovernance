import { useState } from "react";
import { FiRotateCw, FiEdit, FiTrash2 } from "react-icons/fi";
import PaginationControls from "@/pages/lead-details-page/components/Pagination Controller";
import { JobStatusData } from "@/pages/career/talent-pool/components/ExportedData";
import { EditModalStore } from "@/pages/career/talent-pool/services/store/useUIStore";
import { JobStatusEditModal } from "@/pages/career/talent-pool/components/EditModal/JobStatusEditModal";
import { AnimatePresence } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface JobStatusRowData {
    id: number;
    nameS: string;
    bootN: number;
    company: string;
    position: string;
    sector: string;
    jobRef: string;
    refNo: string;
    linkedIn: string;
    skills: string;
    level: string;
    notes: string;
}

export const JobStatusTable = () => {
    const { OverviewEditOpen, setOverviewEditOpen } = EditModalStore();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedData, setSelectedData] = useState<JobStatusRowData | null>(null);
    const rowsPerPage = 10;

    const [data, setData] = useState(JobStatusData);

    const handleDelete = (id: number) => {
        setData(prevData => prevData.filter(item => item.id !== id));
        const totalPages = Math.ceil((data.length - 1) / rowsPerPage);
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    };

    const handleEdit = (rowData: JobStatusRowData) => {
        const store = EditModalStore.getState();
        store.setJobStatusData(rowData);
        store.setActiveTab('jobStatus');
        store.setOverviewEditOpen(true);
    };

    const paginatedData = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const truncateNotes = (text: string) => {
        const words = text.split(' ');
        if (words.length > 3) {
            return words.slice(0, 3).join(' ') + '...';
        }
        return text;
    };

    const truncateSkills = (text: string) => {
        const skills = text.split(',');
        if (skills.length > 2) {
            return skills.slice(0, 2).join(',') + '...';
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
                            <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Company Name</div>
                            <div className="text-[12px] font-bold w-[170px] h-[49px] flex items-center p-[16px]">Position</div>
                            <div className="text-[12px] font-bold w-[200px] h-[49px] flex items-center p-[16px]">Sector</div>
                            <div className="text-[12px] font-bold w-[200px] h-[49px] flex items-center p-[16px]">Job Refferal</div>
                            <div className="text-[12px] font-bold w-[101px] h-[49px] flex items-center p-[16px]">Referall №</div>
                            <div className="text-[12px] font-bold w-[85px] h-[49px] flex items-center p-[16px]">Linkedin</div>
                            <div className="text-[12px] font-bold w-[109px] h-[49px] flex items-center p-[16px]">Skills</div>
                            <div className="text-[12px] font-bold w-[77px] h-[49px] flex items-center justify-center p-[16px]">Level</div>
                            <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Notes</div>
                        </div>
                        <div className="rightHeader w-[95px] h-[49px] flex items-center justify-center p-[16px] ml-[92px]">
                            <FiRotateCw className="w-[24px] h-[24px]" />
                        </div>
                    </div>

                    <div className="tableBody h-[408px] gap-y-[12px]">
                        {paginatedData.map((rowData) => (
                            <div className="row flex justify-between items-center h-[60px]" key={rowData.id}>
                                <div className="rowLeft flex">
                                    <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[46px]">{rowData.id}</div>
                                    <div className="p-[16px] flex items-center font-medium text-[14px] w-[171px]">{rowData.nameS}</div>
                                    <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[123px]">{rowData.bootN}</div>
                                    <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{rowData.company}</div>
                                    <div className="p-[16px] flex items-center font-medium text-[14px] w-[170px]">{rowData.position}</div>
                                    <div className="p-[16px] flex items-center font-medium text-[14px] w-[200px]">{rowData.sector}</div>
                                    <div className="p-[16px] flex items-center font-medium text-[14px] w-[200px]">{rowData.jobRef}</div>
                                    <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[101px]">{rowData.refNo}</div>
                                    <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[85px]">
                                        <a href={rowData.linkedIn} target="_blank" rel="noopener noreferrer">Link</a>
                                    </div>
                                    <TooltipProvider>
                                        <Tooltip delayDuration={200}>
                                            <TooltipTrigger asChild>
                                                <div className="p-[16px] flex items-center font-medium text-[14px] w-[109px]">
                                                    {truncateSkills(rowData.skills)}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent 
                                                className="bg-white p-2 text-sm max-w-[300px] shadow-lg rounded-md border"
                                            >
                                                <p className="text-gray-700">{rowData.skills}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[77px]">{rowData.level}</div>
                                    <TooltipProvider>
                                        <Tooltip delayDuration={200}>
                                            <TooltipTrigger asChild>
                                                <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">
                                                    {truncateNotes(rowData.notes)}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent 
                                                className="bg-white p-2 text-sm max-w-[300px] shadow-lg rounded-md border"
                                            >
                                                <p className="text-gray-700">{rowData.notes}</p>
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
                {OverviewEditOpen && <JobStatusEditModal data={selectedData} />}
            </AnimatePresence>
        </div>
    );
};