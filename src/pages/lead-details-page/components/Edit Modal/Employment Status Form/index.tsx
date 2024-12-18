const EmploymentStatusForm = () => {
  return (
    <div>
      <form className="flex gap-[20px]">
        <div className="flex flex-col gap-[10px] flex-1">
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="Workplace"
          />
          <input
            type="text"
            id="name"
            className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
            placeholder="Position"
          />
        </div>
        <div className="flex flex-col gap-[10px] flex-1">
          <textarea
            className=" rounded-[12px] border py-[12px]  bg-transparent left-0 focus:outline-none focus:ring-0 h-[100%] w-[100%] px-[16px] text-[14px] text-[#000] placeholder:text-left resize-none"
            placeholder="Note"
          />
        </div>
      </form>
    </div>
  );
};

export default EmploymentStatusForm;
