"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
  
const CommonFaq = () => {
    return (
        <section className="w-full">
            <h3 className="text-lg font-bold">
                Questions
            </h3>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Do the products have a guarantee?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, both for defect and for regret, the guarantee is 15 days.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Can I pay in installments for my purchases?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, in up to 6 interest-free for Visa, Mastercard, Diners Club and Amex.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        How are the pieces made?
                    </AccordionTrigger>
                    <AccordionContent>
                        They are manufactured in-house, our factory values ​​quality and durability.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}

export default CommonFaq