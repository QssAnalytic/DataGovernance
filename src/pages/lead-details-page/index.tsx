/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { data, dataEducation, headers, headersEducation } from "./static";
import TableInfoSection from "./components/Table Info Section";
import ContactTable from "./components/Contact Table";
import EducationStatusTable from "./components/Education Status Table";
import CombinedTable from "./components/Combined Table";
import PaginationControls from "./components/Pagination Controller";
import { EducationRowData, RowData } from "./types";

const DetailsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("contact");
  const rowsPerPage = 7;

  // Combine headers without duplicates
  const combinedHeaders = [...new Set([...headers, ...headersEducation])] as (
    | keyof RowData
    | keyof EducationRowData
  )[];

  // Combine data for the combined table
  const combineData = () => {
    const combined = [...data, ...dataEducation];
    const uniqueData = combined.filter(
      (item, index, self) => self.findIndex((t) => t.ID === item.ID) === index
    );
    return uniqueData;
  };

  // Get paginated data
  const getPaginatedData = (dataArray: any[]) => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return dataArray.slice(startIndex, startIndex + rowsPerPage);
  };

  // Handle tab change
  const handleTabChange = (tabs: string | string[]) => {
    if (Array.isArray(tabs)) {
      setSelectedTab(tabs[0]);
    } else {
      setSelectedTab(tabs);
    }
  };

  return (
    <div>
      {/* Tab Selection */}
      <TableInfoSection onChangeTable={handleTabChange} />

      {/* Render Table Based on Selected Tab */}
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
          headers={combinedHeaders}
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
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default DetailsPage;
