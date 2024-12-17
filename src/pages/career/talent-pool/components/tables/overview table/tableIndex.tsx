import { useState } from "react";
import { FiRotateCw } from "react-icons/fi";
import PaginationControls from "@/pages/lead-details-page/components/Pagination Controller";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { ExportedData } from "@/pages/career/talent-pool/components/ExportedData";

export const OverviewTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 7;

   const [data, setData] = useState(ExportedData)

    // Add delete handler
    const handleDelete = (id: number) => {
        setData(prevData => prevData.filter(item => item.id !== id));
        
        // Adjust current page if necessary after deletion
        const totalPages = Math.ceil((data.length - 1) / rowsPerPage);
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    };

    const paginatedData = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <div className="w-full">
            {/* Table Header */}
            <div className="tableHeader flex justify-between items-center">
                <div className="leftHeader flex">
                    <div className="headerTD p-[16px] font-bold text-[12px] w-[46px]">ID</div>
                    <div className="headerTD p-[16px] font-bold text-[12px] w-[171px]">Ad və Soyad</div>
                    <div className="headerTD p-[16px] font-bold text-[12px] w-[123px]">Bootcamp №</div>
                    <div className="headerTD p-[16px] font-bold text-[12px] w-[150px]">Contact Number</div>
                    <div className="headerTD p-[16px] font-bold text-[12px] w-[170px]">Status</div>
                </div>
                <div className="rightHeader w-[95px] p-[10px] flex items-center justify-center">
                    <FiRotateCw className="w-[24px] h-[24px]" />
                </div>
            </div>

            {/* Table Body */}
            <div className="tableBody h-[408px]">
                {paginatedData.map((rowData) => (
                    <div className="row flex justify-between items-center" key={rowData.id}>
                        <div className="rowLeft flex">
                            <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[46px]">{rowData.id}</div>
                            <div className="p-[16px] flex items-center font-medium text-[14px] w-[171px]">{rowData.nameSname}</div>
                            <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[123px]">{rowData.bootNumber}</div>
                            <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{rowData.contactNumber}</div>
                            <div className="p-[16px] flex items-center font-medium text-[14px] w-[170px]">{rowData.status}</div>
                        </div>
                        <div className="rowRight flex gap-x-[12px] w-[95px] justify-center">
                            <div className="">
                                <FiEdit className="w-[24px] h-[24px] hover:cursor-pointer"/>
                            </div>
                            <div className="">
                                <FiTrash2 
                                    className="w-[24px] h-[24px] hover:cursor-pointer"
                                    onClick={() => handleDelete(rowData.id)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center">
                <PaginationControls
                    data={data}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    rowsPerPage={rowsPerPage}
                />
            </div>
        </div>
    );
};
