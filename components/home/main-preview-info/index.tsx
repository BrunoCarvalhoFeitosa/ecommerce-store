"use client"
import { MouseEventHandler, useEffect, useState } from "react"
import useCart from "@/hooks/use-cart"
import CommonFaq from "@/components/common/common-faq"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NikeIcon } from "@/public/svgs/nike-icon"
import { Product } from "@/types"
import { HeartIcon, InfoIcon } from "lucide-react"

interface MainPreviewInfoProps {
    product: Product
}

const MainPreviewInfo: React.FC<MainPreviewInfoProps> = ({ product }) => {
    const [number, setNumber] = useState<number>(0)
    const cart = useCart()

    useEffect(() => {
        const min = 1
        const max = 2000
        const random = min + (Math.floor(Math.random() * (max - min)))

        setNumber(random)
    }, [])

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        cart.addItem(product)
    }

    return (
        <div className="py-4 2xl:py-16 px-4 md:px-6 w-full 2xl:w-[40%] h-[50dvh] 2xl:h-[100dvh]">
            <div>
                <NikeIcon
                    width="80px"
                    height="80px"
                    fill="#000"
                />
            </div>
            <div className="flex flex-col justify-between xl:h-[calc(100%-100px)]">
                <div>
                    <div className="pb-4">
                        <h3 className="mb-1 text-sm leading-none">
                            {product.category.name}
                        </h3>
                        <h2 className="text-[20px] md:text-[25px] font-bold leading-none">
                            {product.name}
                        </h2>
                    </div>
                    <Separator className="bg-black/10" />
                </div>
                <div className="flex items-center gap-x-2 mt-4 md:mt-7">
                    <InfoIcon className="w-6 h-6" />
                    <div>
                        {number} customer buyed this product this week.
                    </div>
                </div>
                <div className="md:my-6">
                    <div className="hidden 2xl:block pb-9">
                        <h3 className="mb-3 text-lg font-bold">
                            Description
                        </h3>
                        <p>
                            Our <strong>{product.category.name.toLocaleLowerCase()}</strong> have a fluid heating system, we use 
                            high standard raw materials, even disposable materials, 
                            that is, recycling materials, our models are very varied, 
                            we have products for everyday life, work, gym, running and 
                            various sports, all products feature anti-perspirant technology
                            and the fabrics adjust to the body. We guarantee durability in 
                            all our pieces, all products are manufactured in-house and undergo
                            rigorous quality tests, ensuring you the best piece and the best comfort.
                            Take advantage of the constant discounts on jackets and save on each piece.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <CommonFaq />
                    </div>
                </div>
                <div className="mt-8 md:mt-2 flex items-center gap-x-1 w-full">
                    <div className="flex items-center pb-2 mr-2 md:mr-6">
                        <div className="text-sm">
                            $
                        </div>
                        <div className="text-3xl md:text-5xl font-bold">
                            {product.price}
                        </div>
                    </div>
                    <Button
                        onClick={onAddToCart}
                        className="flex-1 p-4 md:h-16 bg-black hover:bg-zinc-900 rounded-md text-white"
                    >
                        Buy this product now
                    </Button>
                    <Button className="p-4 md:w-16 md:h-16 bg-black hover:bg-zinc-900 rounded-md">
                        <HeartIcon className="w-5 h-5 text-white" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
 
export default MainPreviewInfo