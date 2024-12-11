import { useEffect, useState } from 'react'
import { useUIStore } from "../../../services/store/useUIStore";
import TableChanger from './components/TableChanger';
import { FilterTab } from './components/FilterTab';


export const TalentPool = () => {
    const { setButtonLabel, setModalContent, setPageCustomHeader } = useUIStore();

    const [isLoading, setIsLoading] =  useState(true)
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
            <TableChanger/>
            <FilterTab/>
            
        </div>
    )
}
