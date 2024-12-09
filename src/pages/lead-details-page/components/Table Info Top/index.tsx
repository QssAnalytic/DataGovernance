const TableInfoTop = () => {
  const texts = [
    "Zəng edilməli nömrə sayı",
    "Əlaqə saxlanılmayan",
    "Connect today",
    "Vacib və təcili",
    "Təcili",
    "Neytral",
  ];

  const numbers = [10, 20, 30, 40, 50, 60];

  return (
    <div className="grid grid-cols-6 text-center">
      {texts.map((text, index) => (
        <div
          key={`text-${index}`}
          className={`bg-[#22385F]  text-white flex items-center py-[12px] px-[16px] justify-center ${
            index === 0 ? "rounded-tl-lg" : ""
          } ${index === texts.length - 1 ? "rounded-tr-lg" : ""}`}
        >
          {text}
        </div>
      ))}

      {numbers.map((number, index) => (
        <div
          key={`number-${index}`}
          className={`flex items-center  justify-center bg-[#F4F7FD] py-[12px] px-[16px] ${
            index === 0 ? "rounded-bl-lg" : ""
          } ${index === numbers.length - 1 ? "rounded-br-lg" : ""}`}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default TableInfoTop;
