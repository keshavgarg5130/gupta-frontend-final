export default interface custimizeProduct {
	id: string,
	slug: string,
	category: {
		name: string,
		id: string
	},
	brand: {
		name: string,
		id: string
	},
	currentRating: {
		name: string,
		id: string
	},
	poles: {
		name: string,
		id: string
	},
}
