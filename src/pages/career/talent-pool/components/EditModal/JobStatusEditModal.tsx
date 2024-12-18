import { EditModalStore } from "@/pages/career/talent-pool/services/store/useUIStore";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

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

interface JobStatusEditModalProps {data: JobStatusRowData | null;}

export const JobStatusEditModal = ({ data }: JobStatusEditModalProps) => {
    const { setOverviewEditOpen } = EditModalStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setOverviewEditOpen(false);
    };

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
                    <div className="header w-full flex justify-between items-center pb-[35px]">
                        <p className="text-[24px] font-bold">Edit Job Status</p>
                        <IoClose
                            className="w-[24px] h-[24px] hover:cursor-pointer"
                            onClick={() => setOverviewEditOpen(false)}
                        />
                    </div>
                    {data && (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    )}
                </div>
            </div>
        </motion.div>
    );
}; 