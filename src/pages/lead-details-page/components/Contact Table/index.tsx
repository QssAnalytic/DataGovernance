import React from "react";
import { GrRefresh } from "react-icons/gr";

import {
  getCapacityStyles,
  getStatusStyles,
} from "@/helpers/changinColorTable";
import EditDeleteModal from "../Edit Delete Section";
import { ContactTableProps } from "../../types";

const ContactTable: React.FC<ContactTableProps> = ({
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
    "w-[13%]", // Capacity
    "w-[5%]", // Value
    "w-[15%]", // Final Status
    "w-[15%]", // Contact Number
    "w-[12%]", // Training Name
    "w-[14%]", // Last Contact Date
    "w-[13%]", // When Call Again
  ];

  return (
    <div>
      <div className="overflow-x-auto mt-[20px]">
        <div className="max-h-[450px] overflow-y-auto no-scrollbar">
          <table className="table-auto w-full border-collapse">
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

            <tbody>
              {currentData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${
                    rowIndex % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"
                  }`}
                >
                  {headers.map((header, cellIndex) => {
                    const isCapacity = header === "Capacity";
                    const isStatus = header === "Final Status";
                    const capacityStyles = isCapacity
                      ? getCapacityStyles(String(row[header]))
                      : "";
                    const statusStyles = isStatus
                      ? getStatusStyles(String(row[header]))
                      : "";

                    return (
                      <td
                        key={cellIndex}
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
                            isCapacity || isStatus
                              ? "py-2 px-[16px] text-center"
                              : "p-0"
                          } text-[14px] rounded-[16px] ${capacityStyles} ${statusStyles}`}
                        >
                          {row[header]}
                        </span>
                      </td>
                    );
                  })}
                  <td
                    key={"icons"}
                    className={`p-[16px] rounded-tr-[20px] rounded-br-[20px] text-center whitespace-nowrap ${
                      columnWidths[columnWidths.length - 1]
                    }`}
                  >
                    <EditDeleteModal />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactTable;
