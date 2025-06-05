import billboard from "../interfaces/billboard";
import Image from "next/image";
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
    let link = '/' + categoryName.toLowerCase();

    switch (categoryName) {
        case "Panels":
            link = '/panel/distribution-board'
            break
        case "Overlay Relay":
            link = '/overload-relay'
            break
        case "Wires and Cables":
            link = "/wires-and-cables"
            break;
        case "Power Contractor":
            link = "/power-contractor"
            break;

    }
    if (categoryName == 'mcb') categoryName = 'Mineature Circuit Breaker (mcb)'
    else if (categoryName == 'acb') categoryName = 'Air Circuit Breaker (acb)'
    else if (categoryName == 'mccb') categoryName = 'Molded Case Circuit Breaker (mccb)'
    else if (categoryName == 'rccb') categoryName = 'Residual Current Circuit Breaker (rccb)'

    return (<a href={link} className="flex flex-col bg-white items-center justify-center gap-1 w-2/3 md:w-4/5 lg:w-2/5 overflow-hidden md:border rounded-lg md:p-10">
        <Image alt='ACB,MCCB,MCB,Panels' src={url} height={300} width={200} className="max-w-full max-h-3/4" />
        <h2 className="text-2xl font-bold text-center text-themeBlue underline">{categoryName}
        </h2>
    </a>)
}

export default CategoryPamphlet;
