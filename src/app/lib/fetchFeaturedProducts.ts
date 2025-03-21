import { product } from "../interfaces/product";
import {slugify} from "@/lib/utils";

const fetchFeaturedProducts = async () => {
	try {
		const response = await fetch('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products/featuredProducts', { cache: 'force-cache' });
		const data = await response.json();

		// Log the data to see what's being returned


		// Validate that each product has a slug
		const validProducts = data.map((item: any) => {
			if (!item.slug) {
				return {
					...item,
					slug: slugify(item.name)
				};
			}
			return item;
		});

		return validProducts as product[];
	} catch (error) {
		console.error("Error fetching featured products:", error);
		return [];
	}
}

export default fetchFeaturedProducts
