import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { TbCategory2 } from "react-icons/tb";
import { TableHeaderProps } from "../../types";


const TableHeader: React.FC<TableHeaderProps> = ({ isOtherActive, setIsOtherActive, isPaymentActive, setIsPaymentActive, isServicesActive, setIsServicesActive, isPaymentActiveFull, setIsPaymentActiveFull, isOtherActiveFull, setIsOtherActiveFull, isServiceActiveFull, setIsServiceActiveFull, isFull, setIsFull }) => {

    const HandleOtherButton = () => {


        if (!isFull) {
            setIsOtherActive(true)
            setIsPaymentActive(false);
            setIsServicesActive(false)
        }

        setIsOtherActiveFull((prevState) => !prevState);

    }

    const HandlePaymentButton = () => {
        if (!isFull) {
            setIsPaymentActive(true); // Activate payment
            setIsOtherActive(false); // Deactivate other states
            setIsServicesActive(false); // Deactivate services
        }

        // Toggle isPaymentActiveFull state
        setIsPaymentActiveFull((prevState) => !prevState);
    };

    const HandleServicesButton = () => {

        if (!isFull) {
            setIsServicesActive(true)
            setIsOtherActive(false);
            setIsPaymentActive(false);
        }
        setIsServiceActiveFull((prevState) => !prevState);

    }


    const HandleReviewButton = () => {
        setIsFull(false)
        setIsOtherActive(true);
        setIsPaymentActive(false);
        setIsServicesActive(false);

        setIsOtherActiveFull(true);
        setIsPaymentActiveFull(true);
        setIsServiceActiveFull(true)
    }


    const HandleFullButton = () => {
        setIsFull(true);


        if (!isFull) {
            setIsOtherActive(false);
            setIsPaymentActive(false);
            setIsServicesActive(false);
        }
    }

    return (
        <div className={`w-[618px] mt-5 justify-between pr-2  gap-[20px]  h-[56px] flex rounded-xl ${!isFull ? 'border-[#E9E9E9]  border-[1px] ' : "border-none"}`}>
            <div className="flex justify-start">
                <button className={`py-[12px] h-[56px] font-montserrat font-medium text-[16px] px-[16px] rounded-tl-[12px] rounded-bl-[12px] ${isFull ? "text-[#5D7988] bg-[#F4F7FD]" : "bg-[#5D7988] text-[#F4F7FD]"}`} onClick={HandleReviewButton}>İcmal</button>
                <button className={`py-[12px] h-[56px]  font-montserrat font-medium text-[16px] px-[20px] rounded-tr-[12px] rounded-br-[12px]  ${isFull ? "bg-[#5D7988] text-[#F4F7FD]" : "text-[#5D7988] bg-[#F4F7FD]"}`} onClick={HandleFullButton} >Tam</button>
            </div>

            <div className={`flex justify-center h-[56px] w-[120px] rounded-xl gap-2 cursor-pointer ${isFull
                ? isOtherActiveFull
                    ? "bg-[#E9EDCA]" // Active button color
                    : "bg-[#F6F6F6]" // Gray background for isFull
                : "" // No background color before isFull
                }`} onClick={HandleOtherButton}>
                <MdOutlinePermContactCalendar className={`text-[18px] mt-4 ${isOtherActive ? 'text-[#5D7988]' : isFull ? "text-[#5D7988]" : "text-[#BCBCBC] "}  `} />
                <p className={` font-montserrat font-medium  mt-4 text-[14px] ${isOtherActive ? 'text-[#5D7988]' : isFull ? "text-[#000]" : "text-[#BCBCBC]"}  `} >Digər</p>
            </div>
            <div className={`flex justify-center h-[56px] w-[210px] rounded-xl gap-2 cursor-pointer ${isFull
                ? isPaymentActiveFull
                    ? "bg-[#E2DDD5]" // Active button color
                    : "bg-[#F6F6F6]" // Gray background for isFull
                : "" // No background color before isFull
                }`} onClick={HandlePaymentButton}>
                <BsCreditCard className={`text-[18px] mt-4 ${isPaymentActive ? 'text-[#5D7988]' : isFull ? "text-[#5D7988]" : "text-[#BCBCBC] "}  `} />
                <p className={` font-montserrat font-medium  mt-4 text-[14px] ${isPaymentActive ? 'text-[#5D7988]' : isFull ? "text-[#000]" : "text-[#BCBCBC]"}  `}>Ödəniş şərtləri</p>
            </div>
            <div className={`flex justify-center h-[56px] w-[175px] rounded-xl gap-2 cursor-pointer ${isFull
                ? isServiceActiveFull
                    ? "bg-[#FEFADF]" // Active button color
                    : "bg-[#F6F6F6]" // Gray background for isFull
                : "" // No background color before isFull
                }`} onClick={HandleServicesButton}>
                <TbCategory2 className={`text-[18px] mt-4 ${isServicesActive ? 'text-[#5D7988]' : isFull ? "text-[#5D7988]" : "text-[#BCBCBC] "}  `} />
                <p className={` font-montserrat font-medium  mt-4 text-[14px] ${isServicesActive ? 'text-[#5D7988]' : isFull ? "text-[#000]" : "text-[#BCBCBC]"}  `}>Xidmətlər</p>
            </div>
        </div>



    )
}
export default TableHeader;


