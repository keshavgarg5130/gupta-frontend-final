import ProductPage from "@/app/ui/ProductPage"
import fetchProduct from "@/app/lib/fetchProduct";

import fetchProductSlug from "@/app/lib/fetchProductSlug";

export async function generateStaticParams() {
	const productSlugs = await fetchProductSlug();

	// Ensure productIds is valid
	if (!productSlugs || !Array.isArray(productSlugs)) {
		console.error("Error: Invalid product IDs received");
		return [];
	}

	return productSlugs.map((product) => ({
		productSlug: String(product.slug) // Fix: Use 'product.id' correctly
	}));
}

export async function generateMetadata({ params }: {
	params: Promise<{ productSlug: string }>
}) {
	const { productSlug } = await params
	const product = await fetchProduct(productSlug)
	if(!product){
		return {
			title: "Enquire Now",
			description: "We may have the product you are looking for, You can contact us on our contact page .",
		}
	}
	return {
		title: product.name,
		description: product.description,
		openGraph: {
			images: [
				{
					url: product.images[0].url,
					width: 800,
					height: 600,
				},
			],
		},
	}
}

export default async function(
	{ params }: {
		params: Promise<{ productSlug: string }>
	}
) {
	const { productSlug } = await params
	return (
		<ProductPage productSlug={productSlug} />
	)
}