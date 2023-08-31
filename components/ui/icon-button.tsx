import { cn } from "@/lib/utils";

interface IconButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    icon: React.ReactElement
    className?: string
}
const IconButton: React.FC<IconButtonProps> = ({
    icon,
    onClick,
    className
}) => {
    return (
        <button className={cn("flex rounded-full items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition", className)} onClick={onClick}>
            {icon}
        </button>
    );
}

export default IconButton;