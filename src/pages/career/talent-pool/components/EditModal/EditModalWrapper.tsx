import { useUIStore } from "../../services/store/useUIStore";
import { UnifiedEditModal } from "./UnifiedEditModal";

export const EditModalWrapper = () => {
    const { 
        isOpen, 
        activeTab, 
        overviewData, 
        educationData, 
        jobStatusData,
        selectedTables 
    } = useUIStore();

    if (!isOpen) return null;

    return (
        <UnifiedEditModal
            initialTab={activeTab}
            overviewData={overviewData}
            educationData={educationData}
            jobStatusData={jobStatusData}
            selectedTables={selectedTables}
        />
    );
}; 