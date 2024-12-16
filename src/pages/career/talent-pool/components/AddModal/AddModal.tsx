import { IoClose } from "react-icons/io5";
import { useUIStore } from "../../../../../services/store/useUIStore"
import { ComboboxDemo } from '../CustomDropDown'

export const AddModal = () => {
    const { setIsModalOpen } = useUIStore();
    const bootCamp = [
        {
            value: "intern",
            label: "Intern",
        },
    ]
    return (
        <div className="h-full text-black p-[30px] w-[672px] rounded-[12px]">
            <div className="header w-full flex justify-between items-center pb-[35px]">
                <p className="text-[24px] font-bold">Add Candidate</p>
                <IoClose className="w-[24px] h-[24px] hover:cursor-pointer" onClick={() => setIsModalOpen(false)} />
            </div>
            <div className="flex gap-x-[20px]">
                <div className="flex flex-col gap-y-[20px]">
                    <div className="w-[296px] h-[56px]">
                        <input type="text" className="w-full h-full rounded-[12px] border border-[rgba(34,56,95,1)] px-[16px] py-[12px] focus:outline-none" />
                    </div>
                    <div className="w-[296px] h-[55px]">
                        <ComboboxDemo frameworks={bootCamp} placeholder='Bootcamp №   ( 1-36 )' triggerWidth='294px' />
                    </div>
                    <div className="w-[296px] h-[55px]">
                        <ComboboxDemo frameworks={bootCamp} placeholder='Status' triggerWidth='296px' />
                    </div>
                    <div className="w-[296px] h-[55px]">
                        <ComboboxDemo frameworks={bootCamp} placeholder='Level' triggerWidth='296px' />
                    </div>
                    <div className="w-[296px] h-[56px]">
                        <button className="w-full h-full rounded-[12px] border border-[#22385F] text-[#22385F] hover:bg-[#22385F] hover:text-white duration-200">Ləğv Et</button>
                    </div>
                </div>
                <div className="flex flex-col gap-y-[20px]">
                    <div className="w-[296] h-[56px]">
                        <input type="text" className="w-full h-full rounded-[12px] border border-[rgba(34,56,95,1)] px-[16px] py-[12px]  focus:outline-none" />
                    </div>
                    <div className="w-[296px] h-[208px]">
                        <textarea name="" id="" className="w-full h-full rounded-[8px] border border-[rgba(34,56,95,1)] px-[16px] py-[12px]  focus:outline-none"></textarea>
                    </div>
                    <div className="w-[296px] h-[56px]">
                        <button className="w-full h-full rounded-[12px] border border-[#22385F] bg-[#22385F] text-white hover:bg-white hover:text-[#22385F] hover:border-[#22385F] duration-200">Yadda Saxla</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
