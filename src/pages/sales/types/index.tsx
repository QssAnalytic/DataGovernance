// Define the props interface
export interface TableHeaderProps {
  isOtherActive: boolean;
  setIsOtherActive: React.Dispatch<React.SetStateAction<boolean>>;
  isPaymentActive: boolean;
  setIsPaymentActive: React.Dispatch<React.SetStateAction<boolean>>;
  isServicesActive: boolean;
  setIsServicesActive: React.Dispatch<React.SetStateAction<boolean>>;
  isFull: boolean;
  setIsFull: React.Dispatch<React.SetStateAction<boolean>>;
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


export interface SalesTablePInputProps {
  searchTerm: string; // The current value of the input
}


export interface SalesInputProps {
    searchTerm: string; // The current value of the input
    setSearchTerm: (value: string) => void; // Function to update the search term
  }