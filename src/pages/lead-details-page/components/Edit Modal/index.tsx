import { FiX } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "../Custom Dialog";

const EditModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white shadow-lg rounded-lg p-6 w-[100%]">
        {/* Add DialogTitle for accessibility */}
        <DialogTitle className="sr-only">Edit Modal</DialogTitle>

        <div className="flex justify-between items-center ">
          <h2 className="text-[24px]  font-[700]">Add new lead</h2>
          <button
            onClick={onClose}
            className=" text-black p-[5px] hover:text-gray-700 focus:outline-none focus:ring-0 text-[20px] rounded-[10px] border border-solid border-[#E9E9E9]"
          >
            <FiX />
          </button>
        </div>
        <div className="flex items-center justify-between gap-4 border-b-solid border-b-[1px] border-b-[gray-300]">
          <div className="flex">
            <button className="text-[#22385F] border-b-solid border-b-[#22385F] border-b-[2px] py-[12px] px-[16px] font-[600] whitespace-nowrap">
              Contact Details
            </button>
            <button className="text-[#BCBCBC] py-[12px] px-[16px] font-[600] whitespace-nowrap">
              Education Status
            </button>
            <button className="text-[#BCBCBC] py-[12px] px-[16px] font-[600] whitespace-nowrap">
              Employment Status
            </button>
          </div>

          <span className="text-[16px] py-[10px] px-[5px] text-[#22385F] flex-shrink-0 font-[600] ">
            1/3
          </span>
        </div>

        <DialogFooter>
          <div className="flex w-[100%] gap-[20px] mt-[20px]">
            <button
              className="font-[600] text-[14px]  bg-gray-200 py-[12px] px-[16px]  text-[#22385F] rounded-lg w-[100%]"
              onClick={onClose}
            >
              Ləğv et
            </button>
            <button className="font-[600] text-[14px] px-4 py-2 bg-[#22385F] text-white rounded-lg w-[100%]">
              İrəli
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
