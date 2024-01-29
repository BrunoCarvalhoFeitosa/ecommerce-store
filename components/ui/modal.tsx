"use client"
import { Fragment } from "react"
import IconButton from "@/components/ui/icon-button"
import { XIcon } from "lucide-react"

interface ModalProps {
    open: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    return (
        <Fragment>
            {open && (
                <div>
                    <div className="fixed top-0 left-0 w-full h-[100dvh] bg-white z-[999]">
                        <div className="relative w-[100dvw] h-[100dvh]">
                            <div className="absolute top-2 right-6 z-10">
                                <IconButton onClick={onClose} icon={<XIcon size={15} />} />
                            </div>
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default Modal