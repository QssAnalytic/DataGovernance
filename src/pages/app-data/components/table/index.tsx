import { useEffect, useState } from 'react';
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineRefresh } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import ShowModal from '../showModal';
import { SharedData } from '../sharedData';
import { TableRow, TableProps } from '../../types';
import PaginationControls from '@/pages/lead-details-page/components/Pagination Controller';
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import SaveModal from '../SaveModal';


const Table: React.FC<TableProps> = ({ searchTerm }) => {
    const [data, setData] = useState<TableRow[]>(SharedData);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrderBy, setSortOrderBy] = useState<'name' | 'date'>('name');  // 
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [dateSortOrder, setDateSortOrder] = useState<'asc' | 'desc'>('asc'); // Sorting for date
    const [showModal, setShowModal] = useState(false);
    const [deleteRowId, setDeleteRowId] = useState<number | null>(null);
    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Partial<TableRow>>({});

    const handleDeleteClick = (id: number) => {
        setDeleteRowId(id);
        setShowModal(true);
    };
    const handleConfirmDelete = () => {
        if (deleteRowId !== null) {
            setData(data.filter((row) => row.id !== deleteRowId));
        }
        setShowModal(false);
        setDeleteRowId(null);
    };

    const handleEditClick = (row: TableRow) => {
        setSelectedRow(row);
        setIsSaveModalOpen(true);
    };


    const handleSort = () => {
        setSortOrderBy('name');
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleDateSort = () => {
        setSortOrderBy('date');
        setDateSortOrder(dateSortOrder === 'asc' ? 'desc' : 'asc');
     
    };
        
    const parseDate = (dateStr:any) => {
        if (!dateStr) return NaN;
    
        const parts = dateStr.split('.');
        if (parts.length !== 3) {
            console.error(`Invalid date format: ${dateStr}`);
            return NaN;
        }
    
        const [day, month, year] = parts;
        const formattedDate = `${year}-${month}-${day}`;
        const timestamp = new Date(formattedDate).getTime();
    
        if (isNaN(timestamp)) {
            console.error(`Invalid date parsing for: ${dateStr}`);
            return NaN;
        }
    
        console.log(`Parsed date ${dateStr} -> ${formattedDate} -> Timestamp: ${timestamp}`);
    
        return timestamp;
    };
    

    const sortedData = data.slice().sort((a, b) => {

        if (sortOrderBy === 'name') {
            const nameA = a.name?.toLowerCase() ?? '';
            const nameB = b.name?.toLowerCase() ?? '';
            return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        }
    


        if (sortOrderBy === 'date') {
            const dateA = parseDate(a.date);
            const dateB = parseDate(b.date);
    
            console.log(`Row A Date: ${a.date} -> Parsed: ${dateA}`);
            console.log(`Row B Date: ${b.date} -> Parsed: ${dateB}`);
    
            if (isNaN(dateA) && isNaN(dateB) ) {
                console.error('Both dates are invalid:', a.date, b.date);
                return 0;
            }
    
            if (isNaN(dateA)) return 1;  // Place invalid dates at the end
            if (isNaN(dateB)) return -1;
    
            return dateSortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        }
        return 0;
    });
    

 
    
    

    console.log('Data before sorting:', data.map(row => ({
        id: row.id,
        name: row.name,
        date: row.date
    })));
 
    const handleCancelDelete = () => {
        setShowModal(false);
        setDeleteRowId(null);
    };



    const handleModalChange = (field: keyof TableRow, value: string) => {
        setSelectedRow({ ...selectedRow, [field]: value });
    };

    const handleSaveModal = () => {
        setData(data.map(row => (row.id === selectedRow.id ? { ...row, ...selectedRow } : row)));
        setIsSaveModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsSaveModalOpen(false);
    };


    const filteredData = sortedData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.includes(searchTerm) ||
        item.applicationSource.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.trainingName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const rowsPerPage = 20; // Number of rows to display per page

    // Pagination logic
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);


    return (
        <div>
            <div className='max-w-full flex overflow-y-auto max-h-[650px]'>
                <table className="min-w-[1300px] table-auto w-full rounded-lg border-collapse border border-gray-200">
                    <thead className="bg-[#FAFAFA] sticky top-0 z-5">
                        <tr className="text-left">
                            <th className="p-3 text-sm font-semibold text-gray-600">ID</th>
                            <th className="border-none text-center px-3 py-2 font-montserrat text-[22px] font-bold leading-normal text-[#000000]">
                                <div className="flex justify-center">
                                    <HiOutlinePhone className="w-[24px] h-[24px]" />
                                </div>
                            </th>
                            <th onClick={handleSort}>
                                <div className="flex gap-1">
                                    <HiOutlineChevronUpDown className="w-5 h-5" />
                                    <p className="font-montserrat text-[12px] font-bold leading-normal text-[#000000]">Ad və Soyad</p>
                                </div>
                            </th>
                            <th className="font-montserrat text-[12px] font-bold leading-normal text-[#000000]">Application Source</th>
                            <th className="font-montserrat text-[12px] font-bold leading-normal text-[#000000]">Training Name</th>
                            <th className="font-montserrat text-[12px] font-bold leading-normal text-[#000000]">Mobil nömrə</th>
                            <th className="cursor-pointer" onClick={handleDateSort}>
                                <div className="flex gap-1">
                                    <HiOutlineChevronUpDown className="w-5 h-5" />
                                    <p className="font-montserrat text-[12px] font-bold leading-normal text-[#000000]">Tarix</p>
                                </div>
                            </th>
                            <th>
                                <div className="ml-[7px] mt-2 w-[24px] h-[24px]">
                                    <MdOutlineRefresh className="w-[24px] h-[24px]" />
                                </div>
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {currentData.map(item => (
                            <tr key={item.id} className="border-b even:bg-[#fafafa] odd:bg-white">

                                <>
                                    <td className="p-3 text-sm text-gray-700">{item.id}</td>
                                    <td className="border-none text-center px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000]" >
                                        <input type="checkbox" className="appearance-none w-4 h-4 border checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2" />
                                    </td>
                                    <td className="font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.name}</td>
                                    <td className="font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.applicationSource}</td>
                                    <td className="font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.trainingName}</td>
                                    <td className="font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.phone}</td>
                                    <td className="font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.date}</td>
                                    <td className="text-center">
                                        <div className="flex gap-3">
                                            <FiEdit className="cursor-pointer w-5 h-5" onClick={() => handleEditClick(item)} />
                                            <GoTrash className="cursor-pointer w-5 h-5" onClick={() => handleDeleteClick(item.id)} />
                                        </div>
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
            <SaveModal
                isOpen={isSaveModalOpen}
                onClose={handleCloseModal}
                rowData={selectedRow}
                onSave={handleSaveModal}
                onChange={handleModalChange}
            />

            {showModal && (
                <ShowModal handleCancelDelete={handleCancelDelete} handleConfirmDelete={handleConfirmDelete} />
            )}
        </div>


    );
};

export default Table;




