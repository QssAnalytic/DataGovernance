import React from "react";
import { useUIStore } from "../../services/store/useUIStore";
import { useState } from "react";
import Filter from "./components/filter"
import Table from './components/table'
import  DateFilter  from "@/components/Shared/DateFilter";
import NewLeadModal from "@/components/Shared/newLeadModal";



//Application Data Page

const ApplicationData: React.FC = () => {

  const { setButtonLabel, setModalContent, setPageCustomHeader } = useUIStore();
  const [searchTerm, setSearchTerm] = useState<string>('');

  //Adding dynamic header content 
  React.useEffect(() => {
    setButtonLabel("Add Candidate");
    setModalContent(<NewLeadModal/>);
    setPageCustomHeader(<DateFilter />);
  }, [setButtonLabel, setModalContent, setPageCustomHeader]);
  return (
    <div className="flex relative flex-col">
      {/* Filter Page */}
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Table Page */}
      <Table searchTerm={searchTerm} />
    </div>
  )
}

export default ApplicationData;