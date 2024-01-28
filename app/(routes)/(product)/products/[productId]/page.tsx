import getProduct from "@/actions/get-product"
import getProducts from "@/actions/get-products"
import CommonPreviewGallery from "@/components/common/common-preview-gallery"
import ProductInfo from "@/components/product/product-info"
import CommonTitle from "@/components/common/common-title"
import ProductShelf from "@/components/product/product-shelf"

export const revalidate = 0

interface ProductPageProps {
    params: {
        productId: string
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
    const product = await getProduct(params.productId)
    const suggestedProducts = await getProducts({ 
        categoryId: product?.category?.id
    })

    if (!product) {
        return null
    }

    return (
        <div>
            <div className="flex flex-col 2xl:flex-row">
                <div className="flex flex-col 2xl:flex-row w-full 2xl:w-[60%]">
                    <CommonPreviewGallery category={product.category.name} images={product.images} />
                </div>
                <div className="flex-1">
                    <ProductInfo product={product} />
                </div>
            </div>
            <div className="py-10 md:py-16 xl:pt-24 xl:pb-0 px-4 2xl:pl-28">
                <CommonTitle
                    title={`${product.category.name} similar suggestions`}
                    description="We found products similar to what you recently searched for, they are products with the same characteristics and the same quality. If you prefer, you can navigate to this product category and filter them according to your needs, to find the ideal product."
                    categoryName={product.category.name}
                    categoryId={product.category.id}
                />
                <ProductShelf items={suggestedProducts} />
            </div>
        </div>
    )
}
 
export default ProductPage