import { MouseEventHandler } from "react"
import { cn } from "@/lib/utils"

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    icon: React.ReactElement
    className?: string
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, icon, className }) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                `p-3 flex justify-center items-center border rounded-full bg-white shadow-md hover:scale-110 transition`,
                className
            )}
        >
            {icon}
        </button>
    )
}
 
export default IconButton