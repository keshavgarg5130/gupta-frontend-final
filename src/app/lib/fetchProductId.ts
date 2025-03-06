export const revalidate = 3600;

const fetchProductId = async () => {
    try {
        const response = await fetch(
            'https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/productId',
            { next: { revalidate: 3600 }, cache: 'force-cache' }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch product IDs: ${response.statusText}`);
        }

        const productIds = await response.json();
        return productIds;
    } catch (error) {
        console.error("Error fetching product IDs:", error);
        return null;
    }
}

export default fetchProductId;
