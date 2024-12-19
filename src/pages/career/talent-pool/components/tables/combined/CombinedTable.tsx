import { useState, useEffect, useCallback } from "react";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { CombinedData } from '../../../types/TableTypes';
import PaginationControls from "@/pages/lead-details-page/components/Pagination Controller";
import { UnifiedData } from '../../../data/UnifiedData';

interface CombinedTableProps {
    selectedTables: string[];
}

export const CombinedTable = ({ selectedTables }: CombinedTableProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const [data, setData] = useState<CombinedData[]>([]);

    const getCombinedData = useCallback(() => {
        if (selectedTables.length === 0) return [];

        return UnifiedData.map(person => {
            const combinedRow: CombinedData = {
                id: person.id,
                nameS: person.personalInfo.nameS,
                bootN: person.personalInfo.bootN
            };

            if (selectedTables.includes("Overview")) {
                combinedRow.overview = {
                    contactNumber: person.personalInfo.contactNumber,
                    status: person.personalInfo.status
                };
            }

            if (selectedTables.includes("Education") && person.education) {
                combinedRow.education = {
                    bachDegree: person.education.bachDegree,
                    uniScore: person.education.uniScore,
                    bachMajor: person.education.bachMajor,
                    masterDegree: person.education.masterDegree,
                    MathScore: person.education.MathScore,
                    masterMajor: person.education.masterMajor,
                    uniPHD: person.education.uniPHD,
                    phdMajor: person.education.phdMajor,
                    languageSkills: person.education.languageSkills
                };
            }

            if (selectedTables.includes("Job status") && person.jobStatus) {
                combinedRow.job = {
                    company: person.jobStatus.company,
                    position: person.jobStatus.position,
                    sector: person.jobStatus.sector,
                    jobRef: person.jobStatus.jobRef,
                    refNo: person.jobStatus.refNo,
                    linkedIn: person.jobStatus.linkedIn,
                    skills: person.jobStatus.skills,
                    level: person.jobStatus.level,
                    notes: person.jobStatus.notes
                };
            }

            return combinedRow;
        });
    }, [selectedTables]);

    useEffect(() => {
        const combinedData = getCombinedData();
        console.log('Combined Data:', combinedData); // Debug log
        setData(combinedData);
    }, [selectedTables, getCombinedData]);

    const truncateText = (text: string) => {
        const words = text.split(' ');
        if (words.length > 2) {
            return words.slice(0, 2).join(' ') + '...';
        }
        return text;
    };

    const paginatedData = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <div className="w-full flex flex-col">
            <div className="w-full overflow-x-auto mb-4">
                <div className="min-w-max">
                    <TableHeader selectedTables={selectedTables} />
                    <div className="tableBody h-[408px]">
                        {paginatedData.map((rowData) => (
                            <TableRow 
                                key={rowData.id}
                                rowData={rowData}
                                selectedTables={selectedTables}
                                truncateText={truncateText}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="w-full flex justify-center">
                <PaginationControls
                    data={data}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    rowsPerPage={rowsPerPage}
                />
            </div>
        </div>
    );
}; 