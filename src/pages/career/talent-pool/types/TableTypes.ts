export interface RowData {
    id: number;
    nameSname: string;
    bootNumber: string;
    contactNumber: string;
    status: string;
}

export interface EducationRowData {
    id: number;
    nameS: string;
    bootN: number;
    bachDegree: string;
    uniScore: number;
    bachMajor: string;
    masterDegree: string;
    MathScore: number;
    masterMajor: string;
    uniPHD: string;
    phdMajor: string;
    languageSkills: string;
}

export interface JobStatusRowData {
    id: number;
    nameS: string;
    bootN: number;
    company: string;
    position: string;
    sector: string;
    jobRef: string;
    refNo: string;
    linkedIn: string;
    skills: string;
    level: string;
    notes: string;
}

export interface CombinedData {
    id: number;
    nameS: string;
    bootN: number | string;
    overview?: RowData;
    education?: EducationRowData;
    job?: JobStatusRowData;
} 