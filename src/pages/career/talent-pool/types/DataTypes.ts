export interface PersonData {
    id: number;
    personalInfo: {
        nameS: string;
        bootN: string;
        contactNumber: string;
        status: string;
    };
    education?: {
        bachDegree: string;
        uniScore: number;
        bachMajor: string;
        masterDegree: string;
        MathScore: number;
        masterMajor: string;
        uniPHD: string;
        phdMajor: string;
        languageSkills: string;
    };
    jobStatus?: {
        company: string;
        position: string;
        sector: string;
        jobRef: string;
        refNo: string;
        linkedIn: string;
        skills: string;
        level: string;
        notes: string;
    };
} 