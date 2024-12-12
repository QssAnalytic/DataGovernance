import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Participant } from "../types/Types";
import { initialParticipants } from "../testData/TestData";

const ParticipantTable = () => {
    const headers = [
        "id", "Program", "ad soyad", "r", "sql", "python", "big data",
        "tableau", "spss", "telim sayi", "mobil nomre", "mail unvani",
        "mentorship", "covering", "career", "experience", "edit"
    ];

    const [participants, setParticipants] = useState<Participant[]>(initialParticipants);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

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
        <div className="relative px-[40px] py-[40px] max-w-[1400px]">
            <div className="overflow-x-auto">
                <div className="min-w-[1300px]">
                    <table className="table-auto w-full border-collapse">
                        <thead className="sticky top-0 bg-[#F5F5F5] z-10">
                            <tr className="flex w-full px-4 py-0 items-center gap-5 rounded-lg">
                                {headers.map((header, index) => (
                                    <th
                                        key={index}
                                        className={`flex ${header === "ad soyad" || header === "mail unvani" || header === "mobil nomre" ? "w-[180px]" : "w-[80px]"} h-[54px] p-4 items-center gap-7 flex-shrink-0 text-[#000] font-montserrat text-xs font-medium leading-normal`}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="overflow-y-auto max-h-[500px] block w-full">
                            {currentItems.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className={`flex h-[54px] px-[16px] pl-[30px] items-center gap-[20px] self-stretch rounded-[12px] ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}
                                >
                                    <td className="w-[80px] text-black font-montserrat text-sm font-medium leading-normal">{item.id}</td>
                                    <td className="w-[80px] text-black font-montserrat text-sm font-medium leading-normal">{item.program}</td>
                                    <td className="w-[180px] text-black font-montserrat text-sm font-medium leading-normal">{item.surname}</td>
                                    <td className="w-[80px]">
                                        <input
                                            type="checkbox"
                                            checked={item.r}
                                            onChange={() => handleCheckboxChange(item.id, 'r')}
                                        />
                                    </td>
                                    <td className="w-[80px]">
                                        <input
                                            type="checkbox"
                                            checked={item.sql}
                                            onChange={() => handleCheckboxChange(item.id, 'sql')}
                                        />
                                    </td>
                                    <td className="w-[80px]">
                                        <input
                                            type="checkbox"
                                            checked={item.python}
                                            onChange={() => handleCheckboxChange(item.id, 'python')}
                                        />
                                    </td>
                                    <td className="w-[80px]">
                                        <input
                                            type="checkbox"
                                            checked={item.bigData}
                                            onChange={() => handleCheckboxChange(item.id, 'bigData')}
                                        />
                                    </td>
                                    <td className="w-[80px]">
                                        <input
                                            type="checkbox"
                                            checked={item.tableau}
                                            onChange={() => handleCheckboxChange(item.id, 'tableau')}
                                        />
                                    </td>
                                    <td className="w-[80px]">
                                        <input
                                            type="checkbox"
                                            checked={item.spss}
                                            onChange={() => handleCheckboxChange(item.id, 'spss')}
                                        />
                                    </td>
                                    <td className="w-[80px]">
                                        <input
                                            type="checkbox"
                                            checked={item.trainingCount}
                                            onChange={() => handleCheckboxChange(item.id, 'trainingCount')}
                                        />
                                    </td>
                                    <td className="w-[180px]">{item.phone}</td>
                                    <td className="w-[180px]">{item.email}</td>
                                    <td className="w-[80px]">
                                        <input
                                            type="checkbox"
                                            checked={item.mentorship}
                                            onChange={() => handleCheckboxChange(item.id, 'mentorship')}
                                        />
                                    </td>
                                    <td className="w-[80px]">
                                        <input
                                            type="checkbox"
                                            checked={item.covering}
                                            onChange={() => handleCheckboxChange(item.id, 'covering')}
                                        />
                                    </td>
                                    <td className="w-[80px]">
                                        <input
                                            type="checkbox"
                                            checked={item.career}
                                            onChange={() => handleCheckboxChange(item.id, 'career')}
                                        />
                                    </td>
                                    <td className="w-[80px]">
                                        <input
                                            type="checkbox"
                                            checked={item.experience}
                                            onChange={() => handleCheckboxChange(item.id, 'experience')}
                                        />
                                    </td>
                                    <td className="w-[80px]"><FiEdit /></td>
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