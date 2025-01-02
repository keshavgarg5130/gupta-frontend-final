export const Para = ({ texts }: { texts: string[] }) => {
    return (
        <div className="">
            {texts.map(text => {
                return <div><div className="text-justify leading-7 lg:leading-9" >{text}</div><br /></div>
            })}
        </div>
    )
}
export const Heading = ({ text }: { text: string }) => {
    return (
        <div className="flex">
            <h1 className="text-4xl font-bold text-center text-themeBlue relative mb-4">{text}
                <div className="w-full -bottom-7 hidden md:block md:h-1 bg-themeBlue rounded-lg"></div>
            </h1>
        </div>
    )
}

export const Points = ({ points }: { points: string[] }) => {
    return (
        <div className="mb-5">
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
