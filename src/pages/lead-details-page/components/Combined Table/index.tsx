import React from "react";
import { GrRefresh } from "react-icons/gr";
import EditDeleteModal from "../Edit Delete Section";
import { CombinedTableProps } from "../../types";
import {
  getCapacityStyles,
  getStatusStyles,
} from "@/helpers/changinColorTable";

const CombinedTable: React.FC<CombinedTableProps> = ({
  headers,
  data,
  currentPage,
  rowsPerPage,
}) => {
  const columnWidths = [
    "w-[3%]",
    "w-[10%]",
    "w-[13%]",
    "w-[5%]",
    "w-[15%]",
    "w-[15%]",
    "w-[12%]",
    "w-[14%]",
    "w-[13%]",
  ];

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="overflow-x-auto mt-[20px]">
      <div className="max-h-[450px] overflow-y-auto no-scrollbar">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-[#E9EDCA] sticky top-0 z-10">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={String(header)}
                  className={`p-[16px] font-[500] text-[12px] text-[#000] ${
                    columnWidths[index] || "w-auto"
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
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"}
              >
                {headers.map((header, cellIndex) => {
                  const isCapacity = header === "Capacity";
                  const isStatus = header === "Final Status";

                  const cellData = row[header as keyof typeof row];
                  const capacityStyles = isCapacity
                    ? getCapacityStyles(String(cellData))
                    : "";
                  const statusStyles = isStatus
                    ? getStatusStyles(String(cellData || ""))
                    : "";

                  return (
                    <td
                      key={cellIndex}
                      className={`px-[16px] py-[8px] text-left text-[14px] ${
                        columnWidths[cellIndex] || "w-auto"
                      } ${
                        cellIndex === 0
                          ? "rounded-tl-[20px] rounded-bl-[20px]"
                          : ""
                      }`}
                    >
                      <span
                        className={`inline-block w-full ${
                          isCapacity || isStatus
                            ? "py-2 px-[16px] text-center"
                            : "p-0"
                        } text-[14px] rounded-[16px] ${capacityStyles} ${statusStyles}`}
                      >
                        {cellData}
                      </span>
                    </td>
                  );
                })}
                <td className="p-[16px] text-center rounded-tr-[20px] rounded-br-[20px]">
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

export default CombinedTable;
