import { FiEdit, FiTrash2 } from "react-icons/fi";
import type { CombinedData } from '@/pages/career/talent-pool/types/TableTypes';
import { EducationFields } from './fields/EducationFields';
import { JobStatusFields } from './fields/JobStatusFields';
import { OverviewFields } from './fields/OverviewFields';
import { EditModalStore } from "../../../services/store/useUIStore";

interface TableRowProps {
    rowData: CombinedData;
    selectedTables: string[];
    truncateText: (text: string) => string;
}

export const TableRow = ({ rowData, selectedTables, truncateText }: TableRowProps) => {
    const handleEdit = (rowData: CombinedData) => {
        const store = EditModalStore.getState();
        
        // Reset all data first
        store.setOverviewData(null);
        store.setEducationData(null);
        store.setJobStatusData(null);

        // For single table selection
        if (selectedTables.length === 1) {
            if (selectedTables.includes("Overview") && rowData.overview) {
                store.setOverviewData(rowData.overview);
                store.setActiveTab('overview');
            } else if (selectedTables.includes("Education") && rowData.education) {
                store.setEducationData(rowData.education);
                store.setActiveTab('education');
            } else if (selectedTables.includes("Job status") && rowData.job) {
                store.setJobStatusData(rowData.job);
                store.setActiveTab('jobStatus');
            }
        } 
        // For multiple table selection
        else {
            // Set data for all selected tables
            if (selectedTables.includes("Overview") && rowData.overview) {
                store.setOverviewData(rowData.overview);
            }
            if (selectedTables.includes("Education") && rowData.education) {
                store.setEducationData(rowData.education);
            }
            if (selectedTables.includes("Job status") && rowData.job) {
                store.setJobStatusData(rowData.job);
            }

            // Set active tab based on first selected table
            if (selectedTables[0] === "Overview") {
                store.setActiveTab('overview');
            } else if (selectedTables[0] === "Education") {
                store.setActiveTab('education');
            } else if (selectedTables[0] === "Job status") {
                store.setActiveTab('jobStatus');
            }
        }
        
        store.setOverviewEditOpen(true);
    };

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
            <div className="rowRight flex gap-x-[12px] w-[95px] justify-center ml-[92px]">
                <div className="">
                    <button onClick={() => handleEdit(rowData)}>
                        <FiEdit 
                            className="w-[24px] h-[24px] hover:cursor-pointer"
                        />
                    </button>
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