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
      "Ad Soyad": "Alice Johnson",
      Capacity: " No Way",
      Value: 80,
      "Final Status": "High",
      "Contact Number": "123-456-7890",
      "Training Name": "React Basics",
      "Last Contact Date": "2024-01-15",
      "When Call Again": "2024-01-22",
    },
    {
      ID: 2,
      "Ad Soyad": "Bob Smith",
      Capacity: " High",
      Value: 60,
      "Final Status": "Medium",
      "Contact Number": "987-654-3210",
      "Training Name": "Advanced JavaScript",
      "Last Contact Date": "2024-01-10",
      "When Call Again": "2024-01-20",
    },
    {
      ID: 3,
      "Ad Soyad": "Bob Smith",
      Capacity: " Outstanding",
      Value: 60,
      "Final Status": "Medium",
      "Contact Number": "987-654-3210",
      "Training Name": "Advanced JavaScript",
      "Last Contact Date": "2024-01-10",
      "When Call Again": "2024-01-20",
    },
    {
      ID: 4,
      "Ad Soyad": "Bob Smith",
      Capacity: " Minimum Acceptable",
      Value: 60,
      "Final Status": "Medium",
      "Contact Number": "987-654-3210",
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
