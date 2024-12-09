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
    