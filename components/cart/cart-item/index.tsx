"use client"
import useCart from "@/hooks/use-cart"
import IconButton from "@/components/ui/icon-button"
import { Product } from "@/types"
import { Trash2Icon } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const CartItem = () => {
    const cart = useCart()
    
    const handleRemove = (product: Product) => {
        cart.removeItem(product.id)
    }

    return (
        <div className="w-full">
            <ul>
                {cart.items.map((product) => (
                    <li key={product.id}>
                        <div className="mb-8 flex border-b">
                            <div className="relative w-16 h-16 md:w-32 md:h-32 sm:w-48 sm:h-48 rounded-md overflow-hidden">
                                <img
                                    src={product.images[0].url}
                                    alt={product.name}
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="relative flex flex-1 flex-col justify-between">
                                <div className="flex justify-between items-center pl-4">
                                    <div className="flex-1">
                                        <h2 className="text-[14px] md:text-[20px] font-bold w-[80%] md:w-full truncate">
                                            {product.name}
                                        </h2>
                                        <div className="text-[16px] font-bold">
                                            ${product.price}
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-x-3 md:w-[25%] xl:w-[40%]">
                                        <div
                                            className="w-5 h-5 md:w-7 md:h-7 rounded-full"
                                            style={{ background: product.color.value }}
                                        />
                                        <div className="font-bold">
                                            {product.size.value}
                                        </div>
                                    </div>
                                    <div className="pl-4 md:pl-0 md:pr-4">
                                        <IconButton
                                            onClick={() => handleRemove(product)}
                                            icon={<Trash2Icon size={18} />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
 
export default CartItem