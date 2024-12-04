import { FiBell } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const HeaderProfileSide = () => {
  const notifications: string[] = ["Notification 1", "Notification 2"]; // Example notifications

  return (
    <div className="flex gap-x-[20px] items-center relative">
      <div className="relative">
        <FiBell className="text-[rgba(34,56,95,1)] w-[32px] h-[32px]" />
        {notifications.length > 0 && (
          <span className="absolute top-[-3px] right-[3px] w-[12px] h-[12px] bg-[#E02222] rounded-full border border-[white]" />
        )}
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
