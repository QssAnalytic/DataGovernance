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
          key={`number-${index}`}
          className={`flex items-center justify-center text-[24px] font-[500] cursor-pointer transition-all duration-300 ease-in-out ${
            index === 0 ? "rounded-tl-lg" : ""
          } ${index === numbers.length - 1 ? "rounded-tr-lg" : ""} ${
            selectedIndices.includes(index)
              ? "bg-[#5D7988] text-white"
              : "bg-[#F4F7FD] text-black"
          }`}
          onClick={() => handleClick(index)}
          style={{ padding: "16px 0" }}
        >
          {number}
        </div>
      ))}

      {texts.map((text, index) => (
        <div
          key={`text-${index}`}
          className={`bg-[#5D7988] text-[12px] text-white flex items-center justify-center transition-opacity duration-300 ease-in-out cursor-pointer ${
            index === 0 ? "rounded-bl-lg" : ""
          } ${index === texts.length - 1 ? "rounded-br-lg" : ""} ${
            selectedIndices.includes(index + numbers.length)
              ? "bg-[#F4F7FD] text-black"
              : "bg-[#5D7988] text-white"
          }`}
          onClick={() => handleClick(index + numbers.length)}
          style={{ padding: "16px 0" }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default TableInfoTop;
