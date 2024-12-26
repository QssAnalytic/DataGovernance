import { CiSearch } from "react-icons/ci";
import { SearchInputProps } from "../../types";

const SearchInput: React.FC<SearchInputProps> = ({ query, setQuery }) => {
  return (
    <>
      <div className=" flex ml-3  h-[20px] relative z-10 justify-start">
       <CiSearch className={`text-[22px] absolute text-[#8F8F8F] z-20  m-[5px]
        `}
        />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" relative z-10 w-[200px] h-[35px] text-[#8F8F8F] pl-7 rounded-md  border-[1px] border-[#8F8F8F] focus:outline-none"

        />
      </div>




    </>
  )
}

export default SearchInput

