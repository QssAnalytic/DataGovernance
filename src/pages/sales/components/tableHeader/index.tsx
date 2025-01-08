import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { TbCategory2 } from "react-icons/tb";
import { TableHeaderProps } from "../../types";


const TableHeader: React.FC<TableHeaderProps> = ({ isOtherActive, setIsOtherActive, isPaymentActive, setIsPaymentActive, isServicesActive, setIsServicesActive, isFull, setIsFull }) => {

   const HandleOtherButton = () => {
        if (isOtherActive) {
            setIsOtherActive(false)
        } else {
            setIsOtherActive(true)
        }

        setIsPaymentActive(false);
        setIsServicesActive(false)

    }

    const HandlePaymentButton = () => {
        if (isPaymentActive) {
            setIsPaymentActive(false)
        } else {
            setIsPaymentActive(true)
        }

        setIsOtherActive(false);
        setIsServicesActive(false);
    }

    const HandleServicesButton = () => {
        if (isServicesActive) {
            setIsServicesActive(false)
        } else {
            setIsServicesActive(true)
        }

        setIsOtherActive(false);
        setIsPaymentActive(false);
    }


    const HandleReviewButton = () => {
        setIsFull(false)
        setIsOtherActive(true);
        setIsPaymentActive(false);
        setIsServicesActive(false);
    }



    const HandleFullButton = () => {
        setIsFull(true);
        setIsOtherActive(false);
        setIsPaymentActive(false);
        setIsServicesActive(false);
    }

    return (
        <div className={`w-[618px] mt-5 justify-between pr-2  h-[56px] flex rounded-xl ${!isFull ? 'border-[#E9E9E9]  border-[1px] ' : "border-none"}`}>
            <div className="flex justify-start">
                <button className={`py-[12px] h-[56px] font-montserrat font-medium text-[16px] px-[16px] rounded-tl-[12px] rounded-bl-[12px] ${isFull ? "text-[#5D7988] bg-[#F4F7FD]" : "bg-[#5D7988] text-[#F4F7FD]"}`} onClick={HandleReviewButton}>İcmal</button>
                <button className={`py-[12px] h-[56px]  font-montserrat font-medium text-[16px] px-[20px] rounded-tr-[12px] rounded-br-[12px]  ${isFull ? "bg-[#5D7988] text-[#F4F7FD]" : "text-[#5D7988] bg-[#F4F7FD]"}`} onClick={HandleFullButton} >Tam</button>
            </div>

            <div className={`flex justify-center h-[56px] w-[105px] rounded-xl gap-2  cursor-pointer ${isFull && "bg-[#E9EDCA]"}`} onClick={HandleOtherButton}>
                <MdOutlinePermContactCalendar className={`text-[18px] mt-4 ${isOtherActive ? 'text-[#5D7988]' : isFull ? "text-[#5D7988]" : "text-[#BCBCBC] "}  `} />
                <p className={` font-montserrat font-medium  mt-4 text-[14px] ${isOtherActive ? 'text-[#5D7988]' : isFull ? "text-[#000]" : "text-[#BCBCBC]"}  `} >Digər</p>
            </div>
            <div className={`flex justify-center h-[56px] w-[175px] rounded-xl gap-2  cursor-pointer ${isFull && "bg-[#E2DDD5]"}`} onClick={HandlePaymentButton}>
                <BsCreditCard className={`text-[18px] mt-4 ${isPaymentActive ? 'text-[#5D7988]' : isFull ? "text-[#5D7988]" : "text-[#BCBCBC] "}  `} />
                <p className={` font-montserrat font-medium  mt-4 text-[14px] ${isPaymentActive ? 'text-[#5D7988]' : isFull ? "text-[#000]" : "text-[#BCBCBC]"}  `}>Ödəniş şərtləri</p>
            </div>
            <div className={`flex justify-center h-[56px]  w-[135px] rounded-xl gap-2  cursor-pointer ${isFull && "bg-[#FEFADF]"}`} onClick={HandleServicesButton}>
                <TbCategory2 className={`text-[18px] mt-4 ${isServicesActive ? 'text-[#5D7988]' : isFull ? "text-[#5D7988]" : "text-[#BCBCBC] "}  `} />
                <p className={` font-montserrat font-medium  mt-4 text-[14px] ${isServicesActive ? 'text-[#5D7988]' : isFull ? "text-[#000]" : "text-[#BCBCBC]"}  `}>Xidmətlər</p>
            </div>
        </div>



    )
}
export default TableHeader;