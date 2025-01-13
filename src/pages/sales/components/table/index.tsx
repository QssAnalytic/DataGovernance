import { useState } from "react";
import TableHeader from "../tableHeader";
import OtherTable from "../otherTable";
import PaymentTable from "../paymentTable";
import ServicesTable from "../servicesTable";
import CombinedTable from "../combinedTable";
import { SalesTablePInputProps } from "../../types";

const Table: React.FC<SalesTablePInputProps> = ({ searchTerm }) => {
    const [isOtherActive, setIsOtherActive] = useState(true);
    const [isPaymentActive, setIsPaymentActive] = useState(false);
    const [isServicesActive, setIsServicesActive] = useState(false);
    const [isFull, setIsFull] = useState(false)


    return (
        <div>
            <TableHeader
                isOtherActive={isOtherActive}
                setIsOtherActive={setIsOtherActive}
                isPaymentActive={isPaymentActive}
                setIsPaymentActive={setIsPaymentActive}
                isServicesActive={isServicesActive}
                setIsServicesActive={setIsServicesActive}
                isFull={isFull}
                setIsFull={setIsFull} />
            <div className="mt-3">
                {
                    isOtherActive ? <OtherTable searchTerm={searchTerm} isFull={isFull} /> : isPaymentActive ? <PaymentTable searchTerm={searchTerm} isFull={isFull} /> : isServicesActive ? <ServicesTable searchTerm={searchTerm} isFull={isFull} /> : <CombinedTable />
                }

            </div>




        </div>
    )
}

export default Table;

