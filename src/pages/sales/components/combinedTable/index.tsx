import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { CombinedTableData } from "../sharedData";
import { MdOutlineRefresh } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { CombinedDataProps } from "../../types";

const CombinedTable: React.FC<CombinedDataProps> = ({ isOtherActiveFull, isPaymentActiveFull, isServiceActiveFull }) => {


  return (
    <div className=" relative overflow-y-auto overflow-x-auto h-[380px]">
      <table className="min-w-[1300px]  table-auto w-full rounded-xl border-collapse ">

        <thead className="bg-[#E9EDCA]  sticky rounded-xl top-0 z-10 shadow-md">
          <tr className="text-left">
            <th className=" py-2 px-5 sticky top-0 z-10 font-semibold text-center font-montserrat  text-[#000000]">ID</th>
            <th className="py-2 px-3">
              <div className="flex gap-1">
                <HiOutlineChevronUpDown

                  className={`cursor-pointer w-5 h-5  text-gray-600"
                  `}
                />
                <p className="font-montserrat text-[12px]  mt-[2px]  font-bold leading-normal text-[#000000]">  Ad və Soyad    </p>
              </div>
            </th>

            {isOtherActiveFull && <>
              <th className="border-none text-center  py-2 px-3  font-montserrat text-[12px] font-bold leading-normal text-[#000000]">
                BC №
              </th>
              <th className="font-montserrat  text=center text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Qoşulur
              </th>
              <th className="font-montserrat  text-start text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Mobil nömrə
              </th>
              <th className="font-montserrat text-center text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Müqavilə
              </th>
              <th className="font-montserrat  text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Entrance Score
              </th>
              <th className="font-montserrat text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                İş yeri
              </th>

            </>}


            {isPaymentActiveFull && <>
              <th className="font-montserrat text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Məbləğ
              </th>

              <th className="font-montserrat text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Endirimlər
              </th>

              <th className="font-montserrat text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Total amount
              </th>

              <th className="font-montserrat text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Ödəmə 1
              </th>
              <th className="font-montserrat text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Planned Date
              </th>


              <th className="font-montserrat text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Ödəmə 2
              </th>

              <th className="font-montserrat text-[12px] p-3 font-bold leading-normal text-[#000000]">
                Planned Date
              </th>

              <th className="font-montserrat text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Ödəmə 3
              </th>
              <th className="font-montserrat text-[12px] py-2 px-3 font-bold leading-normal text-[#000000]">
                Planned Date
              </th>


            </>}
            {isServiceActiveFull && <>


              <th className="font-montserrat text-[12px] text-center py-2 px-3 font-bold leading-normal text-[#000000]">
                Career
              </th>

              <th className="font-montserrat text-[12px] text-center py-2 px-3 font-bold leading-normal text-[#000000]">
                Coworking
              </th>

              <th className="font-montserrat text-[12px]  text-center py-2 px-3 font-bold leading-normal text-[#000000]">
                Mentorship
              </th>

              <th className="font-montserrat text-[12px] text-center  py-2 px-3 font-bold leading-normal text-[#000000]">
                Experience
              </th>
              <th className="font-montserrat text-[12px]  text-center py-2 px-3 font-bold leading-normal text-[#000000]">
                R
              </th>

              <th className="font-montserrat text-[12px]  text-center py-2 px-3 font-bold leading-normal text-[#000000]">
                SQL
              </th>

              <th className="font-montserrat text-[12px] text-center py-2 px-3 font-bold leading-normal text-[#000000]">
                Python
              </th>

              <th className="font-montserrat text-[12px] text-center py-2 px-3 font-bold leading-normal text-[#000000]">
                Big Data
              </th>

              <th className="font-montserrat text-[12px]  text-center py-2 px-3 font-bold leading-normal text-[#000000]">
                Tableau
              </th>
              <th className="font-montserrat text-[12px] text-center py-2 px-3 font-bold leading-normal text-[#000000]">
                SPSS
              </th>
            </>}


            <th className="py-2 px-3">
              <div className="ml-[7px] mt-2 w-[24px] h-[24px]">
                <MdOutlineRefresh className="w-[24px] h-[24px]" />
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="h-[350px]" >

          {CombinedTableData.map((item) => (
            <tr
              key={item.id}
              className="border-b  even:bg-[#fafafa] odd:bg-white"
            >
              <>

                <td className="p-3 text-center text-sm text-gray-700">{item.id}</td>


                <td className="font-montserrat  p-3 text-[14px] font-medium leading-normal text-[#000000]">
                  {item.name}
                </td>

                {isOtherActiveFull && <>
                  <td className="font-montserrat  text-center p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.BC}
                  </td>
                  <td className="font-montserrat p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.trainingName}
                  </td>
                  <td className="font-montserrat  text-start  p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.phone}
                  </td>
                  <td className="border-none text-center p-3 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                    <input
                      type="checkbox"
                      className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                    />
                  </td>
                  <td
                    className={`font-montserrat p-3 text-[14px] font-medium leading-normal ${item.score > 600 ? 'text-[#30AC04]' : 'text-[#000000]'
                      }`}
                  >
                    {item.score}
                  </td>

                  <td className="font-montserrat p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.workPlace}
                  </td>
                </>

                }

                {isPaymentActiveFull && <>
                  <td className="font-montserrat p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.amount}
                  </td>

                  <td className="font-montserrat p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.discount}
                  </td>

                  <td className="font-montserrat p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.totalAmount}
                  </td>

                  <td className="font-montserrat p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.payment1}
                  </td>
                  <td className="font-montserrat p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.plannedDate1}
                  </td>

                  <td className="font-montserrat p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.payment2}
                  </td>
                  <td className="font-montserrat p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.plannedDate2}
                  </td>

                  <td className="font-montserrat p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.plannedDate3}
                  </td>
                  <td className="font-montserrat p-3 text-[14px] font-medium leading-normal text-[#000000]">
                    {item.plannedDate3
                    }
                  </td>
                </>}


                {isServiceActiveFull && <>
                  <td className="border-none text-center p-3 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                    <input

                      type="checkbox"
                      className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                    />
                  </td>


                  <td className="border-none text-center p-3 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                    <input

                      type="checkbox"
                      className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                    />
                  </td>


                  <td className="border-none text-center p-3 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                    <input

                      type="checkbox"
                      className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                    />
                  </td>


                  <td className="border-none text-center p-3 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                    <input

                      type="checkbox"
                      className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                    />
                  </td>


                  <td className="border-none text-center p-3 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                    <input

                      type="checkbox"
                      className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                    />
                  </td>


                  <td className="border-none text-center p-3 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                    <input

                      type="checkbox"
                      className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                    />
                  </td>


                  <td className="border-none text-center p-3 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                    <input

                      type="checkbox"
                      className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                    />
                  </td>


                  <td className="border-none text-center p-3 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                    <input

                      type="checkbox"
                      className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                    />
                  </td>


                  <td className="border-none text-center p-3 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                    <input

                      type="checkbox"
                      className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                    />
                  </td>


                  <td className="border-none text-center p-3 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                    <input

                      type="checkbox"
                      className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                    />
                  </td>
                </>}


                <td className="p-3 text-center">
                  <div className="flex gap-3">
                    <FiEdit
                      className="cursor-pointer w-5 h-5"

                    />
                    <GoTrash
                      className="cursor-pointer w-5 h-5"

                    />
                  </div>
                </td>
              </>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default CombinedTable;



