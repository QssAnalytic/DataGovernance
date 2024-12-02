/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

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

  return (
    <div className="overflow-x-auto mt-[20px]">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-[#F6F6F6]">
            {headers.map((header, index) => (
              <th
                key={index}
                className={`p-[16px] font-[500] text-[12px] text-[#000] ${
                  index === 0
                    ? "text-center rounded-tl-[20px] rounded-bl-[20px]"
                    : index === headers.length - 1
                    ? "text-left rounded-tr-[20px] rounded-br-[20px]"
                    : "text-left"
                }`}
              >
                {header}
              </th>
            ))}
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
                const capacityStyles = isCapacity
                  ? getCapacityStyles(row[header])
                  : "";

                return (
                  <td
                    key={cellIndex}
                    className={`px-[16px] py-[8px] text-[14px] ${
                      cellIndex === 0
                        ? "text-center rounded-tl-[20px] rounded-bl-[20px]"
                        : cellIndex === headers.length - 1
                        ? "rounded-tr-[20px] rounded-br-[20px]"
                        : "text-left"
                    }`}
                  >
                    <span
                      className={`inline-block w-[100%] ${
                        isCapacity
                          ? "py-2 px-[16px] text-[14px] text-center rounded-[16px]"
                          : ""
                      } ${capacityStyles}`}
                    >
                      {row[header]}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
