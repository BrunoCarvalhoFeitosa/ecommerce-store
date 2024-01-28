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


interface CategoryProductsMobileProps {
    products: Product[]
    categories: Category[]
    sizes: {
        sizes: Size[]
    }
    colors: {
        colors: Color[]
    }
}

const CategoryProductsMobile: React.FC<CategoryProductsMobileProps> = ({ products, categories, sizes, colors }) => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const [gridColumns, setGridColumns] = useState<string>("grid-cols-1")
    const { onOpen, onClose, isOpen } = useFilter()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <div>
            <div className="w-full flex justify-between items-center p-5 border">
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
                <div className="flex items-center">
                    <Button
                        className="p-0"
                        onClick={() => setGridColumns("grid-cols-1")}
                    >
                        <div className="flex gap-x-1">
                            <div className="w-[10px] h-[10px] bg-black" />
                        </div>
                    </Button>
                    <Button onClick={() => setGridColumns("grid-cols-2")}>
                        <div className="flex gap-x-1">
                            <div className="w-[10px] h-[10px] bg-black" />
                            <div className="w-[10px] h-[10px] bg-black" />
                        </div>
                    </Button>
                </div>
            </div>
            {isOpen && (
                <div className={`fixed top-0 left-0 flex flex-col space-y-7 w-[100dvw] h-[100dvh] p-3 width-animation overflow-y-auto z-[99998] bg-white`}>
                    <div className="flex justify-end">
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
            <div className="w-full">
                <div className="flex-1 bg-gray-50">
                    <div className={cn(
                        "grid",
                        gridColumns
                    )}>
                        {products.reverse().map((item) => (
                            <CommonProductsCard
                                key={item.id}
                                product={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryProductsMobile