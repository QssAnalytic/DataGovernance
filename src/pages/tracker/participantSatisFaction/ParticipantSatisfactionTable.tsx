import { useState } from "react"
import { paginateData } from "../testData/TestData"

const ParticipantSatisfactionTable = () => {
    const className = "text-primary font-montserrat text-xs font-medium leading-normal flex w-24 h-14 p-4 justify-center items-center gap-7 flex-shrink-0"

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedData = paginateData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(paginateData.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
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
        <div>
            <table>
                <thead className="sticky top-[-20px]">
                    <tr className="flex w-[1000px] h-[54px] px-4 py-0 items-center gap-2 flex-shrink-0 rounded-[12px] bg-[#F5F5F5]">
                        <th className="flex w-[96px] h-[54px] p-4 items-center gap-3 flex-shrink-0 text-[12px] font-medium leading-normal text-black font-[Montserrat]">id</th>
                        <th className="text-primary font-montserrat text-xs font-medium leading-normal flex w-48 h-14 p-4 items-center gap-7 flex-shrink-0">Participant</th>
                        <th className={`${className}`}>Overall satisfaction</th>
                        <th className={`${className}`}>Muellimden raziliq rate</th>
                        <th className={`${className}`}>Teqdimatdan raziliq rate</th>
                        <th className={`${className}`}>Homework rate</th>
                        <th className={`${className}`}>Mentordan raziliq rate</th>
                        <th className={`${className}`}>Feedback sayi</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((item, index) => (
                        <tr key={index} className="flex h-14 px-4 items-center gap-2 flex-shrink-0 self-stretch rounded-xl odd:bg-white even:bg-[#FAFAFA]">
                            <td className="text-primary font-montserrat text-sm font-medium leading-normal flex w-24 h-14 p-4 items-center gap-3">{item.ID}</td>
                            <td className="text-primary font-montserrat text-sm font-medium leading-normal flex w-48 h-14 p-4 items-center gap-7">{item.Participant}</td>
                            <td className={`${className}`}>{item.Overall_satisfaction}</td>
                            <td className={`${className}`}>{item.Muəllimdən_raziliq_rate}</td>
                            <td className={`${className}`}>{item.Təqdimatdan_raziliq_rate}</td>
                            <td className={`${className}`}>{item.Homework_rate}</td>
                            <td className={`${className}`}>{item.Mentordan_raziliq_rate}</td>
                            <td className={`${className}`}>{item.Feedback_sayi}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div className="sticky top-0 z-2 bg-white">
                <div className="pagination-controls flex items-center justify-start mt-4 ml-[340px]">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="w-[40px] h-[40px] flex justify-center items-center mx-1 rounded-[8px] border bg-white"
                    >
                        &lt;
                    </button>
                    {renderPaginationButtons()}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === itemsPerPage}
                        className="w-[40px] h-[40px] flex justify-center items-center mx-1 rounded-[8px] border bg-white"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ParticipantSatisfactionTable