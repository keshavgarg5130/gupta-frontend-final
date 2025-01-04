import fetchCategories from "../lib/fetchCategories"
import fetchBillboards from "../lib/fetchBillboards"
import CategoryBar from "./CategoryBar"
import PanelsCategory from "@/lib/PanelsCategory"

const CategoryBarServer = async () => {
    let categoriesData = await fetchCategories()
    const billboards = await fetchBillboards();

    return (
        <CategoryBar categoriesData={categoriesData} billboards={billboards} />
    )
}

export default CategoryBarServer
