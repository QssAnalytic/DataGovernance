import { IoChevronDown } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BootcampFilterProps } from '../types/Types';

export const BootcampFilter: React.FC<BootcampFilterProps> = ({
  title,
  options,
  placeholder,
  selectAllText,
  resetText,
  buttonText,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [checked, setChecked] = useState(Array(options.length).fill(false));
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleCheckAll = () => {
    setChecked(Array(options.length).fill(true));
  };

  const handleCheckSingle = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const handleReset = () => {
    setChecked(Array(options.length).fill(false));
  };

  const handleSearchClick = () => {
    setIsInputVisible(true);
  };

  const filterSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div
        onClick={handleToggle}
        className="flex w-[295px] h-[56px] p-[12px] px-[16px] justify-between items-center rounded-[12px] border border-[#22385F] bg-[#FAFCFF]"
      >
        <p className="text-[#969696] font-medium text-[14px] leading-normal">
          {title}
        </p>
        <span className="text-[#969696]">
          <IoChevronDown />
        </span>
      </div>

      {isActive && (
        <div className="absolute z-50 flex flex-col items-start gap-[16px] p-[20px] self-stretch w-[268px] bg-white border border-black rounded-[12px]">
          <div className="w-[228px]">
            <div className="flex justify-between">
              <p className="text-black font-montserrat text-[16px] font-semibold leading-normal">
                {title}
              </p>
              <div onClick={handleToggle}>
                <IoCloseOutline className="flex w-[24px] h-[24px] justify-center items-center cursor-pointer" />
              </div>
            </div>

            {!isInputVisible && (
              <div className="flex items-center gap-[10px] peer w-[240px]">
                <p
                  className="cursor-pointer text-[#1D7EB7] font-montserrat text-[16px] font-medium leading-normal py-[16px]"
                  onClick={handleCheckAll}
                >
                  {selectAllText}
                </p>
                <p className="w-[4px] h-[4px] bg-[#1D7EB7] p-[2px] rounded-[50%]"></p>
                <p
                  className="cursor-pointer text-[#1D7EB7] font-montserrat text-[16px] font-medium leading-normal"
                  onClick={handleReset}
                >
                  {resetText}
                </p>
                <span className="rounded-full bg-[#8F8F8F] w-[1px] h-[20px]"></span>
                <div
                  className="flex h-[24px] w-[24px] justify-center items-center flex-1 cursor-pointer peer"
                >
                  <CiSearch
                    className={`peer transform transition-transform duration-3000 ease-in-out ${isInputVisible ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
                      }`}
                    values={searchTerm}
                    onClick={handleSearchClick}
                  />
                </div>
              </div>
            )}

            {isInputVisible && (
              <div className="relative w-full">
                <CiSearch className="peer absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8F8F8F] " />
                <input
                  type="text"
                  className="w-full pl-[30px] pr-[8px] py-[8px] border border-[#22385F] rounded-[12px]"
                  placeholder={placeholder}
                  onBlur={() => setIsInputVisible(false)}
                  onChange={filterSearch}
                />
              </div>
            )}
          </div>

          {options.map((item, index) => (
            <div className="flex gap-[16px] w-full items-center" key={index}>
              <p className="w-[60px]">{item}</p>
              <input
                className="appearance-none w-[16px] h-[16px] rounded-full border border-[#22385F] checked:bg-[#22385F] focus:outline-none"
                type="checkbox"
                checked={checked[index]}
                onChange={() => handleCheckSingle(index)}
              />
            </div>
          ))}

          <div
            className="flex h-[43px] p-[12px_16px] justify-center items-center gap-3 self-stretch rounded-[12px] bg-[#22385F] text-white text-[14px] font-medium leading-normal cursor-pointer"
          >
            {buttonText}
          </div>
        </div>
      )}
    </div>
  );
};
