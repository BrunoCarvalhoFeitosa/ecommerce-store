import dynamic from "next/dynamic"

const CartBreadcrumb = dynamic(() => import("@/components/cart/cart-breadcrumb"), {
    ssr: false,
})

const CartContent = dynamic(() => import("@/components/cart/cart-content"), {
    ssr: false,
})

const CartSuggestions = dynamic(() => import("@/components/cart/cart-suggestions"), {
    ssr: false,
})

const CartPage = () => {
    return (
        <div className="md:px-2 py-4 w-full">
            <CartBreadcrumb />
            <CartContent />
            <CartSuggestions />
        </div>
    )
}
 
export default CartPage