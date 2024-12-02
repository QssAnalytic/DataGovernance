import { useState } from 'react';
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineRefresh } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";


interface TableProps {
    searchTerm: string;
    }

interface TableRow {
    id: number;
    name: string;
    phone: string;
    applicationSource: string;
    trainingName: string;
    date: string;
}
const Table: React.FC<TableProps> = ({ searchTerm }) => {
    const data: TableRow[] = [
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
        // Add more data here as needed...
    ];
    const filteredData = data.filter(
        (item) =>
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
        <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full table-auto rounded-lg border-collapse border border-gray-200">
                <thead className="bg-[#FAFAFA] rounded-lg">
                    <tr>
                        <th className="border-none px-2 py-2 font-montserrat text-[12px] font-medium leading-normal text-[#000000]">ID</th>
                        <th className="border-none text-center px-2 py-2 font-montserrat text-[22px] font-bold leading-normal text-[#000000]">
                            < HiOutlinePhone className="ml-11 w-[24px] h-[24px]" />
                        </th>
                        <th className="border-none px-4 py-2 text-left font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Ad və Soyad</th>
                        <th className="border-none px-4 py-2 text-left font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Application Source</th>
                        <th className="border-none px-4 py-2 text-left font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Training Name</th>
                        <th className="border-none px-4 py-2  text-left font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Mobil nömrə</th>
                        <th className="border-none px-4 py-2  text-left font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Tarix</th>
                        <th className="border-none text-left px-4 py-2 font-montserrat text-[22px] font-bold leading-normal text-[#000000]">
                            <div className=" ml-11 w-[24px] h-[24px] ">
                                <MdOutlineRefresh className="w-[24px] h-[24px]" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item, index) => (
                        <tr key={index} className="even:bg-[#fafafa] odd:bg-white hover:bg-gray-50">
                            <td className="border-none text-center px-4 py-2 font-montserrat text-[14px] font-medium text-[#000000]">{item.id}</td>
                            <td className="border-none  text-center  px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000]" >
                                <input type="checkbox" className="appearance-none w-4 h-4 border  checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa]  checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2" />
                            </td>
                            <td className="border-none  px-4 py-2 font-montserrat text-[14px] font-medium text-[#000000]">{item.name}</td>
                            <td className="border-none    px-4 py-2 font-montserrat text-[14px] font-medium text-[#000000]">{item.applicationSource}</td>
                            <td className="border-none   px-4 py-2 font-montserrat text-[14px] font-medium text-[#000000]">{item.trainingName}</td>
                            <td className="border-none    px-4 py-2 font-montserrat text-[14px] font-medium text-[#000000]">{item.phone}</td>
                            <td className="border-none   px-4 py-2 font-montserrat text-[14px] font-medium text-[#000000]">{item.date}</td>
                            <td className="border-none    px-4 py-2">
                                <div className="flex justify-center gap-3">
                                    <FaRegEdit className="cursor-pointer w-5 h-5" />
                                    <RiDeleteBinLine className="cursor-pointer w-5 h-5" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4 space-x-2">
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
            </div>
        </div>
    );
};

export default Table;
