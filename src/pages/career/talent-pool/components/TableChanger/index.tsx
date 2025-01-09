import { EditModalStore } from "../../services/store/useUIStore";
import { MultiSelect } from "../MultiSelect";

interface TableChangerProps {
    setActiveSubTab: (tab: string) => void;
    setSelectedTables: (tables: string[]) => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const TableChanger = ({ setActiveSubTab, setSelectedTables, activeTab, setActiveTab }: TableChangerProps) => {
    const handleTableSelect = (tables: string[]) => {
        setSelectedTables(tables);
        const store = EditModalStore.getState();
        store.setSelectedTables(tables);
        
        // Set initial active tab based on selected tables
        if (tables.length > 0) {
            if (tables.includes("Overview")) {
                store.setActiveTab('overview');
            } else if (tables.includes("Education")) {
                store.setActiveTab('education');
            } else if (tables.includes("Job status")) {
                store.setActiveTab('jobStatus');
            }
        }
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab === "Icmal") {
            // Reset to single table view
            const initialTable = "Overview";
            setActiveSubTab(initialTable);
            handleTableSelect([initialTable]);
        }
    };

    return (
        <div className="w-full flex gap-x-[20px]">
            <div className="flex gap-x-[12px]">
                <button
                    onClick={() => handleTabChange("Icmal")}
                    className={`px-[16px] py-[8px] rounded-[8px] ${
                        activeTab === "Icmal"
                            ? "bg-[#22385F] text-white"
                            : "text-[#22385F] hover:bg-[#22385F]/10"
                    }`}
                >
                    İcmal
                </button>
                <button
                    onClick={() => handleTabChange("Tam")}
                    className={`px-[16px] py-[8px] rounded-[8px] ${
                        activeTab === "Tam"
                            ? "bg-[#22385F] text-white"
                            : "text-[#22385F] hover:bg-[#22385F]/10"
                    }`}
                >
                    Tam
                </button>
            </div>

            <MultiSelect
                activeTab={activeTab}
                setActiveSubTab={setActiveSubTab}
                handleTableSelect={handleTableSelect}
            />
        </div>
    );
};
