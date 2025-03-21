import { product } from "../interfaces/product"


const fetchProduct = async (productSlug: string) => {
	return await fetch(`https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products/slug/${productSlug}`, { cache: 'force-cache' }).then(res => res.json()) as product
}

export default fetchProduct;
