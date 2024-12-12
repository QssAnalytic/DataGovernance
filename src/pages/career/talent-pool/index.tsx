import { useEffect, useState } from 'react'
import { useUIStore } from "../../../services/store/useUIStore";
import TableChanger from './components/TableChanger';
import { FilterTab } from './components/FilterTab';
import { OverviewTable } from './components/tables/overview table/tableIndex';
import { EducationTable } from './components/tables/education/tableIndex';
import { JobStatusTable } from './components/tables/job status/tableIndex';


export const TalentPool = () => {
    const { setButtonLabel, setModalContent, setPageCustomHeader } = useUIStore();
    const [isLoading, setIsLoading] =  useState(true)
    const [activeSubTab,setActiveSubTab] = useState("Overview")
    useEffect(()=>{
        setButtonLabel("Recruitment status");
    setModalContent(
      <div className="text-black flex flex-col bg-white p-2">
        Overview Modal
      </div>
    );
    setPageCustomHeader(<input placeholder='salam'/>);
        setTimeout(()=>setIsLoading(false),1000)
    },[setButtonLabel, setModalContent, setPageCustomHeader])
    if(isLoading){
        return <div className='absolute  flex items-center justify-center w-[calc(100%-103px)] h-[calc(100%-360px)]  z-[10]'><div className="loader"></div></div>
    }
    return (
        <div className='w-[calc(100%-50px)] h-full flex flex-col gap-y-[20px]'>
            <TableChanger setActiveSubTab={setActiveSubTab}/>
            <FilterTab />
            <div className='w-full'>
                {activeSubTab === 'Overview' && <OverviewTable />}
                {activeSubTab === 'Education' && <EducationTable />}
                {activeSubTab === 'Job status' && <JobStatusTable />}
            </div>
        </div>
    )
}
