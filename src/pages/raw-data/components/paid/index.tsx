import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Paid = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState<boolean[]>([]);

    const handleDropdown = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true);
        }
    }


    const paidData: string[] = [
        "Ofis",
        "Card (Rabitə)",
        "Card (Kapital)",
        "Card (Ceo)",
    
      
    ];


  const handleCheckboxChange = (index: number) => {
    setIsChecked((prevState) => {
      const newCheckedItems = [...prevState];
      newCheckedItems[index] = !newCheckedItems[index]; // Toggle the checked state at the specific index
      return newCheckedItems;
    });
  };
  const filteredItems = paidData; // No filtering needed


  const selectAll = () => {
    setIsChecked(new Array(paidData.length).fill(true));
  };

  const resetAll = () => {
    setIsChecked(new Array(paidData.length).fill(false));
  };

  const handleCheckbox = () => !isOpen;
  document.addEventListener("mousedown", handleCheckbox);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleDropdown(); // Close the dropdown when clicking outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleDropdown]);


    return (
        <div className="relative w-[100%]">
            <div onClick={handleDropdown} className="flex cursor-pointer justify-between p-4  w-full rounded-xl border-[0.5px] bg-[#FAFCFF]   border-[#22385F]">
                <p>Paid via</p>
                <IoIosArrowDown />
            </div>
            {
                isOpen &&   <div
                ref={dropdownRef}
                className=" absolute  z-[100] right-0 rounded-xl shadow-lg p-4 bg-white "
              >
                <div className="flex justify-between   pr-[7px] w-[295px]  mt-7 ">
                  <p className="font-montserrat w-full my-2 ml-3 font-semibold leading-[19.05px] text-[16px] text-[#000000] text-left">
                    Paid via
                  </p>
                  <button className="bg-none border-none " onClick={handleDropdown}>
                    <IoCloseSharp className="text-[24px]"/>
                  </button>
                </div>
      
                <div className="flex flex-col gap-[10px]">
                  <div className="flex justify-start mt-2 px-3 py-1 gap-[7px]">
                    <span
                      className="cursor-pointer font-montserrat font-normal text-[16px] text-[#1D7EB7] leading-[19.05px]"
                      onClick={selectAll}
                    >
                      Hamısını seç
                    </span>
                    <div className="w-[5px] h-[5px] rounded bg-[#1D7EB7] mt-[0.5rem]"></div>
                    <span
                      className=" cursor-pointer font-montserrat font-normal text-[16px] text-[#1D7EB7] leading-[19.05px]"
                      onClick={resetAll}
                    >
                      Sıfırla
                    </span>
                  </div>
                  <div>
                    {filteredItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-[10px] mt-[10px]"
                      >
                        <label
                          htmlFor={`checkbox-${index}`}
                          className="flex relative items-center mt-2 cursor-pointer w-full"
                        >
                          <input
                            id={`checkbox-${index}`}
                            checked={isChecked[index] || false}
                            onChange={() => handleCheckboxChange(index)}
                            type="checkbox"
                            className="peer cursor-pointer absolute appearance-none h-[16px] w-[16px] border border-[#22385F] ml-[16rem] rounded-full bg-white checked:bg-[#22385F] checked:border-transparent focus:outline-none"
                          />
                          <span className="ml-2 text-[#000000] font-montserrat font-medium text-[14px] leading-[17.07px] peer-checked:text-[#22385F]">
                            {item}
                          </span>
                        </label>
                      </div>
                    ))}
      
                    <div className="flex justify-center mt-5">
                      <button className="w-full p-2 mt-1 rounded-md bg-[#22385F] text-white font-noto text-[14px] leading-[19.07px] cursor-pointer hover:bg-white hover:text-[#22385F] transition-all duration-700 hover:border-[#22385F] hover:border-[1px]">
                        Göstər
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            }
        </div>
    )
}

export default Paid;
