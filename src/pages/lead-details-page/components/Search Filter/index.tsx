import srcIcon from "../../../../assets/icons/searchIcon.svg";

const SearchFilter = () => {
  return (
    <div className="flex items-center w-[300px] gap-[12px] py-[12px] px-[16px] border-solid border-[1px] border-[#22385F] rounded-[12px]">
      <img src={srcIcon} alt="search icon" className="w-[20px] h-[20px]" />
      <input
        type="text"
        placeholder="Ad, soyad və ya nömrə axtar"
        className="outline-none flex-grow text-[14px] leading-[20px] placeholder:text-[#BCBCBC] placeholder:w-[100%]"
      />
    </div>
  );
};

export default SearchFilter;
