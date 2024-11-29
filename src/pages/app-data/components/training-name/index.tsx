import { useState, useRef, useEffect } from "react";
import filterIcn from '../../../../assets/icons/chevron-down.svg';
import leftArrow from '../../../../assets/icons/left-arrow.svg';
import arrow from '../../../../assets/icons/arrow.svg';
import cross from '../../../../assets/icons/cross.svg';

interface MyComponentProps {
    isOpen: boolean;
    onToggle: () => void;
}

const TrainingName: React.FC<MyComponentProps> = ({ isOpen, onToggle }) => {

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

    const [isChecked, setIsChecked] = useState<boolean[]>([]);
    const [isCustomizedChecked, setIsCustomizedChecked] = useState<boolean[]>([]);
     

    const [isCustomized, setIsCustomized] = useState(false);

    const [query, setQuery] = useState('');

    const handleCheckboxChange = (index: number) => {
        setIsChecked((prevState) => {
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
        setIsChecked(new Array(customized.length).fill(true));
    };

    const resetCustomized = () => {
        setIsChecked(new Array(customized.length).fill(false));
    };


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
                <p className='font-montserrat font-normal text-[14px] text-[#969696] leading-[17.07px]'>Training Name</p>
                <img src={filterIcn} className='w-[24px] h-[24px]' alt="" />
            </div>
            {isOpen ? <div ref={dropdownRef} className="w-[323px]  max-h-[650px] rounded-xl shadow-lg p-4 bg-white " >
                {!isCustomized ? <div className='flex justify-between mt-3  px-3 w-[255px]  h-[22px]'>
                    <p className="font-montserrat font-semibold leading-[19.05px] text-[16px] text-[#000000] text-left" > Training Name</p>
                    <button  className="bg-none border-none" onClick={onToggle}>
                        <img src={cross} alt="closing the dropdown" />
                    </button>
                </div> : <div className='flex justify-start gap-[10px] mt-3  px-3 w-[311px]  h-[22px]'>
                    <button onClick={() => setIsCustomized(false)} className="bg-none border-none">
                        <img src={arrow} alt="path to training name" />
                    </button>
                    <p className="font-montserrat font-semibold leading-[19.05px] mt-[2px] text-[16px] text-[#000000] text-left" > Customized</p>
                </div>}



                <div className='flex flex-col gap-[10px]'>
                    <div className='flex justify-start mt-2 px-3 py-1 gap-[7px]'>
                        <span className='cursor-pointer font-montserrat font-normal text-[16px] text-[#1D7EB7] leading-[19.05px]' onClick={() => (!isCustomized ? selectAll() : selectCustomized())}>Hamısını seç</span>
                        <div className='w-[5px] h-[5px] rounded bg-[#1D7EB7] mt-[0.5rem]'></div>
                        <span className=' cursor-pointer font-montserrat font-normal text-[16px] text-[#1D7EB7] leading-[19.05px]' onClick={() => (!isCustomized ? reseAll() : resetCustomized())}>Sıfırla</span>




                    </div>
                    <div>






                        {!isCustomized ? filteredItems.map((item, index) => (
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
                        )) : customizedItems.map((item, index) => (
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



                        {!isCustomized ? <button onClick={() => setIsCustomized(true)} className="px-5 mt-3 flex justify-between  w-[265px] text-[#000000] font-montserrat font-medium text-[14px] leading-[17.07px]">Customized  <img src={leftArrow} alt="customized icon" /> </button> : null}
                        <div className='flex justify-center mt-5'>
                            <button className='w-[282px] h-[40px] mt-1 rounded-md bg-[#22385F] text-white font-noto text-[14px] leading-[19.07px] cursor-pointer hover:bg-white hover:text-[#22385F] transition-all duration-[1000ms] hover:border-[#22385F] hover:border-[1px]'>Göstər</button>
                        </div>

                    </div>
                </div>
            </div> : null}

        </div>

    )
}

export default TrainingName