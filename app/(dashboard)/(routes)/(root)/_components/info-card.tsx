import { IconBadge } from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
    numberOfItems: number;
    variant?: "default" | "success";
    label: string;
    icon: LucideIcon;
}

export const InfoCard = ({
    variant,
    icon: Icon,
    numberOfItems,
    label
<<<<<<< HEAD
}: InfoCardProps) => {
    return(
        <div className="border rounded-md flex items-center gap-x-2 p-3">
            <IconBadge
            variant={variant}
            icon={Icon}/>

=======
}: InfoCardProps) =>{
    return(
        <div className="border rounded-md flex items-center gap-x-2 p-3">
            <IconBadge
            variant={variant} 
            icon={Icon}/>
>>>>>>> 9c2149202bd8147bcaf03280cb9e793eb4a3c424
            <div>
                <p className="font-medium">
                    {label}
                </p>
                <p className="text-gray-500 text-sm">
                    {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
                </p>
            </div>
        </div>
    )
}