import fetchCategories from "../lib/fetchCategories"
import fetchBillboards from "../lib/fetchBillboards"
import CategoryBar from "./CategoryBar"

const CategoryBarServer = async () => {
    const categoriesData = await fetchCategories()
    const billboards = await fetchBillboards();

    return (
        <CategoryBar categoriesData={categoriesData} billboards={billboards} />
    )
}

export default CategoryBarServer
