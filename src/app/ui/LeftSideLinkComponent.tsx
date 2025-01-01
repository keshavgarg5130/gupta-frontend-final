const LeftSideLinkComponent = ({ data }: { data: { name: string, link: string }[] }) => {
    return (
        <div className="min-w-[300px] hidden md:flex items-center h-[600px] justify-center">
            <div className="flex flex-col p-3 justify-center items-center rounded-lg w-full shadow-xl shadow-gray-300 gap-3 bg-white">
                <h1 className="text-4xl font-bold text-center text-themeBlue relative mb-4">Categories
                    <div className="w-full -bottom-7 hidden md:block md:h-1 bg-themeBlue rounded-lg"></div>
                </h1>
                {data.map(row => {
                    return <CategoryRow {...row} />
                })}
            </div>
        </div>
    )
}

const CategoryRow = ({ name, link }: { name: string, link: string }) => {
    return (
        <a href={link} className="h-9 w-4/5 border-themeBlue border rounded-lg flex items-center justify-center font-light text-sm text-themeBlue hover:bg-themeBlue hover:text-white hover:text-lg transition-all">
            {name}
        </a>
    )
}

export default LeftSideLinkComponent;
