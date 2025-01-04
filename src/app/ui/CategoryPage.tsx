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
  let maxPrice = 0;
  let minPrice = Infinity;

  for (let prdt of products) {
    const price = parseInt(prdt.price)

    if (price > maxPrice) maxPrice = price
    if (price < minPrice) minPrice = price;

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

  return (<CategoryPageClient products={products} bannerId={bannerId} poles={poles} currentRatings={currentRatings} maxPrice={maxPrice} minPrice={minPrice} />)
}
