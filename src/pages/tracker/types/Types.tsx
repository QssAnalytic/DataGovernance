export interface BootcampFilterProps {
    title: string;
    options: (string | number)[]; // Hem string hem de number kabul edilecek
    placeholder: string;
    selectAllText: string;
    resetText: string;
    buttonText: string;
}

export interface Participant {
    id: number;
    program: string;
    surname: string;
    r: boolean;
    sql: boolean;
    python: boolean;
    bigData: boolean;
    tableau: boolean;
    spss: boolean;
    trainingCount: boolean;
    phone: string;
    email: string;
    mentorship: boolean;
    covering: boolean;
    career: boolean;
    experience: boolean;
}

export interface LessonTime {
    id: number;
    days: string;
    trainer: string;
    programs: string;
    startTime_L1: string;
    endTime_L1: string;
    startTime_L2: string;
    endTime_L2: string;
    startTime_L3: string;
    endTime_L3: string;
    minutes: string;
};

export interface LessonCheckbox {
    id: number;
    fullName: string;
    checkboxes: boolean[];
    percent:number;
}

export interface ReportData{
    id:number;
    fullName:string;
    status:string;
    percent:string;
    submisson:string;
    averange:string;
    exam:string;
    finalExam:string;
    note:string
}