import { FiEdit } from "react-icons/fi"
import { GoTrash } from "react-icons/go"
import { EditAndDeleteProps } from "../../types"

const EditAndDelete:  React.FC<EditAndDeleteProps> =({setIsEditModalOpen, handleDeleteClick, ItemId}) => {
    return <>
      <div className="flex justify-center gap-3">
                    <FiEdit className="cursor-pointer w-5 h-5"
                      onClick={() => setIsEditModalOpen(true)}
                    />
                    <GoTrash
                      onClick={() => handleDeleteClick(ItemId)}
                      className="cursor-pointer w-5 h-5"
                    />
                  </div>
    </>

}
export default EditAndDelete