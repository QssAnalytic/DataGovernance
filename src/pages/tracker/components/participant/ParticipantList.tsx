import { BootcampFilter } from '../BootcampFilter.tsx';
// import { ComboboxDemo } from '../CustomDrop.tsx';
import ParticipantTable from './ParticipantTable.tsx';
export const ParticipantList = () => {
    // const bootnumber = [
    //     {
    //       value: "intern",
    //       label: "Intern",
    //     },
    //     {
    //       value: "36",
    //       label: "36",
    //     },
    //     {
    //       value: "35",
    //       label: "35",
    //     },
    //     {
    //       value: "34",
    //       label: "34",
    //     },
    //     {
    //       value: "33",
    //       label: "33",
    //     },
    //     {
    //       value: "32",
    //       label: "32",
    //     },
    //   ]
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
            </div>
            {/* <ComboboxDemo frameworks={bootnumber} placeholder='Bootcamp №   ( 1-36 )' triggerWidth='294px'/> */}
            <ParticipantTable />
        </div>

    )
};