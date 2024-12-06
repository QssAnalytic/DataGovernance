import { DatePickerDemo } from "../../Custom Calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Custom Selector";

const ContactDetailsForm = () => {
  return (
    <div>
      <form className="flex gap-[20px]">
        <div className="flex flex-col gap-[10px] flex-1">
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
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
        <div className="flex-1">
          <DatePickerDemo placeholder="When to Call Again" />
        </div>
      </form>
    </div>
  );
};

export default ContactDetailsForm;
