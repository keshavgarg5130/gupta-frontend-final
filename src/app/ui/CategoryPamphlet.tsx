import billboard from "../interfaces/billboard";
import Image from "next/image";
export const revalidate = 3600;

const CategoryPamphlet = ({ categoryName, billboards, billboardId }: {
    categoryName: string,
    billboards: billboard[],
    billboardId: string
}) => {
    const billboard = billboards.filter(billboard => billboard.id == billboardId)[0];
    const url = billboard?.imageUrl || 'https://res.cloudinary.com/dqefturar/image/upload/v1735033145/yu8uii9n47t5z1r9fxza.png';

    let link = '/' + categoryName.toLowerCase();

    switch (categoryName) {
        case "Panels": link = '/panel/distribution-board'; break;
        case "Overload Relay": link = '/overload-relay'; break;
        case "Wires and Cables": link = "/wires-and-cables"; break;
        case "Power Contractor": link = "/power-contractor"; break;
    }

    // Format category names
    if (categoryName == 'mcb') categoryName = 'MCB';
    else if (categoryName == 'acb') categoryName = 'ACB';
    else if (categoryName == 'mccb') categoryName = 'MCCB';
    else if (categoryName == 'rccb') categoryName = 'RCCB';

    return (
        <a href={link} className="flex flex-col bg-white items-center justify-center gap-1 w-full p-2 md:p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="relative w-full aspect-square">
                <Image
                    alt={categoryName}
                    src={url}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
            </div>
            <h2 className="text-sm md:text-lg lg:text-xl font-semibold text-center text-themeBlue">
                {categoryName}
            </h2>
        </a>
    )
}

export default CategoryPamphlet;