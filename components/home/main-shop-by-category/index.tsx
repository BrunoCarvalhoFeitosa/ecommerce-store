import getCategories from "@/actions/get-categories"
import { Button } from "@/components/ui/button"

const MainShopByCategory = async () => {
    const categories = await getCategories()

    return (
        <div className="-mt-[50px] -ml-[100px] mb-16 flex items-center gap-x-5">
            <h2 className="text-[120px] font-bold leading-none text-[#EEE]">
                Outerwears
            </h2>
            <Button className="bg-black text-white">
                Shop now
            </Button>
            {/* <div>
                <h2 className="text-2xl font-bold">
                    Shop by category
                </h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>
                            {category.name}
                        </li>
                    ))}
                </ul>
            </div> */}
        </div>
    )
}
 
export default MainShopByCategory