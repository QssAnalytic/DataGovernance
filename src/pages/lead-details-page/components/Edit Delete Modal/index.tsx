import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

const EditDeleteModal = () => {
  const [modalType, setModalType] = useState<"edit" | "delete" | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-center items-center space-x-4 cursor-pointer">
          <FiEdit
            size={20}
            onClick={() => setModalType("edit")} // Set modal type to "edit"
          />
          <GoTrash
            size={20}
            onClick={() => setModalType("delete")} // Set modal type to "delete"
          />
        </div>
      </DialogTrigger>

      <DialogContent className={"bg-white shadow-lg rounded-lg p-6 w-[400px]"}>
        {modalType === "delete" ? (
          <>
            <div className="mt-4">
              <p className="text-center font-[600] text-[18px]">
                Əminsiniz mi?
              </p>
            </div>

            <div className="flex justify-center gap-[20px] ">
              <button
                className="w-[140px] px-[16px] py-[12px] rounded-[12px] border border-[#22385F] "
                onClick={() => setModalType(null)}
              >
                Xeyr
              </button>
              <button className="w-[140px] px-[16px] rounded-[12px] py-[12px] bg-red-500 text-white ">
                Bəli, sil
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Edit Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Lead</h2>
            </div>

            {/* Sections */}
            <div className="space-y-6">
              {/* Section 1 */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Section 1</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Field 1
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Field 2
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </form>
              </div>

              {/* Section 2 */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Section 2</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Field 3
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Footer */}
            <DialogFooter>
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg"
                onClick={() => setModalType(null)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Save Changes
              </button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditDeleteModal;
