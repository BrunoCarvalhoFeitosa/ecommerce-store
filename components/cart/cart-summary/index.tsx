"use client"
import axios from "axios"
import useCart from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import toast from "react-hot-toast"

const CartSummary = () => {
    const searchParams = useSearchParams()
    const items = useCart((state) => state.items)
    const removeAll = useCart((state) => state.removeAll)

    useEffect(() => {
        if (searchParams?.get("success")) {
            toast.success("Payment completed.")
            removeAll()
        }

        if (searchParams?.get("canceled")) {
            toast.error("Something went wrong.")
        }
    }, [searchParams, removeAll])

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id)
        })

        window.location = response.data.url
    }

    return (
        <div className="sticky top-4 w-full mt-12 xl:mt-0 xl:w-[40%] bg-gray-100 h-full p-8">
            <div>
                <h2 className="text-lg font-bold">
                    Order Summary
                </h2>
            </div>
            <div className="mt-6 pt-3 flex justify-between items-center border-t border-gray-200">
                <div className="text-base font-semibold">
                    Order total
                </div>
                <div>
                    ${totalPrice.toFixed(2)}
                </div>
            </div>
            <div className="mt-6">
                <Button
                    onClick={onCheckout}
                    className="w-full h-[60px] bg-black hover:bg-black/85 text-white transition"
                >
                    Checkout
                </Button>
            </div>
        </div>
    )
}
 
export default CartSummary