import getProducts from "@/actions/get-products"
import CommonProductsCard from "@/components/common/common-product-card"

const MainProducts = async () => {
    const products = await getProducts({ isFeatured: true, categoryId: process.env.NEXT_PUBLIC_URL_OUTERWEAR_DEPARTMENT })

    return (
        <div className="flex-1 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {products.map((product) => (
                    <CommonProductsCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}
 
export default MainProducts