import { FiRotateCw } from "react-icons/fi";

interface TableHeaderProps {
    selectedTables: string[];
}

export const TableHeader = ({ selectedTables }: TableHeaderProps) => {
    return (
        <div className="tableHeader flex justify-between items-center">
            <div className="leftHeader flex">
                <div className="text-[12px] font-bold w-[46px] h-[49px] flex items-center p-[16px]">ID</div>
                <div className="text-[12px] font-bold w-[171px] h-[49px] flex items-center p-[16px]">Ad və Soyad</div>
                <div className="text-[12px] font-bold w-[123px] h-[49px] flex items-center p-[16px]">Bootcamp №</div>
                
                {selectedTables.includes("Education") && (
                    <>
                        <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Bachelor Degree</div>
                        <div className="text-[12px] font-bold w-[100px] h-[49px] flex items-center p-[16px]">Uni Score</div>
                        <div className="text-[12px] font-bold w-[170px] h-[49px] flex items-center p-[16px]">Bachelor Major</div>
                        <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Master Degree</div>
                        <div className="text-[12px] font-bold w-[100px] h-[49px] flex items-center p-[16px]">Math Score</div>
                        <div className="text-[12px] font-bold w-[170px] h-[49px] flex items-center p-[16px]">Master Major</div>
                        <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">PHD</div>
                        <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">PHD Major</div>
                        <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Language Skills</div>
                    </>
                )}

                {selectedTables.includes("Job status") && (
                    <>
                        <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Company</div>
                        <div className="text-[12px] font-bold w-[170px] h-[49px] flex items-center p-[16px]">Position</div>
                        <div className="text-[12px] font-bold w-[200px] h-[49px] flex items-center p-[16px]">Sector</div>
                        <div className="text-[12px] font-bold w-[200px] h-[49px] flex items-center p-[16px]">Job Referral</div>
                        <div className="text-[12px] font-bold w-[101px] h-[49px] flex items-center p-[16px]">Referral №</div>
                        <div className="text-[12px] font-bold w-[85px] h-[49px] flex items-center p-[16px]">LinkedIn</div>
                        <div className="text-[12px] font-bold w-[109px] h-[49px] flex items-center p-[16px]">Skills</div>
                        <div className="text-[12px] font-bold w-[77px] h-[49px] flex items-center p-[16px]">Level</div>
                        <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Notes</div>
                    </>
                )}

                {selectedTables.includes("Overview") && (
                    <>
                        <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Contact Number</div>
                        <div className="text-[12px] font-bold w-[150px] h-[49px] flex items-center p-[16px]">Status</div>
                    </>
                )}
            </div>
            <div className="rightHeader w-[95px] h-[49px] flex items-center justify-center p-[16px] ml-[92px]">
                <FiRotateCw className="w-[24px] h-[24px]" />
            </div>
        </div>
    );
}; 