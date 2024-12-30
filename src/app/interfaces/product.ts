import brand from "./brand"
import category from "./category"
import currentRatingInterface from "./currentRating"
import imageInterface from "./image"
import poles from "./poles"

export interface product {
	id: string,
	storeId: string,
	categoryId: string,
	brandId: string,
	name: string,
	description: string,
	mPrice: string,
	gstRate: string,
	price: string,
	isFeatured: boolean,
	isArchived: boolean,
	currentRatingId: string,
	polesId: string,
	createdAt: string,
	updatedAt: string,
	images: imageInterface[],
	category: category,
	currentRating: currentRatingInterface,
	poles: poles,
	brand: brand
}
