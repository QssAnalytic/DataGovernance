import { OtherTableData } from "../sharedData";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { MdOutlineRefresh } from "react-icons/md";

const OtherTable = () => {
    return (
        <table className="min-w-[1300px]   table-auto w-full rounded-xl border-collapse ">

            <thead className="bg-[#E9EDCA] sticky rounded-xl top-0 z-10 shadow-md">
                <tr className="text-left">
                    <th className=" px-3 font-semibold  font-montserrat text-[12px text-[#000000]">ID</th>                 
                    <th className="py-2 w-[115px]">
                        <div className="flex gap-1">
                            <HiOutlineChevronUpDown
                                className="font-semibold  font-montserrat text-[12px text-[#000000]"
                            />
                            <p className="font-montserrat text-[12px] font-bold leading-normal text-[#000000]">  Ad və Soyad    </p>
                        </div>
                    </th>
                    <th className="border-none text-center  py-2 font-montserrat text-[12px] font-bold leading-normal text-[#000000]">
                        BC №
                    </th>
                    <th className="font-montserrat  text-[12px] py-2 font-bold leading-normal text-[#000000]">
                        Qoşulur
                    </th>
                    <th className="font-montserrat  text-[12px] py-2 font-bold leading-normal text-[#000000]">
                        Mobil nömrə
                    </th>
                    <th className="font-montserrat  text-[12px] py-2 px-1 font-bold leading-normal text-[#000000]">
                        Müqavilə
                    </th>
                    <th  className="font-montserrat text-[12px] py-2 px-1 font-bold leading-normal text-[#000000]">
                        Entrance Score
                    </th>
                    <th className="font-montserrat text-[12px] py-2 px-1 font-bold leading-normal text-[#000000]"> 
                        İş yeri
                    </th>
                    <th className="py-2">
                        <div className="ml-[7px] mt-2 w-[24px] h-[24px]">
                            <MdOutlineRefresh className="w-[24px] h-[24px]" />
                        </div>
                    </th>
                </tr>
            </thead>

        </table>
    )
}
export default OtherTable;