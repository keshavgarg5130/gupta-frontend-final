import fetchCategories from "../lib/fetchCategories";
import CategoryPamphlet from "../ui/CategoryPamphlet";

const Page = async () => {

  const categories = await fetchCategories();

  return (
    <div className="flex flex-wrap gap-5 p-10 items-center justify-center">
      {categories.map(category => {
        return <CategoryPamphlet key={category.id} categoryName={category.name} billboardId={category.billboardId} />
      })}
    </div>
  )
}

export default Page;
