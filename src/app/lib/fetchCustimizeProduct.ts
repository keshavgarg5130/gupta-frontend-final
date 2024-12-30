import custimizeProduct from "../interfaces/custimizeProduct"

export const revalidate = 3600

const fetchCustimizeProduct = async () => {
	return await fetch(
		'https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products/productVariation',
		{ next: { revalidate: 3600 }, cache: 'force-cache' }
	).then(res => res.json()) as custimizeProduct[];
}

export default fetchCustimizeProduct
