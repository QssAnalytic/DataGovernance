import { useState } from "react";
import ContactTable from "./components/Contact Table";
import PaginationControls from "./components/Pagination Controller";
import TableInfoSection from "./components/Table Info Section";
import { data, headers } from "./static";

const DetailsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  return (
    <div>
      <TableInfoSection />
      <ContactTable
        headers={headers}
        data={data}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
      />
      <PaginationControls
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default DetailsPage;
