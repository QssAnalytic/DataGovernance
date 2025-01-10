import { FC } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { PaymentModalProps } from '../../types';



const SavePaymentModal: FC<PaymentModalProps> = ({ isOpen, onClose, rowData, onSave, onChange }) => {
    if (!isOpen) return null;
    console.log('rowdata', rowData)
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 min-w-[700px]">
                <form className='flex flex-col'>
                    <div className='flex justify-between'>
                        <h2 className='font-montserrat text-[25px] font-semibold my-2 text-[#22385F]'>Edit Row</h2>
                        <MdOutlineClose className='text-[35px] cursor-pointer' onClick={onClose} />
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <label className="font-montserrat text-[14px]  mt-[15px] font-semibold text-[#22385F]">Name</label>
                                <input
                                    type="text"
                                    value={rowData.name || ''}
                                    onChange={(e) => onChange('name', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] border-[#22385F] mt-2 border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter name"
                                />
                            </div>



                            <div className='flex flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Məbləğ</label>
                                <input
                                    type="number"
                                    value={rowData.amount || ''}
                                    onChange={(e) => onChange('amount', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                />
                            </div>

                        </div>

                        <div className='flex justify-between'>

                            <div className='flex flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Endirimlər</label>
                                <input
                                    type="number"
                                    value={rowData.discount || ''}
                                    onChange={(e) => onChange('discount', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Total Amount</label>
                                <input
                                    type="number"
                                    value={rowData.totalAmount || ''}
                                    onChange={(e) => onChange('totalAmount', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                />

                            </div>

                        </div>


                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Ödəmə 1</label>
                                <input
                                    type="number"
                                    value={rowData.payment1 || ''}
                                    onChange={(e) => onChange('payment1', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Planned Date</label>
                                <input
                                    type="text"
                                    value={rowData.plannedDate1 || ''}
                                    onChange={(e) => onChange('plannedDate1', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                />

                            </div>

                        </div>

                        <div className='flex justify-between'>

                            <div className='flex flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Ödəmə 2</label>
                                <input
                                    type="number"
                                    value={rowData.payment2 || ''}
                                    onChange={(e) => onChange('payment2', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                />

                            </div>

                            <div className='flex flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Planned Date</label>
                                <input
                                    type="text"
                                    value={rowData.plannedDate2 || ''}
                                    onChange={(e) => onChange('plannedDate2', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                />
                            </div>
                        </div>

                        <div className='flex justify-between'>

                            <div className='flex flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Ödəmə 3</label>
                                <input
                                    type="number"
                                    value={rowData.payment3 || ''}
                                    onChange={(e) => onChange('payment3', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                />
                            </div>

                            <div className='flex flex-col' >
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Planned Date</label>
                                <input
                                    type="text"
                                    value={rowData.plannedDate3 || ''}
                                    onChange={(e) => onChange('plannedDate3', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-3 justify-between'>
                        <div className="flex justify-between w-full gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-[296px] h-56px font-montserrat  leading-[17.07px] font-medium text-[#22385F] py-5 border-[1px] border-[#22385F] rounded-xl"
                            >
                                Ləğv et
                            </button>
                            <button
                                type="button"
                                onClick={onSave}
                                className="w-[296px] h-56px font-montserrat  leading-[17.07px] font-medium py-5 text-[#fff]   bg-[#22385F] rounded-xl"
                            >
                                Yadda Saxla
                            </button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default SavePaymentModal;
