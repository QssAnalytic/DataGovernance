import React from "react";
import { GrRefresh } from "react-icons/gr";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { EmploymentTableProps, EmploymentRowData } from "../../types";

export const EmploymentTable: React.FC<EmploymentTableProps> = ({
  headers,
  data,
  currentPage,
  rowsPerPage,
}) => {
  const columnWidths: string[] = [
    "w-[3%]",   // ID
    "w-[15%]",  // Ad Soyad
    "w-[25%]",  // Workplace
    "w-[20%]",  // Position
    "w-[37%]",  // Note
  ];

  return (
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
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"
                }`}
              >
                {headers.map((header, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-[16px] py-[8px] text-left whitespace-nowrap text-[14px] ${
                      columnWidths[cellIndex]
                    }`}
                  >
                    {row[header as keyof EmploymentRowData]}
                  </td>
                ))}
                <td className="p-[16px] text-center">
                  <div className="flex gap-x-[12px] justify-center">
                    <FiEdit className="w-[24px] h-[24px] hover:cursor-pointer" />
                    <FiTrash2 className="w-[24px] h-[24px] hover:cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
