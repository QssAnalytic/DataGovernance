import React from "react";
import { useUIStore } from "../../services/store/useUIStore";
import { useState } from "react";
import Filter from "./components/filter"
import Table from './components/table'
import CustomRange from "@/components/Shared/CustomRange";
import  DateFilter  from "@/components/Shared/DateFilter";

const ApplicationData: React.FC = () => {
  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "last 7 days" },
    { label: "Last 30 days", value: "last 30 days" },
    { label: "This month", value: "this month" },
    { label: <CustomRange />, value: "Custom Range" },

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
    setPageCustomHeader(<DateFilter />);
  }, [setButtonLabel, setModalContent, setPageCustomHeader]);
  return (
    <div className="flex relative flex-col">
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table searchTerm={searchTerm} />
    </div>
  )
}

export default ApplicationData;