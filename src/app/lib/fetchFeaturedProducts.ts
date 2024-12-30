import { product } from "../interfaces/product";

const fetchFeaturedProducts = async () => {
	return await fetch('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products/featuredProducts', { cache: 'force-cache' }).then(res => res.json()) as product[];
}

export default fetchFeaturedProducts
