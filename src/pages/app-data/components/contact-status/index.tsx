import { useState, useRef, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { ContactStatusProps } from "../../types";

const ContactStatus: React.FC<ContactStatusProps> = ({ isOpen, onToggle }) => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxChange = (checkboxId:number) => {
        if (checkboxId === 1) {
          setIsChecked1(true);
          setIsChecked2(false);
        } else {
          setIsChecked1(false);
          setIsChecked2(true);
        }
      };
    

    const handleCheckbox = () => !isOpen;
    document.addEventListener('mousedown', handleCheckbox);
    const dropdownRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onToggle(); 
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
                <p className='font-montserrat font-normal text-[14px] text-[#969696] mt-1 leading-[17.07px]'>Contact Status</p>
                <IoIosArrowDown  className="font-montserrat font-medium text-[20px] text-[#969696] mt-1 leading-[17.07px]"/>
            </div>
            {isOpen ? <div ref={dropdownRef} className="w-[323px]  h-[200px] rounded-xl shadow-lg p-4 bg-white " >
                <div className='flex justify-between mt-3  px-3 w-[265px]  h-[22px]'>
                    <p className="font-montserrat font-semibold leading-[19.05px] text-[16px] text-[#000000] text-left" >Contact Status</p>
                    <button className="bg-none border-none" onClick={onToggle}>
                    <IoCloseSharp  className="text-[24px] "/>
                    </button>
                </div>

                <div className='flex flex-col gap-[10px]'>

                    <div>


                    <div className='flex items-center justify-between px-[10px] mt-[10px]'>
                            <label htmlFor="checkbox-yes" className='flex relative items-center mt-2 cursor-pointer w-full'>
                                <input
                                    id="checkbox-yes"
                                    checked={isChecked1} 
                                    onChange={() => handleCheckboxChange(1)}
                                  type="checkbox"
                                    className="peer cursor-pointer absolute appearance-none h-[16px] w-[16px] border border-[#22385F] ml-[14rem] rounded-full bg-white checked:bg-[#22385F] checked:border-transparent focus:outline-none"
                                />
                                <span className='ml-2 text-[#000000] font-montserrat font-medium text-[14px] leading-[17.07px] peer-checked:text-[#22385F]'>
                                    Yes
                                </span>
                            </label>
                        </div>

                        <div className='flex items-center justify-between px-[10px] mt-[10px]'>
                            <label htmlFor="checkbox-no" className='flex relative items-center mt-2 cursor-pointer w-full'>
                                <input
                                    id="checkbox-no"
                                     type="checkbox"
                                     checked={isChecked2} 
                                    onChange={() => handleCheckboxChange(2)}
                                    className="peer cursor-pointer absolute appearance-none h-[16px] w-[16px] border border-[#22385F] ml-[14rem] rounded-full bg-white checked:bg-[#22385F] checked:border-transparent focus:outline-none"
                                />
                                <span className='ml-2 text-[#000000] font-montserrat font-medium text-[14px] leading-[17.07px] peer-checked:text-[#22385F]'>
                                    No
                                </span>
                            </label>
                        </div>


                      
                        <div className='flex justify-center mt-5'>
                            <button className='w-[282px] h-[40px] mt-1 rounded-md bg-[#22385F] text-white font-noto text-[14px] leading-[19.07px] cursor-pointer hover:bg-white hover:text-[#22385F] transition-all duration-700 hover:border-[#22385F] hover:border-[1px]'>Göstər</button>
                        </div>

                    </div>
                </div>
            </div> : null}

        </div>

    )
}

export default ContactStatus