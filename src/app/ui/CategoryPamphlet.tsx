import fetchBillboard from "../lib/fetchBillboard";

export const revalidate = 3600;

const CategoryPamphlet = async ({ categoryName, billboardId }: { categoryName: string, billboardId: string }) => {
    const billboardUrl = await fetchBillboard(billboardId)

    return (<a href={'/' + categoryName} className="flex flex-col items-center justify-center gap-1 w-3/4 md:w-1/3 lg:w-1/4 overflow-hidden md:border rounded-lg md:p-10">
        <img src={billboardUrl} className="max-w-full max-h-3/4" />
        <h1 className="text-2xl font-bold text-center text-themeBlue relative">{categoryName}
            <div className="w-full -bottom-7 md:h-[2px] bg-themeBlue rounded-lg"></div>
        </h1>
    </a>)
}

export default CategoryPamphlet;
