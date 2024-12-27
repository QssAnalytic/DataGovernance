const Table = () => {
    return (
        <table className="min-w-full table-auto border-separate  rounded-lg shadow-lg">
            <thead className="bg-[#FAFAFA] sticky top-0 z-10">
                <tr className="text-left">
                    <th className="p-3 rounded-lg bg-[#22385F] font-montserrat font-semibold text-center text-[12px] text-[#FFFFFF]">Ad və Soyad</th>
                    <th className="p-3 rounded-lg bg-[#22385F] font-montserrat font-semibold text-center text-[12px] text-[#FFFFFF]">Əlaqə</th>
                    <th className="p-3 rounded-lg bg-[#22385F] font-montserrat font-semibold text-center text-[12px] text-[#FFFFFF]">Kateqoriya</th>
                    <th className="p-3 rounded-lg bg-[#22385F] font-montserrat font-semibold text-center text-[12px] text-[#FFFFFF]">BC №</th>
                    <th className="p-3 rounded-lg bg-[#22385F] font-montserrat font-semibold text-center text-[12px] text-[#FFFFFF]">Total <br /> Amount</th>
                    <th className="p-3 rounded-lg bg-[#22385F] font-montserrat font-semibold text-center text-[12px] text-[#FFFFFF]">Payment</th>
                    <th className="p-3 rounded-lg bg-[#22385F] font-montserrat font-semibold text-center text-[12px] text-[#FFFFFF]">Price</th>
                    <th className="p-3 rounded-lg bg-[#22385F] font-montserrat font-semibold text-center text-[12px] text-[#FFFFFF]">Planned Date</th>
                    <th className="p-3 rounded-lg bg-[#22385F] font-montserrat font-semibold text-center text-[12px] text-[#FFFFFF]">Delay <br /> days</th>
                    <th className="p-3 rounded-lg bg-[#22385F] font-montserrat font-semibold text-center text-[12px] text-[#FFFFFF]">Status</th>
                    <th className="p-3 rounded-lg bg-[#22385F] font-montserrat font-semibold text-center text-[12px] text-[#FFFFFF]">Paid via</th>
                </tr>
            </thead>
            <tbody>
                {/* Grouped rows for the first person */}
                <tr className="bg-white hover:bg-gray-100">
                    <td rowSpan={3} className="p-3 text-sm text-center text-gray-700 bg-[#FAFAFA]">Mammadqasım Xanmammadov</td>
                    <td rowSpan={3} className="p-3 text-sm text-center text-gray-700 bg-[#FAFAFA]">+994 50 456 78 99</td>
                    <td rowSpan={3} className="p-3 text-sm text-center text-gray-700 bg-[#FAFAFA]">Customized BC & QSS</td>
                    <td rowSpan={3} className="p-3  text-sm text-gray-700 bg-[#EEF4FF] text-center">34</td>
                    <td rowSpan={3} className="p-3 text-center text-sm bg-[#FAFAFA] text-gray-700">1400</td>
                    <td className="p-3 text-sm text-center text-gray-700">N1</td>
                    <td className="p-3 text-sm text-center text-gray-700">600</td>
                    <td className="p-3 text-sm text-center text-gray-700">11/12/2024</td>
                    <td className="p-3 text-sm text-center text-gray-700">6 gün</td>
                    <td className="p-3  text-center text-sm">
                        <span className="px-3 py-1  text-xs font-bold text-green-700 bg-green-100 rounded-full">
                            Paid
                        </span>
                    </td>
                    <td className="p-3 text-center text-sm text-gray-700">Card (Rabita)</td>
                </tr>
                <tr className="even:bg-[#fafafa] odd:bg-white hover:bg-gray-100">
                    <td className="p-3 text-sm text-center text-gray-700">N2</td>
                    <td className="p-3 text-sm text-center text-gray-700">400</td>
                    <td className="p-3 text-sm text-center text-gray-700">12/12/2024</td>
                    <td className="p-3 text-sm text-center text-gray-700">5 gün</td>
                    <td className="p-3  text-center text-sm">
                        <span className="px-3 py-1 text-xs font-bold text-yellow-700 bg-yellow-100 rounded-full">
                            Upcoming
                        </span>
                    </td>
                    <td className="p-3 text-center text-sm text-gray-700">Ofis</td>
                </tr>
                <tr className="even:bg-[#fafafa] odd:bg-white hover:bg-gray-100">
                    <td className="p-3 text-center text-sm text-gray-700">N3</td>
                    <td className="p-3  text-center text-sm text-gray-700">400</td>
                    <td className="p-3 text-center text-sm text-gray-700">13/12/2024</td>
                    <td className="p-3  text-center text-sm text-gray-700">3 gün</td>
                    <td className="p-3 text-center text-sm">
                        <span className="px-3 py-1 text-xs font-bold text-red-700 bg-red-100 rounded-full">
                            Risky
                        </span>
                    </td>
                    <td className="p-3 text-center text-sm text-gray-700">Cash</td>
                </tr>

                <tr className=" even:bg-[#fafafa] odd:bg-white bg-white hover:bg-gray-100">
                    <td rowSpan={3} className="p-3 text-center text-sm text-gray-700 bg-[#FAFAFA]">Mammadqasım Xanmammadov</td>
                    <td rowSpan={3} className="p-3 text-center text-sm text-gray-700 bg-[#FAFAFA]">+994 50 456 78 99</td>
                    <td rowSpan={3} className="p-3 text-center text-sm text-gray-700 bg-[#FAFAFA]">Customized BC & QSS</td>
                    <td rowSpan={3} className="p-3 text-sm text-gray-700 bg-[#EEF4FF] text-center">34</td>
                    <td rowSpan={3} className="p-3 text-center text-sm text-gray-700 bg-[#FAFAFA]">1400</td>
                    <td className="p-3 text-center text-sm text-gray-700">N1</td>
                    <td className="p-3 text-center text-sm text-gray-700">600</td>
                    <td className="p-3 text-center text-sm text-gray-700">11/12/2024</td>
                    <td className="p-3 text-center text-sm text-gray-700">6 gün</td>
                    <td className="p-3 text-center text-sm">
                        <span className="px-3 py-1 text-xs font-bold text-green-700 bg-green-100 rounded-full">
                            Paid
                        </span>
                    </td>
                    <td className="p-3 text-center text-sm text-gray-700">Card (Rabita)</td>
                </tr>
                <tr className=" even:bg-[#fafafa] odd:bg-white bg-gray-50 hover:bg-gray-100">
                    <td className="p-3 text-center text-sm text-gray-700">N2</td>
                    <td className="p-3 text-center text-sm text-gray-700">400</td>
                    <td className="p-3 text-center text-sm text-gray-700">12/12/2024</td>
                    <td className="p-3 text-center  text-sm text-gray-700">5 gün</td>
                    <td className="p-3 text-center text-sm">
                        <span className="px-3 py-1 text-xs font-bold text-yellow-700 bg-yellow-100 rounded-full">
                            Upcoming
                        </span>
                    </td>
                    <td className="p-3 text-center text-sm text-gray-700">Ofis</td>
                </tr>
                <tr className=" even:bg-[#fafafa] odd:bg-white bg-white hover:bg-gray-100">
                    <td className="p-3 text-center text-sm text-gray-700">N3</td>
                    <td className="p-3 text-center text-sm text-gray-700">400</td>
                    <td className="p-3 text-center text-sm text-gray-700">13/12/2024</td>
                    <td className="p-3 text-center text-sm text-gray-700">3 gün</td>
                    <td className="p-3 text-center text-sm">
                        <span className="px-3 py-1 text-xs font-bold text-red-700 bg-red-100 rounded-full">
                            Risky
                        </span>
                    </td>
                    <td className="p-3 text-center text-sm text-gray-700">Cash</td>
                </tr>


                <tr className="even:bg-[#fafafa] odd:bg-white hover:bg-gray-100">
                    <td rowSpan={3} className="p-3  text-center text-sm text-gray-700 bg-[#FAFAFA]">Mammadqasım Xanmammadov</td>
                    <td rowSpan={3} className="p-3 text-center text-sm text-gray-700 bg-[#FAFAFA]">+994 50 456 78 99</td>
                    <td rowSpan={3} className="p-3 text-center text-sm text-gray-700 bg-[#FAFAFA]">Customized BC & QSS</td>
                    <td rowSpan={3} className="p-3  text-sm text-gray-700 bg-[#EEF4FF] text-center">34</td>
                    <td rowSpan={3} className="p-3 text-center text-sm text-gray-700 bg-[#FAFAFA]">1400</td>
                    <td className="p-3 text-sm text-center text-gray-700">N1</td>
                    <td className="p-3 text-sm text-center text-gray-700">600</td>
                    <td className="p-3 text-sm text-center text-gray-700">11/12/2024</td>
                    <td className="p-3 text-sm text-center text-gray-700">6 gün</td>
                    <td className="p-3 text-center text-sm">
                        <span className="px-3 py-1 text-xs font-bold text-green-700 bg-green-100 rounded-full">
                            Paid
                        </span>
                    </td>
                    <td className="p-3 text-center text-sm text-gray-700">Card (Rabita)</td>
                </tr>
                <tr className="even:bg-[#fafafa] odd:bg-white hover:bg-gray-100">
                    <td className="p-3 text-sm text-center text-gray-700">N2</td>
                    <td className="p-3 text-sm text-center text-gray-700">400</td>
                    <td className="p-3 text-sm text-center text-gray-700">12/12/2024</td>
                    <td className="p-3 text-sm text-center text-gray-700">5 gün</td>
                    <td className="p-3 text-center text-sm">
                        <span className="px-3 py-1 text-xs font-bold text-yellow-700 bg-yellow-100 rounded-full">
                            Upcoming
                        </span>
                    </td>
                    <td className="p-3  text-center text-sm text-gray-700">Ofis</td>
                </tr>
                <tr className="even:bg-[#fafafa] odd:bg-white hover:bg-gray-100">
                    <td className="p-3 text-center text-sm text-gray-700">N3</td>
                    <td className="p-3 text-center text-sm text-gray-700">400</td>
                    <td className="p-3 text-center text-sm text-gray-700">13/12/2024</td>
                    <td className="p-3 text-center text-sm text-gray-700">3 gün</td>
                    <td className="p-3 text-center text-sm">
                        <span className="px-3 py-1 text-xs font-bold text-red-700 bg-red-100 rounded-full">
                            Risky
                        </span>
                    </td>
                    <td className="p-3 text-center text-sm text-gray-700">Cash</td>
                </tr>

            </tbody>
        </table>
    );
};

export default Table;
