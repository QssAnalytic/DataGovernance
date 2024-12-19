import { FiEdit, FiTrash2 } from "react-icons/fi";
import { CombinedData } from '../../../types/TableTypes';
import { EducationFields } from './fields/EducationFields';
import { JobStatusFields } from './fields/JobStatusFields';
import { OverviewFields } from './fields/OverviewFields';

interface TableRowProps {
    rowData: CombinedData;
    selectedTables: string[];
    truncateText: (text: string) => string;
}

export const TableRow = ({ rowData, selectedTables, truncateText }: TableRowProps) => {
    return (
        <div className="row flex justify-between items-center h-[60px]">
            <div className="rowLeft flex">
                <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[46px]">{rowData.id}</div>
                <div className="p-[16px] flex items-center font-medium text-[14px] w-[171px]">{rowData.nameS}</div>
                <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[123px]">{rowData.bootN}</div>

                {selectedTables.includes("Education") && rowData.education && (
                    <EducationFields education={rowData.education} truncateText={truncateText} />
                )}

                {selectedTables.includes("Job status") && rowData.job && (
                    <JobStatusFields job={rowData.job} truncateText={truncateText} />
                )}

                {selectedTables.includes("Overview") && rowData.overview && (
                    <OverviewFields overview={rowData.overview} />
                )}
            </div>
            <div className="rowRight flex gap-x-[12px] w-[95px] justify-center items-center ml-[92px]">
                <div className="">
                    <FiEdit 
                        className="w-[24px] h-[24px] hover:cursor-pointer"
                        onClick={() => {/* Handle edit */}}
                    />
                </div>
                <div className="">
                    <FiTrash2 
                        className="w-[24px] h-[24px] hover:cursor-pointer"
                        onClick={() => {/* Handle delete */}}
                    />
                </div>
            </div>
        </div>
    );
}; 