import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface JobStatusFieldsProps {
    job: {
        company: string;
        position: string;
        sector: string;
        jobRef: string;
        refNo: string;
        linkedIn: string;
        skills: string;
        level: string;
        notes: string;
    };
    truncateText: (text: string) => string;
}

export const JobStatusFields = ({ job, truncateText }: JobStatusFieldsProps) => {
    return (
        <>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">{job.company}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[170px]">{job.position}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[200px]">{job.sector}</div>
            <div className="p-[16px] flex items-center font-medium text-[14px] w-[200px]">{job.jobRef}</div>
            <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[101px]">{job.refNo}</div>
            <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[85px]">
                <a href={job.linkedIn} target="_blank" rel="noopener noreferrer">Link</a>
            </div>
            <TooltipProvider>
                <Tooltip delayDuration={200}>
                    <TooltipTrigger asChild>
                        <div className="p-[16px] flex items-center font-medium text-[14px] w-[109px]">
                            {truncateText(job.skills)}
                        </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white p-2 text-sm max-w-[300px] shadow-lg rounded-md border">
                        <p className="text-gray-700">{job.skills}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[77px]">{job.level}</div>
            <TooltipProvider>
                <Tooltip delayDuration={200}>
                    <TooltipTrigger asChild>
                        <div className="p-[16px] flex items-center font-medium text-[14px] w-[150px]">
                            {truncateText(job.notes)}
                        </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white p-2 text-sm max-w-[300px] shadow-lg rounded-md border">
                        <p className="text-gray-700">{job.notes}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    );
}; 