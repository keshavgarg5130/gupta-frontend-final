'use client'
import { Dispatch, SetStateAction, useState, useEffect } from "react"
import { product } from "../interfaces/product"
import CategoryBanner from "./CategoryBanner"
import ProductFullRow from "./ProductFullRow"
import poles from "../interfaces/poles"
import currentRatingInterface from "../interfaces/currentRating"
import { ArrowUp } from "lucide-react"

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

const CategoryPageClient = ({ bannerId, products, poles, currentRatings, maxPrice, minPrice }: { bannerId: string, products: product[], poles: poles[], currentRatings: currentRatingInterface[], maxPrice: number, minPrice: number }) => {
    const [productsSort, setProducts] = useState(products)
    const [sortBy, setSortBy] = useState<typeSort>({
        name: '',
        increasing: false
    })
    const [filter, setFilter] = useState({
        poles: false,
        currentRating: false
    });
    minPrice = isNaN(minPrice) ? 100 : minPrice
    const remains = products.length > 0
    const [minPriceValue, setMinPriceValue] = useState<number>(minPrice - 100)

    let polesState: filterStateInterface = {};
    for (let pole of poles) {
        polesState[pole.id] = {
            isSelected: false,
            name: pole.name
        }
    }
    let currentRatingState: filterStateInterface = {};
    for (let currentRating of currentRatings) {
        currentRatingState[currentRating.id] = {
            isSelected: false,
            name: currentRating.name
        }
    }

    const [polesSelected, setPolesSelected] = useState<filterStateInterface>(polesState)
    const [currentRatingsSelected, setCurrentRatingsSelected] = useState<filterStateInterface>(currentRatingState)

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(parseInt(e.target.value), maxPrice - 1);
        setMinPriceValue(value)
    }

    const [filterHidden, setFilterHidden] = useState(true)

    useEffect(() => {
        let prdts = [...products]
        prdts = prdts.filter(product => {
            const priceFits = parseInt(product.price) >= minPriceValue
            const poleFits = filter.poles ? polesSelected[product.polesId].isSelected : true;
            const currentFits = filter.currentRating ? currentRatingsSelected[product.currentRatingId].isSelected : true;
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
    }, [sortBy, minPriceValue, polesSelected, currentRatingsSelected])

    return (
        <div className="flex flex-col items-center w-full relative md:pt-0 min-h-screen">
            <button className="md:hidden w-full bg-blue-100 font-bold h-10" onClick={() => setFilterHidden(!filterHidden)}>Sort/Filter</button>
            <CategoryBanner bannerId={bannerId} />
            <ProductFullRow products={productsSort} Remains={remains} />
            {/* Filter Menu */}
            <div className={`${filterHidden ? 'hidden' : 'block'} md:flex absolute top-10 left-0 w-full md:w-[200px] lg:w-[300px] bg-blue-100 flex-col md:gap-5 py-5 md:rounded-lg`}>
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-2xl font-bold text-themeBlue"> Sort By </h1>
                    <div className="flex flex-col gap-2 justify-evenly w-11/12 flex-wrap">
                        {SortBy.map(sort => {
                            if (sort) {
                                return <button key={sort} className="py-1 px-3 bg-white text-themeBlue rounded-full border-themeBlue border text-lg relative font-semibold" onClick={() => {
                                    setSortBy({
                                        name: sort,
                                        increasing: sortBy.name == sort ? !sortBy.increasing : true
                                    })
                                }}>
                                    {sort}
                                    <div className="absolute top-[50%] translate-y-[-50%] right-10"><div className={`${sortBy.name == sort ? (sortBy.increasing ? 'rotate-180' : '') : 'hidden'} transition-all ease-in-out duration-300`}><ArrowUp /></div></div>
                                </button>
                            }
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-center gap-3">
                        <button className="text-2xl font-bold text-themeBlue" onClick={() => {
                            setFilter({
                                poles: false,
                                currentRating: false
                            })
                            setPolesSelected(polesState)
                            setCurrentRatingsSelected(currentRatingState)
                        }}>
                            <DisplayDiv name="Remove Filter" isSelected={true} />
                        </button>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-2xl font-bold text-themeBlue"> Price Range</h1>
                        <div className="relative w-11/12 flex flex-col items-center">
                            <input
                                type="range"
                                min={minPrice - 10}
                                max={maxPrice}
                                value={minPriceValue}
                                onChange={handleMinChange}
                                className="w-full pointer-events-auto z-10 range-thumb"
                            />
                            <div className="flex justify-between mt-2 text-sm w-full text-themeBlue">
                                <span>{minPriceValue}</span>
                                <span>{maxPrice}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <h1 className="text-2xl font-bold text-themeBlue">Select Poles</h1>
                        <div className="flex justify-evenly w-11/12">
                            {poles.map(pole => {
                                return (<button key={pole.id} onClick={() => {
                                    setPolesSelected({
                                        ...polesSelected,
                                        [pole.id]: {
                                            name: pole.name,
                                            isSelected: !polesSelected[pole.id].isSelected
                                        }
                                    })
                                    setFilter({
                                        ...filter,
                                        poles: true
                                    })
                                }}>
                                    <DisplayDiv name={pole.name} isSelected={polesSelected[pole.id].isSelected} />
                                </button>)
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <h1 className="text-2xl font-bold text-themeBlue">Select Current Rating</h1>
                        <div className="flex justify-evenly w-11/12 gap-2 flex-wrap">
                            {currentRatings.map(current => {
                                return (<button key={current.id} onClick={() => {
                                    setCurrentRatingsSelected({
                                        ...currentRatingsSelected,
                                        [current.id]: {
                                            name: current.name,
                                            isSelected: !currentRatingsSelected[current.id].isSelected
                                        }
                                    })
                                    setFilter({
                                        ...filter,
                                        currentRating: true
                                    })
                                }}>
                                    <DisplayDiv name={current.name} isSelected={currentRatingsSelected[current.id].isSelected} />
                                </button>)
                            })}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

const DisplayDiv = ({ name, isSelected }: { name: string, isSelected: boolean }) => {
    const classes = `h-[30px] w-max px-4 rounded-full flex items-center justify-center ${isSelected ? 'bg-themeBlue text-white' : 'bg-white text-themeBlue border border-themeBlue'} ${isSelected && 'text-lg font-bold'} hover:px-5 transition-all duration-300`
    return (
        <div className={classes} >{name}</div>
    )
}
export default CategoryPageClient
