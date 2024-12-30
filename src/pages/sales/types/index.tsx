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