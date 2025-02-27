import { useState, useRef, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { ShowButton } from "../showButton";
import { CheckBoxes } from "../checkBoxes";
import { CheckboxTitle } from "../checboxTitle";
import { TrainingNameProps } from "../../types";
import SearchInput from "../searchInput";
import { applicationSource, customized } from "../sharedData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";


//Training Name filter content

const TrainingName: React.FC<TrainingNameProps> = ({
  isOpen,
  onToggle,
  paddingy,
  paddingx,
}) => {
  const [isCustomized, setIsCustomized] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const [isChecked, setIsChecked] = useState<boolean[]>(
    new Array(applicationSource.length).fill(false)
  );
  const [isCustomizedChecked, setIsCustomizedChecked] = useState<boolean[]>(
    new Array(customized.length).fill(false)
  );


  const handleCheckboxChange = (index: number) => {
    setIsChecked((prevState) => {
      const newCheckedItems = [...prevState];
      newCheckedItems[index] = !newCheckedItems[index]; // Toggle the checked state at the specific index
      console.log(newCheckedItems[index], "new checked items");
      return newCheckedItems;
    });
  };

  const handleCustomizedsCheckboxChange = (index: number) => {
    setIsCustomizedChecked((prevState) => {
      const newCheckedItems = [...prevState];
      newCheckedItems[index] = !newCheckedItems[index]; // Toggle the checked state at the specific index
      return newCheckedItems;
    });
  };
   

  //  filters items for uncostomized 
  const filteredItems = applicationSource.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  //  filters items forcostomized 

  const customizedItems = customized.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const selectAll = () => {
    setIsChecked(new Array(applicationSource.length).fill(true));
  };

  const resetAll = () => {
    setIsChecked(new Array(applicationSource.length).fill(false));
  };

  const selectCustomized = () => {
    setIsCustomizedChecked(new Array(customized.length).fill(true));
  };

  const resetCustomized = () => {
    setIsCustomizedChecked(new Array(customized.length).fill(false));
  };

  const handleCheckbox = () => !isOpen;
  document.addEventListener("mousedown", handleCheckbox);
  const dropdownRef = useRef<HTMLDivElement | null>(null);


  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onToggle(); 
        setIsCustomized(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const toggleCostomized = () => {
    if (isCustomized) {
      setIsCustomized(false);
    } else {
      setIsCustomized(true);
    }
  };

  const handleToggleCustomized = () => {
    setIsCustomized(false); // Close the modal
    setIsSearch(false); // Close the input field
    setQuery(""); // Reset the search query
  };

  return (
    <div className="relative w-[100%]">
      <div
        className={`flex cursor-pointer justify-between rounded-xl border-[0.5px] bg-[#FAFCFF] border-[#22385F]`}
        style={
          {
            "--tw-px": paddingx,
            "--tw-py": paddingy,
            padding: "var(--tw-py) var(--tw-px)",
          } as React.CSSProperties
        } // Type assertion
        onClick={onToggle}
      >
        <p className="font-montserrat font-normal text-[16px] text-[#969696] mt-1 leading-[17.07px]">
          Training Name
        </p>
        <IoIosArrowDown className="font-montserrat font-medium text-[20px] text-[#969696] mt-1 leading-[17.07px]" />
      </div>
      {isOpen ? (
        <div
          ref={dropdownRef}
          className="absolute right-0 z-[100] rounded-xl shadow-lg p-4 bg-white "
        >
          {!isCustomized ? (
            <div className="flex justify-between mt-3 px-3 pr-0 w-[295px]  h-[22px]">
              <p className="font-montserrat font-semibold leading-[19.05px] text-[14px] text-[#000000] text-left">
                {" "}
                Training Name
              </p>
              <button
                className="bg-none border-none ml-[10px]"
                onClick={onToggle}
              >
                <IoCloseSharp className="text-[24px] " />
              </button>
            </div>
          ) : (
            <div className="flex justify-between gap-[25px] mt-3  px-3 w-[311px]  h-[22px]">
              <button
                onClick={handleToggleCustomized}
                className="bg-none border-none"
              >
                <FaArrowLeft className="text-[18px] cursor-pointer text-[#000]" />
              </button>
              <p className="font-montserrat  font-semibold leading-[19.05px] mt-[2px] text-[16px] text-[#000000] text-left">
                {" "}
                Customized
              </p>
              <button
                className="bg-none border-none ml-[10px]"
                onClick={onToggle}
              >
                <IoCloseSharp className="text-[24px] " />
              </button>

            </div>
          )}

          <div className="flex flex-col mt-3  gap-[10px]">
            <div className=" flex flex-start ml-1 mt-2 px-2 gap-[7px] ">
           
           {/* title component for checkboxex */}

              <CheckboxTitle
                isCustomized={isCustomized}
                selectAll={selectAll}
                selectCustomized={selectCustomized}
                resetAll={resetAll}
                resetCustomized={resetCustomized}
              />
              {isCustomized && (
                <div className="flex justify-center gap-[10px]">
                  <div className="w-[1.5px] ml-2 bg-[#8F8F8F] h-[20px]"></div>

                  {!isSearch ? (
                    <CiSearch
                      className="w-5 text-[20px] cursor-pointer text-[#8F8F8F]"
                      onClick={() => setIsSearch(true)}
                    />
                  ) : (
                    <IoClose
                      className="w-5 h-5 text-[20px]  text-[#8F8F8F] cursor-pointer"
                      onClick={() => setIsSearch(false)}
                    />
                  )}
                </div>
              )}
            </div>

            {isSearch && (
              <div className="relative h-[40px] z-50">
                {/* search input component */}
                <SearchInput
                  setQuery={setQuery}
                  query={query}
                />
              </div>
            )}

            <div className="overflow-y-scroll max-h-[155px]">
              {!isCustomized
                ? filteredItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex  items-center justify-between px-[10px] mt-[10px]"
                  >
                    {/* checkboxes components here for uncostomized  */}
                    <CheckBoxes
                      item={item}
                      index={index}
                      isChecked={isChecked[index]} // Pass the specific value for this checkbox
                      handleCheckboxChange={handleCheckboxChange}
                    />
                  </div>
                ))
                : customizedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-[10px] mt-[10px]"
                  >
                    {/* checkboxes components here for costomized  */}

                    <CheckBoxes
                      item={item}
                      index={index}
                      isChecked={isCustomizedChecked[index]}
                      handleCheckboxChange={handleCustomizedsCheckboxChange}
                    />
                  </div>
                ))}

              {!isCustomized && (
                <button
                  onClick={toggleCostomized}
                  className="px-3 mt-5 flex justify-between  w-[305px] text-[#000000] font-montserrat font-medium text-[14px] leading-[17.07px]"
                >
                  Customized
                  <MdKeyboardArrowRight className="font-montserrat ml-[20px] font-medium text-[24px] " />
                </button>
              )}
               {/* button component */}
              <ShowButton />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TrainingName;
