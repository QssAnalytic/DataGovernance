// App Data Props

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
    isChecked: boolean; // Change this from `boolean[]` to `boolean`
    handleCheckboxChange: (index: number) => void;
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
    width: string;
}

export interface SaveModalProps {

    onChange: (field: keyof TableRow, value: string) => void;
    isOpen: boolean;
    onClose: () => void;
    rowData: any; // Replace `any` with the specific type of `rowData`

    setData: React.Dispatch<React.SetStateAction<any>>; // Replace `any` with the type of `data`
    data: any; // Replace `any` with the specific type of `data`
    selectedRow: any; // Replace `any` with the specific type of `selectedRow`
    setIsSaveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}



export interface SearchInputProps {
    query: string;
    setQuery: (value: string) => void;
}


// Define the props type for the component
export interface TableContentProps {
    handleSort: () => void;
    handleDateSort: () => void;
    handleEditClick: (item: TableRow) => void;
    handleDeleteClick: (id: number) => void;
    currentData: TableRow[];
    sortOrder: 'asc' | 'desc' | ''; // Add this
    dateSortOrder: 'asc' | 'desc' | ''; // Add this
}