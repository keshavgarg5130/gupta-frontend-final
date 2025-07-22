import LeftSideLinkComponent from "./LeftSideLinkComponent";
import CategoryPamphlet from "./CategoryPamphlet";
import categoriesData from "@/lib/categoryData";
import category from "../interfaces/category";
import billboard from "../interfaces/billboard";

const AllCategoriesPage = ({ categories, billboards }: { categories: category[], billboards: billboard[] }) => {

    return (
        <div className="flex gap-5 p-10">
            {/* Fixed left sidebar */}
            <div className="sticky top-[109px] h-screen">
                <LeftSideLinkComponent data={categoriesData} heading="Categories" />
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-wrap gap-5 p-10 items-center justify-center">
                    {categories.map(category => {
                        return <CategoryPamphlet
                            key={category.id}
                            categoryName={category.name}
                            billboards={billboards}
                            billboardId={category.billboardId}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllCategoriesPage