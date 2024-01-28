import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import getProducts from "@/actions/get-products"

const CartSuggestions = async () => {
    const products = await getProducts({ isFeatured: true, categoryId: process.env.NEXT_PUBLIC_URL_OUTERWEAR_DEPARTMENT })

    return (
        <div className="mt-20 p-5">
            <div>
                <h3 className="text-[24px] md:text-[32px] font-bold">
                    The best suggestions
                </h3>
            </div>
            <Carousel className="w-full cursor-grab">
                <CarouselContent className="gap-x-1">
                    {products.slice(0,20).map((product) => (
                        <CarouselItem
                            key={product.id}
                            className="md:basis-1/2 lg:basis-1/5 p-0"
                        >
                            <Link href={`/products/${product.id}`} className="cursor-grab">
                                <div className="h-full overflow-hidden bg-gray-100">
                                    <Image
                                        width="500"
                                        height="500"
                                        src={product.images[0].url}
                                        alt={product.name}
                                        className="object-cover"
                                    />
                                </div>
                            </Link>
                        </CarouselItem>
                        ))}
                </CarouselContent>
                <div className="absolute -top-7 right-12">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    )
}
 
export default CartSuggestions