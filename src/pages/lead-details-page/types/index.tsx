// Row data for the Contact table
interface RowData {
  id: number;
  "Ad Soyad": string;
  Capacity: string;
  Value: string;
  "Final Status": string;
  "Contact Number": string;
  "Training Name": string;
  "Last Contact Date": number;
  "When Call Again": string;
}

// Row data for the Education table
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

// Props for Contact Table
export interface ContactTableProps {
  headers: (keyof RowData)[];
  data: RowData[];
  rowsPerPage: number;
  currentPage: number;
}

// Props for Education Table
export interface EducationTableProps {
  headers: (keyof EducationRowData)[];
  data: EducationRowData[];
  rowsPerPage: number;
  currentPage: number;
}

// Props for Combined Table (can be used for either Contact or Education)
export interface CombinedTableProps {
  data: (RowData | EducationRowData)[];
  currentPage: number;
  rowsPerPage: number;
  headers: string[];
}
