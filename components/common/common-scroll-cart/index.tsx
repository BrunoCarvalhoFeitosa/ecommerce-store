"use client"
import { useRouter } from "next/navigation"
import { useScroll } from "@/hooks/use-scroll"
import { Button } from "@/components/ui/button"
import CommonCartIndicator from "@/components/common/common-cart-indicator"

const CommonScrollCart = () => {
    const router = useRouter()
    const scrolled = useScroll()

    return (
        <div className="hidden md:block fixed bottom-24 left-4 md:bottom-24 md:left-8 z-[9]">
            <Button
                onClick={() => router.push("/cart")}
                className={`${scrolled ? "flex" : "hidden"} relative w-[60px] h-[60px] md:p-4 rounded-full shadow-sm shadow-zinc-800 bg-black dark:bg-white hover:bg-black/95 transition cursor-pointer`}
            >
                <CommonCartIndicator />
            </Button>
        </div>
    )
}
 
export default CommonScrollCart