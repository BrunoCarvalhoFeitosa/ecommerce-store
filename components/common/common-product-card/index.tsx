"use client"
import { MouseEventHandler } from "react"
import { useRouter } from "next/navigation"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"
import Image from "next/image"
import IconButton from "@/components/ui/icon-button"
import { Product } from "@/types"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { ExpandIcon, Link2Icon, ShoppingBagIcon } from "lucide-react"

interface CommonProductsCardProps {
    product: Product
}

const CommonProductsCard: React.FC<CommonProductsCardProps> = ({ product }) => {
    const router = useRouter()
    const previewModal = usePreviewModal()
    const cart = useCart()

    const redirect = () => {
        router.push(`/products/${product.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        previewModal.onOpen(product)
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        cart.addItem(product)
    }

    return (
        <motion.div
            variants={fadeIn("up", 4.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
        >
            <div>
                <div className="group relative w-full overflow-hidden">
                    <div>
                        <Image
                            width="280"
                            height="280"
                            src={product.images[0].url}
                            alt={product.name}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className="absolute top-0 left-0 p-4 w-full h-full bg-black/85 opacity-0 group-hover:opacity-100 transition duration-500 z-[1]">
                        <div className="flex justify-end items-end gap-x-2 w-full h-full">
                            <IconButton
                                onClick={onPreview}
                                icon={<ExpandIcon size={20} />}
                            />
                            <IconButton
                                onClick={redirect}
                                icon={<Link2Icon size={20} />}
                            />
                            <IconButton
                                onClick={onAddToCart}
                                icon={<ShoppingBagIcon size={20} />}
                            /> 
                        </div>
                    </div>
                </div>
                <div className="py-8 px-6 flex items-start justify-between gap-x-3">
                    <div className="flex flex-1 flex-col truncate">
                        <h2 className="text-md font-bold uppercase truncate">
                            {product.name}
                        </h2>
                        <h3 className="text-sm text-gray-300">
                            {product.category.name}
                        </h3>
                    </div>
                    <div className="flex justify-end items-center w-[60px]">
                        <div className="text-xs">
                            $
                        </div>
                        <div className="text-xl font-bold">
                            {product.price}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
 
export default CommonProductsCard