import { useState } from 'react';
import { OtherTableRow } from '../../types';

import { statusData } from '../sharedData';

import {
    Select, SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/pages/lead-details-page/components/Custom Selector';

const OtherTableModal = () => {
    // const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Partial<OtherTableRow>>({});
    // if (!isSaveModalOpen) return null;
    console.log('rawdata', selectedRow)

    const handleModalChange = (field: keyof OtherTableRow, value: string | number | boolean) => {
        setSelectedRow({ ...selectedRow, [field]: value });
    };
    return <div>
        <form className='flex flex-col'>

            <div className='flex justify-between'>
                <div className='flex flex-col'>


                    <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Name</label>
                    <input type="text"
                        value={selectedRow.name || ''}
                        onChange={(e) => handleModalChange('name', e.target.value)}
                        className="w-[296px] h-[56px] bg-[#FAFCFF] border-[#22385F] mt-2 border-[0.5px] py-[12px] px-[16px] rounded-xl"
                        placeholder="Enter name"
                    />

                    <label className="font-montserrat  text-[14px] mt-[20px] font-semibold text-[#22385F]">BC №</label>
                    <div className="flex flex-col gap-[10px] flex-1">


                        {/* Custom Select dropdown */}
                        <Select onValueChange={(value) => handleModalChange('BC', value)}>
                            <SelectTrigger className="w-[296px] h-[56px] bg-[#FAFCFF] border-[#22385F]  border-[0.5px] py-[12px] px-[16px] rounded-xl">
                                <SelectValue placeholder="Select BC" />
                            </SelectTrigger>
                            <SelectContent>
                                {statusData.map((bc) => (
                                    <SelectItem key={bc} value={bc}>
                                        {bc}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>


                    <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Workplace</label>
                    <input
                        type="text"
                        value={selectedRow.workPlace || ''}
                        onChange={(e) => handleModalChange('workPlace', e.target.value)}
                        placeholder='Enter workplace'
                        className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                    />
                </div>

                <div className='flex flex-col'>
                    <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Phone</label>
                    <input
                        type="number"
                        value={selectedRow.phone || ''}
                        onChange={(e) => handleModalChange('phone', e.target.value)}
                        placeholder='Enter phone number'
                        className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                    />

                    <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Entrance Score</label>
                    <input
                        type="number"
                        value={selectedRow.score || ''}
                        onChange={(e) => handleModalChange('score', e.target.value)}
                        placeholder='Enter score'
                        className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                    />

                </div>
            </div>


        </form>
    </div>
}

export default OtherTableModal;


