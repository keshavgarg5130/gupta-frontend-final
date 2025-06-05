'use client'

import { useState, useEffect } from "react"
import { product } from "../interfaces/product"
import ProductPamphletFull from "./ProductPamphletFull"
import poles from "../interfaces/poles"
import currentRatingInterface from "../interfaces/currentRating"
import { ArrowLeft, ArrowRight } from "lucide-react"
import ProductPamphlet from "@/app/ui/ProductPamphlet";

const SortBy = ['Price', 'Current Rating', 'Poles'] as const;
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

interface CategoryPageClientProps {
    bannerId: string,
    products: product[],
    poles: poles[],
    currentRatings: currentRatingInterface[],
    maxPrice: number,
    minPrice: number
}

const CategoryPageClient = ({ bannerId, products, poles, currentRatings, maxPrice, minPrice }: CategoryPageClientProps) => {
    currentRatings = currentRatings.sort((a, b) => parseInt(a.name) - parseInt(b.name))
    const [productsSort, setProducts] = useState(products)
    const [sortBy, setSortBy] = useState<typeSort>({ name: 'Price', increasing: true })
    const [filter, setFilter] = useState({ poles: false, currentRating: false })
    const [minPriceValue, setMinPriceValue] = useState<number>(minPrice - 100)

    // Mobile filter toggle state
    const [showFilters, setShowFilters] = useState(false)

    // Initialize filter selections
    let polesState: filterStateInterface = {};
    for (let pole of poles) {
        polesState[pole.id] = { isSelected: false, name: pole.name }
    }
    let currentRatingState: filterStateInterface = {};
    for (let rating of currentRatings) {
        currentRatingState[rating.id] = { isSelected: false, name: rating.name }
    }

    const [polesSelected, setPolesSelected] = useState<filterStateInterface>(polesState)
    const [currentRatingsSelected, setCurrentRatingsSelected] = useState<filterStateInterface>(currentRatingState)

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(parseInt(e.target.value), maxPrice - 1);
        setMinPriceValue(value)
    }

    const [currentPage, setCurrentPage] = useState(1)
    const PRODUCTS_PER_PAGE = 12

    useEffect(() => {
        let filtered = [...products]
        filtered = filtered.filter(product => {
            const priceFits = parseInt(product.price) >= minPriceValue
            const poleFits = filter.poles ? polesSelected[product.polesId].isSelected : true;
            const currentFits = filter.currentRating ? currentRatingsSelected[product.currentRatingId].isSelected : true;
            return priceFits && poleFits && currentFits
        })

        if (sortBy.name) {
            const increasing = sortBy.increasing
            filtered.sort((a, b) => {
                const valA = sortBy.name === 'Price' ? parseInt(a.price) : sortBy.name === 'Poles' ? parseInt(a.poles.name) : parseInt(a.currentRating.name);
                const valB = sortBy.name === 'Price' ? parseInt(b.price) : sortBy.name === 'Poles' ? parseInt(b.poles.name) : parseInt(b.currentRating.name);
                return increasing ? valA - valB : valB - valA;
            })
        }

        setProducts(filtered)
        setCurrentPage(1)
    }, [sortBy, minPriceValue, polesSelected, currentRatingsSelected, products])

    const totalPages = Math.ceil(productsSort.length / PRODUCTS_PER_PAGE)
    const paginatedProducts = productsSort.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE)

    // For accessibility and hydration safe media query, you can replace this logic later with a hook
    const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 1024 : true;

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 px-4 md:pt-0">
            <div className="flex flex-col lg:flex-row w-full max-w-[1280px] gap-6 py-4">

                {/* Filter toggle button only visible on mobile */}
                <div className="lg:hidden mb-4 w-full flex justify-end">
                    <button
                        onClick={() => setShowFilters(prev => !prev)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                        aria-expanded={showFilters}
                        aria-controls="filter-sidebar"
                    >
                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                    </button>
                </div>

                {/* Sidebar - show on desktop or if toggled open on mobile */}
                {(showFilters || isDesktop) && (
                    <aside
                        id="filter-sidebar"
                        className="w-full lg:w-[300px] bg-white p-4 rounded-xl shadow sticky top-5 max-h-[90vh] overflow-auto"
                    >
                        {/* Sort By */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Sort By</label>
                            <select
                                value={sortBy.name}
                                onChange={(e) => setSortBy({ name: e.target.value as SortByType, increasing: sortBy.increasing })}
                                className="w-full px-3 py-2 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                {SortBy.map(sort => <option key={sort} value={sort}>{sort}</option>)}
                            </select>
                            <div className="mt-2">
                                <label className="inline-flex items-center text-sm">
                                    <input
                                        type="checkbox"
                                        checked={sortBy.increasing}
                                        onChange={() => setSortBy(prev => ({ ...prev, increasing: !prev.increasing }))}
                                        className="mr-2"
                                    />
                                    Ascending
                                </label>
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                            <input
                                type="range"
                                min={minPrice - 10}
                                max={maxPrice}
                                value={minPriceValue}
                                onChange={handleMinChange}
                                className="w-full"
                            />
                            <div className="text-xs text-gray-600 flex justify-between">
                                <span>₹{minPriceValue}</span>
                                <span>₹{maxPrice}</span>
                            </div>
                        </div>

                        {/* Poles Filter */}
                        <div className="mb-4">
                            <div className="text-sm font-semibold text-gray-700 mb-2">Poles</div>
                            <div className="flex flex-wrap gap-2">
                                {poles.map(pole => (
                                    <button
                                        key={pole.id}
                                        onClick={() => {
                                            setPolesSelected({
                                                ...polesSelected,
                                                [pole.id]: {
                                                    name: pole.name,
                                                    isSelected: !polesSelected[pole.id].isSelected
                                                }
                                            })
                                            setFilter({ ...filter, poles: true })
                                        }}
                                        className={`px-3 py-1 rounded-full border text-sm ${
                                            polesSelected[pole.id].isSelected
                                                ? 'bg-blue-600 text-white'
                                                : 'border-gray-300 text-gray-700 hover:bg-blue-100'
                                        }`}
                                    >
                                        {pole.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Current Rating Filter */}
                        <div>
                            <div className="text-sm font-semibold text-gray-700 mb-2">Current Rating</div>
                            <div className="flex flex-wrap gap-2">
                                {currentRatings.map(current => (
                                    <button
                                        key={current.id}
                                        onClick={() => {
                                            setCurrentRatingsSelected({
                                                ...currentRatingsSelected,
                                                [current.id]: {
                                                    name: current.name,
                                                    isSelected: !currentRatingsSelected[current.id].isSelected
                                                }
                                            })
                                            setFilter({ ...filter, currentRating: true })
                                        }}
                                        className={`px-3 py-1 rounded-full border text-sm ${
                                            currentRatingsSelected[current.id].isSelected
                                                ? 'bg-blue-600 text-white'
                                                : 'border-gray-300 text-gray-700 hover:bg-blue-100'
                                        }`}
                                    >
                                        {current.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>
                )}

                {/* Product Grid */}
                <section className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedProducts.map(product => (
                            <ProductPamphletFull key={product.id} {...product} />
                        ))}
                    </div>

                    {/* Pagination with page numbers */}
                    <nav
                        className="flex justify-center mt-6 gap-2 flex-wrap"
                        aria-label="Pagination Navigation"
                    >
                        <button
                            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 text-sm bg-white border rounded shadow hover:bg-blue-50 disabled:opacity-40"
                            aria-label="Previous Page"
                        >
                            <ArrowLeft size={16} />
                        </button>

                        {/* Page Numbers */}
                        {[...Array(totalPages)].map((_, i) => {
                            const pageNum = i + 1
                            const isCurrent = pageNum === currentPage
                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`px-3 py-1 text-sm border rounded shadow hover:bg-blue-50 ${
                                        isCurrent
                                            ? 'bg-blue-600 text-white cursor-default'
                                            : 'bg-white text-gray-700'
                                    }`}
                                    aria-current={isCurrent ? "page" : undefined}
                                >
                                    {pageNum}
                                </button>
                            )
                        })}

                        <button
                            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 text-sm bg-white border rounded shadow hover:bg-blue-50 disabled:opacity-40"
                            aria-label="Next Page"
                        >
                            <ArrowRight size={16} />
                        </button>
                    </nav>
                </section>

            </div>
        </div>
    )
}

export default CategoryPageClient;
