import { useState } from "react";
import ContactTable from "./components/Contact Table";
import PaginationControls from "./components/Pagination Controller";
import TableInfoSection from "./components/Table Info Section";
import { data, dataEducation, headers, headersEducation } from "./static";
import EmploymentStatusTable from "./components/Employment Status Table";
import EducationStatusTable from "./components/Education Status Table";

const DetailsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("contact"); // State to manage selected tab

  const rowsPerPage = 7;

  return (
    <div>
      <TableInfoSection onChangeTable={setSelectedTab} />

      {/* Conditionally render the table based on `selectedTab` */}
      {selectedTab === "contact" ? (
        <ContactTable
          headers={headers}
          data={data}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
        />
      ) : selectedTab === "education" ? (
        <EducationStatusTable
          headers={headersEducation}
          data={dataEducation}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
        /> // Render Education Status Table when selected
      ) : selectedTab === "employment" ? (
        <EmploymentStatusTable />
      ) : null}

      {/* Pagination controls for ContactTable */}

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
