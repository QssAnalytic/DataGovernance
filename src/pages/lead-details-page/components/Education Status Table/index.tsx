import React from "react";
import { GrRefresh } from "react-icons/gr";
import { getSillabusStyles } from "@/helpers/changinColorTable"; // Ensure the path is correct
import EditDeleteModal from "../Edit Delete Section"; // Ensure this component exists and is implemented correctly
import { ContactTableProps } from "../../types"; // Verify that the `ContactTableProps` type is correct

const EducationStatusTable: React.FC<ContactTableProps> = ({
  headers,
  data,
  currentPage,
  rowsPerPage,
}) => {
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const columnWidths: string[] = [
    "w-[3%]", // ID
    "w-[10%]", // Ad Soyad
    "w-[13%]", // Background knowledge
    "w-[5%]", // English level
    "w-[15%]", // Sillabusla tanışlıq
    "w-[15%]", // Bachelor Uni
    "w-[12%]", // Uni major
    "w-[14%]", // Entrance score
    "w-[13%]", // Master Uni
  ];

  return (
    <div className="overflow-x-auto mt-[20px]">
      <div className="max-h-[450px] overflow-y-auto no-scrollbar">
        <table className="table-auto w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-[#F6F6F6] sticky top-0 z-10">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`p-[16px] font-[500] text-[12px] text-[#000] ${
                    columnWidths[index]
                  } text-left ${
                    index === 0 ? "rounded-tl-[20px] rounded-bl-[20px]" : ""
                  }`}
                >
                  {header}
                </th>
              ))}
              <th className="w-[20%] p-[16px] text-center font-[500] text-[12px] text-[#000] rounded-tr-[20px] rounded-br-[20px]">
                <div className="flex justify-center items-center">
                  <GrRefresh size={20} />
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"
                }`}
              >
                {headers.map((header, cellIndex) => {
                  const isSillabus = header === "Sillabusla tanışlıq"; // Check for "Sillabusla tanışlıq"
                  const isEntranceScore = header === "Entrance score";

                  // Conditional styles
                  const entranceScoreStyle =
                    isEntranceScore && row[header] > 600
                      ? "text-green-500"
                      : "";

                  const sillabusStyles = isSillabus
                    ? getSillabusStyles(row[header]) // Apply sillabus styles
                    : "";

                  return (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className={`px-[16px] py-[8px] text-left whitespace-nowrap text-[14px] ${
                        columnWidths[cellIndex]
                      } ${
                        cellIndex === 0
                          ? "rounded-tl-[20px] rounded-bl-[20px]"
                          : ""
                      }`}
                    >
                      <span
                        className={`inline-block w-full ${
                          isSillabus ? "py-2 px-[16px] text-center" : "p-0"
                        } text-[14px] rounded-[16px] ${entranceScoreStyle} ${sillabusStyles}`}
                      >
                        {row[header]}
                      </span>
                    </td>
                  );
                })}
                {/* Action column */}
                <td
                  className={`p-[16px] rounded-tr-[20px] rounded-br-[20px] text-center whitespace-nowrap`}
                >
                  <EditDeleteModal />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EducationStatusTable;
