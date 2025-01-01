import fetchCategories from "../lib/fetchCategories";
import CategoryPamphlet from "../ui/CategoryPamphlet";
import categoriesData from "@/lib/categoryData";
import LeftSideLinkComponent from "../ui/LeftSideLinkComponent";

const Page = async () => {

  const categories = await fetchCategories();

  return (
    <div className="flex gap-5 p-10">
      <LeftSideLinkComponent data={categoriesData} />
      <div className="flex flex-wrap gap-5 p-10 items-center justify-center">
        {categories.map(category => {
          return <CategoryPamphlet key={category.id} categoryName={category.name} billboardId={category.billboardId} />
        })}
      </div>
    </div>
  )
}

export default Page;
