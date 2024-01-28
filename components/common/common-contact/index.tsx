"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NikeIcon } from "@/public/svgs/nike-icon"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"
import CommonAdvantages from "../common-advantages"

const formSchema = z.object({
    username: z.string()
        .min(2, "Complete name is required.")
        .regex(/^[A-Za-z]+$/i, "Only letters are allowed."),
    email: z.string()
        .min(1, "Email is required.")
        .email({message: "Must be a valid email."})
})

const CommonContact = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          email: "",
        },
    })
     
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <footer className="bg-black">
            <div className="flex">
                <div className="relative w-[190px] md:w-[400px] h-[250px] bg-violet-700">
                    <div className="absolute -right-12">
                        <NikeIcon
                            width="120px"
                            height="120px"
                            fill="#fff"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}
 
export default CommonContact