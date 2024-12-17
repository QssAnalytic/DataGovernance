export interface ButtonChangerProps {
    setSuccessMessage: (message: string | null) => void;
    currentStep: number;
    steps: string[];
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    onClose: () => void;
}

// ... other types 