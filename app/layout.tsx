import type { Metadata } from "next"
import { Titillium_Web } from "next/font/google"
import ToastProvider from "@/providers/toast-provider"
import ModalProvider from "@/providers/modal-provider"
import CommonHeader from "@/components/common/common-header"
import CommonLoader from "@/components/common/common-loader"
import CommonScrollCart from "@/components/common/common-scroll-cart"
import CommonScrollTop from "@/components/common/common-scroll-top"
import CommonAdvantages from "@/components/common/common-advantages"
import "./globals.css"

const font = Titillium_Web({
    subsets: ["latin"],
    weight: ["200", "300", "400", "700", "900"]
})

export const metadata: Metadata = {
  title: "Nike.com, Just Do It",
  description: "Nike.com, buy shoes, socks, shorts, pants, leggings, shirt, t-shirts and more",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico"
    },
    authors: {
        name: "Bruno Carvalho Feitosa",
        url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
    }
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <div className="flex flex-col xl:flex-row">
                    <CommonHeader />
                    {children}
                </div>
                <ModalProvider />
                <ToastProvider />
                <CommonLoader />
                <CommonAdvantages />
                <CommonScrollTop />
                <CommonScrollCart />
            </body>
        </html>
    )
}
