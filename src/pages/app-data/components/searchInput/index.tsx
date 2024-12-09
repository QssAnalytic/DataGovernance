import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


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
    <div className="flex  justify-center">
      <div
        className={`flex relative  transition-all duration-1000 ease-in-out ${isSearch ? 'w-[200px] border h-[35px] border-[1px] border-[#00308F] rounded-md' : 'w-[50px]'
          }`}
      >
        {isSearch && (
          <input
            type="text"
            className="border-none mt-[2px] absolute opacity-100 transition-opacity duration-1000 ease-in-out focus:outline-none"
            onClick={handleInput}
          />
        )}
        {isInput && <IoClose className="ml-[10rem]   mt-1  cursor-pointer text-[24px] z-10  transition-all duration-1000 ease-in-out" onClick={handleSearchIcon} />
        }
        <IoSearchSharp className={`text-[24px]   z-10  ${isSearch ? 'ml-1 mt-1 ' : 'ml-2  '
          } transition-all duration-1000 ease-in-out ${isInput && "hidden"} `}
          onClick={handleSearchIcon}
        />




      </div>
    </div>



  </>
   )
}

export default SearchInput