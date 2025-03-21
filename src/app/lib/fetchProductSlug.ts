export const revalidate = 3600;

const fetchProductSlug = async () => {
    try {
        const response = await fetch(
            'https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/productSlug',
            { next: { revalidate: 3600 }, cache: 'force-cache' }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch product IDs: ${response.statusText}`);
        }

        const productSlugs = await response.json();
        return productSlugs;
    } catch (error) {
        console.error("Error fetching product Slugs:", error);
        return null;
    }
}

export default fetchProductSlug;