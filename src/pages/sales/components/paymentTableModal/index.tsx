import { useState } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { PaymentDataProps } from '../../types';



const PaymentTableModal = ( ) => {


    // const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Partial<PaymentDataProps>>({});
    // if (!isSaveModalOpen) return null;
       console.log('rawdata', selectedRow)

    const handleModalChange = (field: keyof PaymentDataProps, value: string | number | boolean) => {
        setSelectedRow({ ...selectedRow, [field]: value });
    };

    return <div>
            <form className='flex flex-col'>
                
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                            <div className='flex mt-1 flex-col'>
                                <label className="font-montserrat text-[14px]  mt-[7px] font-semibold text-[#22385F]">Name</label>
                                <input
                                    type="text"
                                    value={selectedRow.name || ''}
                                    onChange={(e) => handleModalChange('name', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] border-[#22385F] mt-2 border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter name"
                                />
                            </div>



                            <div className='flex mt-1  flex-col'>
                                <label className="font-montserrat text-[14px] mb-1 font-semibold mt-2 text-[#22385F]">Məbləğ</label>
                                <input
                                    type="number"
                                    value={selectedRow.amount || ''}
                                    onChange={(e) => handleModalChange('amount', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2  border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter amount"

                                />
                            </div>

                        </div>

                        <div className='flex justify-between'>

                            <div className='flex  mt-1 flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Endirimlər</label>
                                <input
                                    type="number"
                                    value={selectedRow.discount || ''}
                                    onChange={(e) => handleModalChange('discount', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter discount"

                                />
                            </div>

                            <div className='flex mt-1 flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Total Amount</label>
                                <input
                                    type="number"
                                    value={selectedRow.totalAmount || ''}
                                    onChange={(e) => handleModalChange('totalAmount', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter total amount"

                                />

                            </div>

                        </div>


                        <div className='flex justify-between'>
                            <div className='flex mt-2 flex-col'>
                                <label className="font-montserrat mb-1 text-[14px] font-semibold mt-4 text-[#22385F]">Ödəmə 1</label>
                                <input
                                    type="number"
                                    value={selectedRow.payment1 || ''}
                                    onChange={(e) => handleModalChange('payment1', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter payment1"

                                />
                            </div>

                            <div className='flex mt-1 flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Planned Date</label>
                                <input
                                    type="text"
                                    value={selectedRow.plannedDate1 || ''}
                                    onChange={(e) => handleModalChange('plannedDate1', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter palanned date1"

                                />

                            </div >

                        </div>

                        <div className='flex justify-between'>

                            <div className='flex mt-2 flex-col'>
                                <label className="font-montserrat  mb-1  text-[14px] font-semibold mt-4 text-[#22385F]">Ödəmə 2</label>
                                <input
                                    type="number"
                                    value={selectedRow.payment2 || ''}
                                    onChange={(e) => handleModalChange('payment2', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter payment2"

                                />

                            </div>

                            <div className='flex mt-1 flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Planned Date</label>
                                <input
                                    type="text"
                                    value={selectedRow.plannedDate2 || ''}
                                    onChange={(e) => handleModalChange('plannedDate2', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter planned date2"

                                />
                            </div>
                        </div>

                        <div className='flex justify-between'>

                            <div className='flex mt-2 flex-col'>
                                <label className="font-montserrat mb-1 text-[14px] font-semibold mt-4 text-[#22385F]">Ödəmə 3</label>
                                <input
                                    type="number"
                                    value={selectedRow.payment3 || ''}
                                    onChange={(e) => handleModalChange('payment3', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter payment3"

                                />
                            </div>

                            <div className='flex  mt-1 flex-col' >
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Planned Date</label>
                                <input
                                    type="text"
                                    value={selectedRow.plannedDate3 || ''}
                                    onChange={(e) => handleModalChange('plannedDate3', e.target.value)}
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter planned date3"

                                />
                            </div>
                        </div>
                    </div>

                  
                </form>
    </div>
}

export default  PaymentTableModal 