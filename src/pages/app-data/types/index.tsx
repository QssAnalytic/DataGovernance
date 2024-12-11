export interface FilterProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

 export interface TrainingNameProps {
    isOpen: boolean;
    onToggle: () => void;
    paddingx: string;
    paddingy: string;
}

export interface TableRow {
    id: number;
    name: string;
    phone: string;
    applicationSource: string;
    trainingName: string;
    date: string;
}

export interface TableProps {
    searchTerm: string;
}

export interface SourceModalProps {
    isOpen: boolean;
    onToggle: () => void;
  }
  
 export interface ShowModalProps {
     handleCancelDelete: () => void;
     handleConfirmDelete: () => void;
 }; 

 export interface FilterProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}


export interface CheckBoxesProps {
    item: string;
    index: number;
    isChecked: any;
    handleCheckboxChange: any;


}

 export interface CheckBoxesPropsTitle {
    isCustomized: boolean;
    selectAll: () => void;
    selectCustomized: () => void;
    resetAll: () => void;
    resetCustomized: () => void;
 }

 export interface ContactStatusProps {
    isOpen: boolean;
    onToggle: () => void;
}