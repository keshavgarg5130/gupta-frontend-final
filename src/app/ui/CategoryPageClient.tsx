'use client'
import { Dispatch, SetStateAction, useState, useEffect } from "react"
import { product } from "../interfaces/product"
import CategoryBanner from "./CategoryBanner"
import ProductFullRow from "./ProductFullRow"
import poles from "../interfaces/poles"
import currentRatingInterface from "../interfaces/currentRating"

const SortBy = ['price', 'currentRating', 'poles', ''] as const;
type SortByType = typeof SortBy[number];
type typeSort = {
    name: SortByType,
    increasing: boolean
}

interface filterStateInterface {
    [id: string | number]: {
        isSelected: boolean,
        name: string
    },
}

const CategoryPageClient = ({ bannerId, products, poles, currentRatings }: { bannerId: string, products: product[], poles: poles[], currentRatings: currentRatingInterface[] }) => {
    const [productsSort, setProducts] = useState(products)
    const [increasing, setIncreasing] = useState({ price: true, poles: true, currentRating: true })
    const [sortBy, setSortBy] = useState<typeSort>({
        name: '',
        increasing: true
    })
    const remains = products.length > 0
    const [filter, setFilter] = useState<{ price: number }>({
        price: 0,
    })

    let polesState: filterStateInterface = {};
    for (let pole of poles) {
        polesState[pole.id] = {
            isSelected: true,
            name: pole.name
        }
    }
    let currentRatingState: filterStateInterface = {};
    for (let currentRating of currentRatings) {
        currentRatingState[currentRating.id] = {
            isSelected: true,
            name: currentRating.name
        }
    }

    const [polesSelected, setPolesSelected] = useState<filterStateInterface>(polesState)
    const [currentRatingsSelected, setCurrentRatingsSelected] = useState<filterStateInterface>(currentRatingState)

    useEffect(() => {
        console.log(polesSelected)
        let prdts = [...productsSort]
        prdts = prdts.filter(product => {
            const priceFits = parseInt(product.price) >= filter.price
            const poleFits = polesSelected[product.polesId].isSelected;
            const currentFits = currentRatingsSelected[product.currentRatingId].isSelected
            return priceFits && poleFits && currentFits
        })

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
    }, [sortBy, filter, polesSelected, currentRatingsSelected])

    return (
        <div className="flex flex-col items-center w-full relative pt-16 md:pt-0">
            <CategoryBanner bannerId={bannerId} />
            <ProductFullRow products={productsSort} Remains={remains} />
            {/* Filter Menu */}
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
                        {poles.map(pole => {
                            return (<button onClick={() => {
                                setPolesSelected({
                                    ...polesSelected,
                                    [pole.id]: {
                                        name: pole.name,
                                        isSelected: !polesSelected[pole.id].isSelected
                                    }
                                })
                            }}>
                                <PolesDiv key={pole.id} name={pole.name} isSelected={polesSelected[pole.id].isSelected} />
                            </button>)
                        })}
                    </div>
                </div>
            </div >
        </div>
    )
}

const PolesDiv = ({ name, isSelected }: { name: string, isSelected: boolean }) => {
    const classes = `h-[30px] w-max px-4 rounded-full flex items-center justify-center ${isSelected ? 'bg-themeBlue text-white' : 'bg-white text-themeBlue border border-themeBlue'} ${isSelected && 'text-lg font-bold'} hover:bg-themeBlue hover:text-white transition-all duration-300`
    return (
        <div className={classes} >{name}</div>
    )
}
export default CategoryPageClient
