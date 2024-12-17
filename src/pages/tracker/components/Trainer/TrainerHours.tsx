import { BootcampFilter } from '../BootcampFilter.tsx'
import { TrainerHoursTable } from './TrainerHoursTable.tsx'

export const TrainerHours = () => {
    return (

        <div className='relative'>
            <div className='inline-flex gap-[20px] px-[40px]'>
                <BootcampFilter
                    title="Bootcamp N"
                    options={[36, 37, 38, 39]}
                    placeholder="Bir şey ara..."
                    selectAllText="Hepsini Seç"
                    resetText="Sıfırla"
                    buttonText="Göstər"
                />

                <BootcampFilter
                    title="Week N"
                    options={[12, 11, 10, 9, 5]}
                    placeholder="Teknoloji ara..."
                    selectAllText="Hepsini Seç"
                    resetText="Sıfırla"
                    buttonText="Göstər"

                />
            </div>
            <TrainerHoursTable />
        </div>)
}