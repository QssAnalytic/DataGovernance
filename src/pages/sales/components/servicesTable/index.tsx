import { CombinedTableData } from "../sharedData";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { MdOutlineRefresh } from "react-icons/md";
import PaginationControls from "@/pages/lead-details-page/components/Pagination Controller";
import ShowModal from "@/pages/app-data/components/showModal";
import { useState } from "react";
import { CombinedDataTypes, SalesTablePInputProps } from "../../types";
import EditModal from "../editModal";
import EditAndDelete from "../editAndDelete";


const ServicesTable: React.FC<SalesTablePInputProps> = ({ searchTerm }) => {

    const [data, setData] = useState<CombinedDataTypes[]>(CombinedTableData);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrderBy, setSortOrderBy] = useState<'name' | 'date'>('name');  // 
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [deleteRowId, setDeleteRowId] = useState<number | null>(null);


    //Deleting items from table
    const handleDeleteClick = (id: number) => {
        setDeleteRowId(id);
        setShowModal(true);
    };

    //sorting by name 
    const handleSort = () => {
        setSortOrderBy('name');
        setSortOrder(sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? '' : 'asc');
    }


    const sortedData = data.slice().sort((a, b) => {

        if (!sortOrderBy) {
            return 0; // No sorting, original order
        }

        if (sortOrderBy === 'name') {
            const nameA = a.name?.toLowerCase() ?? '';
            const nameB = b.name?.toLowerCase() ?? '';
            return sortOrder === 'asc' ? nameA.localeCompare(nameB) : sortOrder === 'desc' ? nameB.localeCompare(nameA) : 0;
        }


        return 0;
    });


    const filteredData = sortedData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())


    );

    const handleConfirmDelete = () => {
        if (deleteRowId !== null) {
            setData(data.filter((row) => row.id !== deleteRowId));
        }
        setShowModal(false);
        setDeleteRowId(null);
    };



    const handleCancelDelete = () => {
        setShowModal(false);
        setDeleteRowId(null);
    };


    const rowsPerPage = 10; // Number of rows to display per page



    // Pagination logic
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);



    return (
        <div >
            <div className=" relative overflow-x-auto overflow-y-auto h-[350px]">
                <table className="min-w-[1300px]  table-auto w-full rounded-xl border-collapse ">

                    <thead className="bg-[#FEFADF]  sticky rounded-xl top-0 z-10 shadow-md">
                        <tr className="text-left">
                            <th className=" p-2  font-semibold  text-center font-montserrat  text-[#000000]">ID</th>
                            <th className="p-2">
                                <div className="flex gap-1">
                                    <HiOutlineChevronUpDown
                                        onClick={handleSort}
                                        className={`cursor-pointer w-5 h-5 ${sortOrder === "asc"
                                            ? "text-[#ff2c2c]"
                                            : sortOrder === "desc"
                                                ? "text-[#4BB543]"
                                                : "text-gray-600"
                                            }`}
                                    />
                                    <p className="font-montserrat text-sm mt-[2px] font-bold leading-normal text-[#000000]">  Ad və Soyad    </p>
                                </div>
                            </th>


                            <th className="border-none text-center   p-2 font-montserrat text-sm font-bold leading-normal text-[#000000]">
                                Career
                            </th>
                            <th className="font-montserrat text-center   text-sm p-2 font-bold leading-normal text-[#000000]">
                                Co-working
                            </th>
                            <th className="font-montserrat  text-center   text-sm p-2 font-bold leading-normal text-[#000000]">
                                Mentorship
                            </th>
                            <th className="font-montserrat text-center text-sm p-2 font-bold leading-normal text-[#000000]">
                                Experience
                            </th>
                            <th className="font-montserrat text-center  text-sm  p-2 font-bold leading-normal text-[#000000]">
                                R
                            </th>
                            <th className="font-montserrat text-center   text-sm p-2 font-bold leading-normal text-[#000000]">
                                SQL
                            </th>

                            <th className="font-montserrat text-center   text-sm  p-2 font-bold leading-normal text-[#000000]">
                                Python
                            </th>

                            <th className="font-montserrat  text-center  text-sm p-2 font-bold leading-normal text-[#000000]">
                                Big Data
                            </th>

                            <th className="font-montserrat text-center   text-sm p-2 font-bold leading-normal text-[#000000]">
                                Tableau
                            </th>
                            <th className="font-montserrat text-center   text-sm p-2 font-bold leading-normal text-[#000000]">
                                SPSS
                            </th>
                            <th className="py-2 px-5">
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

                                    <td className="p-5 text-center text-sm text-gray-700">{item.id}</td>

                                    <td className="font-montserrat   p-5 text-[14px] font-medium leading-normal text-[#000000]">
                                        {item.name}
                                    </td>



                                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                        <input

                                            type="checkbox"
                                            className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                                        />
                                    </td>

                                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                        <input

                                            type="checkbox"
                                            className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                                        />
                                    </td>


                                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                        <input

                                            type="checkbox"
                                            className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                                        />
                                    </td>

                                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                        <input
                                            type="checkbox"
                                            className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                                        />
                                    </td>


                                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                        <input
                                            type="checkbox"
                                            className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                                        />
                                    </td>

                                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                        <input
                                            type="checkbox"
                                            className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                                        />
                                    </td>

                                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                        <input

                                            type="checkbox"
                                            className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                                        />
                                    </td>

                                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                        <input
                                            type="checkbox"
                                            className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                                        />
                                    </td>

                                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                        <input
                                            type="checkbox"
                                            className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                                        />
                                    </td>

                                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                        <input
                                            type="checkbox"
                                            className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                                        />
                                    </td>
                                    <td className="p-5 text-center">
                                    <EditAndDelete  setIsEditModalOpen = {setIsEditModalOpen} handleDeleteClick = {handleDeleteClick} ItemId = {item.id}/>
                                    </td>
                                </>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="  flex justify-center">
                <PaginationControls
                    data={data}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    rowsPerPage={rowsPerPage}
                />
            </div>

            {/* save content after editing */}
            <EditModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
            />
            {showModal && (
                // my delete modal
                <ShowModal handleCancelDelete={handleCancelDelete} handleConfirmDelete={handleConfirmDelete} />
            )}
        </div>

    )
}
export default ServicesTable;