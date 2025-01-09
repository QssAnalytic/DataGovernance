import { dateData } from "../testData/TestData"
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
export const TrainerHoursTable = () => {
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = dateData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = dateData.slice(startIndex, startIndex + itemsPerPage);

    const [OpenModal, setOpenModal] = useState(false)

    const modalOpen = () => {
        setOpenModal(true)
    }
    const modalClose = () => {
        setOpenModal(false)
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`w-[40px] h-[40px] flex justify-center items-center mx-1 rounded-[8px] border ${currentPage === i
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black border-gray-300"
                        }`}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };
    return (

        <div className="p-[20px_0px_0px_40px]">
            <table className="">
                <thead className="flex gap-[2px] sticky top-[-20px]  z-10 bg-[white]">
                    <div>
                        <tr className="flex items-start gap-[2px] ">
                            <th className="flex w-[501px] h-[33px] p-[10px] justify-center items-center gap-[10px] rounded-t-[6px] bg-[#22385F] text-white text-center font-montserrat text-sm font-semibold leading-normal">Details</th>
                            <th className="flex w-[196px] h-[33px] p-[10px] justify-center items-center gap-[10px] rounded-t-[6px] bg-[#22385F] text-white text-center font-montserrat text-base font-semibold leading-normal">Lesson 1</th>
                            <th className="flex w-[196px] h-[33px] p-[10px] justify-center items-center gap-[10px] rounded-t-[6px] bg-[#22385F] text-white text-center font-montserrat text-base font-semibold leading-normal">Lesson 2</th>
                            <th className="flex w-[196px] h-[33px] p-[10px] justify-center items-center gap-[10px] rounded-t-[6px] bg-[#22385F] text-white text-center font-montserrat text-base font-semibold leading-normal">Lesson 3</th>

                        </tr>
                        <tr className="flex  items-start gap-[2px] pt-[4px]">
                            <th className="flex w-[116px] h-[33px] px-[16px] py-[10px] justify-center items-center gap-[10px] rounded-b-[6px] bg-[#22BBAD] text-white text-center font-montserrat text-xs font-semibold leading-normal">Days</th>
                            <th className="flex w-[204px] h-[33px] px-[16px] py-[10px] justify-center items-center gap-[10px] rounded-b-[6px] bg-[#22BBAD] text-white text-center font-montserrat text-xs font-semibold leading-normal">Trains</th>
                            <th className="text-white text-center font-montserrat text-xs font-semibold leading-normal flex w-[177px] h-[33px] px-[16px] py-[10px] justify-center items-center gap-[10px] rounded-b-[6px] bg-[#22BBAD]">Program</th>
                            <th className="flex w-[97px] h-[33px] p-[10px] justify-center items-center gap-[10px] rounded-b-[6px] bg-[rgba(48,172,4,0.1)] text-[#30AC04] text-center font-montserrat text-[14px] font-medium leading-normal">Start Time</th>
                            <th className="flex w-[97px] h-[33px] p-[10px] justify-center items-center gap-[10px] rounded-b-[6px] bg-[rgba(255,0,0,0.10)] text-[rgba(255,0,0,0.60)] text-center font-montserrat text-[14px] font-medium leading-normal">End Time</th>
                            <th className="flex w-[97px] h-[33px] p-[10px] justify-center items-center gap-[10px] rounded-b-[6px] bg-[rgba(48,172,4,0.1)] text-[#30AC04] text-center font-montserrat text-[14px] font-medium leading-normal">Start Time</th>
                            <th className="flex w-[97px] h-[33px] p-[10px] justify-center items-center gap-[10px] rounded-b-[6px] bg-[rgba(255,0,0,0.10)] text-[rgba(255,0,0,0.60)] text-center font-montserrat text-[14px] font-medium leading-normal">End Time</th>
                            <th className="flex w-[97px] h-[33px] p-[10px] justify-center items-center gap-[10px] rounded-b-[6px] bg-[rgba(48,172,4,0.1)] text-[#30AC04] text-center font-montserrat text-[14px] font-medium leading-normal">Start Time</th>
                            <th className="flex w-[97px] h-[33px] p-[10px] justify-center items-center gap-[10px] rounded-b-[6px] bg-[rgba(255,0,0,0.10)] text-[rgba(255,0,0,0.60)] text-center font-montserrat text-[14px] font-medium leading-normal">End Time</th>
                        </tr>
                    </div>
                    <tr>
                        <th className="flex w-[70px] h-[70px] p-[6px_10px] items-center gap-[10px] flex-shrink-0 rounded-[8px] border-[0.2px] border-[#000] text-center text-[#000] font-montserrat text-[12px] font-medium leading-normal">Minutes</th>
                    </tr>
                </thead>

                <tbody >
                    {currentItems.map((item, index) => (
                        <div key={index} className="p-[2px_0] ">
                            <tr className="bg-white pr-[20px]">
                                <td
                                    rowSpan={2}
                                    className="w-[116px] h-[112px] p-[10px_16px] bg-[#FAFAFA] text-[#22385F] rounded-[10px] font-montserrat text-[14px] font-semibold leading-normal relative "
                                >
                                    <div className="flex justify-between items-center absolute top-[42px]">
                                        {item.days}
                                    </div>

                                </td>
                                <td className="px-4 py-2 text-center text-[var(--Content-Text-Primary, #000)]  font-montserrat text-[14px] font-medium leading-normal w-[206px] h-[54px] p-[10px_16px] ">
                                    {item.trainer}
                                </td>
                                <td className="px-4 py-2 text-center text-[var(--Content-Text-Primary, #000)]  font-montserrat text-[14px] font-medium leading-normal w-[179px] h-[54px] p-[10px_16px] justify-center items-center gap-[10px]">
                                    {item.programs}
                                </td>
                                <td className="px-4 py-2 text-center text-[var(--Content-Text-Primary, #000)] font-montserrat text-[14px] font-medium leading-normal w-[99px] h-[54px] p-[10px_16px]">
                                    {item.startTime_L1}
                                </td>
                                <td className="px-4 py-2 text-center text-[var(--Content-Text-Primary, #000)] font-montserrat text-[14px] font-medium leading-normal w-[99px] h-[54px] p-[10px_16px]">
                                    {item.endTime_L1}
                                </td>
                                <td className="px-4 py-2 text-center text-[var(--Content-Text-Primary, #000)] font-montserrat text-[14px] font-medium leading-normal w-[99px] h-[54px] p-[10px_16px]">
                                    {item.startTime_L2}
                                </td>
                                <td className="px-4 py-2 text-center text-[var(--Content-Text-Primary, #000)] font-montserrat text-[14px] font-medium leading-normal w-[99px] h-[54px] p-[10px_16px]">
                                    {item.endTime_L2}
                                </td>
                                <td className="px-4 py-2 text-center text-[var(--Content-Text-Primary, #000)] font-montserrat text-[14px] font-medium leading-normal w-[99px] h-[54px] p-[10px_16px]">
                                    {item.startTime_L3}
                                </td>
                                <td className="px-4 py-2 text-center text-[var(--Content-Text-Primary, #000)] font-montserrat text-[14px] font-medium leading-normal w-[99px] h-[54px] p-[10px_16px]">
                                    {item.startTime_L3}
                                </td>
                                <td className="px-4 py-2 text-center text-[var(--Content-Text-Primary, #000)] font-montserrat text-[14px] font-medium leading-normal w-[75px] h-[54px] p-[10px_16px]">
                                    {item.minutes}
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <button className="text-[#22385F] hover:text-blue-700">
                                        <FiEdit />
                                    </button>
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <button className="text-[#22385F] hover:text-red-700">
                                        <RiDeleteBin6Line />
                                    </button>
                                </td>
                            </tr>

                            <tr className="bg-[#FAFAFA]">
                                <td className="px-4 py-2 text-center ml-[2px]">{item.trainer}</td>
                                <td className="px-4 py-2 text-center ml-[2px]">{item.programs}</td>
                                <td className="px-4 py-2 text-center ml-[2px]">{item.startTime_L1}</td>
                                <td className="px-4 py-2 text-center ml-[2px]">{item.endTime_L1}</td>
                                <td className="px-4 py-2 text-center ml-[2px]">{item.startTime_L2}</td>
                                <td className="px-4 py-2 text-center ml-[2px]">{item.endTime_L2}</td>
                                <td className="px-4 py-2 text-center ml-[2px]">{item.startTime_L3}</td>
                                <td className="px-4 py-2 text-center ml-[2px]">{item.startTime_L3}</td>
                                <td className="px-4 py-2 text-center ml-[2px]">{item.minutes}</td>
                                <td className="px-4 py-2 text-center">
                                    <button className="text-[#22385F] hover:text-blue-700">
                                        <FiEdit />
                                    </button>
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <button className="text-[#22385F] hover:text-red-700" onClick={modalOpen}>
                                        <RiDeleteBin6Line />
                                    </button>
                                </td>
                            </tr>
                        </div>
                    ))}
                </tbody>

            </table>
            <div className="pagination-controls flex items-center justify-center mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="w-[40px] h-[40px] flex justify-center items-center mx-1 rounded-[8px] border bg-white"
                >
                    &lt;
                </button>
                {renderPaginationButtons()}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="w-[40px] h-[40px] flex justify-center items-center mx-1 rounded-[8px] border bg-white"
                >
                    &gt;
                </button>
            </div>

            {OpenModal ? (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  w-[328px] h-[153px] rounded-[12px] bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)]">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        
                                        <div className="text-center  w-[100%]    ">
                                            <h3 className="text-black font-montserrat text-base font-semibold leading-normal" id="modal-title">Əminsinizmi ?</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-[15px]">
                                    <button type="button" className="text-[#22385F] font-montserrat text-sm font-medium leading-normal flex w-[140px] h-[43px] p-[12px_16px] justify-center items-center gap-3 flex-shrink-0 rounded-[12px] border border-[#22385F]" onClick={modalClose}>Xeyir</button>
                                    <button type="button" className="flex w-[140px] h-[43px] p-[12px_16px] justify-center items-center gap-[12px] flex-shrink-0 rounded-[12px] bg-[#DC4242] text-white font-montserrat text-sm font-medium leading-normal">Bəli,Sil</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <div></div>}
        </div>
    )
}


