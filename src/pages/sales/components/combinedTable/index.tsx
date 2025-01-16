import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { CombinedTableData } from "../sharedData";
import { MdOutlineRefresh } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { CombinedDataProps, CombinedDataTypes } from "../../types";
import { useState } from "react";
import ShowModal from "@/pages/app-data/components/showModal";
import PaginationControls from "@/pages/lead-details-page/components/Pagination Controller";

const CombinedTable: React.FC<CombinedDataProps> = ({ isOtherActiveFull, searchTerm, isPaymentActiveFull, isServiceActiveFull }) => {

  const [data, setData] = useState<CombinedDataTypes[]>(CombinedTableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrderBy, setSortOrderBy] = useState<'name' | 'date'>('name');  // 
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');
  const [showModal, setShowModal] = useState(false);
  const [deleteRowId, setDeleteRowId] = useState<number | null>(null);
  const [checkboxStates, setCheckboxStates] = useState(Array(10).fill(false));

  const handleCheckboxChange = (index:number) => {
    const updatedStates = [...checkboxStates];
    updatedStates[index] = !updatedStates[index];
    setCheckboxStates(updatedStates);
  };

  //Deleting items from table
  const handleDeleteClick = (id: number) => {
    setDeleteRowId(id);
    setShowModal(true);
  }


  const handleCancelDelete = () => {
    setShowModal(false);
    setDeleteRowId(null);
  };



  const handleConfirmDelete = () => {
    if (deleteRowId !== null) {
      setData(data.filter((row) => row.id !== deleteRowId));
    }
    setShowModal(false);
    setDeleteRowId(null);
  };


  const handleSort = () => {
    setSortOrderBy('name');
    setSortOrder(sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? '' : 'asc');
  }


  const sortedData = data.slice().sort((a, b) => {

    if (!sortOrderBy) {
      return 0; // No sorting, original order
    }

    if (sortOrderBy === 'name') {
      const nameA = a.name?.toLowerCase() ?? '';
      const nameB = b.name?.toLowerCase() ?? '';
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : sortOrder === 'desc' ? nameB.localeCompare(nameA) : 0;
    }


    return 0;
  });


  const filteredData = sortedData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())


  );


  const rowsPerPage = 5; // Number of rows to display per page



  // Pagination logic
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);



  return (
  
    <div >
      <div  className=" relative overflow-x-auto ">
      <table className="  table-auto w-full rounded-xl border-collapse">

<thead className="bg-[#E9EDCA] sticky top-0 z-10 shadow-md">
  <tr className="text-left">
    <th className="py-3 px-4 font-semibold text-center font-montserrat text-[#000000]">ID</th>
    <th className="py-3 px-4">
      <div className="flex items-center gap-2">
        <HiOutlineChevronUpDown
          onClick={handleSort}
          className={`cursor-pointer w-5 h-5 ${sortOrder === "asc"
              ? "text-[#ff2c2c]"
              : sortOrder === "desc"
                ? "text-[#4BB543]"
                : "text-gray-600"
            }`}
        />
        <span className="font-montserrat text-sm font-bold text-[#000000]">Ad və Soyad</span>
      </div>
    </th>

    {isOtherActiveFull && (
      <>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">BC №</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">Qoşulur</th>
        <th className="py-3 px-4 text-left font-montserrat text-sm font-bold text-[#000000]">Mobil nömrə</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">Müqavilə</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">Entrance Score</th>
        <th className="py-3 px-4 text-left font-montserrat text-sm font-bold text-[#000000]">İş yeri</th>
      </>
    )}

    {isPaymentActiveFull && (
      <>
        <th className="py-3 px-4 text-left font-montserrat text-sm font-bold text-[#000000]">Məbləğ</th>
        <th className="py-3 px-4 text-left font-montserrat text-sm font-bold text-[#000000]">Endirimlər</th>
        <th className="py-3 px-4 text-left font-montserrat text-sm font-bold text-[#000000]">Total amount</th>
        <th className="py-3 px-4 text-left font-montserrat text-sm font-bold text-[#000000]">Ödəmə 1</th>
        <th className="py-3 px-4 text-left font-montserrat text-sm font-bold text-[#000000]">Planned Date</th>
        <th className="py-3 px-4 text-left font-montserrat text-sm font-bold text-[#000000]">Ödəmə 2</th>
        <th className="py-3 px-4 text-left font-montserrat text-sm font-bold text-[#000000]">Planned Date</th>
        <th className="py-3 px-4 text-left font-montserrat text-sm font-bold text-[#000000]">Ödəmə 3</th>
        <th className="py-3 px-4 text-left font-montserrat text-sm font-bold text-[#000000]">Planned Date</th>
      </>
    )}

    {isServiceActiveFull && (
      <>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">Career</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">Coworking</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">Mentorship</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">Experience</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">R</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">SQL</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">Python</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">Big Data</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">Tableau</th>
        <th className="py-3 px-4 text-center font-montserrat text-sm font-bold text-[#000000]">SPSS</th>
      </>
    )}

    <th className="py-3 px-4">
      <div className="flex justify-center items-center">
        <MdOutlineRefresh className="w-6 h-6" />
      </div>
    </th>
  </tr>
</thead>

<tbody className="h-[350px]">
  {currentData.map((item) => (
    <tr key={item.id} className="border-b even:bg-[#fafafa] odd:bg-white">
      <td className="py-3 px-4 text-center text-sm text-gray-700">{item.id}</td>
      <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.name}</td>

      {isOtherActiveFull && (
        <>
          <td className="py-3 px-4 text-center font-montserrat text-sm font-medium text-[#000000]">{item.BC}</td>
          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.trainingName}</td>
          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.phone}</td>
          <td className="py-3 px-4 text-center font-montserrat text-sm font-medium">
            <input
              type="checkbox"
              className="appearance-none w-4 h-4 border rounded checked:bg-green-500 checked:border-transparent focus:outline-none cursor-pointer"
            />
          </td>
          <td
            className={`py-3 px-4 font-montserrat text-sm text-center font-medium ${item.score > 600 ? 'text-[#30AC04]' : 'text-[#000000]'}`}
          >
            {item.score}
          </td>
          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.workPlace}</td>
        </>
      )}

      {isPaymentActiveFull && (
        <>
          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.amount}</td>
          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.discount}</td>
          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.totalAmount}</td>
          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.payment1}</td>
          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.plannedDate1}</td>
          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.payment2}</td>
          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.plannedDate2}</td>
          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.payment3}</td>

          <td className="py-3 px-4 font-montserrat text-sm font-medium text-[#000000]">{item.plannedDate3}</td>
        </>
      )}

      {isServiceActiveFull && (
        <>
          {checkboxStates.map((checked, index) => (
            <td
              key={`checkbox-${index}`}
              className="py-3 px-4 text-center font-montserrat text-sm font-medium"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleCheckboxChange(index)}
                className="appearance-none w-4 h-4 border rounded checked:bg-green-500 checked:border-transparent focus:outline-none cursor-pointer"
              />
            </td>
          ))}
        </>
      )}

      <td className="py-3 px-4 text-center">
        <div className="flex justify-center gap-3">
          <FiEdit className="cursor-pointer w-5 h-5" />
          <GoTrash
            onClick={() => handleDeleteClick(item.id)}
            className="cursor-pointer w-5 h-5"
          />
        </div>
      </td>
    </tr>
  ))}
</tbody>
</table>
      </div>
     

      <div className="  flex justify-center">
        <PaginationControls
          data={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowsPerPage={rowsPerPage}
        />
      </div>

      {showModal && (
        // my delete modal
        <ShowModal handleCancelDelete={handleCancelDelete} handleConfirmDelete={handleConfirmDelete} />
      )}
    </div>
  );
};

export default CombinedTable;



