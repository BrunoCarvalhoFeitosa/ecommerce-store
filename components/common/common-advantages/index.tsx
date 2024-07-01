"use client"
import { CuboidIcon, LockIcon, BarcodeIcon, TagIcon } from "lucide-react"

const CommonAdvantages = () => {
    return (
        <div className="py-16 xl:py-20 px-8 xl:px-0 xl:pl-60 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 content-center">
            <div>
                <div className="mb-2">
                    <CuboidIcon className="w-7 h-8" />
                </div>
                <p className="text-lg font-bold leading-none">
                    Shipping
                </p>
                <p className="text-md text-gray-400">
                    Shipping from anywhere.
                </p>
            </div>
            <div>
                <div className="mb-2">
                    <LockIcon className="w-7 h-8" />
                </div>
                <p className="text-lg font-bold leading-none">
                    Security
                </p>
                <p className="text-md text-gray-400">
                    End-to-end encryption.
                </p>
            </div>
            <div>
                <div className="mb-2">
                    <BarcodeIcon className="w-7 h-8" />
                </div>
                <p className="text-lg font-bold leading-none">
                    Verified purchase
                </p>
                <p className="text-md text-gray-400">
                    Safe and verified purchase.
                </p>
            </div>
            <div>
                <div className="mb-2">
                    <TagIcon className="w-7 h-8" />
                </div>
                <p className="text-lg font-bold leading-none">
                    Promotions
                </p>
                <p className="text-md text-gray-400">
                    Constant promotions on all clothings.
                </p>
            </div>
        </div>
    )
}
 
export default CommonAdvantages