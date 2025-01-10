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
        <div
          key={`number-wrapper-${index}`}
          className={`flex flex-col transition-all duration-300 ease-in-out cursor-pointer ${
            index === 0
              ? "rounded-tl-[12px] rounded-bl-[12px]" // Always add to the first section
              : index === numbers.length - 1
              ? "rounded-tr-[12px] rounded-br-[12px]" // Always add to the last section
              : ""
          } ${
            selectedIndices.includes(index) ? "bg-[#5D7988]" : "bg-[#F4F7FD]"
          }`}
          onClick={() => handleClick(index)}
        >
          {/* Number Section */}
          <div
            className={`flex py-[14px] px-[16px] w-full items-center text-[24px] font-[500] cursor-pointer ${
              selectedIndices.includes(index) ? "text-white" : "text-black"
            } ${index === 0 ? "rounded-tl-[12px]" : ""} ${
              index === numbers.length - 1 ? "rounded-tr-[12px]" : ""
            }`}
          >
            {number}
          </div>

          {/* Text Section */}
          <div
            className={`py-[14px] px-[16px] text-[12px] bg-[#5D7988] text-white flex items-center ${
              index === 0 ? "rounded-bl-[12px]" : ""
            } ${index === texts.length - 1 ? "rounded-br-[12px]" : ""}`}
          >
            {texts[index]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableInfoTop;
