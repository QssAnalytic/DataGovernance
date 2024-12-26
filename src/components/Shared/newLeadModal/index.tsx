import { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TrainingName from "@/pages/app-data/components/trainingName";
import SourceModal from "@/pages/app-data/components/sourceModal";
import ContactStatus from "@/pages/app-data/components/contactStatus";
import { useUIStore } from "../../../services/store/useUIStore";


const NewLeadModal = () => {
    const {
        isModalOpen,
       setIsModalOpen, 
      } = useUIStore();

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isSourceModal, setSourceModal] = useState(false);
    const [isTrainingName, setTrainingName] = useState(false);
    const [isContactStatus, setIsContactStatus] = useState(false);

    const [note, setNote] = useState("");

    

    const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(event.target.value);
    };

    const toggleTrainingName = () => {
        if (isTrainingName) {
            setTrainingName(false);
        } else {
            setTrainingName(true);
        }
    };

    const toggleSourceModal = () => {
        if (isSourceModal) {
            setSourceModal(false);
        } else {
            setSourceModal(true);

        }
    };

    const toggleContactStatus = () => {
        if (isContactStatus) {
            setIsContactStatus(false);
        } else {
            setIsContactStatus(true);
        }
    };
    return <div className="w-[650px]  flex flex-col px-5 py-5">

        <div className="flex justify-between">
            <h1 className="font-montserrat text-[24px]  text-[#000000] font-medium">
                Add new lead
            </h1>
            <div  onClick={() => setIsModalOpen(!isModalOpen)} className="w-[34px] h-[34px] pl-1 pt-1 cursor-pointer border-[#000000] rounded-lg border-[1px]"><IoMdClose className=" text-[#000000] text-[24px]" /> </div>
        </div>
        <div className="flex justify-between  mt-5 gap-5 ">
            <div className="w-[100%] flex flex-col gap-2">
                <input type="text" placeholder="Ad, Soyad" className=" w-[100%] h-[56px] text-[#000000] bg-[#FAFCFF] border-[0.5px] border-[#22385F] rounded-xl p-4 focus:outline-none" />
                <div className="relative w-full h-[56px]">
                     <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        placeholderText="Application Date"
                        dateFormat="MM/dd/yyyy"
                        className="h-[56px] w-[296px] py-2 px-8 border-[#22385F] bg-[#FAFCFF] border-[0.5px] rounded-xl text-gray-700 shadow-sm focus:outline-none placeholder-gray-400"
                    />
                    <FiCalendar
                        className="absolute ml-1 top-1/2 left-1 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                        size={20}
                    />
                </div>
                <TrainingName isOpen={isTrainingName} onToggle={toggleTrainingName} paddingx="16px" paddingy="16px" />
                <SourceModal isOpen={isSourceModal} onToggle={toggleSourceModal} />
            </div>


            <div className="w-[100%] flex flex-col gap-2">
                <ContactStatus
                    isOpen={isContactStatus}
                    onToggle={toggleContactStatus}
                    width="100%"
                />
                <div className=" w-[100%] mt-2">
                    <label htmlFor="note" className="sr-only">
                        Note
                    </label>
                    <textarea
                        id="note"
                        value={note}
                        onChange={handleNoteChange}
                        placeholder="Note"
                        rows={4} // Adjust the number of rows to match your design
                        className="w-full px-5 min-h-[180px] py-2 border-[0.5px] border-[#22385F]  bg-[#FAFCFF] rounded-lg shadow-sm text-[#000000]  focus:outline-none  placeholder-gray-400 resize-none"
                    ></textarea>
                </div>
            </div>

        </div>


        <div className='flex mt-3 justify-between'>
            <div className="flex justify-between w-full gap-3">
                <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    type="button"
                    className="w-[296px] h-56px font-montserrat  leading-[17.07px] font-medium text-[#22385F] py-5 border-[1px] border-[#22385F] rounded-xl"
                >
                    Ləğv et
                </button>
                <button
                    type="button"

                    className="w-[296px] h-56px font-montserrat  leading-[17.07px] font-medium py-5 text-[#fff]   bg-[#22385F] rounded-xl"
                >
                    Yadda Saxla
                </button>
            </div>
        </div>






    </div>
}

export default NewLeadModal;