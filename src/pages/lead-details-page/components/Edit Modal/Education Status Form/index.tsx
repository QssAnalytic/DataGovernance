import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Custom Selector";

const EducationStatusForm = () => {
  return (
    <div>
      <form className="flex gap-[20px]">
        <div className="flex flex-col gap-[10px] flex-1">
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="Background knowledge"
          />
          <Select>
            <SelectTrigger className="w-[100%]">
              <SelectValue placeholder="English level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A1">A1</SelectItem>
              <SelectItem value="A2">A2</SelectItem>
              <SelectItem value="B1">B1</SelectItem>
              <SelectItem value="B2">B2</SelectItem>
              <SelectItem value="C1">C1</SelectItem>
              <SelectItem value="C2">C2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[100%]">
              <SelectValue placeholder="Sillabusla tanışlıq" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="Ödəniş şərtləri atıldı"
                className="bg-[rgba(48,172,4,0.2)] text-[#30AC04] cursor-pointer font-[500] py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px] "
              >
                Məlumatlıdır
              </SelectItem>
              <SelectItem
                value="Ödəniş şərtləri atıldı"
                className="bg-[rgba(255,203,5,0.2)] text-[#8A6E03] cursor-pointer font-[500] py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px] "
              >
                Poop
              </SelectItem>
              <SelectItem
                value="Ödəniş şərtləri atıldı"
                className="bg-[rgba(226,25,91,0.2)] text-[#E2195B] mb-[10px] cursor-pointer font-[500] py-[8px] px-[16px] w-[148px] text-center mt-[16px] rounded-[16px] "
              >
                Məlumatsız
              </SelectItem>
            </SelectContent>
          </Select>
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="University Bachelor"
          />{" "}
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="Bachelor Major"
          />
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="Bachelor Entrance Score"
          />
        </div>
        <div className="flex flex-col gap-[10px] flex-1">
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="University Major"
          />
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="Master Major"
          />
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="Master Logic score"
          />
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="University PhD"
          />
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="Profession PhD"
          />
        </div>
      </form>
    </div>
  );
};

export default EducationStatusForm;
