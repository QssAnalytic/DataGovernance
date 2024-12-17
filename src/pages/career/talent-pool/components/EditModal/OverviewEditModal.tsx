import { EditModalStore } from "@/pages/career/talent-pool/services/store/useUIStore";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

interface RowData {
    id: number;
    nameSname: string;
    bootNumber: string;
    contactNumber: string;
    status: string;
}

interface EditModalProps {
    data: RowData | null;
}

export const OverviewEditModal = ({ data }: EditModalProps) => {
    const { setOverviewEditOpen } = EditModalStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your save logic here
        setOverviewEditOpen(false);
    };

    return (
        <motion.div className="w-full h-[100vh] absolute top-0 left-0 z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="overlay w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[672px] rounded-[12px] bg-white relative z-[1000] p-[30px]">
                    <div className="header w-full flex justify-between items-center pb-[35px]">
                        <p className="text-[24px] font-bold">Edit Candidate</p>
                        <IoClose
                            className="w-[24px] h-[24px] hover:cursor-pointer"
                            onClick={() => setOverviewEditOpen(false)}
                        />
                    </div>
                    {data && (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex gap-4">
                              <div>
                                <label htmlFor="nameSname" className="text-[#22385F]">Name Sname</label>
                                <input
                                  type="text"
                                  defaultValue={data.nameSname}
                                  className="w-full p-3 border border-[#22385F] rounded-lg focus:outline-none"
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
                    )}
                </div>
            </div>
        </motion.div>
    );
}; 