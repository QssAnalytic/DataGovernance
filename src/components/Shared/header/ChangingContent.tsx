import { useUIStore } from "../../../services/store/useUIStore";
import { useAdminStore } from "@/services/store/useAdminStore";
import { Plus } from "lucide-react";

export const ChangingContent = () => {
    const { buttonLabel, isModalOpen, setIsModalOpen, pageCustomHeader, modalContent } = useUIStore();
    const { isAdmin } = useAdminStore();

    return (
        <div className="flex gap-x-[20px] items-center">
            
            {pageCustomHeader}

            {isAdmin && (
                <button
                    className="px-[16px] min-w-fit py-3 flex items-center gap-x-[12px] rounded-xl bg-[#22385F] text-sm font-medium text-white"
                    onClick={() => { setIsModalOpen(!isModalOpen); }} // Toggle modal visibility
                >
                    <Plus />
                    {buttonLabel} {/* Dynamic label for the button */}
                </button>
            )}

            {/* Modal component appears when isModalOpen is true */}
            {isModalOpen && (
                <div className="z-[100px] w-full top-0 left-0 h-[100vh] flex items-center justify-center absolute">
                    {/* Overlay for closing the modal */}
                    <div 
                        className="overlay absolute z-40 bg-black bg-opacity-50 w-full h-[100vh]" 
                        onClick={() => setIsModalOpen(false)} // Close modal when overlay is clicked
                    ></div>

                    {/* Modal content box */}
                    <div className="flex bg-white flex-col min-w-[200px] min-h-[200px] z-50">
                        {modalContent} {/* Dynamic content rendered inside the modal */}
                    </div>
                </div>
            )}
        </div>
    );
};
