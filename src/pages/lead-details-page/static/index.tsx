import { UnifiedPersonData } from "../types";

export const unifiedPersonData: UnifiedPersonData[] = [
  {
    id: 1,
    contactInfo: {
      adSoyad: "Will Smith",
      capacity: "No Way",
      value: 8,
      finalStatus: "Cavab gözləyirik",
      contactNumber: "+994 512436745",
      trainingName: "React Basics",
      lastContactDate: "2024-01-15",
      whenCallAgain: "2024-01-22",
    },
    educationInfo: {
      backgroundKnowledge: "Excel",
      englishLevel: "B2",
      sillabusla: "Məlumatlı",
      universityBachelor: "ABC University",
      bachelorMajor: "Computer Science",
      entranceScore: 503,
      masterDegree: "Baku Engineering University",
    },
    employmentInfo: {
      workplace: "Baku Steel Company",
      position: "Data Analyst",
      note: "Karyera qurmaq istəyir, yeni bilik tətbiq edəcək",
    }
  }
];

// Helper functions to transform data for different tables
export const data = unifiedPersonData.map(person => ({
  ID: person.id,
  "Ad Soyad": person.contactInfo.adSoyad,
  Capacity: person.contactInfo.capacity,
  Value: person.contactInfo.value,
  "Final Status": person.contactInfo.finalStatus,
  "Contact Number": person.contactInfo.contactNumber,
  "Training Name": person.contactInfo.trainingName,
  "Last Contact Date": person.contactInfo.lastContactDate,
  "When Call Again": person.contactInfo.whenCallAgain,
}));

export const dataEducation = unifiedPersonData.map(person => ({
  ID: person.id,
  "Ad Soyad": person.contactInfo.adSoyad,
  "Background Knowledge": person.educationInfo.backgroundKnowledge,
  "English Level": person.educationInfo.englishLevel,
  "Sillabusla tanışlıq": person.educationInfo.sillabusla,
  "University Bachelor": person.educationInfo.universityBachelor,
  "Bachelor Major": person.educationInfo.bachelorMajor,
  "Entrance score": person.educationInfo.entranceScore,
  "Master Degree": person.educationInfo.masterDegree,
}));

export const dataEmployment = unifiedPersonData.map(person => ({
  ID: person.id,
  "Ad Soyad": person.contactInfo.adSoyad,
  Workplace: person.employmentInfo.workplace,
  Position: person.employmentInfo.position,
  Note: person.employmentInfo.note,
}));

// Keep existing headers
export const headers: string[] = [
  "ID",
  "Ad Soyad",
  "Capacity",
  "Value",
  "Final Status",
  "Contact Number",
  "Training Name",
  "Last Contact Date",
  "When Call Again",
];

export const headersEducation: string[] = [
  "ID",
  "Ad Soyad",
  "Background Knowledge",
  "English Level",
  "Sillabusla tanışlıq",
  "University Bachelor",
  "Bachelor Major",
  "Entrance score",
  "Master Degree",
];

export const headersEmployment: string[] = [
  "ID",
  "Ad Soyad",
  "Workplace",
  "Position",
  "Note",
];


