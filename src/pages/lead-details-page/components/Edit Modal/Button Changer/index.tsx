import { ButtonChangerProps } from "../../../types";
import { DialogFooter } from "../../Custom Dialog";

const ButtonChanger: React.FC<ButtonChangerProps> = ({
  setSuccessMessage,
  currentStep,
  steps,
  setCurrentStep,
  onClose,
}) => {
  const handleSave = () => {
    // Show the success message
    setSuccessMessage("Successfully added");

    // Close the modal after 2 seconds
    setTimeout(() => {
      setSuccessMessage(null);
      onClose();
    }, 1000);
  };
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep: number) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep: number) => prevStep - 1);
    }
  };
  return (
    <DialogFooter>
      <div className="flex w-[100%] gap-[20px] mt-[20px]">
        {currentStep === 1 && (
          <>
            <button
              className="font-[600] text-[14px] bg-gray-200 py-[12px] px-[16px] text-[#22385F] rounded-lg w-[100%]"
              onClick={onClose}
            >
              Ləğv et
            </button>
            <button
              className="font-[600] text-[14px] px-4 py-2 bg-[#22385F] text-white rounded-lg w-[100%]"
              onClick={handleNext}
            >
              İrəli
            </button>
          </>
        )}
        {currentStep > 1 && currentStep < steps.length && (
          <>
            <button
              className="font-[600] text-[14px] bg-gray-200 py-[12px] px-[16px] text-[#22385F] rounded-lg w-[100%]"
              onClick={handlePrevious}
            >
              Geri
            </button>
            <button
              className="font-[600] text-[14px] px-4 py-2 bg-[#22385F] text-white rounded-lg w-[100%]"
              onClick={handleNext}
            >
              İrəli
            </button>
          </>
        )}
        {currentStep === steps.length && (
          <>
            <button
              className="font-[600] text-[14px] bg-gray-200 py-[12px] px-[16px] text-[#22385F] rounded-lg w-[100%]"
              onClick={handlePrevious}
            >
              Geri
            </button>
            <button
              className="font-[600] text-[14px] px-4 py-2 bg-[#22385F] text-white rounded-lg w-[100%]"
              onClick={handleSave} // Trigger save and success message
            >
              Yadda saxla
            </button>
          </>
        )}
      </div>
    </DialogFooter>
  );
};

export default ButtonChanger;
