import { useState } from "react";
import { FiRotateCw } from "react-icons/fi";
import PaginationControls from "@/pages/lead-details-page/components/Pagination Controller";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

export const OverviewTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 7;

    const data = [
        { id: 1, nameSname: "Ali Valiyev", bootNumber: "1", contactNumber: "+994 506564794", status: "Data Specialist" },
        { id: 2, nameSname: "Memmedqaim Xanmemmedov", bootNumber: "1", contactNumber: "+994 506564794", status: "Data Specialist" },
        { id: 3, nameSname: "Zaur Aliyev", bootNumber: "2", contactNumber: "+994 504564794", status: "Developer" },
        { id: 4, nameSname: "Leyla Huseynova", bootNumber: "3", contactNumber: "+994 501234567", status: "Designer" },
        { id: 5, nameSname: "Nigar Mammadova", bootNumber: "2", contactNumber: "+994 503214567", status: "Project Manager" },
        { id: 6, nameSname: "Samir Sadigov", bootNumber: "3", contactNumber: "+994 506564793", status: "Tester" },
        { id: 7, nameSname: "Rashad Karimov", bootNumber: "4", contactNumber: "+994 506564792", status: "Data Analyst" },
        { id: 8, nameSname: "Elvin Ismayilov", bootNumber: "5", contactNumber: "+994 506564791", status: "Scrum Master" },
        { id: 9, nameSname: "Ayten Gasimova", bootNumber: "6", contactNumber: "+994 506564790", status: "Product Owner" },
        { id: 10, nameSname: "Araz Babayev", bootNumber: "4", contactNumber: "+994 506564789", status: "Developer" },
        { id: 11, nameSname: "Narmin Abbasova", bootNumber: "5", contactNumber: "+994 506564788", status: "Designer" },
        { id: 12, nameSname: "Fuad Taghiyev", bootNumber: "6", contactNumber: "+994 506564787", status: "Data Scientist" },
        { id: 13, nameSname: "Kamran Rustamov", bootNumber: "7", contactNumber: "+994 506564786", status: "Data Specialist" },
        { id: 14, nameSname: "Sima Alizadeh", bootNumber: "8", contactNumber: "+994 506564785", status: "UI/UX Designer" },
        { id: 15, nameSname: "Vahid Aliyev", bootNumber: "9", contactNumber: "+994 506564784", status: "Developer" },
        { id: 16, nameSname: "Gunay Rzayeva", bootNumber: "10", contactNumber: "+994 506564783", status: "Project Manager" },
        { id: 17, nameSname: "Orkhan Aliyev", bootNumber: "11", contactNumber: "+994 506564782", status: "Tester" },
        { id: 18, nameSname: "Ulvi Aliyev", bootNumber: "12", contactNumber: "+994 506564781", status: "Scrum Master" },
        { id: 19, nameSname: "Sabina Gasimova", bootNumber: "13", contactNumber: "+994 506564780", status: "Product Owner" },
        { id: 20, nameSname: "Nurlan Huseynov", bootNumber: "14", contactNumber: "+994 506564779", status: "Data Specialist" },
    ];

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
                                <FiTrash2 className="w-[24px] h-[24px] hover:cursor-pointer"/>
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
