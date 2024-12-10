import { useState} from 'react';
import SourceModal from '../sourceModal';
import TrainingName from '../training-name';
import ContactStatus from '../contact-status';
import { FilterProps } from '../../types';

const FilterData: React.FC<FilterProps> = ({searchTerm, setSearchTerm} ) => {
  const [isSourceModal, setSourceModal] = useState(false);

    const [isTrainingName, setTrainingName] = useState(false);
    const [isContactStatus, setIsContactStatus] = useState(false);

    const toggleSourceModal = () => {
        if (isSourceModal) {
            setSourceModal(false)
        } else {
            setSourceModal(true)
        }
    }

    const toggleTrainingName = () => {
      if (isTrainingName) {
          setTrainingName(false)
      } else {
          setTrainingName(true)
      }
  }

  const toggleContactStatus = () => {
    if (isContactStatus) {
        setIsContactStatus(false)
    } else {
        setIsContactStatus(true)
    }
}

    return (
        <div className="flex w-[60%] justify-end gap-[20px]">
            
             <SourceModal isOpen = {isSourceModal} onToggle = {toggleSourceModal } />
   
          
             <TrainingName isOpen = {isTrainingName} onToggle = {toggleTrainingName }  searchTerm = {searchTerm} setSearchTerm ={setSearchTerm}/>
        
           
             <ContactStatus isOpen = {isContactStatus} onToggle = {toggleContactStatus } />
         


        </div>
    )
}

export default FilterData