"use client"
import usePreviewModal from "@/hooks/use-preview-modal"
import Image from "next/image"
import IconButton from "@/components/ui/icon-button"
import { Product } from "@/types"
import { ExpandIcon, Link2Icon, ShoppingBagIcon } from "lucide-react"
import { useRouter } from "next/navigation"

interface MainShelfCardProps {
    product: Product
}

const MainShelfCard: React.FC<MainShelfCardProps> = ({ product }) => {
    const router = useRouter()
    const previewModal = usePreviewModal()

    const redirect = () => {
        router.push(`/products/${product.id}`)
    }

    const onPreview = (product: Product) => {
        previewModal.onOpen(product)
    }  

    return (
        <div className="flex justify-between items-center w-full">
            <div className="w-[60%]">
                <div className="text-xs text-muted-foreground">
                    {product.category.name}
                </div>
                <div className="mt-4 w-5/6 2xl:w-full 2xl:truncate">
                    {product.name}
                </div>
                <div className="flex items-center">
                    <span className="text-xs">
                        $
                    </span>
                    <span className="text-xl font-bold">
                        {product.price}
                    </span>
                </div>
            </div>
            <div className="flex justify-end flex-1">
                <div className="group relative overflow-hidden">
                    <div>
                        <Image
                            width="200"
                            height="200"
                            src={product.images[0].url}
                            alt={product.name}
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute top-0 left-0 p-2 w-full h-full bg-black/85 opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                        <div className="flex justify-center items-end gap-x-2 w-full h-full">
                            <IconButton
                                onClick={() => onPreview(product)}
                                icon={<ExpandIcon size={16} className="text-black" />}
                            />
                            <IconButton
                                onClick={redirect}
                                icon={<Link2Icon size={16} className="text-black" />}
                            />
                            <IconButton
                                onClick={() => {}}
                                icon={<ShoppingBagIcon size={16} className="text-black" />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default MainShelfCard