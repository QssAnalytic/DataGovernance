/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UnifiedPersonData {
  id: number;
  contactInfo: {
    adSoyad: string;
    capacity: string;
    value: number;
    finalStatus: string;
    contactNumber: string;
    trainingName: string;
    lastContactDate: string;
    whenCallAgain: string;
  };
  educationInfo: {
    backgroundKnowledge: string;
    englishLevel: string;
    sillabusla: string;
    universityBachelor: string;
    bachelorMajor: string;
    entranceScore: number;
    masterDegree: string;
  };
  employmentInfo: {
    workplace: string;
    position: string;
    note: string;
  };
}

export interface RowData {
  ID: number;
  "Ad Soyad": string;
  Capacity: string;
  Value: number;
  "Final Status": string;
  "Contact Number": string;
  "Training Name": string;
  "Last Contact Date": string;
  "When Call Again": string;
  [key: string]: string | number;
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
export interface EmploymentRowData {
  ID: number;
  "Ad Soyad": string;
  Workplace: string;
  Position: string;
  Note: string;
}

export interface ContactTableProps {
  headers: string[];
  data: RowData[];
  rowsPerPage: number;
  currentPage: number;
}

export interface EducationTableProps {
  headers: string[];
  data: EducationRowData[];
  rowsPerPage: number;
  currentPage: number;
}

export interface CombinedTableProps {
  headers: string[];
  data: Record<string, any>[];
  currentPage: number;
  rowsPerPage: number;
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

export interface EmploymentRowData {
  ID: number;
  "Ad Soyad": string;
  Workplace: string;
  Position: string;
  Note: string;
}

export interface EmploymentTableProps {
  headers: string[];
  data: EmploymentRowData[];
  currentPage: number;
  rowsPerPage: number;
}
