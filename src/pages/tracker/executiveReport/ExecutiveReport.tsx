import ButtonFilter from "../components/buttonFilter/ButtonFilter";
import { bootcampData, status, week } from "../testData/testButtonData";
import ExecutiveReportTable from "./ExecutiveReportTable";

export const ExecutiveReport = () => {
    return (
        <div className="pl-[40px]">
            <div className="inline-flex gap-[20px]  pb-[20px]">
            <ButtonFilter title="Bootcamp" data={bootcampData} />
            <ButtonFilter title="Week" data={week} />
            <ButtonFilter title="Status" data={status} />
            </div>
            <ExecutiveReportTable/>
        </div>
    )
};