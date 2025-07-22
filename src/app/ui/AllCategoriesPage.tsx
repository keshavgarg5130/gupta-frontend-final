import LeftSideLinkComponent from "./LeftSideLinkComponent";
import CategoryPamphlet from "./CategoryPamphlet";
import categoriesData from "@/lib/categoryData";
import category from "../interfaces/category";
import billboard from "../interfaces/billboard";

const AllCategoriesPage = ({ categories, billboards }: { categories: category[], billboards: billboard[] }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 p-4 lg:p-10">
            {/* Fixed left sidebar - hidden on mobile, shown on desktop */}
            <div className="hidden lg:block sticky top-[109px] h-[calc(100vh-109px)]">
                <LeftSideLinkComponent data={categoriesData} heading="Categories" />
            </div>

            {/* Mobile filter button - shown only on mobile */}
            <div className="lg:hidden mb-4 w-full">
                <button className="w-full py-2 px-4 bg-themeBlue text-white rounded-md">
                    Browse Categories
                </button>
            </div>

            {/* Scrollable content - 2 columns on mobile, full width on desktop */}
            <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 p-2 lg:p-10">
                    {categories.map(category => (
                        <CategoryPamphlet
                            key={category.id}
                            categoryName={category.name}
                            billboards={billboards}
                            billboardId={category.billboardId}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllCategoriesPage;