import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import EditModal from "../Edit Modal";
import DeleteModal from "@/components/Delete Modal";

const EditDeleteModal = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      {/* Separate Edit and Delete Buttons */}
      <div className="flex justify-center items-center space-x-4 cursor-pointer">
        <FiEdit size={20} onClick={() => setIsEditModalOpen(true)} />
        <GoTrash size={20} onClick={() => setIsDeleteModalOpen(true)} />
      </div>

      {/* Modals */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
};

export default EditDeleteModal;
