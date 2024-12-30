import FeaturedProductsClient from "./FeaturedProductsClient";
import fetchFeaturedProducts from "../lib/fetchFeaturedProducts";

export const revalidate = 3600;

const FeaturedProductsServer = async () => {
  const products = await fetchFeaturedProducts();
  return (
    <FeaturedProductsClient products={products} heading="Featured Products" />
  )
}

export default FeaturedProductsServer;
