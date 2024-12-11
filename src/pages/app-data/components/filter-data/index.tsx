import { useState } from "react";
import SourceModal from "../sourceModal";
import TrainingName from "../training-name";
import ContactStatus from "../contact-status";

const FilterData: React.FC = () => {
  const [isSourceModal, setSourceModal] = useState(false);
  const [isTrainingName, setTrainingName] = useState(false);
  const [isContactStatus, setIsContactStatus] = useState(false);

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
    <div className="flex w-[60%] justify-end gap-[20px]">
      <SourceModal isOpen={isSourceModal} onToggle={toggleSourceModal} />
      <TrainingName height ="56px" isOpen={isTrainingName} onToggle={toggleTrainingName} />

      <ContactStatus
        isOpen={isContactStatus}
        onToggle={toggleContactStatus}
      />
    </div>

  );
};

export default FilterData;

