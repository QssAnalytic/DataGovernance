
interface EducationFieldsProps {
    education: {
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
    truncateText: (text: string) => string;
}

export const EducationFields = ({ education }: EducationFieldsProps) => {
    return (
        <>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{education.bachDegree}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[100px]">{education.uniScore}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[170px]">{education.bachMajor}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{education.masterDegree}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[100px]">{education.MathScore}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[170px]">{education.masterMajor}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{education.uniPHD}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{education.phdMajor}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{education.languageSkills}</div>
        </>
    );
}; 