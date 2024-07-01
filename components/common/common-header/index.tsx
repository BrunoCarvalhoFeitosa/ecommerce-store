"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import useSidebar from "@/hooks/use-sidebar"
import CommonCartIndicator from "@/components/common/common-cart-indicator"
import IconButton from "@/components/ui/icon-button"
import { Button } from "@/components/ui/button"
import { NikeIcon } from "@/public/svgs/nike-icon"
import { HeartIcon, MenuIcon, User2Icon, XIcon } from "lucide-react"

const CommonHeader = () => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useSidebar()

    const handleRedirectToOuterwear = () => {
        onClose()
        router.push(`/categories/${process.env.NEXT_PUBLIC_URL_OUTERWEAR_DEPARTMENT}`)
    }
    
    const handleRedirectToPants = () => {
        onClose()
        router.push(`/categories/${process.env.NEXT_PUBLIC_URL_PANTS_DEPARTMENT}`)
    }
    
    const handleRedirectToShoes = () => {
        onClose()
        router.push(`/categories/${process.env.NEXT_PUBLIC_URL_SHOES_DEPARTMENT}`)
    }

    return (
        <div className={`${isOpen ? "sticky xl:fixed top-0 z-[99998]" : "relative top-0 z-[99998]"}`}>
            <div className="relative w-full z-[99] xl:z-[9999]">
                <header className="xl:py-6 px-8 md:px-12 xl:px-0 flex xl:flex-col justify-between w-full xl:w-32 xl:h-[100dvh] bg-black z-50">
                    <div className="flex justify-center">
                        <Link href="/" className="flex justify-center items-center">
                            <NikeIcon
                                width="75px"
                                height="75px"
                                fill="#FFF"
                            />
                        </Link>
                    </div>
                    <div className="flex xl:flex-col gap-x-3 items-center">
                        <div>
                            <Button className="p-0">
                                <User2Icon className="w-7 h-7 text-white" />
                            </Button>
                        </div>
                        <div>
                            <Button className="p-0">
                                <HeartIcon className="w-7 h-7 text-white" />
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={() => router.push("/cart")}
                                className="p-0"
                            >
                                <CommonCartIndicator />
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={onOpen}
                                className="p-0"
                            >
                                <MenuIcon className="w-7 h-7 text-white" />
                            </Button>
                        </div>
                    </div>
                </header>
            </div>
            <div>
                <div className={`fixed top-0 ${isOpen ? "right-0" : "right-[-102%]"} w-[100dvw] h-[100dvh] bg-black/90 transition-all duration-300 z-[999]`} />
                <div className={`fixed top-0 ${isOpen ? "xl:left-32 right-0" : "right-[-100%] xl:left-[-100%]"} p-3 pl-8 w-[75%] xl:w-[500px] h-[100dvh] bg-white transition-all duration-300 z-[9999]`}>
                    <div className="flex justify-end">
                        <IconButton
                            onClick={onClose}
                            icon={<XIcon size={20} />}
                        />
                    </div>
                    <div className="flex flex-col gap-y-8 h-full">
                        <div>
                            <h3 className="text-[24px] font-bold">
                                Departments
                            </h3>
                            <ul className="mt-5 flex flex-col gap-y-2">
                                <li
                                    onClick={() => handleRedirectToOuterwear()}
                                    className="group relative text-[16px] cursor-pointer"
                                >
                                    Outerwear and Jackets
                                    <div className="w-[0px] group-hover:w-[50px] h-[2px] bg-black transition-all duration-500" />
                                </li>
                                <li
                                    onClick={() => handleRedirectToPants()}
                                    className="group relative text-[16px] cursor-pointer"
                                >
                                    Pants
                                <div className="w-[0px] group-hover:w-[50px] h-[2px] bg-black transition-all duration-500" />
    
                                </li>
                                <li
                                    onClick={() => handleRedirectToShoes()}
                                    className="group relative text-[16px] cursor-pointer"
                                >
                                    Shoes
                                    <div className="w-[0px] group-hover:w-[50px] h-[2px] bg-black transition-all duration-500" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] font-bold">
                                Institutional
                            </h3>
                            <ul className="mt-5 flex flex-col gap-y-2">
                                <li className="text-[16px] cursor-pointer">
                                    News
                                </li>
                                <li className="text-[16px] cursor-pointer">
                                    Careers
                                </li>
                                <li className="text-[16px] cursor-pointer">
                                    Investors
                                </li>
                                <li className="text-[16px] cursor-pointer">
                                    Purpose
                                </li>
                                <li className="text-[16px] cursor-pointer">
                                    Sustainability
                                </li>
                                <li className="text-[16px] cursor-pointer">
                                    Guides
                                </li>
                                <li className="text-[16px] cursor-pointer">
                                    Terms of Sale
                                </li>
                                <li className="text-[16px] cursor-pointer">
                                    Terms of Use
                                </li>
                                <li className="text-[16px] cursor-pointer">
                                    Privacy Policy
                                </li>
                                <li className="text-[16px] cursor-pointer">
                                    Nike Club
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default CommonHeader