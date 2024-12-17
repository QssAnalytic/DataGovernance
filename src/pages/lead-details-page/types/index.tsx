/* eslint-disable @typescript-eslint/no-explicit-any */

export interface RowData {
  ID: string | number;
  "Ad Soyad": string;
  Capacity: string | number;
  Value: number;
  "Final Status": string;
  "Contact Number": string;
  "Training Name": string;
  "Last Contact Date": string;
  "When Call Again": string;
  [key: string]: any;
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
  [key: string]: any;
}

export interface ContactTableProps {
  headers: string[];
  data: RowData[];
  rowsPerPage: number;
  currentPage: number;
}

export interface EducationTableProps {
  headers: string[];
  data: RowData[];
  rowsPerPage: number;
  currentPage: number;
}

export interface ButtonChangerProps {
  setSuccessMessage: (message: string | null) => void;
  currentStep: number;
  steps: string[];
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  onClose: () => void;
}

export interface CombinedTableProps {
  data: Array<{
    ID: string | number;
    "Ad Soyad"?: string;
    Capacity?: string | number;
    Value?: string | number;
    "Final Status"?: string;
    "Contact Number"?: string;
    "Training Name"?: string;
    "Last Contact Date"?: string;
    "When Call Again"?: string;
  }>; // Array of objects with specific keys
  currentPage: number;
  rowsPerPage: number;
}
