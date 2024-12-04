import { useState } from 'react';
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineRefresh } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

interface TableRow {
    id: number;
    name: string;
    phone: string;
    applicationSource: string;
    trainingName: string;
    date: string;
}

interface TableProps {
    searchTerm: string;
}

const Table: React.FC<TableProps> = ({ searchTerm }) => {
    const [data, setData] = useState<TableRow[]>([
        { id: 1, name: 'Fidan Mammadova', applicationSource: 'DSA Instagram', trainingName: 'Data Science Bootcamp', phone: '+994 552345678', date: '11.05.2024' },
        { id: 2, name: 'Ali Hasanov', applicationSource: 'LinkedIn', trainingName: 'Web Development', phone: '+994 502345678', date: '12.05.2024' },
        { id: 3, name: 'Nigar Safarova', applicationSource: 'Google Ads', trainingName: 'AI & ML Course', phone: '+994 552345679', date: '13.05.2024' },
        { id: 4, name: 'Javid Ismayilov', applicationSource: 'Facebook', trainingName: 'UI/UX Design', phone: '+994 702345678', date: '14.05.2024' },
        { id: 5, name: 'Leyla Huseynova', applicationSource: 'Referral', trainingName: 'Data Science Bootcamp', phone: '+994 502345679', date: '15.05.2024' },
        { id: 6, name: 'Elchin Rahimov', applicationSource: 'Website', trainingName: 'Cybersecurity', phone: '+994 552345680', date: '16.05.2024' },
        { id: 7, name: 'Sabina Karimova', applicationSource: 'DSA Instagram', trainingName: 'Cloud Computing', phone: '+994 702345679', date: '17.05.2024' },
        { id: 8, name: 'Murad Guliyev', applicationSource: 'LinkedIn', trainingName: 'DevOps', phone: '+994 552345681', date: '18.05.2024' },
        { id: 9, name: 'Aysel Mehdiyeva', applicationSource: 'Referral', trainingName: 'Product Management', phone: '+994 502345680', date: '19.05.2024' },
        { id: 10, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 11, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 12, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 13, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 14, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 15, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 16, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 17, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 18, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 19, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 20, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 21, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 22, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 23, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 24, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 25, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 26, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 27, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 28, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 29, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
        { id: 30, name: 'Rustam Aliyev', applicationSource: 'Google Ads', trainingName: 'Blockchain', phone: '+994 702345681', date: '20.05.2024' },
    ]);
    const [editRowId, setEditRowId] = useState<number | null>(null);
    const [editFormData, setEditFormData] = useState<Partial<TableRow>>({});

    const [showModal, setShowModal] = useState(false);
    const [deleteRowId, setDeleteRowId] = useState<number | null>(null);


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

    const handleCancelDelete = () => {
        setShowModal(false);
        setDeleteRowId(null);
    };
    const handleEditClick = (row: TableRow) => {
        setEditRowId(row.id);
        setEditFormData(row);
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof TableRow) => {
        setEditFormData({ ...editFormData, [field]: e.target.value });
    };

    const handleSave = (id: number) => {
        setData(data.map(row => row.id === id ? { ...row, ...editFormData } : row));
        setEditRowId(null);
        setEditFormData({});
    };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.includes(searchTerm) ||
        item.applicationSource.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.trainingName.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10; // Number of rows to display per page

    // Pagination logic
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };
    return (
        <div className=" overflow-y-scroll flex rounded-lg  ">
            <table className="min-w-full table-auto rounded-lg border-collapse border border-gray-200 ">
                <thead className="bg-[#FAFAFA]  rounded-lg">
                    <tr className="text-left">
                        <th className="p-3 text-sm font-semibold text-gray-600">ID</th>
                        <th className="border-none text-center px-3 py-2 font-montserrat text-[22px] font-bold leading-normal text-[#000000]">
                            <div className='flex justify-center'>
                            < HiOutlinePhone className="w-[24px] h-[24px]" />

                            </div>
                            </th>
                        <th className=" font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Ad və Soyad</th>
                        <th className="font-montserrat text-[12px] font-medium leading-normal text-[#000000] ">Application Source</th>
                        <th className=" font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Training Name</th>
                        <th className=" font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Mobil nömrə</th>
                        <th className=" font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Tarix</th>
                        <div className=" ml-[7px]  w-[24px] h-[24px] ">
                            <MdOutlineRefresh className="w-[24px] h-[24px]" />
                        </div>

                    </tr>
                </thead>
                <tbody>
                    {currentData.map(item => (
                        <tr key={item.id} className="border-b even:bg-[#fafafa] odd:bg-white">
                            {editRowId === item.id ? (
                                <>
                                    <td className="p-3 text-sm text-gray-700">{item.id}</td>
                                    <td className="p-3">
                                        <input
                                            value={editFormData.name || ''}
                                            onChange={(e) => handleFormChange(e, 'name')}
                                            className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="p-3">
                                        <input
                                            value={editFormData.applicationSource || ''}
                                            onChange={(e) => handleFormChange(e, 'applicationSource')}
                                            className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="p-3">
                                        <input
                                            value={editFormData.trainingName || ''}
                                            onChange={(e) => handleFormChange(e, 'trainingName')}
                                            className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="p-3">
                                        <input
                                            value={editFormData.phone || ''}
                                            onChange={(e) => handleFormChange(e, 'phone')}
                                            className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="p-3">
                                        <input
                                            value={editFormData.date || ''}
                                            onChange={(e) => handleFormChange(e, 'date')}
                                            className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="p-3 text-center">
                                        <button
                                            onClick={() => handleSave(item.id)}
                                            className="px-3 py-2 bg-[#22385F] text-white rounded-lg text-sm "
                                        >
                                            Save
                                        </button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="p-3 text-sm text-gray-700">{item.id}</td>
                                    <td className="border-none  text-center  px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000]" >
                                        <input type="checkbox" className="appearance-none w-4 h-4 border  checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa]  checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2" />
                                    </td>
                                    <td className=" font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.name}</td>
                                    <td className=" font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.applicationSource}</td>
                                    <td className=" font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.trainingName}</td>
                                    <td className=" font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.phone}</td>
                                    <td className=" font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.date}</td>
                                    <td className=" text-center">
                                        <div className="flex gap-3">
                                            <FaRegEdit className="cursor-pointer w-5 h-5" onClick={() => handleEditClick(item)} />
                                            <RiDeleteBinLine className="cursor-pointer w-5 h-5" onClick={() => handleDeleteClick(item.id)} />
                                        </div>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 border-[#22385F] border border-[0.5px] rounded-lg ${currentPage === index + 1 ? 'bg-[#22385F] text-white' : 'bg-white'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center   bg-[#000000] rounded-lg bg-opacity-70">
                        <div className="bg-white p-6 rounded-lg shadow-custom w-[328px] h-[153px]">
                            <h2 className="text-lg font-semibold">
                                Əminsinizmi ?
                            </h2>

                            <div className="mt-4 flex justify-center space-x-2">
                                <button
                                    onClick={handleCancelDelete}
                                    className="w-[140px] h-[43px] py-[12] px-[16px] rounded-lg flex justify-center items-center gap-12px bg-[#fff] border border-[1px] font-montserrat border-[#22385F] text-[#22385F] text-[14px] font-medium"
                                >
                                    Xeyr
                                </button>
                                <button
                                    onClick={handleConfirmDelete}
                                    className="w-[140px] h-[43px] py-[12] px-[16px] rounded-lg flex justify-center items-center gap-12px bg-[#DC4242] text-[#fff] font-montserrat text-[14px] font-medium "
                                >
                                    Bəli, sil
                                </button>
                            </div>
                        </div>
                    </div>
                )}



            </div>
        </div>

    );
};

export default Table;
