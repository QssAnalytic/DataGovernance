import { useState } from "react";
import SourceModal from "../sourceModal";
import TrainingName from "../trainingName";
import ContactStatus from "../contactStatus";

const FilterData: React.FC = () => {

  //states for filters
  const [isSourceModal, setSourceModal] = useState(false);
  const [isTrainingName, setTrainingName] = useState(false);
  const [isContactStatus, setIsContactStatus] = useState(false);


  // toggle functions  for filters

  const toggleSourceModal = () => {
    if (isSourceModal) {
      setSourceModal(false);
    } else {
      setSourceModal(true);

    }
  };

  const toggleTrainingName = () => {
    if (isTrainingName) {
      setTrainingName(false);
    } else {
      setTrainingName(true);
    }
  };

  const toggleContactStatus = () => {
    if (isContactStatus) {
      setIsContactStatus(false);
    } else {
      setIsContactStatus(true);
    }
  };

  return (
    <div className="flex w-[60%]  justify-end gap-[20px]">
      {/* Application Source Modal Filter */}
      <SourceModal isOpen={isSourceModal} onToggle={toggleSourceModal} />
      {/* Training Name Filter */}
      <TrainingName paddingx="16px" paddingy="16px" isOpen={isTrainingName} onToggle={toggleTrainingName} />
      {/* Contact Status Filter */}
      <ContactStatus
        isOpen={isContactStatus}
        onToggle={toggleContactStatus}
        width="100%"
      />
    </div>

  );
};

export default FilterData;

