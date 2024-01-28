"use client"
import { useEffect, useState } from "react"
import useCart from "@/hooks/use-cart"
import { ShoppingBagIcon } from "lucide-react"

const CommonCartIndicator = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const cart = useCart()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <div className="relative">
            <ShoppingBagIcon className="w-6 h-6 text-white dark:text-black" />
            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 flex justify-center items-center w-[20px] h-[20px] md:w-[25px] md:h-[25px] rounded-full bg-red-500 text-xs md:text-sm font-bold text-white">
                {cart.items.length}
            </div>
        </div>
    )
}
 
export default CommonCartIndicator