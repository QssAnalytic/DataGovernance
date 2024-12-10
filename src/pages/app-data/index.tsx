import React from "react";
import { useUIStore } from "../../services/store/useUIStore";
import { useState } from "react";
import Filter from "./components/filter"
import Table from './components/table'
import { Select } from "@/components/Shared/DateFilter";

const  ApplicationData: React.FC = () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

 const { setButtonLabel, setModalContent, setPageCustomHeader } = useUIStore();
  const [searchTerm, setSearchTerm] = useState<string>('');
   
  React.useEffect(() => {
    setButtonLabel("Add Candidate");
    setModalContent(
      <div className="text-black flex flex-col bg-white p-2">
        Overview Modal
      </div>
    );
    setPageCustomHeader( <Select options={options} placeholder="Choose an option" />);
  }, [setButtonLabel, setModalContent, setPageCustomHeader]);
    return (
        <div className="flex relative flex-col">
          <Filter  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Table  searchTerm={searchTerm} />
        </div>
    )
}

export default ApplicationData;