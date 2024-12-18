import { executiveData } from "../testData/TestData"

const ExecutiveReportTable = () => {
    const getStatusBgColor = (status: string) => {
        switch (status) {
            case 'outstanding':
                return 'bg-[rgba(4,_172,_124,_0.20)] text-[14px] text-[#04AC7C] flex w-[148px] h-[33px] p-[8px_16px] justify-center items-center gap-3 rounded-[16px] '; 
            case 'poor':
                return 'bg-[rgba(255,_203,_5,_0.20)] text-[14px] text-[#8A6E03] flex w-[148px] h-[33px] p-[8px_16px] items-center gap-3 justify-center rounded-[16px] ';
            case 'critical':
                return 'bg-[rgba(226,_25,_91,_0.20)] text-[#E2195B] flex w-[148px] text-[14px] h-[33px] p-[8px_16px] items-center gap-3 rounded-[16px] justify-center'; // Critical için sarı
            case 'normal':
                return 'bg-[rgba(23,_92,_255,_0.20)] text-[14px] text-[#175CFF] flex w-[148px] h-[33px] p-[8px_16px] items-center gap-3 rounded-[16px] justify-center'; // Normal için mavi
            default:
                return 'bg-gray-300 flex w-[148px] text-[14px] h-[33px] p-[8px_16px] items-center gap-3 rounded-[16px] justify-center '; // Varsayılan gri
        }
    };
    return (
        <div>
            <table>
                <thead>
                    <tr className="flex h-14 items-center gap-4 rounded-xl bg-[#F6F6F6]  w-[1346px]">
                        <th className="text-black font-medium text-[12px] font-montserrat normal leading-normal flex w-[70px] p-4 items-center gap-3 rounded-[16px]">ID</th>
                        <th className="text-black font-medium text-[12px] font-montserrat normal leading-normal flex w-[150px] p-4 items-center gap-3 rounded-[16px]">Participants</th>
                        <th className="text-black font-medium text-[12px] font-montserrat normal leading-normal flex w-[148px] p-4 items-center gap-3 rounded-[16px]">Status</th>
                        <th className="text-black font-medium text-[12px] font-montserrat normal leading-normal flex h-[54px] w-[114px] p-4 items-center gap-3">Participation percantage</th>
                        <th className="text-black font-medium text-[12px] font-montserrat normal leading-normal flex w-[90px] p-4 items-center gap-3">Submission percantage</th>
                        <th className="text-black font-medium text-[12px] font-montserrat normal leading-normal flex w-[90px] h-[54px] p-4 items-center gap-3">Average HW CS grade</th>
                        <th className="text-black font-medium text-[12px] font-montserrat normal leading-normal flex w-[180px] p-4 items-center gap-3">Midterm exam</th>
                        <th className="text-black font-medium text-[12px] font-montserrat normal leading-normal flex h-[54px] w-[66px] p-4 items-center gap-3">Final exam</th>
                        <th className="text-black font-medium text-[12px] font-montserrat normal leading-normal flex w-[290px] p-4 items-center gap-3">Note</th>
                    </tr>

                </thead>
                <tbody>
                    {executiveData.map((item, index) => (
                        <tr key={index} className="flex h-[54px] items-center  gap-4 flex-shrink-0 self-stretch rounded-[12px] odd:bg-white even:bg-[#FAFAFA]">
                            <td className="text-black font-medium text-[14px] font-montserrat normal leading-normal flex w-[70px] h-[54px] pl-4 pr-0 py-4 items-center gap-3">{item.id}</td>
                            <td className="text-black font-medium text-[14px] font-montserrat normal leading-normal flex w-[150px] h-[54px] p-4 items-center gap-3 whitespace-nowrap">{item.fullName}</td>
                            <td className={`${getStatusBgColor(item.status)}`}>{item.status}</td>
                            <td className="flex w-[114px] h-[54px] p-4 items-center gap-3 text-black font-montserrat text-[14px] font-medium">{item.percent+"%"}</td>
                            <td className="flex w-[90px] h-[54px] p-4 items-center gap-3 text-black font-montserrat text-[14px] font-medium">{item.submisson+"%"}</td>
                            <td className="flex w-[90px] h-[54px] p-4 items-center justify-center gap-3 text-[#30AC04] font-montserrat text-[14px] font-medium">{item.averange+"%"}</td>
                            <td className="flex w-[180px] h-[54px] p-4 items-center gap-2 text-black font-montserrat text-[14px] font-medium">{item.exam}</td>
                            <td className="flex w-[66px] h-[54px] p-4 items-center gap-3 text-black font-montserrat text-[14px] font-medium">{item.finalExam}</td>
                            <td className="flex w-[290px] h-[54px] p-4 items-center gap-3"><div className="flex w-[294px] h-[30px] shrink-0 text-black font-montserrat text-[14px] font-medium">{item.note}</div></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ExecutiveReportTable