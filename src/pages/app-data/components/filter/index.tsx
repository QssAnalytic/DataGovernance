import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import FilterData from "../filter-data";
import { FilterProps } from "../../types";

const Filter: React.FC<FilterProps> = ({ searchTerm, setSearchTerm }) => {
  const inputValue = useRef<HTMLInputElement>(null);

  return (
    <div className="flex mt-10 h-[90px] px-7 z-10 justify-around gap-[10rem]">
      <div className="flex relative justify-center  w-[296px]  border-[0.5px]  bg-[#FAFCFF] border-[#22385F] rounded-xl h-[56px]  px-[16px] py-[14px] ">
        <FiSearch className="mr-2 mt-[2px] text-[#969696] font-montserrat font-bold text-[] text-[24px]" />
        <input
          id="myInput"
          type="text"
          value={searchTerm}
          ref={inputValue}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="  w-[296px] bg-[#FAFCFF] focus:outline-none  placeholder-font-montserrat placeholder-text-[14px] placeholder-leading-[17.07px]  placeholder-font-normal "
          placeholder="Ad, soyad və ya nömrə axtar"
        />
      </div>
      <FilterData />
    </div>
  );
};

export default Filter;

