import fetchBillboard from "../lib/fetchBillboard";

export const revalidate = 3600;

const CategoryPamphlet = async ({ categoryName, billboardId }: { categoryName: string, billboardId: string }) => {
    const billboardUrl = await fetchBillboard(billboardId)
    if (categoryName == 'MCB') categoryName = 'Mineature Circuit Breaker (MCB)'
    else if (categoryName == 'ACB') categoryName = 'Air Circuit Breaker (ACB)'
    else if (categoryName == 'MCCB') categoryName = 'Molded Case Circuit Breaker (MCCB)'
    else if (categoryName == 'RCCB') categoryName = 'Residual Current Circuit Breaker (RCCB)'

    return (<a href={'/' + categoryName} className="flex flex-col items-center justify-center gap-1 w-2/3 md:w-2/3 lg:w-2/5 overflow-hidden md:border rounded-lg md:p-10">
        <img src={billboardUrl} className="max-w-full max-h-3/4" />
        <h1 className="text-2xl font-bold text-center text-themeBlue relative">{categoryName}
            <div className="w-full -bottom-7 md:h-[2px] bg-themeBlue rounded-lg"></div>
        </h1>
    </a>)
}

export default CategoryPamphlet;
