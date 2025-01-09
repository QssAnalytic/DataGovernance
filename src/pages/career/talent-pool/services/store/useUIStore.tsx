import { create } from 'zustand';
import type { RowData, EducationRowData, JobStatusRowData } from '../../types/TableTypes';

interface EditModalState {
    isOpen: boolean;
    activeTab: 'overview' | 'education' | 'jobStatus';
    overviewData: RowData | null;
    educationData: EducationRowData | null;
    jobStatusData: JobStatusRowData | null;
    selectedTables: string[];
    setOverviewEditOpen: (value: boolean) => void;
    setActiveTab: (tab: 'overview' | 'education' | 'jobStatus') => void;
    setOverviewData: (data: RowData | null) => void;
    setEducationData: (data: EducationRowData | null) => void;
    setJobStatusData: (data: JobStatusRowData | null) => void;
    setSelectedTables: (tables: string[]) => void;
}

export const useUIStore = create<EditModalState>((set) => ({
    isOpen: false,
    activeTab: 'overview',
    overviewData: null,
    educationData: null,
    jobStatusData: null,
    selectedTables: [],
    setOverviewEditOpen: (value) => set({ isOpen: value }),
    setActiveTab: (tab) => set({ activeTab: tab }),
    setOverviewData: (data) => set({ overviewData: data }),
    setEducationData: (data) => set({ educationData: data }),
    setJobStatusData: (data) => set({ jobStatusData: data }),
    setSelectedTables: (tables) => set({ selectedTables: tables }),
}));

export const EditModalStore = useUIStore;