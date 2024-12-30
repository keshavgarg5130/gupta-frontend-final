import ProductPage from "@/app/ui/ProductPage"

export default async function(
	{ params }: {
		params: Promise<{ productId: string }>
	}
) {
	const { productId } = await params
	return (
		<ProductPage productId={productId} />
	)
}
