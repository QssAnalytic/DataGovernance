import ContactTable from "./components/Contact Table";
import TableInfoSection from "./components/Table Info Section";

const DetailsPage = () => {
  const headers = [
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

  const data = [
    {
      ID: 1,
      "Ad Soyad": "Will Smith",
      Capacity: " No Way",
      Value: 8,
      "Final Status": "Cavab gözləyirik",
      "Contact Number": "+994 512436745",
      "Training Name": "React Basics",
      "Last Contact Date": "2024-01-15",
      "When Call Again": "2024-01-22",
    },
    {
      ID: 2,
      "Ad Soyad": "Ali Mahniu",
      Capacity: " High",
      Value: 6,
      "Final Status": "Maraqlanır",
      "Contact Number": "+994 512436745",
      "Training Name": "Advanced JavaScript",
      "Last Contact Date": "2024-01-10",
      "When Call Again": "2024-01-20",
    },
    {
      ID: 3,
      "Ad Soyad": "Mehemmed Mehemmedova",
      Capacity: " Outstanding",
      Value: 2.5,
      "Final Status": "Almağı düşünür",
      "Contact Number": "+994 512436745",
      "Training Name": "Advanced JavaScript",
      "Last Contact Date": "2024-01-10",
      "When Call Again": "2024-01-20",
    },
    {
      ID: 4,
      "Ad Soyad": "Fidan Mehemmedova",
      Capacity: " Minimum Acceptable",
      Value: 60,
      "Final Status": "Görüş istəyir",
      "Contact Number": "+994 512436745",
      "Training Name": "Advanced JavaScript",
      "Last Contact Date": "2024-01-10",
      "When Call Again": "2024-01-20",
    },
    {
      ID: 5,
      "Ad Soyad": "Claes Helou",
      Capacity: " No Way",
      Value: 60,
      "Final Status": "Alıb",
      "Contact Number": "+994 512436745",
      "Training Name": "Advanced JavaScript",
      "Last Contact Date": "2024-01-10",
      "When Call Again": "2024-01-20",
    },
    {
      ID: 5,
      "Ad Soyad": "Claes Helou",
      Capacity: " No Way",
      Value: 60,
      "Final Status": "Alıb",
      "Contact Number": "+994 512436745",
      "Training Name": "Advanced JavaScript",
      "Last Contact Date": "2024-01-10",
      "When Call Again": "2024-01-20",
    },
    {
      ID: 5,
      "Ad Soyad": "Claes Helou",
      Capacity: " No Way",
      Value: 60,
      "Final Status": "Alıb",
      "Contact Number": "+994 512436745",
      "Training Name": "Advanced JavaScript",
      "Last Contact Date": "2024-01-10",
      "When Call Again": "2024-01-20",
    },
    {
      ID: 5,
      "Ad Soyad": "Claes Helou",
      Capacity: " No Way",
      Value: 60,
      "Final Status": "Alıb",
      "Contact Number": "+994 512436745",
      "Training Name": "Advanced JavaScript",
      "Last Contact Date": "2024-01-10",
      "When Call Again": "2024-01-20",
    },
    {
      ID: 5,
      "Ad Soyad": "Claes Helou",
      Capacity: " No Way",
      Value: 60,
      "Final Status": "Alıb",
      "Contact Number": "+994 512436745",
      "Training Name": "Advanced JavaScript",
      "Last Contact Date": "2024-01-10",
      "When Call Again": "2024-01-20",
    },
    {
      ID: 5,
      "Ad Soyad": "Claes Helou",
      Capacity: " No Way",
      Value: 60,
      "Final Status": "Alıb",
      "Contact Number": "+994 512436745",
      "Training Name": "Advanced JavaScript",
      "Last Contact Date": "2024-01-10",
      "When Call Again": "2024-01-20",
    },
  ];

  return (
    <div className="p-[50px]">
      <TableInfoSection />
      <ContactTable headers={headers} data={data} />
    </div>
  );
};

export default DetailsPage;