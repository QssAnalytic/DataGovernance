import { FC } from 'react';
import { SaveModalProps } from '../../types';

const SaveModal: FC<SaveModalProps> = ({ isOpen, onClose, rowData, onSave, onChange }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 min-w-[700px]">
                <form className='flex flex-col' >
                    <h2 className='font-montserrat text-[25px] font-semibold my-2 text-[#22385F]'>Edit Table </h2>
                    <div className='flex justify-between'>
                        <div className='flex-col'>
                            <label className="font-montserrat text-[14px]  font-semibold text-[#22385F]  ">Name</label>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={rowData.name || ''}
                                    onChange={(e) => onChange('name', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] border-[#22385F] mt-2 border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder='Ad, Soyad'
                                />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label className="font-montserrat text-[14px] font-semibold mt-2 text-[#22385F]">Applicattion Source</label>

                                <input
                                    type="text"
                                    value={rowData.applicationSource || ''}
                                    onChange={(e) => onChange('applicationSource', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                />
                            </div>
                            <div className="mb-4 flex flex-col">
                            <label className="font-montserrat text-[14px] font-semibold text-[#22385F] "> Training Name</label>

                            <input
                                type="text"
                                value={rowData.trainingName || ''}
                                onChange={(e) => onChange('trainingName', e.target.value)}
                                className="w-[296px] h-[56px] mt-2 bg-[#FAFCFF] border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                            />
                            </div >
                         
                        </div>
                        <div className='flex flex-col'>
                            <div className="mb-4 flex flex-col">
                                <label className="font-montserrat text-[14px] font-semibold mt-2 text-[#22385F]">Phone</label>
                                <input
                                    type="text"
                                    value={rowData.phone || ''}
                                    onChange={(e) => onChange('phone', e.target.value)}
                                    className="w-[296px] h-[56px] mt-2 bg-[#FAFCFF] border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                />
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label className="font-montserrat text-[14px] font-semibold mt-2 text-[#22385F]">Date</label>
                                <input
                                    type="date"
                                    value={rowData.date || ''}
                                    onChange={(e) => onChange('date', e.target.value)}
                                    className="w-[296px] h-[56px] mt-2 bg-[#FAFCFF] border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
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
            </div>
        </div>
    );
};

export default SaveModal;
