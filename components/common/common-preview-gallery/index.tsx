"use client"
import { Tab } from "@headlessui/react"
import { Image } from "@/types"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import Thumb from "./thumb"
import { StarIcon } from "lucide-react"

interface CommonPreviewGalleryProps {
  category: string
  images: Image[]
}

const CommonPreviewGallery: React.FC<CommonPreviewGalleryProps> = ({ category, images = [] }) => {
    return ( 
        <div className="w-full flex-1 xl:w-[60%] bg-[#F0F0F0]">
            <Tab.Group as="div" className="flex h-[60vh] md:h-[48vh] xl:h-[100vh] overflow-hidden">
                <Tab.List className="h-full">
                    <ScrollArea className="w-full h-full">
                        <div className="flex flex-col justify-center items-center gap-y-[1px]">
                            {images.map((image) => (
                                <Thumb key={image.id} category={category} image={image} />
                            ))}
                        </div>
                    </ScrollArea>
                </Tab.List>
                <Tab.Panels className="flex-1 w-full h-full">
                    {images.map((image) => (
                        <Tab.Panel key={image.id} className="relative h-full">
                            <div className="hidden absolute top-2 left-0 md:top-4 md:left-6 md:flex items-center gap-x-1 md:gap-x-2 bg-white py-1 md:py-2 px-2 md:px-4 rounded-full shadow-md">
                                <StarIcon className="w-3 h-3 md:w-5 md:h-5" />
                                <span className="text-xs md:text-base">
                                    Highly Rated
                                </span>
                            </div>
                            <div>
                                <img
                                    src={image.url}
                                    alt="Image"
                                    className={cn(
                                        "w-full h-full object-cover",
                                        category === "Outerwear" && "object-top",
                                        category === "Pants" && "object-bottom",
                                        category === "Shoes" && "object-center"
                                    )}
                                />
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
 
export default CommonPreviewGallery