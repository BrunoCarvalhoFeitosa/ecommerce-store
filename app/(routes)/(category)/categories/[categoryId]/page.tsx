//@ts-nocheck
import getCategory from "@/actions/get-category"
import getColors from "@/actions/get-colors"
import getProducts from "@/actions/get-products"
import getSizes from "@/actions/get-sizes"
import CategoryBreadcrumb from "@/components/category/category-breadcrumb"
import CategoryProductsDesktop from "@/components/category/category-products-desktop"
import CategoryProductsMobile from "@/components/category/category-products-mobile"
import getCategories from "@/actions/get-categories"

export const revalidate = 0

interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        colorId: string
        sizeId: string
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {
    const products = await getProducts({ 
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    })
    const categories = await getCategories()
    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)
    
    return (
        <div className="w-full">
            <div className="flex flex-col 2xl:flex-row w-full">
                <div className="w-full">
                    <CategoryBreadcrumb
                        category={category}
                        products={products}
                    />
                    <div className="hidden 2xl:flex w-full">
                        <CategoryProductsDesktop
                            products={products}
                            categories={categories}
                            sizes={sizes}
                            colors={colors}
                        />
                    </div>
                    <div className="sm:block 2xl:hidden">
                        <CategoryProductsMobile
                            products={products}
                            categories={categories}
                            sizes={sizes}
                            colors={colors}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage