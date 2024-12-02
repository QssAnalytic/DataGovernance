import React from 'react';
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineRefresh } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const data = [
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
];


const Table = () => {
    return (
        <div className="overflow-x-auto">

            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead className="bg-[#FAFAFA] ounded-lg">
                    <tr>
                        <th className="border-none  px-2 py-2 font-montserrat text-[12px] font-medium leading-normal text-[#000000]">ID </th>
                        <th className="border-none text-center  px-2 py-2 font-montserrat text-[22px] font-bold leading-normal text-[#000000]">
                            <div className=' ml-10 w-[24px] h-[24px] flex justify-center'>
                                <HiOutlinePhone className='w-[24px] h-[24px]'/>
                                </div>
                        </th>

                        <th className="border-none  px-2 py-2 font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Ad və Soyad  </th>
                        <th className="border-none  px-2 py-2 font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Application Source</th>
                        <th className="border-none   px-2 py-2 font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Training Name</th>
                        <th className="border-none px-2 py-2 font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Mobil nömrə</th>
                        <th className="border-none  px-2 py-2 font-montserrat text-[12px] font-medium leading-normal text-[#000000]">Tarix</th>
                        <th className="border-none cursor-pointer text-center  px-2 py-2 font-montserrat text-[22px] font-bold leading-normal text-[#000000]">
                            <div className=' ml-10 w-[24px] h-[24px] flex justify-center'>
                                < MdOutlineRefresh className='w-[24px] h-[24px]  ' />
                                </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="even:bg-[#fafafa] odd:bg-white hover:bg-gray-50">
                            <td className="border-none text-center  px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000] ">{item.id}</td>
                            <td className="border-none text-center  px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000] ">
                                <input type="checkbox" />
                            </td>

                            <td className="border-none text-center  px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.name}</td>
                            <td className="border-none text-center  px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.applicationSource}</td>
                            <td className="border-none text-center  px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.trainingName}</td>
                            <td className="border-none text-center px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.phone}</td>
                            <td className="border-none  text-center px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">{item.date}</td>
                            <td className="border-none  text-center px-4 py-2 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                                <div className='flex justify-center gap-[12px]'>
                                <FaRegEdit className='cursor-pointer w-[20px] rounded-lg h-[20px]' />
                                <RiDeleteBinLine className='cursor-pointer rounded-lg w-[20px] h-[20px]' />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default Table;
