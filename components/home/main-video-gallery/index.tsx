"use client"
import { fadeIn } from "@/variants"
import { motion } from "framer-motion"

const MainVideoGallery = () => {
    return (
        <section className="w-full 2xl:h-[72dvh] 2xl:overflow-hidden">
            <div className="flex flex-col 2xl:flex-row items-start">
                <motion.div
                    className="w-full 2xl:w-[35%]"
                    variants={fadeIn("down", 3.8)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <video width="100%" height="300" loop muted autoPlay>
                        <source src="/videos/video-01.mp4" type="video/mp4" />
                    </video>
                </motion.div>
                <div className="flex flex-1 items-center">
                    <div className="flex w-full 2xl:w-[60%]">
                        <motion.div
                            className="flex-1"
                            variants={fadeIn("right", 3.8)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            <video width="100%" height="100" loop muted autoPlay>
                                <source src="/videos/video-02.mp4" type="video/mp4" />
                            </video>
                            <video width="100%" height="300" loop muted autoPlay>
                                <source src="/videos/video-03.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                        <motion.div
                            className="flex-1"
                            variants={fadeIn("right", 3.8)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >

                            <video width="100%" height="300" loop muted autoPlay>
                                <source src="/videos/video-04.mp4" type="video/mp4" />

                            </video>
                            <video width="100%" height="300" loop muted autoPlay>
                                <source src="/videos/video-05.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                    </div>
                    <div className="flex w-full 2xl:w-[60%]">
                        <motion.div
                            className="flex-1"
                            variants={fadeIn("left", 3.8)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >

                            <video width="100%" height="100" loop muted autoPlay>
                                <source src="/videos/video-06.mp4" type="video/mp4" />
                            </video>
                            <video width="100%" height="300" loop muted autoPlay>
                                <source src="/videos/video-07.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                        <motion.div
                            className="flex-1"
                            variants={fadeIn("left", 3.8)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            <video width="100%" height="300" loop muted autoPlay>
                                <source src="/videos/video-08.mp4" type="video/mp4" />

                            </video>
                            <video width="100%" height="300" loop muted autoPlay>
                                <source src="/videos/video-09.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default MainVideoGallery