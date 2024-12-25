import { useState } from "react";

const TableInfoTop = () => {
  const texts = [
    "Connect today",
    "Satış Ödənişi Gözlənir",
    "Alacaq mı Deyəcək",
    "Görüş Salınan / Keçirilən",
    "Potensial Müştəri Ola Bilər",
    "Digər",
  ];

  const numbers = [150, 30, 25, 32, 18, 2];
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setSelectedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="grid grid-cols-6 text-center">
      {numbers.map((number, index) => (
        <div className="flex" key={`number-wrapper-${index}`}>
          <div
            key={`number-${index}`}
            className={`flex py-[14px] w-[100%] px-[16px] items-center text-[24px] font-[500] cursor-pointer transition-all duration-300 ease-in-out ${
              index === 0 ? "rounded-tl-[12px]" : ""
            } ${index === numbers.length - 1 ? "rounded-tr-[12px]" : ""} ${
              selectedIndices.includes(index)
                ? "bg-[#5D7988] text-white"
                : "bg-[#F4F7FD] text-black"
            }`}
            onClick={() => handleClick(index)}
          >
            {number}
          </div>
          {index < numbers.length - 1 && (
            <div className="flex items-center h-full bg-[#F4F7FD]">
              <div className="h-[30px] w-[2px] bg-[#5D7988] rounded-full"></div>
            </div>
          )}
        </div>
      ))}

      {texts.map((text, index) => (
        <div
          key={`text-${index}`}
          className={`bg-[#5D7988] py-[14px] px-[16px] text-[12px] text-white flex items-center transition-opacity duration-300 ease-in-out cursor-pointer ${
            index === 0 ? "rounded-bl-[12px]" : ""
          } ${index === texts.length - 1 ? "rounded-br-[12px]" : ""} ${
            selectedIndices.includes(index + numbers.length)
              ? "bg-[#F4F7FD] text-black"
              : "bg-[#5D7988] text-white"
          }`}
          onClick={() => handleClick(index + numbers.length)}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default TableInfoTop;
