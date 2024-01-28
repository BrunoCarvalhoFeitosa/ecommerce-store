"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import CountUp from "react-countup"
import { Category, Product } from "@/types"
import { Button } from "@/components/ui/button"
import { Undo2Icon } from "lucide-react"

interface CategoryBreadcrumbProps {
    category: Category
    products: Product[]
}

const CategoryBreadcrumb: React.FC<CategoryBreadcrumbProps> = ({ category, products }) => {
    const router = useRouter()

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
                            {category?.name}
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className="text-[30px] 2xl:text-[60px] font-bold leading-none">
                    {category.name}
                </h2>
                <div className="ml-2 flex items-center gap-x-1">
                    <p className="font-semibold">
                        <CountUp
                            start={0}
                            end={products.length}
                            duration={2}
                            enableScrollSpy
                        />
                    </p>
                    <p className="font-semibold">
                        Products
                    </p>
                </div>
            </div>
        </div>
    )
}
 
export default CategoryBreadcrumb