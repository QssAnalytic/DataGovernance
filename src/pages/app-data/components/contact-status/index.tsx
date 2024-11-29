import { useState, useRef, useEffect } from "react";
import filterIcn from '../../../../assets/icons/chevron-down.svg';
import cross from '../../../../assets/icons/cross.svg';



interface MyComponentProps {
    isOpen: boolean;
    onToggle: () => void;
}

const ContactStatus: React.FC<MyComponentProps> = ({ isOpen, onToggle }) => {

    const contactStatus: string[] = [
        "yes",
        "no"
    ];
    const [isChecked, setIsChecked] = useState<boolean[]>([]);
    const [query, setQuery] = useState('');

    const handleCheckboxChange = (index: number) => {
        setIsChecked((prevState) => {
            const newCheckedItems = [...prevState];
            newCheckedItems[index] = !newCheckedItems[index]; // Toggle the checked state at the specific index
            return newCheckedItems;

        });

    };
    const filteredItems = contactStatus.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    console.log(isOpen, "isOpen")






    const handleCheckbox = () => !isOpen;
    document.addEventListener('mousedown', handleCheckbox);
    const dropdownRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onToggle(); // Close the dropdown when clicking outside
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onToggle]);

    return (
        <div  >
            <div className='w-[212px] cursor-pointer p-4 flex h-[56px] rounded-xl border-[0.5px] bg-[#FAFCFF] justify-between  border-[#22385F] ' onClick={onToggle}>
                <p className='font-montserrat font-normal text-[14px] text-[#969696] leading-[17.07px]'>Contact Status</p>
                <img src={filterIcn} className='w-[24px] h-[24px]' alt="" />
            </div>
            {isOpen ? <div ref={dropdownRef} className="w-[323px]  h-[200px] rounded-xl shadow-lg p-4 bg-white " >
                <div className='flex justify-between mt-3  px-3 w-[265px]  h-[22px]'>
                    <p className="font-montserrat font-semibold leading-[19.05px] text-[16px] text-[#000000] text-left" >Contact Status</p>
                    <button className="bg-none border-none" onClick={onToggle}>
                        <img src={cross} alt="closing the dropdown" />
                    </button>
                </div>

                <div className='flex flex-col gap-[10px]'>
                   
                    <div>






                        {
                            filteredItems.map((item, index) => (
                                <div key={index} className='flex items-center justify-between px-[10px] mt-[10px]'>
                                    <label htmlFor={`checkbox-${index}`} className='flex relative items-center mt-2 cursor-pointer w-full'>
                                        <input
                                            id={`checkbox-${index}`}
                                            checked={isChecked[index] || false}
                                            onChange={() => handleCheckboxChange(index)}
                                            type="checkbox"
                                            className="peer cursor-pointer absolute appearance-none h-[16px] w-[16px] border border-[#22385F] ml-[14rem] rounded-full bg-white checked:bg-[#22385F] checked:border-transparent focus:outline-none"
                                        />
                                        <span className='ml-2 text-[#000000] font-montserrat font-medium text-[14px] leading-[17.07px] peer-checked:text-[#22385F]'>
                                            {item}
                                        </span>
                                    </label>
                                </div>
                            ))
                        }

                        <div className='flex justify-center mt-5'>
                            <button className='w-[282px] h-[40px] mt-1 rounded-md bg-[#22385F] text-white font-noto text-[14px] leading-[19.07px] cursor-pointer hover:bg-white hover:text-[#22385F] transition-all duration-[1000ms] hover:border-[#22385F] hover:border-[1px]'>Göstər</button>
                        </div>

                    </div>
                </div>
            </div> : null}

        </div>

    )
}

export default ContactStatus