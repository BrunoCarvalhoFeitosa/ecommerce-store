"use client"
import { useRouter, useSearchParams } from "next/navigation"
import qs from "query-string"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Color } from "@/types"
import { CheckIcon } from "lucide-react"

interface CategoryFilterColorsProps {
    valueKey: string
    name: string
    data: {
        colors: Color[]
    }
}

const CategoryFilterColors: React.FC<CategoryFilterColorsProps> = ({ valueKey, name, data }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const selectedValue = searchParams?.get("colorId")

    const onClick = (id: string) => {
        let current

        if (searchParams) {
            current = qs.parse(searchParams?.toString())
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
                        {data.colors.map((color) => (
                            <div key={color.id}>
                                <button onClick={() => onClick(color.id)}>
                                    <div
                                        className="flex justify-center items-center w-7 h-7"
                                        style={{ background: color.value }}
                                    >
                                        {selectedValue && (
                                            <CheckIcon className="w-5 h-5 text-white" />
                                        )}
                                    </div>
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
 
export default CategoryFilterColors