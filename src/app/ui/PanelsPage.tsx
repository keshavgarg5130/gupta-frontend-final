import Image from "next/image"
import panelsInterface from "../interfaces/panels"
import LeftSideLinkComponent from "./LeftSideLinkComponent";

const PanelsPage = ({ name, mainBanner, smallBanner, firstPara, specificationPoints, secondPara, secondPoints, thirdPara }: panelsInterface) => {
    return (
        <div className="bg-gray-100">
            <div>
                <Image src={mainBanner} alt={name} width={2000} height={1000} />
            </div>
            <div className="flex justify-center gap-5">
                <LeftSideLinkComponent data={[{ name: 'name1', link: 'link1' }]} />
                <div className="w-[900px] min-h-full relative -top-8 rounded-lg bg-white flex flex-col items-center p-24 shadow-xl shadow-gray-300 gap-5 font-semibold text-gray-500">
                    <Image src={smallBanner} alt={name} height={800} width={700} className="rounded-lg mb-5" />
                    <Heading text={name} />
                    <Para texts={firstPara} />
                    <Heading text="Product Specifications" />
                    <Points points={specificationPoints} />
                    <Para texts={secondPara} />
                    <Points points={secondPoints} />
                    <Para texts={thirdPara} />
                </div>
            </div>
        </div>
    )
}

const Para = ({ texts }: { texts: string[] }) => {
    return (
        <div>
            {texts.map(text => {
                return <><div className="text-justify leading-9" >{text}</div><br /></>
            })}
        </div>
    )
}
const Heading = ({ text }: { text: string }) => {
    return (
        <div className="min-w-full">
            <h1 className="text-4xl w-max font-bold text-center text-themeBlue relative mb-4">{text}
                <div className="w-full -bottom-7 hidden md:block md:h-1 bg-themeBlue rounded-lg"></div>
            </h1>
        </div>
    )
}

const Points = ({ points }: { points: string[] }) => {
    return (
        <div className="min-w-full">
            <ul className="flex flex-col gap-2">
                {points.map(point => {
                    return (<li className="relative ml-5">
                        {point}
                        <span className="absolute -left-4 h-2 w-2 bg-themeBlue rounded-full top-[50%] translate-y-[-50%]" />
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default PanelsPage
