import billboard from "../interfaces/billboard";

export const revalidate = 3600;

const CategoryPamphlet = ({ categoryName, billboards, billboardId }: { categoryName: string, billboards: billboard[], billboardId: string }) => {
    const billboard = billboards.filter(billboard => {
        return billboard.id == billboardId
    })[0]
    let url;
    if (billboard)
        url = billboard.imageUrl
    else
        url = 'https://res.cloudinary.com/dqefturar/image/upload/v1735033145/yu8uii9n47t5z1r9fxza.png'

    if (categoryName == 'MCB') categoryName = 'Mineature Circuit Breaker (MCB)'
    else if (categoryName == 'ACB') categoryName = 'Air Circuit Breaker (ACB)'
    else if (categoryName == 'MCCB') categoryName = 'Molded Case Circuit Breaker (MCCB)'
    else if (categoryName == 'RCCB') categoryName = 'Residual Current Circuit Breaker (RCCB)'

    return (<a href={'/' + categoryName} className="flex flex-col bg-white items-center justify-center gap-1 w-2/3 md:w-2/3 lg:w-2/5 overflow-hidden md:border rounded-lg md:p-10">
        <img src={url} className="max-w-full max-h-3/4" />
        <h1 className="text-2xl font-bold text-center text-themeBlue underline">{categoryName}
        </h1>
    </a>)
}

export default CategoryPamphlet;
