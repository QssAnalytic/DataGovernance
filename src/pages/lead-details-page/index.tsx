/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  headers,
  headersEducation,
  headersEmployment,
  unifiedPersonData,
} from "./static";
import TableInfoSection from "./components/Table Info Section";
import CombinedTable from "./components/Combined Table";
import PaginationControls from "./components/Pagination Controller";

const DetailsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedTables, setSelectedTables] = useState<string[]>(["details"]);
  const rowsPerPage = 7;

  // Get paginated data
  const getPaginatedData = (dataArray: any[]) => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return dataArray.slice(startIndex, startIndex + rowsPerPage);
  };

  // Get combined data based on selected tables
  const getCombinedData = () => {
    const combinedData: Record<string, any>[] = [];

    unifiedPersonData.forEach((person) => {
      const rowData: Record<string, any> = {
        ID: person.id,
        "Ad Soyad": person.contactInfo.adSoyad,
      };

      selectedTables.forEach((table) => {
        switch (table) {
          case "details":
            Object.assign(rowData, {
              Capacity: person.contactInfo.capacity,
              Value: person.contactInfo.value,
              "Final Status": person.contactInfo.finalStatus,
              "Contact Number": person.contactInfo.contactNumber,
              "Training Name": person.contactInfo.trainingName,
              "Last Contact Date": person.contactInfo.lastContactDate,
              "When Call Again": person.contactInfo.whenCallAgain,
            });
            break;
          case "education":
            Object.assign(rowData, {
              "Background Knowledge": person.educationInfo.backgroundKnowledge,
              "English Level": person.educationInfo.englishLevel,
              "Sillabusla tanışlıq": person.educationInfo.sillabusla,
              "University Bachelor": person.educationInfo.universityBachelor,
              "Bachelor Major": person.educationInfo.bachelorMajor,
              "Entrance score": person.educationInfo.entranceScore,
              "Master Degree": person.educationInfo.masterDegree,
            });
            break;
          case "employment":
            Object.assign(rowData, {
              Workplace: person.employmentInfo.workplace,
              Position: person.employmentInfo.position,
              Note: person.employmentInfo.note,
            });
            break;
        }
      });

      combinedData.push(rowData);
    });

    return combinedData;
  };

  // Handle tab change from Table Changer
  const handleTabChange = (tabs: string[]) => {
    setSelectedTables(tabs);
    setCurrentPage(1);
  };

  // Get combined headers based on selected tables
  const getCombinedHeaders = () => {
    const combinedHeaders: string[] = ["ID", "Ad Soyad"];

    selectedTables.forEach((table) => {
      switch (table) {
        case "details":
          combinedHeaders.push(
            ...headers.filter((h) => !combinedHeaders.includes(h))
          );
          break;
        case "education":
          combinedHeaders.push(
            ...headersEducation.filter((h) => !combinedHeaders.includes(h))
          );
          break;
        case "employment":
          combinedHeaders.push(
            ...headersEmployment.filter((h) => !combinedHeaders.includes(h))
          );
          break;
      }
    });

    return combinedHeaders;
  };

  return (
    <div>
      <TableInfoSection onChangeTable={handleTabChange} />

      <CombinedTable
        headers={getCombinedHeaders()}
        data={getPaginatedData(getCombinedData())}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
      />

      <PaginationControls
        data={getCombinedData()}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default DetailsPage;
