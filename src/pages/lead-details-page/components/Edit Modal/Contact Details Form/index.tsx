import TrainingName from "@/pages/app-data/components/trainingName";
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
  const [isTrainingName, setTrainingName] = useState(false);

  const toggleTrainingName = () => {
    if (isTrainingName) {
      setTrainingName(false);
    } else {
      setTrainingName(true);
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
          <TrainingName
            isOpen={isTrainingName}
            onToggle={toggleTrainingName}
            paddingx="16px"
            paddingy="11px"
          />
          <DatePickerDemo placeholder="When to Call Again" />
          <Select>
            <SelectTrigger className="w-[100%]">
              <SelectValue placeholder="Final Status" />
            </SelectTrigger>
            <SelectContent className="max-h-72 overflow-y-auto">
              <SelectItem
                value="Ödəniş şərtləri atıldı"
                className="bg-[rgba(97,73,0,0.2)] text-[#614900] cursor-pointer font-[500] py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px] "
              >
                Ödəniş şərtləri atıldı
              </SelectItem>
              <SelectItem
                value="Almağı düşünür"
                className=" text-[#04AC7C] bg-[rgba(4,172,124,0.2)] cursor-pointer font-[500] bg:opacity-30 py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Almağı düşünür
              </SelectItem>
              <SelectItem
                value="Alıb"
                className="bg-[rgba(48,172,4,0.2)]  text-[#30AC04] cursor-pointer font-[500] py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Alıb
              </SelectItem>
              <SelectItem
                value="Görüş istəyir"
                className="bg-purple-100 text-purple-800 py-[8px] cursor-pointer font-[500] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Görüş istəyir
              </SelectItem>
              <SelectItem
                value="Maraqlanır"
                className="bg-[rgba(23,92,255,0.2)] text-[#175CFF] cursor-pointer py-[8px] px-[16px] font-[500] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Maraqlanır
              </SelectItem>
              <SelectItem
                value="Maraqlanmır"
                className="bg-[rgba(226,25,91,0.2)] text-[#E2195B] cursor-pointer py-[8px] px-[16px] font-[500] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Maraqlanmır
              </SelectItem>
              <SelectItem
                value="Zəng gözləyir"
                className="bg-[rgba(255,110,0,0.2)] text-[#FF6E00] cursor-pointer py-[8px] px-[16px] font-[500] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Zəng gözləyir
              </SelectItem>
              <SelectItem
                value="Cavab gözləyirik"
                className="bg-[rgba(16,49,127,0.2)] text-[#10317F] cursor-pointer font-[500] py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px]"
              >
                Cavab gözləyirik
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </form>
    </div>
  );
};

export default ContactDetailsForm;
