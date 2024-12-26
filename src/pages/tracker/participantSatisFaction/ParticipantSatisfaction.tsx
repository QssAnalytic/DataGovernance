import ParticipantSatisfactionTable from "./ParticipantSatisfactionTable";
import { bootcampData, week } from "../testData/testButtonData";
import ButtonFilter from "../components/buttonFilter/ButtonFilter";

export const ParticipantSatisfaction = () => {
  return (
      <div className="pl-[40px]">
       <div className="inline-flex gap-[20px]  pb-[20px]">
            <ButtonFilter title="Bootcamp" data={bootcampData} />
            <ButtonFilter title="Week" data={week} />
            </div>
        <ParticipantSatisfactionTable/>
      </div>
    )
};