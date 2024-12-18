// Overview fields component 

interface OverviewFieldsProps {
    overview: {
        contactNumber: string;
        status: string;
    };
}

export const OverviewFields = ({ overview }: OverviewFieldsProps) => {
    return (
        <>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{overview.contactNumber}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{overview.status}</div>
        </>
    );
}; 