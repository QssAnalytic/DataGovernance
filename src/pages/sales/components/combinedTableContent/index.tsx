
import { HiOutlineChevronUpDown } from "react-icons/hi2"
import { CombinedTableContentProps } from "../../types"
import { MdOutlineRefresh } from "react-icons/md"
import EditAndDelete from "../editAndDelete"

const CombineTableContent: React.FC<CombinedTableContentProps> = ({handleSort, sortOrder, isOtherActiveFull, isPaymentActiveFull, isServiceActiveFull, currentData, setIsEditModalOpen, handleDeleteClick}) => {
    return <>
     <table className=" w-[100%] table-auto-full rounded-xl border-collapse">
          <thead className="bg-[#E9EDCA]  whitespace-nowrap  sticky top-0 z-20 shadow-md">
            <tr className="text-left">
              <th className="py-3 px-4  sticky left-0  bg-[#e9edca] z-10 font-semibold text-center font-montserrat text-[#000000]">ID</th>
              <th className="py-3 px-4 sticky left-[50px]  bg-[#e9edca] ">
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

          <tbody className="h-[312px]">
            {currentData.map((item, index) => (
              <tr key={item.id} className="border-b even:bg-[#fafafa] odd:bg-white">
                <td className={`py-3 sticky left-0 px-4 z-10 w-[50px] text-center text-sm text-gray-700 ${index % 2 === 0 ? ' bg-white' : 'bg-[#fafafa]'
                  }`}>{item.id}</td>
                <td className={`py-3 px-4 whitespace-nowrap sticky left-[50px] z-10 font-montserrat text-sm font-medium text-[#000000] ${index % 2 === 0 ? ' bg-white ' : 'bg-[#fafafa]'
                  }`}>{item.name}</td>

                {isOtherActiveFull && (
                  <>
                    <td className="py-3 px-4 text-center whitespace-nowrap   font-montserrat text-sm font-medium text-[#000000]">{item.BC}</td>
                    <td className="py-3 px-4 font-montserrat whitespace-nowrap   text-sm font-medium text-[#000000]">{item.trainingName}</td>
                    <td className="py-3 px-4 font-montserrat  whitespace-nowrap   text-sm font-medium text-[#000000]">{item.phone}</td>
                    <td className="py-3 px-4 text-center whitespace-nowrap   font-montserrat text-sm font-medium">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
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
                    <td className="py-3 px-4 font-montserrat  text-sm font-medium text-[#000000]">{item.amount}</td>
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

                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      />
                    </td>


                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      />
                    </td>


                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      />
                    </td>

                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      />
                    </td>

                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      />
                    </td>

                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      />
                    </td>

                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      />
                    </td>

                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      />
                    </td>

                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      />
                    </td>

                    <td className="border-none text-center p-5 font-montserrat text-[14px] font-medium leading-normal text-[#000000]">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border rounded-[2px] checked:bg-green-500 checked:border-transparent checked:before:text-[10px] focus:outline-none cursor-pointer relative checked:before:content-['✔'] checked:before:absolute checked:before:text-[#fafafa] checked:before:font-normal checked:before:left-1/2 checked:before:top-1/2 checked:before:transform checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                      />
                    </td>
                  </>
                )}
                   <td className=" px-4 text-center">
                  <EditAndDelete  setIsEditModalOpen = {setIsEditModalOpen} handleDeleteClick = {handleDeleteClick} ItemId = {item.id}/>
                     </td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
}

export default CombineTableContent