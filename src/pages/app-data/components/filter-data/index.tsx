import { useState } from "react";
import SourceModal from "../sourceModal";
import TrainingName from "../trainingName";
import ContactStatus from "../contactStatus";

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
    <div className="flex w-[60%]  justify-end gap-[20px]">
      <SourceModal isOpen={isSourceModal} onToggle={toggleSourceModal} />
      <TrainingName paddingx ="16px" paddingy = "16px" isOpen={isTrainingName} onToggle={toggleTrainingName} />
      <ContactStatus
        isOpen={isContactStatus}
        onToggle={toggleContactStatus}
        width = "100%"
      />
    </div>

  );
};

export default FilterData;

