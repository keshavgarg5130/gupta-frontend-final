import { product } from "../interfaces/product";

const fetchProduct = async (productSlug: string): Promise<product | null> => {
	try {
		const response = await fetch(
			`https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products/slug/${productSlug}`,
			{ cache: "force-cache" }
		);

		// If the response is not ok (e.g., 404), return null
		if (!response.ok) {
			return null;
		}

		const data = await response.json();

		// If the API response contains an error message, return null
		if (data.error || data.message === "Product not found") {
			return null;
		}

		return data as product;
	} catch (error) {
		// Handle network errors or unexpected issues
		console.error("Error fetching product:", error);
		return null;
	}
};

export default fetchProduct;
