



const PaymentTableModal = ( ) => {


;

    return <div>
            <form className='flex flex-col'>
                
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                            <div className='flex mt-1 flex-col'>
                                <label className="font-montserrat text-[14px]  mt-[7px] font-semibold text-[#22385F]">Name</label>
                                <input
                                    type="text"
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] border-[#22385F] mt-2 border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter name"
                                />
                            </div>



                            <div className='flex mt-1  flex-col'>
                                <label className="font-montserrat text-[14px] mb-1 font-semibold mt-2 text-[#22385F]">Məbləğ</label>
                                <input
                                  type="number"                  
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
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter discount"

                                />
                            </div>

                            <div className='flex mt-1 flex-col'>
                                <label className="font-montserrat text-[14px] font-semibold mt-4 text-[#22385F]">Total Amount</label>
                                <input
                                    type="number"
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
                                      className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter payment1"

                                />
                            </div>

                            <div className="flex mt-3 flex-col">
                                        <label className="font-montserrat text-[14px] font-semibold mt-2 text-[#22385F]">Planned Date</label>
                                        <input
                                            type="date"
                                           className="w-[296px] h-[56px] mt-2 bg-[#FAFCFF] border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                        />
                                    </div>

                        </div>

                        <div className='flex justify-between'>

                            <div className='flex mt-3 flex-col'>
                                <label className="font-montserrat  mb-1  text-[14px] font-semibold mt-4 text-[#22385F]">Ödəmə 2</label>
                                <input
                                    type="number"
                                    className="w-[296px] h-[56px] bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter payment2"

                                />

                            </div>

                            <div className="flex mt-3 flex-col">
                                        <label className="font-montserrat text-[14px] font-semibold mt-3 text-[#22385F]">Planned Date</label>
                                        <input
                                            type="date"
                                           className="w-[296px] h-[56px] mt-2 bg-[#FAFCFF] border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                        />
                                    </div>

                        </div>

                        <div className='flex justify-between'>

                            <div className='flex mt-2 flex-col'>
                                <label className="font-montserrat mb-1 text-[14px] font-semibold mt-4 text-[#22385F]">Ödəmə 3</label>
                                <input
                                    type="number"
                                    className="w-[296px] h-[56px]  bg-[#FAFCFF] mt-2 border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                    placeholder="Enter payment3"

                                />
                            </div>

                            <div className="flex mt-3 flex-col">
                                        <label className="font-montserrat text-[14px] font-semibold mt-2 text-[#22385F]">Planned Date</label>
                                        <input
                                            type="date"
                                           className="w-[296px] h-[56px] mt-2 bg-[#FAFCFF] border-[#22385F] border-[0.5px] py-[12px] px-[16px] rounded-xl"
                                        />
                                    </div>

                        </div>
                    </div>

                  
                </form>
    </div>
}

export default  PaymentTableModal 