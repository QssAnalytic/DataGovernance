import { bootcampData, programName } from "../../testData/testButtonData";
import ButtonFilter from "../buttonFilter/ButtonFilter";
import AttendanceTable from "./AttendanceTable";

export const AttendanceSheet = () => {
  return (
    <div className='relative'>
      <div className='inline-flex gap-[20px] px-[40px]'>
      <ButtonFilter title="Bootcamp" data={bootcampData} />
      <ButtonFilter title="Program name" data={programName} />

      </div>
      <AttendanceTable />
    </div>
  )
};