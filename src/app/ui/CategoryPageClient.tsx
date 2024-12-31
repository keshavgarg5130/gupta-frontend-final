'use client'
import { Dispatch, SetStateAction, useState, useEffect } from "react"
import { product } from "../interfaces/product"
import CategoryBanner from "./CategoryBanner"
import ProductFullRow from "./ProductFullRow"

const SortBy = ['price', 'currentRating', 'poles', ''] as const;
type SortByType = typeof SortBy[number];
type typeSort = {
    name: SortByType,
    increasing: boolean
}
type filterType = {
    price: number,
    poles: number,
    currentRating: number
}

const CategoryPageClient = ({ bannerId, products }: { bannerId: string, products: product[] }) => {
    const [productsSort, setProducts] = useState(products)
    const [sortBy, setSortBy] = useState<typeSort>({
        name: '',
        increasing: true
    })
    const remains = products.length > 0
    const [filter, SetFilter] = useState<filterType>({
        price: 0,
        poles: 0,
        currentRating: 0
    })

    useEffect(() => {
        let prdts = [...products]
        prdts = prdts.filter(product => parseInt(product.price) >= filter.price)
        prdts = prdts.filter(product => parseInt(product.poles.name) >= filter.poles)
        prdts = prdts.filter(product => parseInt(product.currentRating.name) >= filter.currentRating)
        setProducts(prdts)

        if (sortBy.name) {
            const increasing = sortBy.increasing
            switch (sortBy.name) {
                case 'price':
                    if (increasing)
                        setProducts(prdts.sort((a, b) => parseInt(a.price) - parseInt(b.price)))
                    else
                        setProducts(prdts.sort((a, b) => parseInt(b.price) - parseInt(a.price)))
                    break;
                case 'poles':
                    if (increasing)
                        setProducts(prdts.sort((a, b) => parseInt(a.poles.name) - parseInt(b.poles.name)))
                    else
                        setProducts(prdts.sort((a, b) => parseInt(b.poles.name) - parseInt(a.poles.name)))
                    break;
                case 'currentRating':
                    if (increasing)
                        setProducts(prdts.sort((a, b) => parseInt(a.currentRating.name) - parseInt(b.currentRating.name)))
                    else
                        setProducts(prdts.sort((a, b) => parseInt(b.currentRating.name) - parseInt(a.currentRating.name)))
            }
        }
    }, [sortBy, filter])

    return (
        <div className="flex flex-col items-center w-full relative pt-16 md:pt-0">
            <CategoryBanner bannerId={bannerId} />
            <ProductFullRow products={productsSort} Remains={remains} />
            <FilterMenu setSortBy={setSortBy} filter={filter} setFilter={SetFilter} />
        </div>
    )
}

const FilterMenu = ({ setSortBy, setFilter, filter }: { setSortBy: Dispatch<SetStateAction<typeSort>>, setFilter: Dispatch<SetStateAction<filterType>>, filter: filterType }) => {

    const [increasing, setIncreasing] = useState({ price: true, poles: true, currentRating: true })

    return (
        <div className="absolute top-0 left-0 w-full h-14 md:w-[200px] lg:w-[300px] md:h-full bg-blue-100">
            <div>
                <h1> Sort By </h1>
                <div className="flex flex-col">
                    {SortBy.map(sort => {
                        if (sort) {
                            return <button key={sort} onClick={() => {
                                setSortBy({
                                    name: sort,
                                    increasing: increasing[sort]
                                })
                                setIncreasing(increasing => {
                                    return {
                                        ...increasing,
                                        [sort]: !increasing[sort]
                                    }
                                })
                            }}>{sort}</button>
                        }
                    })}
                </div>
            </div>

            <div>
                <div>
                    <label>Price:</label>
                    <input name='price' onChange={e => {
                        if (parseInt(e.target.value)) {
                            setFilter({
                                ...filter,
                                [e.target.name]: e.target.value
                            })
                        }
                    }} />
                </div>
                <div>
                    <label>Current Rating:</label>
                    <input name='currentRating' onChange={e => {
                        if (parseInt(e.target.value)) {
                            setFilter({
                                ...filter,
                                [e.target.name]: e.target.value
                            })
                        }
                    }} />
                </div>
                <div>
                    <label>Poles:</label>
                    <input name='poles' onChange={e => {
                        if (parseInt(e.target.value)) {
                            setFilter({
                                ...filter,
                                [e.target.name]: e.target.value
                            })
                        }
                    }} />
                </div>
            </div>
        </div >
    )
}

export default CategoryPageClient
