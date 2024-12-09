import { CheckBoxesProps } from "../../types"
export const CheckBoxes: React.FC<CheckBoxesProps> = ({ item, index, handleCheckboxChange, isChecked }) => {

    return (
        <label htmlFor={`checkbox-${index}`} className='flex relative items-center mt-2 cursor-pointer w-full'>
            <input
                id={`checkbox-${index}`}
                value={item}
                checked={isChecked[index] || false}
                onChange={() => handleCheckboxChange(index, item)}
                type="checkbox"
                className="peer cursor-pointer absolute appearance-none h-[16px] w-[16px] border border-[#22385F] ml-[16rem] rounded-full bg-white checked:bg-[#22385F] checked:border-transparent focus:outline-none"
            />
            <span className=' text-[#000000] font-montserrat font-medium text-[14px] leading-[17.07px] peer-checked:text-[#22385F]'>
                {item}
            </span>
        </label>
    )
}