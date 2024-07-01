"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import useCart from "@/hooks/use-cart"
import CartItem from "@/components/cart/cart-item"
import CartSummary from "@/components/cart/cart-summary"
import { Button } from "@/components/ui/button"

const CartContent = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const router = useRouter()
    const cart = useCart()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <div>
            {cart.items.length ? (
                <div className="mt-12 px-6 w-full xl:flex xl:items-start gap-x-12">
                    <CartItem />
                    <CartSummary />
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center gap-y-4 h-[15dvh]">
                    <div className="text-center">
                        <h3 className="text-lg font-bold">
                            Cart empty
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Go back store and choose products.
                        </p>
                    </div>
                    <Button
                        onClick={() => router.push("/")}
                        className="bg-black hover:bg-black/85 text-white transition"
                    >
                        Go back store
                    </Button>
                </div>
            )}
        </div>
    )
}
 
export default CartContent