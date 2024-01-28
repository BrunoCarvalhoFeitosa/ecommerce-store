"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Product } from "@/types"
import { type CarouselApi } from "@/components/ui/carousel"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface ProductShelfProps {
    items: Product[]
}

const ProductShelf: React.FC<ProductShelfProps> = ({ items }) => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
 
    useEffect(() => {
        if (!api) {
            return
        }
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
    
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Carousel className="w-full cursor-grab" setApi={setApi}>
            <CarouselContent className="gap-x-1">
                {items.reverse().map((item, index) => (
                        <CarouselItem
                            key={item.id}
                            className="md:basis-1/2 lg:basis-1/5 p-0"
                        >
                            <Link href={`/products/${item.id}`} className="cursor-grab">
                                <div className="h-full overflow-hidden bg-gray-100">
                                    <Image
                                        width="500"
                                        height="500"
                                        src={item.images[0].url}
                                        alt={item.name}
                                        className={cn(
                                            "object-cover",
                                            index === current -1 ? "opacity-100" : "opacity-20"
                                        )}
                                    />
                                </div>
                            </Link>
                        </CarouselItem>
                    )
                )}
            </CarouselContent>
            <div className="py-2 text-end text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
            <div className="absolute -top-7 right-12">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    )
}
 
export default ProductShelf