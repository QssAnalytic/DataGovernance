import { UnifiedData } from './UnifiedData';

export const OverviewData = UnifiedData.map(person => ({
    id: person.id,
    nameSname: person.personalInfo.nameS,
    bootNumber: person.personalInfo.bootN,
    contactNumber: person.personalInfo.contactNumber,
    status: person.personalInfo.status
}));

export const EducationData = UnifiedData
    .filter(person => person.education)
    .map(person => ({
        id: person.id,
        nameS: person.personalInfo.nameS,
        bootN: parseInt(person.personalInfo.bootN),
        bachDegree: person.education!.bachDegree,
        uniScore: person.education!.uniScore,
        bachMajor: person.education!.bachMajor,
        masterDegree: person.education!.masterDegree,
        MathScore: person.education!.MathScore,
        masterMajor: person.education!.masterMajor,
        uniPHD: person.education!.uniPHD,
        phdMajor: person.education!.phdMajor,
        languageSkills: person.education!.languageSkills
    }));

export const JobStatusData = UnifiedData
    .filter(person => person.jobStatus)
    .map(person => ({
        id: person.id,
        nameS: person.personalInfo.nameS,
        bootN: parseInt(person.personalInfo.bootN),
        company: person.jobStatus!.company,
        position: person.jobStatus!.position,
        sector: person.jobStatus!.sector,
        jobRef: person.jobStatus!.jobRef,
        refNo: person.jobStatus!.refNo,
        linkedIn: person.jobStatus!.linkedIn,
        skills: person.jobStatus!.skills,
        level: person.jobStatus!.level,
        notes: person.jobStatus!.notes
    })); 