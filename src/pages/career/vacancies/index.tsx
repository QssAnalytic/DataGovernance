import { useEffect, useState } from 'react'

export const Vacancies = () => {
    const [isLoading, setIsLoading] =  useState(true)
    useEffect(()=>{
        setTimeout(()=>setIsLoading(false),2000)
    },[])
    if(isLoading){
        return <div className='absolute  flex items-center justify-center w-[calc(100%-103px)] h-[calc(100%-360px)]  z-[10]'><div className="loader"></div></div>
    }
  return (
    <div className='w-[calc(100%-50px)] h-full'>Vcancies</div>
  )
}
