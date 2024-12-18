import AttendanceTable from "./AttendanceTable";
import { BootcampFilter } from "../BootcampFilter";

export const AttendanceSheet = () => {
  return (
    <div className='relative'>
      <div className='inline-flex gap-[20px] px-[40px]'>
        <BootcampFilter
          title="Bootcamp N"
          options={[36, 37, 38, 39]}
          placeholder="Axtar..."
          selectAllText="Hamısını seç"
          resetText="Sıfırla"
          buttonText="Göstər"
        />

        <BootcampFilter
          title="Program Name"
          options={["SPSS", "Pyhton", "Tableua", "R", "Big Data"]}
          placeholder="Axtar..."
          selectAllText="Hamısını seç"
          resetText="Sıfırla"
          buttonText="Göstər"

        />
       <BootcampFilter
          title="Week N"
          options={[12,9,7,10,5]}
          placeholder="Axtar..."
          selectAllText="Hamısını seç"
          resetText="Sıfırla"
          buttonText="Göstər"

        />
      </div>
      <AttendanceTable />
    </div>
  )
};