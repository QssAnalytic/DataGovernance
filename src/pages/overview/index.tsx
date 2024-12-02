import React from "react";
import { useUIStore } from "../../services/store/useUIStore";

const OverviewPage: React.FC = () => {
  const setButtonLabel = useUIStore((state) => state.setButtonLabel);
  const setModalContent = useUIStore((state) => state.setModalContent);

  React.useEffect(() => {
    setButtonLabel("Add Candidate");
    setModalContent(<div>Overview Modal</div>);
  }, [setButtonLabel, setModalContent]);

  return (
    <div>
      <h2>Overview Page</h2>
      {/* Add more dynamic content here */}
    </div>
  );
};

export default OverviewPage;
