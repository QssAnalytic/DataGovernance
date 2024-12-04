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
