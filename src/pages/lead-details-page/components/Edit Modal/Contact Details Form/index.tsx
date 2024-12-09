import TrainingName from "@/pages/app-data/components/training-name";
import { DatePickerDemo } from "../../Custom Calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Custom Selector";
import { useState } from "react";

const ContactDetailsForm = () => {
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
    <div>
      <form className="flex gap-[20px]">
        <div className="flex flex-col gap-[10px] flex-1">
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="Contact Number"
          />

          <DatePickerDemo placeholder="Last Contact Date" />
          <Select>
            <SelectTrigger className="w-[100%]">
              <SelectValue placeholder="Value" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2.5">2.5</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="3.5">3.5</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-[10px] flex-1">
          {/* <TrainingName
            inputValue={inputValue}
            isOpen={isTrainingName}
            onToggle={toggleTrainingName}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          /> */}
          <DatePickerDemo placeholder="When to Call Again" />
          <Select>
            <SelectTrigger className="w-[100%]">
              <SelectValue placeholder="Final Status" />
            </SelectTrigger>
            <SelectContent className="max-h-72 overflow-y-auto">
              <SelectItem
                value="Ödəniş şərtləri atıldı"
                className="bg-blue-100 text-blue-800 py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Ödəniş şərtləri atıldı
              </SelectItem>
              <SelectItem
                value="Almağı düşünür"
                className=" text-[#04AC7C] bg-[rgba(4,172,124,0.2)] bg:opacity-30 py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Almağı düşünür
              </SelectItem>
              <SelectItem
                value="Alıb"
                className="bg-yellow-100 text-yellow-800 py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Alıb
              </SelectItem>
              <SelectItem
                value="Görüş istəyir"
                className="bg-purple-100 text-purple-800 py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Görüş istəyir
              </SelectItem>
              <SelectItem
                value="Maraqlanır"
                className="bg-pink-100 text-pink-800 py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Maraqlanır
              </SelectItem>
              <SelectItem
                value="Maraqlanmır"
                className="bg-gray-100 text-gray-800 py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Maraqlanmır
              </SelectItem>
              <SelectItem
                value="Zəng gözləyir"
                className="bg-red-100 text-red-800 py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Zəng gözləyir
              </SelectItem>
              <SelectItem
                value="Cavab gözləyirik"
                className="bg-teal-100 text-teal-800 py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Cavab gözləyirik
              </SelectItem>
              <SelectItem
                value="Məlumatlıdır"
                className="bg-indigo-100 text-indigo-800 py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Məlumatlıdır
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </form>
    </div>
  );
};

export default ContactDetailsForm;
