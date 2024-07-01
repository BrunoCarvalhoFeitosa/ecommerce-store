"use client"

import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Link from "next/link"

interface CommonTitleProps {
    title: string
    description?: string
    categoryName?: string
    categoryId?: string
}

const CommonTitle: React.FC<CommonTitleProps> = ({ title, description, categoryName, categoryId }) => {
    return (
        <div className="mb-20 md:mb-16 xl:mb-10 w-full xl:w-[55%] 2xl:w-2/5">
            <div className="pb-3">
                <h2 className="text-[24px] md:text-[40px] font-bold">
                    {title}
                </h2>
                {description && (
                    <p className="text-md">
                        {description}
                    </p>
                )}
            </div>
            <div>
                <Button className="p-0 text-lg font-bold">
                    <Link
                        href={`/categories/${categoryId}`}
                        className="relative group flex items-center gap-x-2"
                    >
                        Go to {categoryName}
                        <MoveRight className="w-6 h-6" />
                        <div className="absolute bottom-0 w-0 group-hover:w-full h-[2px] transition-all duration-300 bg-black" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}
 
export default CommonTitle