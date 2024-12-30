import { product } from "../interfaces/product";

const fetchCategoryProducts = async (categoryId: string) => {
	return await fetch(
		'https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products?categoryId=' + categoryId,
		{ next: { revalidate: 3600 }, cache: 'force-cache' }
	).then(res => res.json()) as product[];
}

export default fetchCategoryProducts
