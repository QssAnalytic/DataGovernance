/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IContactTableProps {
  headers: string[];
  data: { [key: string]: any }[];
}

export interface IPaginationControlsProps {
  data: any[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  rowsPerPage: number;
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
  [key: string]: any;
}

export interface ContactTableProps {
  headers: string[];
  data: RowData[];
}
