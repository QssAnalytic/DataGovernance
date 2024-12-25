import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Participant } from "../../types/Types";
import { initialParticipants } from "../../testData/TestData";

const ParticipantTable = () => {

    const [participants, setParticipants] = useState<Participant[]>(initialParticipants);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const totalItems = participants.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = participants.slice(startIndex, startIndex + itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const handleCheckboxChange = (id: number, field: keyof Participant) => {
        setParticipants((prevParticipants) =>
            prevParticipants.map((participant) =>
                participant.id === id
                    ? { ...participant, [field]: !participant[field] }
                    : participant
            )
        );
    };


    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`flex w-[40px] h-[40px] p-[10px] justify-center items-center mx-1 rounded-[8px] border ${currentPage === i
                        ? "bg-blue-500 text-white border-blue-500"
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
        <div className="relative ">
            <div className="px-[40px] py-[20px] w-[100%] overflow-x-auto">
                <div className="w-[100%]">
                    <table className="table-auto w-full border-collapse">
                        <thead className="sticky top-0 bg-[#F5F5F5]">
                            <tr className="flex w-full px-4 py-0 items-center gap-5 rounded-lg  bg-[#F5F5F5] ">
                                <th className="flex w-[80px] h-[54px] pl-[16px] items-center gap-[28px] text-[var(--Content-Text-Primary,#000)] font-montserrat text-[12px] font-medium leading-normal sticky top-0 left-0 z-10 bg-[#F5F5F5]">id</th>
                                <th className="flex w-[80px] h-[54px] p-[16px] items-center gap-[28px] text-[var(--Content-Text-Primary,#000)] font-montserrat text-[12px] font-medium leading-normal sticky top-0 left-[80px] z-10  bg-[#F5F5F5]">Program</th>
                                <th className="flex w-[180px] h-[54px] p-[16px] items-center gap-[28px] text-[var(--Content-Text-Primary,#000)] font-montserrat text-[12px] font-medium leading-normal sticky top-0 left-[160px] z-10 bg-[#F5F5F5]">ad soyad</th>
                                <th className="flex w-[50px] h-[54px] p-[10px] pl-[16px] flex-col justify-center items-start gap-[10px] text-[#000] font-montserrat text-[12px] font-medium leading-normal">r</th>
                                <th className="flex w-[50px] h-[54px] p-[10px] pl-[16px] flex-col justify-center items-start gap-[10px] text-[#000] font-montserrat text-[12px] font-medium leading-normal">sql</th>
                                <th className="flex w-[50px] h-[54px] p-[10px] pl-[16px] flex-col justify-center items-start gap-[10px] text-[#000] font-montserrat text-[12px] font-medium leading-normal">python</th>
                                <th className="flex w-[50px] h-[54px] p-[10px] pl-[16px] flex-col justify-center items-start gap-[10px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[12px] font-medium leading-normal">big data</th>
                                <th className="flex w-[50px] h-[54px] p-[10px] pl-[16px] flex-col justify-center items-start gap-[10px] text-[#000] font-montserrat text-[12px] font-medium leading-normal">tableau</th>
                                <th className="flex w-[50px] h-[54px] p-[10px] pl-[16px] flex-col justify-center items-start gap-[10px] text-[#000] font-montserrat text-[12px] font-medium leading-normal">spss</th>
                                <th className="flex w-[50px] h-[54px] p-[10px] pl-[16px] flex-col justify-center items-start gap-[10px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[12px] font-medium leading-normal">telim sayi</th>
                                <th className="flex w-[143px] h-[54px] p-[10px] pl-[16px] flex-col justify-center items-start gap-[10px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[12px] font-medium leading-normal">mobil nomre</th>
                                <th className="flex w-[206px] h-[54px] p-[10px] pl-[16px] flex-col justify-center items-start gap-[10px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[12px] font-medium leading-normal">mail unvani</th>
                                <th className="flex w-[80px] h-[54px] p-[10px_16px_10px_10px] flex-col justify-center items-start gap-[10px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[12px] font-medium leading-normal">mentorship</th>
                                <th className="flex w-[80px] h-[54px] p-[10px_16px_10px_10px] flex-col justify-center items-start gap-[10px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[12px] font-medium leading-normal">covering</th>
                                <th className="flex w-[80px] h-[54px] p-[10px_16px_10px_10px] flex-col justify-center items-start gap-[10px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[12px] font-medium leading-normal">career</th>
                                <th className="flex w-[80px] h-[54px]  p-[10px_16px_10px_1px] flex-col justify-center items-start gap-[10px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[12px] font-medium leading-normal">experience</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {currentItems.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className={`flex h-[54px] px-[16px] pl-[16px] items-center gap-[20px] self-stretch rounded-[12px] ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'} relative`}
                                >
                                    <td className={`flex h-[49px] p-[16px] w-[80px] items-center gap-[12px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[14px] font-medium leading-normal sticky top-0 left-0 z-10 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>{item.id}</td>
                                    <td className={`flex w-[80px] h-[56px] p-[16px] items-center gap-[28px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[14px] font-medium leading-normal sticky top-0 left-[80px] z-10 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>{item.program}</td>
                                    <td className={`flex w-[180px] h-[56px] p-[16px] items-center gap-[28px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[14px] font-medium leading-normal sticky top-0 left-[160px] z-10 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>{item.surname}</td>
                                    <td className="flex w-[50px] h-[50px] p-[13px] justify-center items-centerr">
                                        <input
                                            type="checkbox"
                                            checked={item.r}
                                            onChange={() => handleCheckboxChange(item.id, 'r')}
                                        />
                                    </td>
                                    <td className="flex w-[50px] h-[50px] p-[13px] justify-center items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.sql}
                                            onChange={() => handleCheckboxChange(item.id, 'sql')}
                                        />
                                    </td>
                                    <td className="flex w-[50px] h-[50px] p-[13px] justify-center items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.python}
                                            onChange={() => handleCheckboxChange(item.id, 'python')}
                                        />
                                    </td>
                                    <td className="flex w-[50px] h-[50px] p-[13px] justify-center items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.bigData}
                                            onChange={() => handleCheckboxChange(item.id, 'bigData')}
                                        />
                                    </td>
                                    <td className="flex w-[50px] h-[50px] p-[13px] justify-center items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.tableau}
                                            onChange={() => handleCheckboxChange(item.id, 'tableau')}
                                        />
                                    </td>
                                    <td className="flex w-[50px] h-[50px] p-[13px] justify-center items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.spss}
                                            onChange={() => handleCheckboxChange(item.id, 'spss')}
                                        />
                                    </td>
                                    <td className="flex w-[50px] h-[50px] p-[13px] justify-center items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.trainingCount}
                                            onChange={() => handleCheckboxChange(item.id, 'trainingCount')}
                                        />
                                    </td>
                                    <td className="flex w-[143px] h-[54px] p-[10px] pl-[16px] flex-col justify-center items-start gap-[10px] text-[var(--Content-Text-Primary, #000)] font-montserrat text-[12px] font-medium leading-normal text-[14px]">{item.phone}</td>
                                    <td className="flex w-[206px] h-[54px] p-[10px] pl-[16px] flex-col justify-center items-start gap-[10px] text-[var(--Content-Text-Primary, #000)] text-[14px] font-medium leading-normal">{item.email}</td>
                                    <td className="flex w-[80px] h-[50px] p-[13px_43px_13px_13px] items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.mentorship}
                                            onChange={() => handleCheckboxChange(item.id, 'mentorship')}
                                        />
                                    </td>
                                    <td className="flex w-[80px] h-[50px] p-[13px_43px_13px_13px] items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.covering}
                                            onChange={() => handleCheckboxChange(item.id, 'covering')}
                                        />
                                    </td>
                                    <td className="flex w-[80px] h-[50px] px-[13px] p-[13px_43px_13px_13px] items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.career}
                                            onChange={() => handleCheckboxChange(item.id, 'career')}
                                        />
                                    </td>
                                    <td className="flex w-[80px] h-[50px]p-[13px_43px_13px_13px] items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.experience}
                                            onChange={() => handleCheckboxChange(item.id, 'experience')}
                                        />
                                    </td>
                                    <td className="flex w-[80px] h-[50px] px-[13px] py-[13px] pl-[43px] items-center"><FiEdit /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="pagination-controls flex items-center justify-center mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="flex w-[40px] h-[40px] p-[10px] flex-col justify-center items-center gap-[10px] flex-shrink-0 rounded-[8px] border border-[#22385F] bg-white"
                >
                    &lt;
                </button>
                {renderPaginationButtons()}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="flex w-[40px] h-[40px] p-[10px] flex-col justify-center items-center gap-[10px] flex-shrink-0 rounded-[8px] border border-[#22385F] bg-white"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default ParticipantTable;