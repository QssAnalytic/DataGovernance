import { useState } from "react";
import TableHeader from "../tableHeader";
import OtherTable from "../otherTable";
import PaymentTable from "../paymentTable";
import ServicesTable from "../servicesTable";

const Table = () => {

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
                    isOtherActive  ? <OtherTable /> :  isPaymentActive ?  <PaymentTable/> : isServicesActive ? <ServicesTable /> : "TAM"
                }
              </div>
               

        </div>
    )
}

export default Table;