"use client"
import { Fragment, useEffect, useState } from "react"
import PreviewModal from "@/components/home/main-preview-modal"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <Fragment>
            <PreviewModal />
        </Fragment>
    )
}
 
export default ModalProvider