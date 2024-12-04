import { Dialog, DialogContent } from "@/components/ui/dialog";

const DeleteModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white shadow-lg rounded-[30px] p-6 w-[400px] ">
        <div className="mt-4">
          <p className="text-center text-[#22385F] font-[600] text-[18px]">
            Əminsiniz mi?
          </p>
        </div>

        <div className="flex justify-center gap-[20px] mt-4">
          <button
            className="w-[140px] text-[#22385F] font-[500] px-[16px] py-[12px] rounded-[12px] border-solid border-[2px] border-[#22385F]"
            onClick={onClose}
          >
            Xeyr
          </button>
          <button
            className="w-[140px] px-[16px] py-[12px] bg-[#DC4242] text-white rounded-[12px]"
            onClick={onClose}
          >
            Bəli, sil
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
