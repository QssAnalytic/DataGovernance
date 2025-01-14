// Define the props interface
export interface TableHeaderProps {
  isOtherActive: boolean;
  setIsOtherActive: React.Dispatch<React.SetStateAction<boolean>>;
  isPaymentActive: boolean;
  setIsPaymentActive: React.Dispatch<React.SetStateAction<boolean>>;
  isServicesActive: boolean;
  setIsServicesActive: React.Dispatch<React.SetStateAction<boolean>>;
  isPaymentActiveFull: boolean;
  setIsPaymentActiveFull: React.Dispatch<React.SetStateAction<boolean>>;
  isOtherActiveFull: boolean;
  setIsOtherActiveFull: React.Dispatch<React.SetStateAction<boolean>>;
  isServiceActiveFull : boolean;
  setIsServiceActiveFull : React.Dispatch<React.SetStateAction<boolean>>;
  isFull: boolean;
  setIsFull: React.Dispatch<React.SetStateAction<boolean>>;
}



export interface CombinedDataProps {
  isOtherActiveFull: boolean;
  isServiceActiveFull : boolean;
  isPaymentActiveFull: boolean;

  
}
export type OtherTableRow = {
  id: number;
  name: string;
  BC: string | number;
  trainingName: string;
  phone: string;
  score: number;
  workPlace: string;
};

// SaveModalProps definition in ../../types
export interface SaveOtherModalProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: Partial<OtherTableRow>;
  onSave: () => void;
  onChange: (field: keyof OtherTableRow, value: string | number | boolean) => void; // Ensure this matches usage
}

// SaveModalProps definition in ../../types
export interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: Partial<CombinedDataTypes>; // Matches the structure of PaymentDataProps
  onSave: () => void;
  onChange: (field: keyof CombinedDataTypes, value: string | number | boolean) => void;
}



export interface SalesTablePInputProps {
  searchTerm: string; // The current value of the input
}


export interface SalesInputProps {
    searchTerm: string; // The current value of the input
    setSearchTerm: (value: string) => void; // Function to update the search term
  }


  export interface CombinedDataTypes {
    id: number;
    name: string;
    BC: string;
    trainingName: string;
    phone: string;
    score: number;
    workPlace: string;
    amount: number;
    discount: number;
    totalAmount: number;
    payment1: number;
    plannedDate1: string;
    payment2: number;
    plannedDate2: string;
    payment3: number;
    plannedDate3: string;
  }
