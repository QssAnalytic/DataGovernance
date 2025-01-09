import { useEffect, useState } from 'react'
import { useUIStore } from "../../../services/store/useUIStore";
import { TableChanger } from './components/TableChanger/index';
import { FilterTab } from './components/FilterTab';
import { OverviewTable } from './components/tables/overview table/tableIndex';
import { EducationTable } from './components/tables/education/tableIndex';
import { JobStatusTable } from './components/tables/job status/tableIndex';
import { AddModal } from './components/AddModal/AddModal';
import { CombinedTable } from './components/tables/combined/CombinedTable';
import { EditModalWrapper } from "./components/EditModal/EditModalWrapper";

export const TalentPool = () => {
    const { setButtonLabel, setModalContent, setPageCustomHeader } = useUIStore();
    const [isLoading, setIsLoading] = useState(true)
    const [activeSubTab, setActiveSubTab] = useState("Overview")
    const [selectedTables, setSelectedTables] = useState<string[]>(["Overview"]);
    const [activeTab, setActiveTab] = useState("Icmal");

    useEffect(() => {
        setButtonLabel("Recruitment status");
        setModalContent(
            <AddModal/>
        );
        setPageCustomHeader(<input placeholder='salam' />);
        setTimeout(() => setIsLoading(false), 1000)
    }, [setButtonLabel, setModalContent, setPageCustomHeader])
    if (isLoading) {
        return <div className='absolute  flex items-center justify-center w-[calc(100%-103px)] h-[calc(100%-360px)]  z-[10]'><div className="loader"></div></div>
    }
    const renderTable = () => {
        if (activeTab === "Tam") {
            return <CombinedTable selectedTables={selectedTables} />;
        }

        switch (activeSubTab) {
            case "Overview":
                return <OverviewTable />;
            case "Education":
                return <EducationTable />;
            case "Job status":
                return <JobStatusTable />;
            default:
                return <OverviewTable />;
        }
    };
    return (
        <div className='w-[calc(100%-50px)] h-full flex flex-col gap-y-[20px]'>
            <TableChanger 
                setActiveSubTab={setActiveSubTab} 
                setSelectedTables={setSelectedTables}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <FilterTab />
            <div className='w-full'>
                {renderTable()}
            </div>
            <EditModalWrapper />
        </div>
    )
}
