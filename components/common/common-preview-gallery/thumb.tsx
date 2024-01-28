"use client"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"
import { Image as ImageType } from "@/types"

interface ThumbProps {
    category: string
    image: ImageType
}

const Thumb: React.FC<ThumbProps> = ({ category, image }) => {
    return ( 
        <Tab>
            {({ selected }) => (
                <div className="relative">
                    <div className={cn(
                        "w-[80px] h-[80px] opacity-15",
                        selected && "opacity-100"
                    )}>
                        <Image 
                            width="80"
                            height="80"
                            src={image.url} 
                            alt="" 
                            className={cn(
                                "w-full h-full object-cover object-top",
                                category === "Outerwear" && "object-top",
                                category === "Pants" && "object-bottom",
                                category === "Shoes" && "object-center"
                            )}
                        />
                    </div>
                </div>
            )}
        </Tab>
    )
}
 
export default Thumb