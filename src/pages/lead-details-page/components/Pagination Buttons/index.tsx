import { useState } from "react";

const PaginationControls = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 border-[#22385F] border rounded-lg ${
            currentPage === index + 1 ? "bg-[#22385F] text-white" : "bg-white"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationControls;
