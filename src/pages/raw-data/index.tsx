import DateFilter from "@/components/Shared/DateFilter";
import Status from "./components/status";
import Paid from "./components/paid";
import Category from "./components/category";
import Table from "./components/table";

import { IoMdRefresh } from "react-icons/io";

const RawData = () => {
   return (
      <>
         <div className="flex flex-col" >
            {/* Raw Data Header */}
            <div className="flex gap-[15px] justify-start">
               <DateFilter />
               <Status />
               <Paid />
               <Category />
               <div className="ml-[15%] mr-[5%] p-5">
                  <IoMdRefresh className="text-[35px] cursor-pointer" />
               </div>
             </div>
              {/* Raw Data Table */}
              <Table />
         </div>
      </>
   )
}


export default RawData;