/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { data, dataEducation, headers, headersEducation } from "./static";
import TableInfoSection from "./components/Table Info Section";
import ContactTable from "./components/Contact Table";
import EducationStatusTable from "./components/Education Status Table";
import PaginationControls from "./components/Pagination Controller";
import CombinedTable from "./components/Combined Table";

const DetailsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("contact");
  const rowsPerPage = 7;

  const handlePagination = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Combine data for the combined table
  const combineData = () => {
    const combined = [...data, ...dataEducation];

    // Filter out duplicates based on a unique identifier, e.g., 'id'
    const uniqueData = combined.filter(
      (value, index, self) => index === self.findIndex((t) => t.ID === value.ID)
    );

    console.log(uniqueData, "unique  data");

    return uniqueData;
  };
  combineData();

  const getPaginatedData = (dataArray: any[]) => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return dataArray.slice(startIndex, endIndex);
  };

  // Handle tab change
  const handleTabChange = (tab: string | string[]) => {
    if (Array.isArray(tab)) {
      setSelectedTab(tab[0]);
    } else {
      setSelectedTab(tab);
    }
  };

  return (
    <div>
      {/* Table Info Section with Tabs */}
      <TableInfoSection onChangeTable={handleTabChange} />

      {/* Conditionally render the table based on `selectedTab` */}
      {selectedTab === "contact" && (
        <ContactTable
          headers={headers}
          data={getPaginatedData(data)}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
        />
      )}

      {selectedTab === "education" && (
        <EducationStatusTable
          headers={headersEducation}
          data={getPaginatedData(dataEducation)}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
        />
      )}

      {selectedTab === "combined" && (
        <CombinedTable
          data={getPaginatedData(combineData())}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
        />
      )}

      {/* Pagination Controls */}
      <PaginationControls
        data={
          selectedTab === "contact"
            ? data
            : selectedTab === "education"
            ? dataEducation
            : combineData()
        }
        currentPage={currentPage}
        setCurrentPage={handlePagination}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default DetailsPage;
