"use client"
import { Category } from "@/types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

interface CategoryFilterDepartmentsProps {
    name: string
    categories: Category[]
}

const CategoryFilterDepartments: React.FC<CategoryFilterDepartmentsProps> = ({ name, categories }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const selectedValue = searchParams?.get("category")

    return (
        <div className="mb-5">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        {name}
                    </AccordionTrigger>
                    <AccordionContent>
                    <div className="flex flex-wrap items-center gap-x-3">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className={cn(
                                    "mb-2 w-fit p-1 border border-black",
                                    selectedValue === category.name ? "bg-black text-white" : ""
                                )}
                            >
                                <button onClick={() => router.push(`/categories/${category.id}?category=${category.name}`)}>
                                    {category.name}
                                </button>
                            </div>
                        ))}
                    </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
 
export default CategoryFilterDepartments