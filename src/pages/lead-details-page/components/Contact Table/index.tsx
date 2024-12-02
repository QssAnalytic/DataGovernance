/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { GrRefresh } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

interface TableProps {
  headers: string[];
  data: { [key: string]: any }[];
}

const ContactTable: React.FC<TableProps> = ({ headers, data }) => {
  const getCapacityStyles = (capacity: string) => {
    const trimmedCapacity = capacity.trim();
    switch (trimmedCapacity) {
      case "No Way":
        return "bg-[rgba(226,25,91,0.20)] text-[#E2195B]";
      case "High":
        return "bg-[rgba(48,172,4,0.20)] text-[#30AC04]";
      case "Outstanding":
        return "bg-[rgba(60,195,183,0.20)] text-[#22BBAD]";
      case "Minimum Acceptable":
        return "bg-[rgba(255,203,5,0.20)] text-[#8A6E03]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusStyles = (status: string) => {
    const trimmedStatus = status.trim();
    switch (trimmedStatus) {
      case "Cavab gözləyirik":
        return "bg-[rgba(16,49,127,0.20)] text-[#10317F]";
      case "Maraqlanır":
        return "bg-[rgba(23,92,255,0.20)] text-[#175CFF]";
      case "Almağı düşünür":
        return "bg-[rgba(4,172,124,0.20)] text-[#04AC7C]";
      case "Görüş istəyir":
        return "bg-[rgba(151,71,255,0.20)] text-[#9747FF]";
      case "Alıb":
        return "bg-[rgba(48,172,4,0.20);] text-[#30AC04]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const columnWidths: string[] = [
    "w-[3%]", // ID
    "w-[10%]", // Ad Soyad
    "w-[13%]", // Capacity
    "w-[5%]", // Value
    "w-[15%]", // Final Status
    "w-[15%]", // Contact Number
    "w-[12%]", // Training Name
    "w-[12%]", // Last Contact Date
    "w-[15%]", // When Call Again
  ];

  return (
    <div className="overflow-x-auto mt-[20px]">
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
              className={`${rowIndex % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"}`}
            >
              {headers.map((header, cellIndex) => {
                const isCapacity = header === "Capacity";
                const isStatus = header === "Final Status";
                const capacityStyles = isCapacity
                  ? getCapacityStyles(row[header])
                  : "";
                const statusStyles = isStatus
                  ? getStatusStyles(row[header])
                  : "";

                return (
                  <td
                    key={cellIndex}
                    className={`p-[16px] text-left whitespace-nowrap text-[14px] ${
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
                className={`p-[16px] rounded-tr-[20px] rounded-br-[20px]  text-center whitespace-nowrap ${
                  columnWidths[columnWidths.length - 1]
                }`}
              >
                <div className="flex justify-center items-center space-x-4">
                  <FiEdit size={20} />
                  <GoTrash size={20} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
