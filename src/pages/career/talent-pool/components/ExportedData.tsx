interface PersonData {
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

// eslint-disable-next-line react-refresh/only-export-components
export const UnifiedData: PersonData[] = [
    {
        id: 1,
        personalInfo: {
            nameS: "Mammadqasım Xanməmmədov",
            bootN: "1",
            contactNumber: "+994 506564734",
            status: "Data Specialist"
        },
        education: {
            bachDegree: "UNEC",
            uniScore: 600,
            bachMajor: 'Software Engineering',
            masterDegree: 'UNEC',
            MathScore: 90,
            masterMajor: 'Business Administration',
            uniPHD: 'Azerbaijan State Oil and Industry University',
            phdMajor: 'Computer Science',
            languageSkills: 'English'
        },
        jobStatus: {
            company: "QSS Analytics",
            position: "Data Specialist",
            sector: "Marketing oil",
            jobRef: "Pasha Bank, ABB",
            refNo: "3",
            linkedIn: "https://www.linkedin.com/in/memmedqasim-xanmammadov/",
            skills: "Python, SQL, Tableau",
            level: "Middle",
            notes: "Strong analytical skills"
        }
    },
    {
        id: 2,
        personalInfo: {
            nameS: "Ali Valiyev",
            bootN: "2",
            contactNumber: "+994 506564735",
            status: "Software Developer"
        },
        education: {
            bachDegree: "ADA University",
            uniScore: 650,
            bachMajor: 'Computer Science',
            masterDegree: 'Baku State University',
            MathScore: 95,
            masterMajor: 'Data Science',
            uniPHD: 'Azerbaijan State Oil and Industry University',
            phdMajor: 'Computer Science',
            languageSkills: 'English, Russian'
        },
        jobStatus: {
            company: "BP Azerbaijan",
            position: "Software Developer",
            sector: "Oil & Gas",
            jobRef: "SOCAR, Total",
            refNo: "2",
            linkedIn: "https://www.linkedin.com/in/ali-valiyev/",
            skills: "Java, Spring, React",
            level: "Senior",
            notes: "Full-stack expertise"
        }
    },
    {
        id: 3,
        personalInfo: {
            nameS: "Leyla Huseynova",
            bootN: "3",
            contactNumber: "+994 506564736",
            status: "UI/UX Designer"
        },
        education: {
            bachDegree: "Baku Engineering University",
            uniScore: 580,
            bachMajor: 'Information Technology',
            masterDegree: 'ADA University',
            MathScore: 88,
            masterMajor: 'Information Systems',
            uniPHD: 'Baku State University',
            phdMajor: 'Information Technology',
            languageSkills: 'English, Turkish'
        },
        jobStatus: {
            company: "Kapital Bank",
            position: "UI/UX Designer",
            sector: "Banking",
            jobRef: "AccessBank, IBA",
            refNo: "4",
            linkedIn: "https://www.linkedin.com/in/leyla-huseynova/",
            skills: "Figma, Adobe XD",
            level: "Senior",
            notes: "Excellent portfolio"
        }
    },
    {
        id: 4,
        personalInfo: {
            nameS: "Zaur Aliyev",
            bootN: "4",
            contactNumber: "+994 506564737",
            status: "Data Analyst"
        },
        education: {
            bachDegree: "Azerbaijan State Oil and Industry University",
            uniScore: 620,
            bachMajor: 'Computer Engineering',
            masterDegree: 'ADA University',
            MathScore: 92,
            masterMajor: 'Computer Engineering',
            uniPHD: 'ADA University',
            phdMajor: 'Computer Engineering',
            languageSkills: 'English, German'
        },
        jobStatus: {
            company: "Azercell",
            position: "Data Analyst",
            sector: "Telecommunications",
            jobRef: "Bakcell, Nar",
            refNo: "2",
            linkedIn: "https://www.linkedin.com/in/zaur-aliyev/",
            skills: "Python, SQL, Tableau",
            level: "Middle",
            notes: "Strong analytical background"
        }
    },
    {
        id: 5,
        personalInfo: {
            nameS: "Nigar Mammadova",
            bootN: "5",
            contactNumber: "+994 506564738",
            status: "Project Manager"
        },
        education: {
            bachDegree: "Khazar University",
            uniScore: 590,
            bachMajor: 'Economics',
            masterDegree: 'UNEC',
            MathScore: 85,
            masterMajor: 'Finance',
            uniPHD: 'UNEC',
            phdMajor: 'Economics',
            languageSkills: 'English, French'
        },
        jobStatus: {
            company: "AzerGold",
            position: "Project Manager",
            sector: "Mining",
            jobRef: "Anglo Asian Mining",
            refNo: "3",
            linkedIn: "https://www.linkedin.com/in/nigar-mammadova/",
            skills: "Agile, Scrum",
            level: "Senior",
            notes: "PMP certified"
        }
    },
    {
        id: 6,
        personalInfo: {
            nameS: "Rashad Mammadli",
            bootN: "6",
            contactNumber: "+994 506564739",
            status: "DevOps Engineer"
        },
        education: {
            bachDegree: "Azerbaijan Technical University",
            uniScore: 610,
            bachMajor: 'Information Security',
            masterDegree: 'ADA University',
            MathScore: 93,
            masterMajor: 'Cybersecurity',
            uniPHD: 'Azerbaijan Technical University',
            phdMajor: 'Information Security',
            languageSkills: 'English, Turkish'
        },
        jobStatus: {
            company: "SOCAR",
            position: "DevOps Engineer",
            sector: "Oil & Gas",
            jobRef: "BP Azerbaijan, Total",
            refNo: "2",
            linkedIn: "https://www.linkedin.com/in/rashad-mammadli/",
            skills: "Docker, Kubernetes, AWS",
            level: "Senior",
            notes: "Cloud infrastructure specialist"
        }
    },
    {
        id: 7,
        personalInfo: {
            nameS: "Aysel Hasanova",
            bootN: "7",
            contactNumber: "+994 506564740",
            status: "Frontend Developer"
        },
        education: {
            bachDegree: "Baku State University",
            uniScore: 635,
            bachMajor: 'Applied Mathematics',
            masterDegree: 'UNEC',
            MathScore: 96,
            masterMajor: 'Data Analytics',
            uniPHD: 'Baku State University',
            phdMajor: 'Applied Mathematics',
            languageSkills: 'English, Russian'
        },
        jobStatus: {
            company: "Pasha Bank",
            position: "Frontend Developer",
            sector: "Banking",
            jobRef: "ABB, Kapital Bank",
            refNo: "3",
            linkedIn: "https://www.linkedin.com/in/aysel-hasanova/",
            skills: "React, TypeScript, Next.js",
            level: "Middle",
            notes: "UI development expert"
        }
    },
    {
        id: 8,
        personalInfo: {
            nameS: "Orkhan Jafarov",
            bootN: "8",
            contactNumber: "+994 506564741",
            status: "Backend Developer"
        },
        education: {
            bachDegree: "UNEC",
            uniScore: 595,
            bachMajor: 'Business Informatics',
            masterDegree: 'ADA University',
            MathScore: 87,
            masterMajor: 'Computer Science',
            uniPHD: 'UNEC',
            phdMajor: 'Business Analytics',
            languageSkills: 'English'
        },
        jobStatus: {
            company: "Bakcell",
            position: "Backend Developer",
            sector: "Telecommunications",
            jobRef: "Azercell, Nar",
            refNo: "4",
            linkedIn: "https://www.linkedin.com/in/orkhan-jafarov/",
            skills: "Node.js, Python, MongoDB",
            level: "Senior",
            notes: "Microservices expert"
        }
    },
    {
        id: 9,
        personalInfo: {
            nameS: "Gunay Aliyeva",
            bootN: "9",
            contactNumber: "+994 506564742",
            status: "Business Analyst"
        },
        education: {
            bachDegree: "Azerbaijan University of Languages",
            uniScore: 575,
            bachMajor: 'Business Administration',
            masterDegree: 'UNEC',
            MathScore: 84,
            masterMajor: 'Business Analytics',
            uniPHD: 'Azerbaijan University of Languages',
            phdMajor: 'Business Intelligence',
            languageSkills: 'English, French, Russian'
        },
        jobStatus: {
            company: "AccessBank",
            position: "Business Analyst",
            sector: "Banking",
            jobRef: "IBA, Unibank",
            refNo: "2",
            linkedIn: "https://www.linkedin.com/in/gunay-aliyeva/",
            skills: "SQL, Power BI, Excel",
            level: "Middle",
            notes: "Financial analysis expert"
        }
    },
    {
        id: 10,
        personalInfo: {
            nameS: "Farid Huseynov",
            bootN: "10",
            contactNumber: "+994 506564743",
            status: "Mobile Developer"
        },
        education: {
            bachDegree: "Baku Engineering University",
            uniScore: 625,
            bachMajor: 'Software Engineering',
            masterDegree: 'ADA University',
            MathScore: 91,
            masterMajor: 'Mobile Computing',
            uniPHD: '',
            phdMajor: '',
            languageSkills: 'English, Turkish'
        },
        jobStatus: {
            company: "ATL Tech",
            position: "Mobile Developer",
            sector: "IT Services",
            jobRef: "Coding, AzInTelecom",
            refNo: "3",
            linkedIn: "https://www.linkedin.com/in/farid-huseynov/",
            skills: "React Native, Flutter",
            level: "Senior",
            notes: "Multiple app launches"
        }
    },
    {
        id: 11,
        personalInfo: {
            nameS: "Sabina Mammadova",
            bootN: "11",
            contactNumber: "+994 506564744",
            status: "QA Engineer"
        },
        education: {
            bachDegree: "Azerbaijan State Oil and Industry University",
            uniScore: 585,
            bachMajor: 'Quality Engineering',
            masterDegree: 'Baku Engineering University',
            MathScore: 89,
            masterMajor: 'Software Testing',
            uniPHD: '',
            phdMajor: '',
            languageSkills: 'English, Russian'
        },
        jobStatus: {
            company: "Azerconnect",
            position: "QA Engineer",
            sector: "IT Services",
            jobRef: "STEP IT, Matrix Solutions",
            refNo: "2",
            linkedIn: "https://www.linkedin.com/in/sabina-mammadova/",
            skills: "Selenium, TestNG, Postman",
            level: "Middle",
            notes: "Automation testing expert"
        }
    },
    {
        id: 12,
        personalInfo: {
            nameS: "Elchin Guliyev",
            bootN: "12",
            contactNumber: "+994 506564745",
            status: "Security Engineer"
        },
        education: {
            bachDegree: "Azerbaijan Technical University",
            uniScore: 615,
            bachMajor: 'Network Security',
            masterDegree: 'ADA University',
            MathScore: 94,
            masterMajor: 'Cybersecurity',
            uniPHD: '',
            phdMajor: '',
            languageSkills: 'English, Turkish'
        },
        jobStatus: {
            company: "Azericard",
            position: "Security Engineer",
            sector: "Financial Services",
            jobRef: "E-Gov, CyberNet",
            refNo: "4",
            linkedIn: "https://www.linkedin.com/in/elchin-guliyev/",
            skills: "Cybersecurity, Penetration Testing",
            level: "Senior",
            notes: "CISSP certified"
        }
    },
    {
        id: 13,
        personalInfo: {
            nameS: "Lamiya Hasanova",
            bootN: "13",
            contactNumber: "+994 506564746",
            status: "System Architect"
        },
        education: {
            bachDegree: "Baku State University",
            uniScore: 645,
            bachMajor: 'System Engineering',
            masterDegree: 'ADA University',
            MathScore: 97,
            masterMajor: 'Enterprise Architecture',
            uniPHD: '',
            phdMajor: '',
            languageSkills: 'English, German'
        },
        jobStatus: {
            company: "Ministry of Digital Development",
            position: "System Architect",
            sector: "Government",
            jobRef: "E-Gov, Digital Trade Hub",
            refNo: "5",
            linkedIn: "https://www.linkedin.com/in/lamiya-hasanova/",
            skills: "Enterprise Architecture, Cloud Solutions",
            level: "Senior",
            notes: "Digital transformation expert"
        }
    },
    {
        id: 14,
        personalInfo: {
            nameS: "Tural Mammadov",
            bootN: "14",
            contactNumber: "+994 506564747",
            status: "Network Engineer"
        },
        education: {
            bachDegree: "Azerbaijan Technical University",
            uniScore: 605,
            bachMajor: 'Telecommunications',
            masterDegree: 'Baku State University',
            MathScore: 88,
            masterMajor: 'Network Engineering',
            uniPHD: '',
            phdMajor: '',
            languageSkills: 'English, Russian'
        },
        jobStatus: {
            company: "Delta Telecom",
            position: "Network Engineer",
            sector: "Telecommunications",
            jobRef: "AzInTelecom, AzEuroTel",
            refNo: "3",
            linkedIn: "https://www.linkedin.com/in/tural-mammadov/",
            skills: "CISCO, Network Security",
            level: "Middle",
            notes: "CCNP certified"
        }
    }
];

// Helper functions to get specific table data
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
