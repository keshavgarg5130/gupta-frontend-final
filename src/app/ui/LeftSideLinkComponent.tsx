const LeftSideLinkComponent = ({ data, heading }: { data: { name: string, link: string }[], heading: string }) => {
    return (
        <div className="min-w-[300px] hidden md:flex items-center h-[600px] justify-center">
            <div className="flex flex-col p-3 justify-center items-center rounded-lg w-full shadow-xl shadow-gray-300 gap-3 bg-white">
                <h2 className="text-4xl font-bold text-center text-themeBlue relative mb-4">{heading}
                    <div className="w-full -bottom-7 hidden md:block md:h-1 bg-themeBlue rounded-lg"></div>
                </h2>
                {data.map((row, index) => {
                    return <CategoryRow key={index} {...row} />
                })}
            </div>
        </div>
    )
}

const CategoryRow = ({ name, link }: { name: string, link: string }) => {
    return (
        <a href={link} className={`h-11 text-center w-4/5 border-themeBlue border rounded-lg flex items-center justify-center font-light text-sm text-themeBlue hover:bg-themeBlue hover:text-white ${name.split('').length > 28 || 'hover:text-lg'}  transition-all`}>
            {name}
        </a>
    )
}

export default LeftSideLinkComponent;
