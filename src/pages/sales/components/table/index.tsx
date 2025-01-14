import { useState } from "react";
import TableHeader from "../tableHeader";
import OtherTable from "../otherTable";
import PaymentTable from "../paymentTable";
import ServicesTable from "../servicesTable";
import CombinedTable from "../combinedTable";
import { SalesTablePInputProps } from "../../types";

const Table: React.FC<SalesTablePInputProps> = ({ searchTerm }) => {
    const [isOtherActive, setIsOtherActive] = useState(true);
    const [isOtherActiveFull, setIsOtherActiveFull] = useState(true)
    const [isPaymentActive, setIsPaymentActive] = useState(false);
    const [isPaymentActiveFull, setIsPaymentActiveFull] = useState(true);
    const [isServicesActiveFull, setIsServicesActiveFull] = useState(true)
    const [isServicesActive, setIsServicesActive] = useState(false);
    const [isFull, setIsFull] = useState(false)


    return (
        <div>
            <TableHeader
                isOtherActive={isOtherActive}
                setIsOtherActive={ setIsOtherActive}
                isPaymentActive={isPaymentActive}
                setIsPaymentActive={setIsPaymentActive}
                isServicesActive={isServicesActive}
                setIsServicesActive={setIsServicesActive}
                isPaymentActiveFull = {isPaymentActiveFull}
                setIsPaymentActiveFull = {setIsPaymentActiveFull}
                isOtherActiveFull = {isOtherActiveFull}
                setIsOtherActiveFull = {setIsOtherActiveFull}
                isServiceActiveFull = {isServicesActiveFull}
                setIsServiceActiveFull = {setIsServicesActiveFull}
                isFull={isFull}
                setIsFull={setIsFull} />
            <div className="mt-3">
                {
                    isOtherActive ? <OtherTable searchTerm={searchTerm} /> : isPaymentActive ? <PaymentTable searchTerm={searchTerm} /> : isServicesActive ? <ServicesTable searchTerm={searchTerm} /> : <CombinedTable   isPaymentActiveFull = {isPaymentActiveFull}   isOtherActiveFull = {isOtherActiveFull}  isServiceActiveFull = {isServicesActiveFull}/>
                   
                }

            </div>




        </div>
    )
}

export default Table;

