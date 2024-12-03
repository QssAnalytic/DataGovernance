import React from "react";
import { useUIStore } from "../../services/store/useUIStore";
import { SearchInput } from "./SearchInput";
const OverviewPage: React.FC = () => {
  const {setButtonLabel,setModalContent,setPageCustomHeader} = useUIStore()
  React.useEffect(() => {
    setButtonLabel("Add Candidate");
    setModalContent(<div className="text-black flex flex-col bg-white p-2">Overview Modal</div>);
    setPageCustomHeader(<SearchInput/>)
  }, [setButtonLabel, setModalContent]);

  return (
    <div>
      <h2>Overview Page</h2>
    </div>
  );
};

export default OverviewPage;
