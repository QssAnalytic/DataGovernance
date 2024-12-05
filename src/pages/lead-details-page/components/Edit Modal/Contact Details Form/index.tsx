const ContactDetailsForm = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          id="name"
          className="focus:outline-none focus:ring-0  border py-[12px] placeholder:text-[14px] placeholder:text-[#969696] px-[16px] rounded-[12px]"
          placeholder="Contact Number"
        />
      </form>
    </div>
  );
};

export default ContactDetailsForm;
