"use client"
import { NikeIcon } from "@/public/svgs/nike-icon"
import { motion } from "framer-motion"

const CommonLoader = () => {
    const transitionVariants = {
        initial: {
            x: "100%",
            width: "100%",
        },
        animate: {
            x: "0%",
            width: "0%",
        },
        exit: {
            x: ["0%", "-100%"],
            width: ["0%", "-100%"],
        }
    }

    return (
        <div className="flex w-full">
            <motion.div
                className="fixed top-0 bottom-0 right-full w-[50%] h-screen bg-black z-[99998]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2, duration: 3.6, ease: "easeInOut" }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-[25%] h-screen bg-[#020202] z-[99998]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2, duration: 4.6, ease: "easeInOut" }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-[25%] h-screen bg-black z-[99997]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2, duration: 5.6, ease: "easeInOut" }}
            />
        </div>
    )
}
 
export default CommonLoader;