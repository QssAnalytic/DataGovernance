import { useState } from "react";
import SalesInput from "../salesInput";
import TrainingName from "@/pages/app-data/components/trainingName";
import Bootcamp from "../bootcamp";
import { SalesInputProps } from "../../types";


const Filter: React.FC<SalesInputProps>  = ({ searchTerm, setSearchTerm }) => {
    const [isTrainingName, setTrainingName] = useState(false);
    const toggleTrainingName = () => {
        if (isTrainingName) {
            setTrainingName(false);
        } else {
            setTrainingName(true);
        }
    };

    return (
        <div className="flex justify-start gap-[20px] max-w-[950px]">
            <SalesInput  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Bootcamp />
            <TrainingName paddingx="16px" paddingy="16px" isOpen={isTrainingName} onToggle={toggleTrainingName} />
        </div>
    )
}
export default Filter;