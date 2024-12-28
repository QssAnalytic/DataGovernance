import { FiSearch } from "react-icons/fi";

const SalesInput = () => {
    return  <div className="flex relative justify-center  w-[296px]  border-[0.5px]  bg-[#FAFCFF] border-[#22385F] rounded-xl h-[56px]  px-[16px] py-[14px] ">
    <FiSearch className="mr-2 mt-[2px] text-[#969696] font-montserrat font-bold text-[] text-[24px]" />
    <input
      id="myInput"
      type="text"
      className="  w-[296px] bg-[#FAFCFF] focus:outline-none  placeholder-font-montserrat placeholder-text-[14px] placeholder-leading-[17.07px]  placeholder-font-normal "
      placeholder="Ad, soyad və ya nömrə axtar"
    />
  </div>
}

export default SalesInput;