import ContactedFilter from "../Contacted Filter";
import SearchFilter from "../Search Filter";
import TableChanger from "../Table Changer";
import TableInfoTop from "../Table Info Top";

const TableInfoSection = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <TableInfoTop />
      <div className="flex justify-between h-[100%]">
        <TableChanger />
        <div className="flex gap-[16px]">
          <SearchFilter />
          <ContactedFilter />
        </div>
      </div>
    </div>
  );
};

export default TableInfoSection;