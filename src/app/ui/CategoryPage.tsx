import fetchProducts from "../lib/fetchProducts";
import fetchCategories from "../lib/fetchCategories";
import CategoryPageClient from './CategoryPageClient'
import poles from "../interfaces/poles";
import currentRatingInterface from "../interfaces/currentRating";

export const revalidate = 3600;

export default async function CategoryPage({ category }: { category: string }) {
  const response = await fetchProducts();
  const products = response.filter(prdt => prdt.category.name === category)
  let poles: poles[] = [];
  let polesIds: string[] = [];
  let currentRatings: currentRatingInterface[] = [];
  let currentRatingsIds: string[] = [];

  for (let prdt of products) {
    if (polesIds.indexOf(prdt.polesId) == -1) {
      polesIds.push(prdt.polesId)
      poles.push(prdt.poles)
    }
    if (currentRatingsIds.indexOf(prdt.currentRatingId) == -1) {
      currentRatingsIds.push(prdt.currentRatingId)
      currentRatings.push(prdt.currentRating)
    }
  }

  const bannerId = (await fetchCategories()).filter(categor => categor.name == category)[0].billboardId;

  return (<CategoryPageClient products={products} bannerId={bannerId} poles={poles} currentRatings={currentRatings} />)
}
