"use client"
import { useEffect, useState } from "react"
import useFilter from "@/hooks/use-filter"
import { cn } from "@/lib/utils"
import { Category, Color, Product, Size } from "@/types"
import { Button } from "@/components/ui/button"
import CommonProductsCard from "@/components/common/common-product-card"
import CategoryFilterDepartments from "@/components/category/category-filter-departments"
import CategoryFilterSizes from "@/components/category/category-filter-sizes"
import CategoryFilterColors from "@/components/category/category-filter-colors"
import { MinusIcon, PlusIcon, SlidersHorizontalIcon, XIcon } from "lucide-react"
import useDeviceDetection from "@/hooks/useDeviceDetection"

interface CategoryProductsDesktopProps {
    products: Product[]
    categories: Category[]
    sizes: {
        sizes: Size[]
    }
    colors: {
        colors: Color[]
    }
}

const CategoryProductsDesktop: React.FC<CategoryProductsDesktopProps> = ({ categories, sizes, colors, products }) => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const [gridColumns, setGridColumns] = useState<string>("grid-cols-5")
    const device = useDeviceDetection()
    let { onOpen, onClose, isOpen } = useFilter()

    useEffect(() => {
        setIsMounted(true)

        if (device !== "Mobile") {
            onOpen()
        } else {
            onClose()
        }
    }, [device])

    if (!isMounted) {
        return null
    }
    
    return (
        <div className="w-full">
            <div className="p-4 w-full flex justify-between items-center border">
                <div>
                    {isOpen ? (
                        <Button
                            onClick={onClose}
                            className="flex items-center bg-black hover:bg-black/85 text-white"
                        >
                            <MinusIcon className="w-4 h-4" />
                            <div className="text-lg font-normal">
                                Filter
                            </div>
                           <SlidersHorizontalIcon className="ml-4 w-5 h-5" />
                        </Button>
                    ) : (
                        <Button
                            onClick={onOpen}
                            className="flex items-center bg-black hover:bg-black/85 text-white"
                        >
                            <PlusIcon className="w-4 h-4" />
                            <div className="text-lg font-normal">
                                Filter
                            </div>
                            <SlidersHorizontalIcon className="ml-4 w-5 h-5" />
                        </Button>
                    )}
                </div>
                <div className="flex items-center gap-x-6">
                    <Button
                        className="p-0"
                        onClick={() => setGridColumns("grid-cols-4")}
                    >
                        <div className="grid grid-cols-2 gap-1">
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                        </div>
                    </Button>
                    <Button
                        className="p-0"
                        onClick={() => setGridColumns("grid-cols-5")}
                    >
                        <div className="grid grid-cols-3 gap-1">
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                        </div>
                    </Button>
                    <Button
                        className="p-0"
                        onClick={() => setGridColumns("grid-cols-6")}
                    >
                        <div className="grid grid-cols-3 gap-1">
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                        </div>
                    </Button>
                </div>
            </div>
            <div className="flex w-full">
                {isOpen && (
                    <div className="sticky top-0 flex flex-col space-y-7 md:w-[270px] xl:w-[400px] py-3 px-6 xl:h-[75vh] width-animation overflow-y-auto">
                        <div className="flex">
                            <Button className="p-0" onClick={onClose}>
                                <XIcon className="w-5 h-5" />
                            </Button>
                        </div>
                        <div>
                            <div className="mb-5">
                                <h3 className="text-lg font-bold">
                                    Filter
                                </h3>
                            </div>
                            <CategoryFilterDepartments
                                name="Departments"
                                categories={categories}
                            />
                            <CategoryFilterSizes
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <CategoryFilterColors
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </div>
                )}
                <div className="flex-1">
                    {products.length ? (
                        <div className={cn(
                            "grid bg-gray-50 xl:min-h-[75dvh] transition-all duration-500",
                            gridColumns
                        )}>
                            {products.reverse().map((item) => (
                                <CommonProductsCard
                                    key={item.id}
                                    product={item}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-[76vh] bg-gray-100">
                            No products found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CategoryProductsDesktop