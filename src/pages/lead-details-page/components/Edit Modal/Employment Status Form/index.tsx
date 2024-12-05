const EmploymentStatusForm = () => {
  return (
    <div>
      <h3 className="text-[18px] font-[600]">Employment Status</h3>
      <form>
        <div className="mt-4">
          <label className="text-[#666]" htmlFor="employment">
            Employment Status
          </label>
          <select id="employment" className="mt-2 w-full p-3 border rounded-lg">
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
            <option value="student">Student</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default EmploymentStatusForm;
