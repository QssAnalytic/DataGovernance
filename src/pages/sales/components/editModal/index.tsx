import { FiX } from "react-icons/fi";
import { Dialog, DialogContent, DialogTitle } from "@/pages/lead-details-page/components/Custom Dialog";
import { useState } from "react";
import OtherTableModal from "../otherTableModal";
import PaymentTableModal from "../paymentTableModal";
import ServicesTableModal from "../servicesTableModal";
import Succesfully from "../../../../assets/icons/succesfully.svg";
import ButtonChanger from "@/pages/lead-details-page/components/Edit Modal/Button Changer";

const EditModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const steps = ["Digər", "Ödəniş şərtləri", "Xidmətlər"];

    const renderStepForm = () => {
        switch (currentStep) {
            case 1:
                return <OtherTableModal />;
            case 2:
                return <PaymentTableModal />;
            case 3:
                return <ServicesTableModal />;
            default:
                return null;
        }
    };
    console.log(currentStep, 'currentStep')
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                aria-describedby={successMessage ? "success-message-description" : "dialog-description"}
                className={`bg-white shadow-lg rounded-lg p-6 w-[100%] ${successMessage ? "flex justify-center items-center" : ""
                    }`}
            >
                <DialogTitle className="sr-only">Edit Modal</DialogTitle>

                {/* Conditionally render content */}
                {successMessage ? (
                    <div
                        id="success-message-description"
                        className={`text-center w-[670px] h-[410px] flex justify-center items-center transition-opacity duration-500 ease-in-out opacity-100 ${successMessage ? "" : "opacity-0"
                            }`}
                    >
                        <img src={Succesfully} alt="succes message" />
                    </div>
                ) : (
                    <>
                        {/* Hidden description for accessibility */}
                        <div id="dialog-description" className="sr-only">
                            Edit modal with multiple steps for editing details.
                        </div>

                        <div className="flex justify-between items-center">
                            <h2 className="text-[24px] font-[700]">Redakte</h2>
                            <button
                                onClick={onClose}
                                className="text-black p-[5px] hover:text-gray-700 focus:outline-none focus:ring-0 text-[20px] rounded-[10px] border border-solid border-[#E9E9E9]"
                            >
                                <FiX />
                            </button>
                        </div>

                        <div className="flex items-center justify-between gap-4 border-b-solid border-b-[1px] border-b-[gray-300]">
                            <div className="flex">
                                {steps.map((step, index) => (
                                    <button
                                        key={index}
                                        className={`py-[12px] px-[16px] font-[500] whitespace-nowrap ${currentStep === index + 1
                                            ? "text-[#22385F] border-b-solid border-b-[#22385F] border-b-[2px]"
                                            : "text-[#BCBCBC]"
                                            }`}
                                        onClick={() => setCurrentStep(index + 1)}
                                    >
                                        {step}
                                    </button>
                                ))}
                            </div>
                            <span className="text-[16px] py-[10px] px-[5px] text-[#22385F] flex-shrink-0 font-[600]">
                                {currentStep}/{steps.length}
                            </span>
                        </div>

                        {/* Render the form based on the current step */}
                        <div className="mt-4">{renderStepForm()}</div>

                        {/* Changing Buttons Depends on section  */}
                        <ButtonChanger
                            setSuccessMessage={setSuccessMessage}
                            currentStep={currentStep}
                            steps={steps}
                            setCurrentStep={setCurrentStep}
                            onClose={onClose}
                        />
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default EditModal;