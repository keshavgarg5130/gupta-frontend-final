import ProductPage from "@/app/ui/ProductPage"
import fetchProduct from "@/app/lib/fetchProduct";
import fetchProductId from "@/app/lib/fetchProductId";

export async function generateStaticParams() {
	const productIds = await fetchProductId();

	// Ensure productIds is valid
	if (!productIds || !Array.isArray(productIds)) {
		console.error("Error: Invalid product IDs received");
		return [];
	}

	return productIds.map((product) => ({
		productId: product.id // Fix: Use 'product.id' correctly
	}));
}

export async function generateMetadata({ params }: {
	params: Promise<{ productId: string }>
}) {
	const { productId } = await params
	const productIId = productId.split('-')[0]
	const product = await fetchProduct(productIId)
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
		params: Promise<{ productId: string }>
	}
) {
	const { productId } = await params
	const productIId = productId.split('-')[0]
	return (
		<ProductPage productId={productIId} />
	)
}