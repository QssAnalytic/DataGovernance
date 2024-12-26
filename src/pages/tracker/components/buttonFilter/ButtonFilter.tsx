import { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { BootcampDataType } from "../../types/Types";
import { motion, AnimatePresence } from "framer-motion";

type ButtonFilterProps = {
  title: string;
  data: BootcampDataType[];
};

const ButtonFilter: React.FC<ButtonFilterProps> = ({ title, data }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(false);
  const [checkboxes, setCheckboxes] = useState(
    data.map((item) => Array(item.num.length).fill(false))
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChecked = () => {
    setCheckboxes(data.map((item) => Array(item.num.length).fill(true)));
  };

  const handleCheckedRemove = () => {
    setCheckboxes(data.map((item) => Array(item.num.length).fill(false)));
  };

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleInput = () => {
    setInput((prev) => !prev);
  };

  const handleCheckboxChange = (index: number, numIndex: number) => {
    setCheckboxes((prev) => {
      const newCheckboxes = [...prev];
      newCheckboxes[index][numIndex] = !newCheckboxes[index][numIndex];
      return newCheckboxes;
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div>
        <div
          onClick={handleToggle}
          className="flex w-[295px] h-[56px] px-4 py-3 justify-between items-center rounded-lg border border-[0.5px] border-[#22385F] bg-[#FAFCFF]"
        >
          <div>{title}</div>
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <div className="relative">
          {open && (
            <div className="absolute top-0 left-0 z-[11] flex w-[258px] h-[auto] flex-col gap-[10px] justify-center items-start rounded-lg bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]">
              {data.map((item, index) => (
                <div key={index} className="w-[90%] h-[auto]">
                  <div className="flex flex-col items-start gap-4 self-stretch pl-5 pt-5">
                    <div className="flex justify-between items-center self-stretch font-bold">
                      <div>{item.title}</div>
                      <IoCloseOutline
                        onClick={handleToggle}
                        className="w-[24px] h-[24px] cursor-pointer"
                      />
                    </div>
                    <div className="flex h-9 justify-start items-center gap-[10px] relative z-[5000] bg-white w-[103%]">
                      <div
                        onClick={handleChecked}
                        className="text-[#1D7EB7] font-medium text-[16px] leading-normal font-montserrat cursor-pointer"
                      >
                        hamisini sec
                      </div>
                      <div
                        onClick={handleCheckedRemove}
                        className="text-[#1D7EB7] font-medium text-[16px] leading-normal font-montserrat cursor-pointer"
                      >
                        sifirla
                      </div>
                      <div onClick={handleInput}>
                        {!input ? (
                          <div>
                            <CiSearch className="h-[24px] w-[24px] cursor-pointer" />
                          </div>
                        ) : (
                          <div>
                            <IoCloseOutline className="w-[24px] h-[24px] cursor-pointer" />
                          </div>
                        )}
                      </div>
                    </div>
                    <AnimatePresence>
                      {input && (
                        <motion.div
                          initial={{ y: -50, scale: 0.95 }}
                          animate={{ y: 0, scale: 1 }}
                          exit={{ y: -50, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="relative w-[218px]"
                        >
                          <input
                            type="text"
                            placeholder="Axtar"
                            className="w-full h-[36px] pl-4 pr-10 rounded-lg border border-[#22385F] bg-white outline-none text-sm text-gray-700 placeholder-gray-400"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <CiSearch className="w-5 h-5" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div>
                      {item.num.map((numItem, numIndex) => (
                        <div
                          key={numIndex}
                          className="flex justify-between w-[217px]"
                        >
                          <div className="py-[5px] text-primary text-black font-montserrat text-sm font-medium leading-normal">
                            {numItem}
                          </div>
                          <input
                            type="checkbox"
                            checked={checkboxes[index][numIndex]}
                            onChange={() => handleCheckboxChange(index, numIndex)}
                            className="appearance-none rounded-full border border-[#22385F] w-4 h-4 checked:bg-[#22385F] checked:border-[#22385F] cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pl-5 pt-5 pb-5">
                    <div className="flex w-[218px] h-[43px] px-4 py-3 justify-center items-center gap-3 self-stretch rounded-lg bg-[#22385F] text-white font-montserrat text-sm font-medium leading-normal cursor-pointer">
                      Gonder
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonFilter;
  