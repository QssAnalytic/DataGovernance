import { MdKeyboardArrowRight } from "react-icons/md";




export const ShowButton = ({ setIsCustomized }: any) => {

      
    return (
        <>
            <button onClick={setIsCustomized} className="px-3 mt-5 flex justify-between  w-[305px] text-[#000000] font-montserrat font-medium text-[14px] leading-[17.07px]">
                Customized
                <MdKeyboardArrowRight className="font-montserrat ml-[20px] font-medium text-[24px] " />
            </button>

            <div className='flex justify-center mt-5'>
                <button className='w-full p-2  mt-1 rounded-md bg-[#22385F] text-white font-noto text-[14px] leading-[19.07px] cursor-pointer ease-in-out hover:bg-white hover:text-[#22385F] transition-all duration-700 hover:border-[#22385F] hover:border-[1px]'>Göstər</button>
            </div>
        </>

    )
};

