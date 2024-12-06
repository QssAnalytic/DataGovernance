interface MyComponentProps {
    isCustomized: boolean;
    selectAll: () => void;
    selectCustomized: () => void;
    resetAll: () => void;
    resetCustomized: () => void;
  
}
export const CheckboxTitle: React.FC<MyComponentProps> = ({ isCustomized, selectAll, selectCustomized, resetAll, resetCustomized}) => {
    return (
        <div className="flex  gap-[5px]">
        <span className='cursor-pointer font-montserrat font-normal w-[110px] text-[16px] text-[#1D7EB7] leading-[19.05px]'
            onClick={() => (!isCustomized ? selectAll() : selectCustomized())}>
            Hamısını seç
        </span>
        <div className='w-[5px] h-[5px] rounded bg-[#1D7EB7] mt-[0.5rem]'></div>
        <span className=' cursor-pointer font-montserrat font-normal text-[16px] text-[#1D7EB7] leading-[19.05px]' onClick={() => (!isCustomized ? resetAll() : resetCustomized())}>Sıfırla</span>
    </div>
    )
}