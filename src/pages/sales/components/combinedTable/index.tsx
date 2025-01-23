import { CombinedTableData } from "../sharedData";
import { CombinedDataProps, CombinedDataTypes } from "../../types";
import { useState } from "react";
import EditModal from "../editModal";
import ShowModal from "@/pages/app-data/components/showModal";
import CombineTableContent from "../combinedTableContent";
import PaginationControls from "@/pages/lead-details-page/components/Pagination Controller";

const CombinedTable: React.FC<CombinedDataProps> = ({ isOtherActiveFull, searchTerm, isPaymentActiveFull, isServiceActiveFull }) => {

  const [data, setData] = useState<CombinedDataTypes[]>(CombinedTableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrderBy, setSortOrderBy] = useState<'name' | 'date'>('name');  // 
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [deleteRowId, setDeleteRowId] = useState<number | null>(null);



  //Deleting items from table
  const handleDeleteClick = (id: number) => {
    setDeleteRowId(id);
    setShowModal(true);
  }


  const handleCancelDelete = () => {
    setShowModal(false);
    setDeleteRowId(null);
  };



  const handleConfirmDelete = () => {
    if (deleteRowId !== null) {
      setData(data.filter((row) => row.id !== deleteRowId));
    }
    setShowModal(false);
    setDeleteRowId(null);
  };


  const handleSort = () => {
    setSortOrderBy('name');
    setSortOrder(sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? '' : 'asc');
  }


  const sortedData = data.slice().sort((a, b) => {

    if (!sortOrderBy) {
      return 0; // No sorting, original order
    }

    if (sortOrderBy === 'name') {
      const nameA = a.name?.toLowerCase() ?? '';
      const nameB = b.name?.toLowerCase() ?? '';
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : sortOrder === 'desc' ? nameB.localeCompare(nameA) : 0;
    }


    return 0;
  });


  const filteredData = sortedData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())


  );


  const rowsPerPage = 10; // Number of rows to display per page



  // Pagination logic
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);



  return (
    <div>
      <div className=" relative overflow-x-auto overflow-y-auto h-[350px]  ">
        <CombineTableContent handleSort={handleSort} sortOrder={sortOrder} isOtherActiveFull={isOtherActiveFull} isPaymentActiveFull={isPaymentActiveFull} isServiceActiveFull={isServiceActiveFull} currentData={currentData} setIsEditModalOpen={setIsEditModalOpen} handleDeleteClick={handleDeleteClick} />
      </div>
      <div className="  flex justify-center">
        <PaginationControls
          data={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowsPerPage={rowsPerPage}
        />
      </div>
      {/* save content after editing */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      {showModal && (
        // my delete modal
        <ShowModal handleCancelDelete={handleCancelDelete} handleConfirmDelete={handleConfirmDelete} />
      )}
    </div>
  );
};

export default CombinedTable;



