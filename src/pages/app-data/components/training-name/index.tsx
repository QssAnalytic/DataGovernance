import { useState, useRef, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { ShowButton } from "../showButton";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CheckBoxes } from "../checkBoxes";
import { CheckboxTitle } from "../checboxTitle";
import { TrainingNameProps } from "../../types";
import SearchInput from "../searchInput";

interface MyComponentProps {
  isOpen: boolean;
  onToggle: () => void;
}

const TrainingName: React.FC<MyComponentProps> = ({ isOpen, onToggle }) => {
  const [isCustomized, setIsCustomized] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const applicationSource: string[] = [
    "Data Science Bootcamp",
    "Data Analytics Bootcamp",
    "Machine Learning",
    "Blockchain",
  ];

  const customized: string[] = [
    "Excel for Data Analytics",
    "Vizualization with Power BI ",
    "Tableau for Data Analytics",
    "Data Analytics with SPSS",
    "Data Analytics with SPSS",
    "Data Analytics with SQL",
    "Machine learning with SPSS",
    "R for Data Analytics",
    "Data Analytics with R(2)",
    "Introduction to Python",
    "Machine learning with Python",
    "Big Data",
    "Deep learning with Python",
  ];

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

  const filteredItems = applicationSource.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onToggle(); // Close the dropdown when clicking outside
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

  const toggleSearchBtn = () => {
    if (isSearch) {
      setIsSearch(false);
    } else {
      setIsSearch(true);

    }
  };

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
    <div>
      <div
        className="w-[212px] cursor-pointer p-4 flex h-[56px] rounded-xl border-[0.5px] bg-[#FAFCFF] justify-between  border-[#22385F] "
        onClick={onToggle}
      >
        <p className="font-montserrat font-normal text-[14px] text-[#969696] mt-1 leading-[17.07px]">
          Training Name
        </p>
        <IoIosArrowDown className="font-montserrat font-medium text-[20px] text-[#969696] mt-1 leading-[17.07px]" />
      </div>
      {isOpen ? (
        <div
          ref={dropdownRef}
          className="w-[323px]  max-h-[650px] rounded-xl shadow-lg p-4 bg-white "
        >
          {!isCustomized ? (
            <div className="flex justify-between mt-3  px-3 w-[295px]  h-[22px]">
              <p className="font-montserrat font-semibold leading-[19.05px] text-[16px] text-[#000000] text-left">
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
            <div className="flex justify-start gap-[15px] mt-3  px-3 w-[311px]  h-[22px]">
              <button
                onClick={handleToggleCustomized}
                className="bg-none border-none"
              >
                <FaArrowLeft className="text-[18px]" />
              </button>
              <p className="font-montserrat font-semibold leading-[19.05px] mt-[2px] text-[16px] text-[#000000] text-left">
                {" "}
                Customized
              </p>
            </div>
          )}

          <div className="flex flex-col mt-3  gap-[10px]">
            <div className="flex flex-col mt-2 px-3 py-1 gap-[7px] ">
              <CheckboxTitle
                isCustomized={isCustomized}
                selectAll={selectAll}
                selectCustomized={selectCustomized}
                resetAll={resetAll}
                resetCustomized={resetCustomized}
              />
              {isCustomized ? (
                <div
                  className={`flex ml-[2px] mt-2 flex-col gap-1 w-[200px]   h-[30px]  border transition-all duration-700 ease-in-out rounded-lg px-2 py-1 `}
                >
                  <input
                    type="text"
                    name="search"
                    className="peer absolute  border-none focus:outline-none "
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />

                  <IoSearch
                    className={`text-[#8F8F8F] z-10 w-[20px] h-[20px] text-end  cursor-pointer peer-focus:hidden `}
                    onClick={toggleSearchBtn}
                  />
                </div>
              ) : null}
            </div>
            <div>
              {!isCustomized
                ? filteredItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex  items-center justify-between px-[10px] mt-[10px]"
                    >
                      <CheckBoxes
                        item={item}
                        index={index}
                        isChecked={isChecked}
                        handleCheckboxChange={handleCheckboxChange}
                      />
                    </div>
                  ))
                : customizedItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-[10px] mt-[10px]"
                    >
                      <CheckBoxes
                        item={item}
                        index={index}
                        isChecked={isCustomizedChecked}
                        handleCheckboxChange={handleCustomizedsCheckboxChange}
                      />

                    </div>
                  ))}

              {!isCustomized && (
                <ShowButton setIsCustomized={toggleCostomized} />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TrainingName;
