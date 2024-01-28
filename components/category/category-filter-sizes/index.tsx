"use client"
import { useRouter, useSearchParams } from "next/navigation"
import qs from "query-string"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Size } from "@/types"
import { cn } from "@/lib/utils"

interface CategoryFilterSizesProps {
    valueKey: string
    name: string
    data: {
        sizes: Size[]
    }
}

const CategoryFilterSizes: React.FC<CategoryFilterSizesProps> = ({ valueKey, name, data }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const selectedValue = searchParams?.get(valueKey)

    const onClick = (id: string) => {
        let current

        if (searchParams) {
            current = qs.parse(searchParams.toString())
        }

        const query = {
            ...current,
            [valueKey]: id

        }

        if (current && current[valueKey] === id) {
            query[valueKey] = null
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true })

        router.push(url)
    }

    return (
        <div className="mb-5">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        {name}
                    </AccordionTrigger>
                    <AccordionContent>
                    <div className="flex flex-wrap items-center gap-x-3">
                        {data.sizes.map((size) => (
                            <div
                                key={size.id}
                                className={cn(
                                    "mb-2 flex justify-center items-center w-fit min-w-[40px] p-1 border border-black",
                                    selectedValue === size.id ? "bg-black text-white": ""
                                
                                )}
                            >
                                <button onClick={() => onClick(size.id)}>
                                    {size.name}
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
 
export default CategoryFilterSizes