/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RowData {
  ID: number;
  "Ad Soyad": string;
  Capacity: string;
  Value: string;
  "Final Status": string;
  "Contact Number": string;
  "Training Name": string;
  "Last Contact Date": number;
  "When Call Again": string;
}

export interface EducationRowData {
  ID: number;
  "Ad Soyad": string;
  "Background Knowledge": string;
  "English Level": string;
  "Sillabusla tanışlıq": string;
  "University Bachelor": string;
  "Bachelor Major": string;
  "Entrance score": number;
  "Master Degree": string;
}

export interface ContactTableProps {
  headers: (keyof RowData | string)[];
  data: RowData[];
  rowsPerPage: number;
  currentPage: number;
}

export interface EducationTableProps {
  headers: (keyof EducationRowData | string)[];
  data: EducationRowData[];
  rowsPerPage: number;
  currentPage: number;
}

export interface CombinedTableProps {
  data: (RowData | EducationRowData)[];
  currentPage: number;
  rowsPerPage: number;
  headers: (keyof RowData | keyof EducationRowData)[];
}

export interface ButtonChangerProps {
  setSuccessMessage: (message: string | null) => void;
  currentStep: number;
  steps: string[];
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  onClose: () => void;
}
export interface IPaginationControlsProps {
  data: any[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  rowsPerPage: number;
}
