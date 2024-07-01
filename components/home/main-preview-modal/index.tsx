"use client"
import Modal from "@/components/ui/modal"
import usePreviewModal from "@/hooks/use-preview-modal"
import CommonPreviewGallery from "@/components/common/common-preview-gallery"
import MainPreviewInfo from "@/components/home/main-preview-info"

const MainPreviewModal = () => {
    const previewModal = usePreviewModal()
    const product = usePreviewModal((state) => state.data)

    if (!product) {
        return null
    }

    return (
        <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
            <div className="flex flex-col xl:flex-row w-full h-full overflow-hidden">
                <CommonPreviewGallery category={product.category.name} images={product.images} />
                <MainPreviewInfo product={product} />
            </div>
        </Modal>
    )
}
 
export default MainPreviewModal