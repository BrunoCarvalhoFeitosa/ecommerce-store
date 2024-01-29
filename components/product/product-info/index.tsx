"use client"
import { MouseEventHandler, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import useCart from "@/hooks/use-cart"
import CommonFaq from "@/components/common/common-faq"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Product } from "@/types"
import { HeartIcon, InfoIcon, Undo2Icon } from "lucide-react"

interface ProductInfoProps {
    product: Product
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    const [number, setNumber] = useState<number>(0)
    const router = useRouter()
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
        <div className="flex flex-col justify-between h-full py-8 px-4">
            <div className="pb-4 2xl:pb-0">
                <div className="flex flex-col md:flex-row md:items-center gap-x-6">
                    <div>
                        <Button
                            className="p-0 flex items-center gap-x-1"
                            onClick={() => router.back()}
                        >
                            <div>
                                <Undo2Icon className="w-5 h-5" />
                            </div>
                            <div className="text-sm font-bold">
                                Back
                            </div>
                        </Button>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-x-1">
                            <li className="text-sm">
                                <Link href="/">
                                    Home |
                                </Link>
                            </li>
                            <li className="text-sm">
                                Product |
                            </li>
                            <li className="text-sm font-bold underline">
                                {product.name}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="mb-1 text-sm leading-none">
                        {product.category.name}
                    </h3>
                    <h2 className="text-[20px] md:text-[25px] font-bold leading-none">
                        {product.name}
                    </h2>
                    <Separator className="mt-4 bg-black/10" />
                </div>
                <div className="my-5 flex items-center gap-x-2">
                    <div className="flex flex-col items-center">
                        <h4 className="text-sm font-bold">
                            Color
                        </h4>
                        <div className="w-[30px] h-[30px]" style={{
                            background: `${product.color.value}`
                        }} />
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className="text-sm font-bold">
                            Size
                        </h4>
                        <div className="flex justify-center items-center w-[30px] h-[30px] border">
                            {product.size.value}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-x-2">
                <InfoIcon className="w-6 h-6" />
                <div>
                    {number} customers purchased this product.
                </div>
            </div>
            <div className="mt-8">
                <div className="pb-9">
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
                <CommonFaq />
            </div>
            <div className="mt-10 2xl:mt-5 flex items-center gap-x-1 w-full">
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
    )
}
 
export default ProductInfo