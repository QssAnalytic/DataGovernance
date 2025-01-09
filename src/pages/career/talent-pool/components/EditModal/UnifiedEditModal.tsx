import { EditModalStore } from "@/pages/career/talent-pool/services/store/useUIStore";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { RowData, EducationRowData, JobStatusRowData } from "../../types/TableTypes";

type TabType = 'overview' | 'education' | 'jobStatus';

interface UnifiedEditModalProps {
    initialTab?: TabType;
    overviewData?: RowData | null;
    educationData?: EducationRowData | null;
    jobStatusData?: JobStatusRowData | null;
    selectedTables: string[];
}

export const UnifiedEditModal = ({ 
    initialTab = 'overview',
    overviewData,
    educationData,
    jobStatusData,
    selectedTables
}: UnifiedEditModalProps) => {
    const [activeTab, setActiveTab] = useState<TabType>(initialTab);
    const { setOverviewEditOpen, setActiveTab: setStoreTab } = EditModalStore();

    const handleTabChange = (tab: TabType) => {
        setActiveTab(tab);
        setStoreTab(tab);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setOverviewEditOpen(false);
    };

    const TabButton = ({ tab, label }: { tab: TabType; label: string }) => (
        <button
            type="button"
            onClick={() => handleTabChange(tab)}
            className={cn(
                "px-4 py-2 rounded-lg",
                activeTab === tab 
                    ? "bg-[#22385F] text-white" 
                    : "text-[#22385F] hover:bg-[#22385F]/10"
            )}
        >
            {label}
        </button>
    );

    const getAvailableTabs = () => {
        const tabs = [];
        if (selectedTables.includes("Overview") && overviewData) {
            tabs.push({ tab: 'overview' as TabType, label: 'Overview' });
        }
        if (selectedTables.includes("Education") && educationData) {
            tabs.push({ tab: 'education' as TabType, label: 'Education' });
        }
        if (selectedTables.includes("Job status") && jobStatusData) {
            tabs.push({ tab: 'jobStatus' as TabType, label: 'Job Status' });
        }
        return tabs;
    };

    useEffect(() => {
        const availableTabs = getAvailableTabs();
        if (availableTabs.length > 0 && !availableTabs.find(t => t.tab === activeTab)) {
            handleTabChange(availableTabs[0].tab);
        }
    }, [selectedTables, overviewData, educationData, jobStatusData]);

    return (
        <motion.div 
            className="w-full h-[100vh] absolute top-0 left-0 z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="overlay w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[672px] rounded-[12px] bg-white relative z-[1000] p-[30px]">
                    <div className="header w-full flex justify-between items-center pb-[20px]">
                        <p className="text-[24px] font-bold">Edit Details</p>
                        <IoClose
                            className="w-[24px] h-[24px] hover:cursor-pointer"
                            onClick={() => setOverviewEditOpen(false)}
                        />
                    </div>

                    <div className="tabs flex gap-2 mb-6">
                        {getAvailableTabs().map(({ tab, label }) => (
                            <TabButton 
                                key={tab} 
                                tab={tab} 
                                label={label} 
                            />
                        ))}
                    </div>

                    <div className="tab-content">
                        {activeTab === 'overview' && overviewData && (
                            <OverviewForm 
                                data={overviewData} 
                                onSubmit={handleSubmit} 
                                setOverviewEditOpen={setOverviewEditOpen} 
                            />
                        )}
                        {activeTab === 'education' && educationData && (
                            <EducationForm 
                                data={educationData} 
                                onSubmit={handleSubmit} 
                                setOverviewEditOpen={setOverviewEditOpen} 
                            />
                        )}
                        {activeTab === 'jobStatus' && jobStatusData && (
                            <JobStatusForm 
                                data={jobStatusData} 
                                onSubmit={handleSubmit} 
                                setOverviewEditOpen={setOverviewEditOpen} 
                            />
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

interface FormProps<T> {
    data: T;
    onSubmit: (e: React.FormEvent) => void;
    setOverviewEditOpen: (value: boolean) => void;
}

const OverviewForm = ({ data, onSubmit, setOverviewEditOpen }: FormProps<RowData>) => {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4">
                <div>
                    <label htmlFor="nameSname" className="text-[#22385F]">Name Sname</label>
                    <input
                        type="text"
                        defaultValue={data.nameSname}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                        placeholder="Ad və Soyad"
                    />
                </div>
                <div>
                    <label htmlFor="bootNumber" className="text-[#22385F]">Boot Number</label>
                    <input
                        type="text"
                        defaultValue={data.bootNumber}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-[50%]">
                    <label htmlFor="contactNumber" className="text-[#22385F]">Contact Number</label>
                    <input
                        type="text"
                        defaultValue={data.contactNumber}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div className="w-[50%]">
                    <label htmlFor="status" className="text-[#22385F]">Status</label>
                    <input
                        type="text"
                        defaultValue={data.status}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
            </div>
            <div className="flex w-full justify-end gap-4 mt-4">
                <button
                    type="button"
                    onClick={() => setOverviewEditOpen(false)}
                    className="px-6 py-2 border text-[#22385F] border-[#22385F] w-[50%] rounded-lg hover:bg-[#22385F] hover:text-white duration-200"
                >
                    Ləğv Et
                </button>
                <button
                    type="submit"
                    className="px-6 py-2 w-[50%] border border-[#22385F] bg-[#22385F] text-white rounded-lg hover:bg-white hover:text-[#22385F] duration-200"
                >
                    Dəyiş
                </button>
            </div>
        </form>
    );
};

const EducationForm = ({ data, onSubmit, setOverviewEditOpen }: FormProps<EducationRowData>) => {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-[#22385F]">Name</label>
                    <input
                        type="text"
                        defaultValue={data.nameS}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Boot Number</label>
                    <input
                        type="number"
                        defaultValue={data.bootN}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Bachelor Degree</label>
                    <input
                        type="text"
                        defaultValue={data.bachDegree}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">University Score</label>
                    <input
                        type="number"
                        defaultValue={data.uniScore}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Bachelor Major</label>
                    <input
                        type="text"
                        defaultValue={data.bachMajor}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Master Degree</label>
                    <input
                        type="text"
                        defaultValue={data.masterDegree}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Math Score</label>
                    <input
                        type="number"
                        defaultValue={data.MathScore}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Master Major</label>
                    <input
                        type="text"
                        defaultValue={data.masterMajor}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">PHD University</label>
                    <input
                        type="text"
                        defaultValue={data.uniPHD}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">PHD Major</label>
                    <input
                        type="text"
                        defaultValue={data.phdMajor}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div className="col-span-2">
                    <label className="text-[#22385F]">Language Skills</label>
                    <input
                        type="text"
                        defaultValue={data.languageSkills}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
            </div>
            <div className="flex w-full justify-end gap-4 mt-4">
                <button
                    type="button"
                    onClick={() => setOverviewEditOpen(false)}
                    className="px-6 py-2 border text-[#22385F] border-[#22385F] w-[50%] rounded-lg hover:bg-[#22385F] hover:text-white duration-200"
                >
                    Ləğv Et
                </button>
                <button
                    type="submit"
                    className="px-6 py-2 w-[50%] border border-[#22385F] bg-[#22385F] text-white rounded-lg hover:bg-white hover:text-[#22385F] duration-200"
                >
                    Dəyiş
                </button>
            </div>
        </form>
    );
};

const JobStatusForm = ({ data, onSubmit, setOverviewEditOpen }: FormProps<JobStatusRowData>) => {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-[#22385F]">Name</label>
                    <input
                        type="text"
                        defaultValue={data.nameS}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Boot Number</label>
                    <input
                        type="number"
                        defaultValue={data.bootN}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Company</label>
                    <input
                        type="text"
                        defaultValue={data.company}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Position</label>
                    <input
                        type="text"
                        defaultValue={data.position}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Sector</label>
                    <input
                        type="text"
                        defaultValue={data.sector}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Job References</label>
                    <input
                        type="text"
                        defaultValue={data.jobRef}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Reference Number</label>
                    <input
                        type="text"
                        defaultValue={data.refNo}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">LinkedIn</label>
                    <input
                        type="url"
                        defaultValue={data.linkedIn}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Skills</label>
                    <input
                        type="text"
                        defaultValue={data.skills}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-[#22385F]">Level</label>
                    <input
                        type="text"
                        defaultValue={data.level}
                        className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    />
                </div>
            </div>
            <div>
                <label className="text-[#22385F]">Notes</label>
                <textarea
                    defaultValue={data.notes}
                    className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
                    rows={3}
                />
            </div>
            <div className="flex w-full justify-end gap-4 mt-4">
                <button
                    type="button"
                    onClick={() => setOverviewEditOpen(false)}
                    className="px-6 py-2 border text-[#22385F] border-[#22385F] w-[50%] rounded-lg hover:bg-[#22385F] hover:text-white duration-200"
                >
                    Ləğv Et
                </button>
                <button
                    type="submit"
                    className="px-6 py-2 w-[50%] border border-[#22385F] bg-[#22385F] text-white rounded-lg hover:bg-white hover:text-[#22385F] duration-200"
                >
                    Dəyiş
                </button>
            </div>
        </form>
    );
}; 