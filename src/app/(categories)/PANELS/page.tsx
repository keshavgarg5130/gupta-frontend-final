'use client'
import { useEffect, useState } from "react"
import ProductPamphletFull from "@/app/ui/ProductPamphletFull"
import { product } from "@/app/interfaces/product"
import axios from "axios"

export default function MCB() {
	const [products, setProducts] = useState<product[]>([]);

	useEffect(() => {
		const getProducts = async () => {
			const response = (await axios.get('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/products')).data as product[];
			const MCB = response.filter(prdt => {
				if (prdt.category.name === 'Panel')
					return prdt
			})
			setProducts(MCB)
		}
		getProducts();
	}, [])

	return (
		<div className="flex flex-col items-center">
			<div>Banner</div>
			<div className="flex flex-col m-10 gap-5 ">
				{products.map((prdt, index) => {
					return <div key={index}><ProductPamphletFull {...prdt} /></div>
				})}
			</div>
		</div>
	)
}
