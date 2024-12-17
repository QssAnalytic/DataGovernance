import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IPaginationControlsProps } from "@/pages/lead-details-page/types";

const PaginationControls: React.FC<IPaginationControlsProps> = ({
  data,
  currentPage,
  setCurrentPage,
  rowsPerPage,
}) => {
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Calculate the range of pages to display
  const visiblePages = 2; // The number of visible page links at a time
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  return (
    <Pagination className="py-[50px]">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePrevPage();
            }}
          />
        </PaginationItem>

        {/* Display page numbers with ellipsis for skipped pages */}
        {startPage > 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            {startPage > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {/* Display visible page numbers */}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <PaginationItem key={startPage + index}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(startPage + index);
              }}
              className={
                currentPage === startPage + index
                  ? "bg-[#22385F] text-white"
                  : "bg-white"
              }
            >
              {startPage + index}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Display ellipsis and last page */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(totalPages);
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNextPage();
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControls;
