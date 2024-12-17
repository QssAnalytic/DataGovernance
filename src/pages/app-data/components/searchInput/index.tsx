import { CiSearch } from "react-icons/ci";


const SearchInput = ({ query, setQuery }: any) => {
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
          className=" relative z-10 w-[200px] h-[35px] pl-7 rounded-md  border-[1px] border-[#8F8F8F] focus:outline-none"

        />
      </div>




    </>
  )
}

export default SearchInput

