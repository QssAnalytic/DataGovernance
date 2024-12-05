// EducationStatusForm.tsx
const EducationStatusForm = () => {
  return (
    <div>
      <h3 className="text-[18px] font-[600]">Education Status</h3>
      <form>
        <div className="mt-4">
          <label className="text-[#666]" htmlFor="education">
            Education Level
          </label>
          <select id="education" className="mt-2 w-full p-3 border rounded-lg">
            <option value="highschool">High School</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default EducationStatusForm;
