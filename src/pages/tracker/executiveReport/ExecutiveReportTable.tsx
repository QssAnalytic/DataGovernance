import { executiveData } from "../testData/TestData"

const ExecutiveReportTable = () => {

    return (
        <div>
            <table>
                <thead>
                {executiveData.map((item,index)=>(
                    <tr key={index} className="flex h-14 items-center gap-4 rounded-xl bg-[#F6F6F6]">
                        <th>{item.id}</th>
                        <th>{item.fullName}</th>
                        <th>{item.status}</th>
                        <th>{item.percent}</th>
                        <th>{item.submisson}</th>
                        <th>{item.averange}</th>
                        <th>{item.exam}</th>
                        <th>{item.finalExam}</th>
                        <th>{item.note}</th>
                    </tr>
                ))
                }

                </thead>
            </table>
        </div>
    )
}

export default ExecutiveReportTable