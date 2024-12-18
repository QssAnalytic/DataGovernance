import { LessonCheckboxData } from "../../testData/TestData";
import { useState } from "react";

const AttendanceTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedData = LessonCheckboxData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(LessonCheckboxData.length / itemsPerPage);

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
            <div className="relative pl-[40px] pt-[20px]  max-h-screen w-[100%] ">
                <div className="flex justify-start sticky top-[-20px] bg-[#F5F5F5] z-10 ">
                    <div className="sticky top-0 z-20">
                        <div className="flex w-[2253px] gap-[2px]">
                            <div className="flex h-[40px] justify-center items-center gap-[28px] self-stretch rounded-[6px] bg-[#D3F1EF]">
                                <div className="text-[#22385F] font-montserrat text-xs font-semibold leading-normal flex h-[40px] rounded-[6px] bg-[#D3F1EF] justify-center items-center gap-[28px] self-stretch w-[171px]">Day</div>
                            </div>
                            {/* Tarih başlıkları */}
                            <div className="flex h-[40px] px-[16px] justify-center items-center gap-[12px] self-stretch rounded-[6px] bg-[#22385F] text-white font-montserrat text-[12px] font-semibold leading-none w-[778px]">
                                <div>20 July</div>
                            </div>
                            <div className="flex h-[40px] px-[16px] justify-center items-center gap-[12px] self-stretch rounded-[6px] bg-[#22385F] text-white font-montserrat text-[12px] font-semibold leading-none w-[778px]">
                                <div>21 July</div>
                            </div>
                            <div className="flex h-[40px] px-[16px] justify-center items-center gap-[12px] self-stretch rounded-[6px] bg-[#22385F] text-white font-montserrat text-[12px] font-semibold leading-none w-[258px]">
                                <div>22 July</div>
                            </div>
                            <div className="flex h-[40px] px-[16px] justify-center items-center gap-[12px] self-stretch rounded-[6px] bg-[#22385F] text-white font-montserrat text-[12px] font-semibold leading-none w-[258px]">
                                <div>23 July</div>
                            </div>
                        </div>
                        <div className="flex w-[2253px] gap-[2px] pt-[2px]">
                            <div className="text-[#22385F] flex h-[40px] justify-center items-center font-montserrat text-[12px] w-[171px] font-semibold leading-none rounded-[6px] bg-[#D3D7DF] p-[16px] pr-[60px] pl-[70px]">Course</div>
                            <div className="text-white font-montserrat text-[12px] font-semibold leading-normal p-[16px] w-[388px] flex h-[40px] px-[16px] pr-[60px] pl-[40px] justify-center items-center gap-[28px] self-stretch rounded-t-[6px] bg-[#22BBAD]">SPSS</div>
                            <div className="text-white font-montserrat text-[12px] font-semibold leading-normal p-[16px] w-[388px] flex h-[40px] px-[16px] pr-[60px] pl-[40px] justify-center items-center gap-[28px] self-stretch rounded-t-[6px] bg-[#22BBAD] ">SPSS</div>
                            <div className="text-white font-montserrat text-[12px] font-semibold leading-normal p-[16px] w-[388px] flex h-[40px] px-[16px] pr-[60px] pl-[40px] justify-center items-center gap-[28px] self-stretch rounded-t-[6px] bg-[#22BBAD] ">tableau</div>
                            <div className="text-white font-montserrat text-[12px] font-semibold leading-normal p-[16px] w-[388px] flex h-[40px] px-[16px] pr-[60px] pl-[40px] justify-center items-center gap-[28px] self-stretch rounded-t-[6px] bg-[#22BBAD] ">Python</div>
                            <div className="text-white font-montserrat text-[12px] font-semibold leading-none flex w-[128px] h-[40px] p-[16px] justify-center items-center gap-[28px] rounded-t-[6px] bg-[#22BBAD]">Python</div>
                            <div className="text-white font-montserrat text-[12px] font-semibold leading-none flex w-[128px] h-[40px] p-[16px] justify-center items-center gap-[28px] rounded-t-[6px] bg-[#22BBAD]">SPSS</div>
                            <div className="text-white font-montserrat text-[12px] font-semibold leading-none flex w-[128px] h-[40px] p-[16px] justify-center items-center gap-[28px] rounded-t-[6px] bg-[#22BBAD]">Python</div>
                            <div className="text-white font-montserrat text-[12px] font-semibold leading-none flex w-[128px] h-[40px] p-[16px] justify-center items-center gap-[28px] rounded-t-[6px] bg-[#22BBAD]">Tableau</div>
                        </div>
                        <div className="flex w-[100px] pt-[5px] gap-[2px] ">
                            <div className="rounded-md bg-[#F4F7FD] flex h-10 items-center gap-7 self-stretch ">
                                <div className="text-[#22385F] font-montserrat text-[12px] font-semibold leading-normal rounded-xl flex w-[171px] h-10 pl-[55px] items-center gap-3 ">Full name</div>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="rounded-b-md bg-[var(--blue-hover,#F4F7FD)] flex w-[126px] flex w-32 h-10 p-4 justify-center items-center gap-[1px]">
                                        Lesson 1
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-[#22385F] text-center font-montserrat text-xs font-semibold leading-normal flex w-[100px] h-32 p-4 flex-col justify-center items-center gap-3 flex-shrink-0 rounded-[6px] border border-[#22385F] bg-white whitespace-wrap">
                        Participation
                        percentage
                    </div>
                </div>
                <div >
                    {paginatedData.map((data: any, index) => (
                        <div key={data.id} className={`flex gap-4 items-center py-0 relative ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                            }`} >
                            <div className={`text-[#22385F] font-montserrat text-[12px] font-semibold leading-normal rounded-xl flex w-[100px] h-10 pl-[35px] pr-[135px] pt-[18px] items-center gap-3 rounded-md self-stretch whitespace-nowrap sticky top-0 left-[-45px] z-10 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                                }`} >
                                {data.fullName}
                            </div>
                            <div className="flex gap-2">
                                {data.checkboxes?.map((i: any) => (
                                    <label key={i} className="flex w-[121px] h-14 justify-center items-center gap-2.5">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 cursor-pointer"
                                        />
                                    </label>
                                ))}
                            </div>
                            <div>
                                <div className="rounded-[8px] bg-[#EEF4FF] flex w-[95px] h-8 p-4 justify-center items-center gap-3 flex-shrink-0 text-[#22385F] font-montserrat text-xs font-medium leading-normal">
                                    {data.percent + "%"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="pagination-controls flex items-center justify-center mt-4">
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
    );
};

export default AttendanceTable;
