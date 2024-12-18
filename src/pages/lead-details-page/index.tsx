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
  const [activeIcmalTab, setActiveIcmalTab] = useState([
    "contact",
    "education",
  ]);
  const rowsPerPage = 7;

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
    console.log("Combined Data:", uniqueData); // Debugging line to check combined data
    return uniqueData;
  };

  // Get paginated data
  const getPaginatedData = (dataArray: any[]) => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = dataArray.slice(startIndex, startIndex + rowsPerPage);
    console.log("Paginated Data:", paginatedData); // Debugging line to check paginated data
    return paginatedData;
  };

  // Handle tab change
  const handleTabChange = (tabs: string | string[]) => {
    console.log("Tab change requested:", tabs); // Debugging line for tab change
    if (Array.isArray(tabs)) {
      setSelectedTab(tabs[0]); // If multiple tabs, select the first one (or adjust this logic as needed)
    } else {
      setSelectedTab(tabs);
    }

    // If the selected tab is "combined", ensure both "contact" and "education" are active
    if (tabs === "combined") {
      setActiveIcmalTab(["contact", "education"]);
    } else {
      setActiveIcmalTab([tabs]);
    }
  };
 
  console.log("Selected Tab:", selectedTab); // Debugging line to check the selected tab
  console.log("Active IC-MAL Tabs:", activeIcmalTab); // Debugging line to check active tabs

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

      {/* Render Combined Table if Both "contact" and "education" Tabs are Active */}
      {selectedTab === "combined" &&
        activeIcmalTab.includes("contact") &&
        activeIcmalTab.includes("education") && (
          <>
            <h2>Combined Table Rendered</h2>{" "}
            {/* Debugging line to check if this part is reached */}
            <CombinedTable
              headers={combinedHeaders}
              data={getPaginatedData(combineData())}
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
            />
          </>
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
