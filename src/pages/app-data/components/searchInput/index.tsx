import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";


const SearchInput = ( {isSearch, setIsSearch} :any) => {
    const [isInput, setIsInput] = useState<boolean>(false);
  
    const handleSearchIcon = () => {
      if (isSearch) {
        setIsSearch(false)
      } else {
        setIsSearch(true)
      }
  
      setIsInput(false);
    }
  
  
    const handleInput = () => {
      if (!isInput) {
        setIsInput(true)
      } 
  
 }
   return (
    <>
    <div className="flex justify-center">
      <div
        className={`flex relative  transition-all duration-1000 ease-in-out ${isSearch ? 'w-[200px]  h-[35px] border-[0.5px] border-[#00308F] rounded-md' : 'w-[50px]'
          }`}
      >
        {isSearch && (
          <input
            type="text"
            className="rounded-full mt-[2px] absolute opacity-100 transition-opacity  px-2 duration-1000 ease-in-out focus:outline-none"
            onClick={handleInput}
          />
        )}
        {isInput && <IoCloseOutline className="ml-[10rem] mt-1 cursor-pointer text-[24px] z-10  transition-all duration-1000 ease-in-out focus:outline-none" onClick={handleSearchIcon} />
        }
        
        {!isSearch && <div className="w-[1.5px] ml-2 bg-[#8F8F8F] h-[20px]"></div>
          } 

        <CiSearch className={`text-[22px] text-[#8F8F8F] z-10  ${isSearch ? 'ml-1 mt-1 ' : 'ml-2  '
          } transition-all duration-1000 ease-in-out ${isInput && "hidden"} `}
          onClick={handleSearchIcon}
        />




      </div>
    </div>



  </>
   )
}

export default SearchInput