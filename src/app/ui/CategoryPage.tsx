import CategoryBanner from "./CategoryBanner";
import ProductFullRow from "./ProductFullRow";
import fetchProducts from "../lib/fetchProducts";
import fetchCategories from "../lib/fetchCategories";

export const revalidate = 3600;

export default async function CategoryPage({ category }: { category: string }) {
  const response = await fetchProducts();
  const products = response.filter(prdt => prdt.category.name === category)
  const bannerId = (await fetchCategories()).filter(categor => categor.name == category)[0].billboardId;

  return (
    <div className="flex flex-col items-center w-full">
      <CategoryBanner bannerId={bannerId} />
      <ProductFullRow products={products} />
    </div>
  )
}
