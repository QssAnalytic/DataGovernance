import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { MdOutlineRefresh } from "react-icons/md";
import { TableContentProps } from "../../types";


const TableContent: React.FC<TableContentProps> = ({
    handleSort,
    handleDateSort,
    handleEditClick,
    handleDeleteClick,
    currentData,
    sortOrder,
    dateSortOrder,
}) => {
    return (
        <table className="min-w-[1300px]  table-auto w-full rounded-lg border-collapse border border-gray-200">
            <thead className="bg-[#FAFAFA] sticky top-0 z-10 shadow-md">
                <tr className="text-left">
                    <th className="p-3 text-sm font-semibold text-gray-600">ID</th>
                    <th className="border-none text-center px-3 py-2 font-montserrat text-[22px] font-bold leading-normal text-[#000000]">
                        <div className="flex justify-center">
                            <HiOutlinePhone className="w-[24px] h-[24px]" />
                        </div>
                    </th>
                    <th className="py-2">
                        <div className="flex gap-1">
                            <HiOutlineChevronUpDown
                                onClick={handleSort}
                                // className={`cursor-pointer w-5 h-5 ${sortOrder === "asc" ? "text-[#ff2c2c]" : sortOrder === "desc" ? "text-[#4BB543]" : "text-gray-600"
                                //     }`}
                                className={`cursor-pointer w-5 h-5 ${
                                    sortOrder === "asc"
                                      ? "text-[#ff2c2c]"
                                      : sortOrder === "desc"
                                      ? "text-[#4BB543]"
                                      : "text-gray-600"
                                  }`}
                            />
                            <p className="font-montserrat text-[12px] font-bold leading-normal text-[#000000]">
                                Ad və Soyad
                            </p>
                        </div>
                    </th>
                    <th className="font-montserrat text-[12px] py-2 font-bold leading-normal text-[#000000]">
                        Application Source
                    </th>
                    <th className="font-montserrat text-[12px] py-2 font-bold leading-normal text-[#000000]">
                        Training Name
                    </th>
                    <th className="font-montserrat text-[12px] py-2 px-1 font-bold leading-normal text-[#000000]">
                        Mobil nömrə
                    </th>
                    <th>
                        <div className="flex gap-1">
                            <HiOutlineChevronUpDown
                                onClick={handleDateSort}
                                className={`cursor-pointer w-5 h-5 ${dateSortOrder === "asc" ? "text-[#ff2c2c]" : dateSortOrder === "desc" ? "text-[#4BB543]" : "text-gray-600"
                                    }`}

                            />
                            <p className="font-montserrat text-[12px] font-bold leading-normal text-[#000000]">
                                Tarix
                            </p>
                        </div>
                    </th>
                    <th className="py-2">
                        <div className="ml-[7px] mt-2 w-[24px] h-[24px]">
                            <MdOutlineRefresh className="w-[24px] h-[24px]" />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {currentData.map((item) => (
                    <tr
                        key={item.id}
                        className="border-b even:bg-[#fafafa] odd:bg-white"
                    >
                        <>
                            <td className="p-3 text-sm text-gray-700">{item.id}</td>
                            <td className="border-none text-center px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                <input
                                    type="checkbox"
                                    className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                                />
                            </td>
                            <td className="font-montserrat py-3 text-[14px] font-medium leading-normal text-[#000000]">
                                {item.name}
                            </td>
                            <td className="font-montserrat py-3 text-[14px] font-medium leading-normal text-[#000000]">
                                {item.applicationSource}
                            </td>
                            <td className="font-montserrat py-3 text-[14px] font-medium leading-normal text-[#000000]">
                                {item.trainingName}
                            </td>
                            <td className="font-montserrat py-3 text-[14px] font-medium leading-normal text-[#000000]">
                                {item.phone}
                            </td>
                            <td className="font-montserrat py-3 text-[14px] font-medium leading-normal text-[#000000]">
                                {item.date}
                            </td>
                            <td className="py-3 text-center">
                                <div className="flex gap-3">
                                    <FiEdit
                                        className="cursor-pointer w-5 h-5"
                                        onClick={() => handleEditClick(item)}
                                    />
                                    <GoTrash
                                        className="cursor-pointer w-5 h-5"
                                        onClick={() => handleDeleteClick(item.id)}
                                    />
                                </div>
                            </td>
                        </>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableContent;
