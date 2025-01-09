import ButtonFilter from "../components/buttonFilter/ButtonFilter";
import ParticipantTable from "./ParticipantTable";
import { bootcampData, week } from "../testData/testButtonData";
 

export const ParticipantList = () => {
    return (
        <div className="relative">
            <div className="inline-flex gap-[20px] px-[40px]">
                <ButtonFilter title="Bootcamp" data={bootcampData} />
                <ButtonFilter title="Week" data={week} />
            </div>
            <ParticipantTable />
        </div>
    );
};
