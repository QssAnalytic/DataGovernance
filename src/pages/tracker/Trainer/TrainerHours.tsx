import { bootcampData, week } from '../testData/testButtonData.tsx'
import ButtonFilter from '../components/buttonFilter/ButtonFilter.tsx'
import { TrainerHoursTable } from './TrainerHoursTable.tsx'

export const TrainerHours = () => {
    return (
        <div className='relative'>
            <div className='inline-flex gap-[20px] px-[40px]'>
            <ButtonFilter title="Bootcamp" data={bootcampData} />
            <ButtonFilter title="Week" data={week}/>
            </div>
            <TrainerHoursTable />
        </div>)
}