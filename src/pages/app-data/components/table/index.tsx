import { useState } from 'react';
import ShowModal from '../showModal';
import { SharedData } from '../sharedData';
import { TableRow, TableProps } from '../../types';
import PaginationControls from '@/pages/lead-details-page/components/Pagination Controller';
import SaveModal from '../saveModal';
import TableContent from '../tableContent';


const Table: React.FC<TableProps> = ({ searchTerm }) => {
    const [data, setData] = useState<TableRow[]>(SharedData);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrderBy, setSortOrderBy] = useState<'name' | 'date'>('name');  // 
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');
    const [dateSortOrder, setDateSortOrder] = useState<'asc' | 'desc' | ''>(''); // Sorting for date
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
        setDateSortOrder('')
        setSortOrderBy('name');
        setSortOrder(sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? '' : 'asc');
    };

    const handleDateSort = () => {

        setSortOrder('')
        setSortOrderBy('date');
        setDateSortOrder(dateSortOrder === 'asc' ? 'desc' : dateSortOrder === 'desc' ? '' : 'asc');

    };


    const parseDate = (dateStr: string) => {
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

        if (!sortOrderBy && !dateSortOrder) {
            return 0; // No sorting, original order
        }

        if (sortOrderBy === 'name') {
            const nameA = a.name?.toLowerCase() ?? '';
            const nameB = b.name?.toLowerCase() ?? '';
            return sortOrder === 'asc' ? nameA.localeCompare(nameB) : sortOrder === 'desc' ? nameB.localeCompare(nameA) : 0;
        }

        if (sortOrderBy === 'date') {
            const dateA = parseDate(a.date);
            const dateB = parseDate(b.date);

            console.log(`Row A Date: ${a.date} -> Parsed: ${dateA}`);
            console.log(`Row B Date: ${b.date} -> Parsed: ${dateB}`);

            if (isNaN(dateA) && isNaN(dateB)) {
                console.error('Both dates are invalid:', a.date, b.date);
                return 0;
            }

            if (isNaN(dateA)) return 1;  // Place invalid dates at the end
            if (isNaN(dateB)) return -1;

            return dateSortOrder === 'asc' ? dateA - dateB : dateSortOrder === 'desc' ? dateB - dateA : 0
        }
        return 0;
    });


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
                <TableContent handleSort = {handleSort} handleDateSort = {handleDateSort} currentData = {currentData} handleEditClick =  {handleEditClick}   sortOrder={sortOrder} 
    dateSortOrder={dateSortOrder}   handleDeleteClick={handleDeleteClick}/>
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




