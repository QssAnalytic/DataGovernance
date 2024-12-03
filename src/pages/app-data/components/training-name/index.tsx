import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";



interface MyComponentProps {
    isOpen: boolean;
    onToggle: () => void;
}

const TrainingName: React.FC<MyComponentProps> = ({ isOpen, onToggle }) => {
    const [isChecked, setIsChecked] = useState<boolean[]>([]);
    const [isCustomizedChecked, setIsCustomizedChecked] = useState<boolean[]>([]);
    const [isCustomized, setIsCustomized] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const [isSearch, setIsSearch] = useState<boolean>(false);

    const applicationSource: string[] = [
        'Data Science Bootcamp',
        'Data Analytics Bootcamp',
        "Machine Learning",
        "Machine Learning",

    ];



    const customized: string[] = [
        'Excel for Data Analytics',
        'Vizualization with Power BI ',
        "Tableau for Data Analytics",
        "Data Analytics with SPSS",
        "Data Analytics with SPSS",
        "Data Analytics with SQL",
        "Machine learning with SPSS",
        "R for Data Analytics",
        "Data Analytics with R(2)",
        "Introduction to Python",
        "Machine learning with Python",
        "Big Data",
        "Deep learning with Python"


    ];


    const handleCheckboxChange = (index: number) => {
        setIsChecked((prevState) => {
            const newCheckedItems = [...prevState];
            newCheckedItems[index] = !newCheckedItems[index]; // Toggle the checked state at the specific index
            return newCheckedItems;

        });

    };

    const handleCustomizedsCheckboxChange = (index: number) => {
        setIsCustomizedChecked((prevState) => {
            const newCheckedItems = [...prevState];
            newCheckedItems[index] = !newCheckedItems[index]; // Toggle the checked state at the specific index
            return newCheckedItems;

        });

    };


    const filteredItems = applicationSource.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );




    const customizedItems = customized.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );



    const selectAll = () => {
        setIsChecked(new Array(applicationSource.length).fill(true));
    };

    const reseAll = () => {
        setIsChecked(new Array(applicationSource.length).fill(false));
    };


    const selectCustomized = () => {
        setIsCustomizedChecked(new Array(customized.length).fill(true));
    };

    const resetCustomized = () => {
        setIsCustomizedChecked(new Array(customized.length).fill(false));
    };


    const handleCheckbox = () => !isOpen;
    document.addEventListener('mousedown', handleCheckbox);
    const dropdownRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onToggle(); // Close the dropdown when clicking outside
                setIsCustomized(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onToggle]);

    const toggleSearchBtn = () => {
        if (isSearch) {
            setIsSearch(false)
        } else {
            setIsSearch(true)

        }
    }


    const handleToggleCustomized = () => {
        setIsCustomized(false); // Close the modal
        setIsSearch(false);     // Close the input field
        setQuery("");           // Reset the search query
    };
    
    return (
        <div  >
            <div className='w-[212px] cursor-pointer p-4 flex h-[56px] rounded-xl border-[0.5px] bg-[#FAFCFF] justify-between  border-[#22385F] ' onClick={onToggle}>
                <p className='font-montserrat font-normal text-[14px] text-[#969696] mt-1 leading-[17.07px]'>Training Name</p>
                <IoIosArrowDown className="font-montserrat font-medium text-[20px] text-[#969696] mt-1 leading-[17.07px]" />
            </div>
            {isOpen ? <div ref={dropdownRef} className="w-[323px]  max-h-[650px] rounded-xl shadow-lg p-4 bg-white " >
                {!isCustomized ? <div className='flex justify-between mt-3  px-3 w-[295px]  h-[22px]'>
                    <p className="font-montserrat font-semibold leading-[19.05px] text-[16px] text-[#000000] text-left" > Training Name</p>
                    <button className="bg-none border-none ml-[10px]" onClick={onToggle}>
                        <IoCloseSharp className="text-[24px] " />
                    </button>
                </div> : <div className='flex justify-start gap-[15px] mt-3  px-3 w-[311px]  h-[22px]'>
                    <button onClick={handleToggleCustomized} className="bg-none border-none">
                        <FaArrowLeft className="text-[18px]" />
                    </button>
                    <p className="font-montserrat font-semibold leading-[19.05px] mt-[2px] text-[16px] text-[#000000] text-left" > Customized</p>
                </div>}



                <div className='flex flex-col mt-3  gap-[10px]'>
                    <div className='flex mt-2 px-3 py-1 gap-[7px] '>

                        {!isSearch ? <div className="flex  gap-[5px]">
                            <span className='cursor-pointer font-montserrat font-normal w-[110px] text-[16px] text-[#1D7EB7] leading-[19.05px]'
                                onClick={() => (!isCustomized ? selectAll() : selectCustomized())}>
                                Hamısını seç
                            </span>
                            <div className='w-[5px] h-[5px] rounded bg-[#1D7EB7] mt-[0.5rem]'></div>
                            <span className=' cursor-pointer font-montserrat font-normal text-[16px] text-[#1D7EB7] leading-[19.05px]' onClick={() => (!isCustomized ? reseAll() : resetCustomized())}>Sıfırla</span>
                        </div> : null}

                        {isCustomized ? <div className={`flex ml-[2px]  justify-end gap-1 ${isSearch && "w-[200px] h-[30px]  border transition-all duration-700 ease-in-out rounded-lg px-2 py-1"} `} >
                            {!isSearch ? <div className="w-[1px] transition-all  ease-in-out h-[20px] bg-[#8F8F8F]"></div> : null}

                            {isSearch &&
                                <input type="text" name="search" className="peer absolute border-none focus:outline-none " value={query}
                                    onChange={(e) => setQuery(e.target.value)} />

                            }
                            <IoSearch className={`text-[#8F8F8F] w-[20px] h-[20px] text-end  cursor-pointer peer-focus:hidden ${isSearch && 'transition-all  z-10 relative duration-700 ease-in-out  mr-[10rem]'}`} onClick={toggleSearchBtn} />
                            <RxCross1
                                className={`text-[#8F8F8F] z-10 w-[20px] h-[20px] cursor-pointer ${isSearch ? 'block' : 'hidden'
                                    }`}
                                onClick={handleToggleCustomized}
                            />

                        </div>
                            : null
                        }

                    </div>
                    <div>

                        {!isCustomized ? filteredItems.map((item, index) => (
                            <div key={index} className='flex  items-center justify-between px-[10px] mt-[10px]'>
                                <label htmlFor={`checkbox-${index}`} className='flex relative items-center mt-2 cursor-pointer w-full'>
                                    <input
                                        id={`checkbox-${index}`}
                                        checked={isChecked[index] || false}
                                        onChange={() => handleCheckboxChange(index)}
                                        type="checkbox"
                                        className="peer cursor-pointer absolute appearance-none h-[16px] w-[16px] border border-[#22385F] ml-[16rem] rounded-full bg-white checked:bg-[#22385F] checked:border-transparent focus:outline-none"
                                    />
                                    <span className='ml-2 text-[#000000] font-montserrat font-medium text-[14px] leading-[17.07px] peer-checked:text-[#22385F]'>
                                        {item}
                                    </span>
                                </label>
                            </div>
                        )) : customizedItems.map((item, index) => (
                            <div key={index} className='flex items-center justify-between px-[10px] mt-[10px]'>
                                <label htmlFor={`checkbox-${index}`} className='flex relative items-center mt-2 cursor-pointer w-full'>
                                    <input
                                        id={`checkbox-${index}`}
                                        checked={isCustomizedChecked[index] || false}
                                        onChange={() => handleCustomizedsCheckboxChange(index)}
                                        type="checkbox"
                                        className="peer cursor-pointer absolute appearance-none h-[16px] w-[16px] border border-[#22385F] ml-[16rem] rounded-full bg-white checked:bg-[#22385F] checked:border-transparent focus:outline-none"
                                    />
                                    <span className='ml-2 text-[#000000] font-montserrat font-medium text-[14px] leading-[17.07px] peer-checked:text-[#22385F]'>
                                        {item}
                                    </span>
                                </label>
                            </div>
                        ))
                        }



                        {!isCustomized ? <button onClick={() => setIsCustomized(true)} className="px-5 mt-3 flex justify-between   w-[305px] text-[#000000] font-montserrat font-medium text-[14px] leading-[17.07px]">
                            Customized
                            <MdKeyboardArrowRight className="font-montserrat ml-[20px] font-medium text-[24px] " />
                        </button> : null}
                        <div className='flex justify-center mt-5'>
                            <button className='w-[282px] h-[40px] mt-1 rounded-md bg-[#22385F] text-white font-noto text-[14px] leading-[19.07px] cursor-pointer ease-in-out hover:bg-white hover:text-[#22385F] transition-all duration-700 hover:border-[#22385F] hover:border-[1px]'>Göstər</button>
                        </div>

                    </div>
                </div>
            </div> : null}

        </div>

    )
}

export default TrainingName