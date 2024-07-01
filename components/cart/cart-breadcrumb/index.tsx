"use client"
import Link from "next/link"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Undo2Icon } from "lucide-react"

const CartBreadcrumb = () => {
    const router = useRouter()
    const cart = useCart()

    const handleRemoveAll = () => {
        cart.removeAll()
    }

    return (
        <div className="p-5 w-full">
            <div className="flex items-center gap-x-6">
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
                <div className="">
                    <ul className="flex items-center gap-x-1">
                        <li className="text-sm">
                            <Link href="/">
                                Home |
                            </Link>
                        </li>
                        <li className="text-sm font-bold underline">
                            Shopping Cart
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="text-[30px] xl:text-[60px] font-bold leading-none">
                    Shopping Cart
                </h1>
                {cart.items.length ? (
                    <div className="mt-2 ml-3 flex items-center">
                        <p className="font-bold">
                            {cart.items.length} items in cart.
                        </p>
                        <Button
                            onClick={handleRemoveAll}
                            className="underline"
                        >
                            Remove all
                        </Button>
                    </div>
                ) : (
                    <div className="mt-2 ml-3">
                        Your cart is empty.
                    </div>
                )}
            </div>
        </div>
    )
}
 
export default CartBreadcrumb