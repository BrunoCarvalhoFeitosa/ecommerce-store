"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const CommonNewsletter = () => {
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
        <section className="px-4 2xl:pl-28 pb-12">
            <div className="flex flex-col 2xl:flex-row 2xl:items-start">
                <div className="w-full 2xl:w-[40%]">
                    <h2 className="mb-6 text-3xl 2xl:text-6xl font-bold leading-none">
                        Newsletter
                    </h2>
                    <h3 className="text-lg font-bold">
                        Get 10% off in first purchase.
                    </h3>
                    <p className="text-md w-full md:w-3/4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, beatae voluptatem! 
                        Possimus vel, laboriosam eaque cum laborum nihil temporibus qui molestiae itaque fuga accusantium 
                        aut, ex voluptatibus, voluptate libero ad.
                    </p>
                </div>
                <div className="mt-6 2xl:mt-0 flex-none 2xl:flex-1">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col md:flex-row gap-x-3 items-end"
                        >
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem className="flex-1 w-full">
                                        <FormLabel>
                                            Complete name
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Complete name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex-1 w-full">
                                        <FormLabel>
                                            E-mail
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="E-mail" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="mt-4 md:mt-0 bg-black hover:bg-black/80 text-white transition-all duration-300"
                            >
                                Subscribe newsletter
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}
 
export default CommonNewsletter