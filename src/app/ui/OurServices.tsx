import Image from "next/image"

const svgs = [
    {
        url: '/servicesProgramming.png',
        label: 'Programming'
    },
    {
        url: '/servicesManufacturing.png',
        label: 'Manufacturing'
    },
    {
        url: '/servicesPanelsAssembly.png',
        label: 'Panels Assembly'
    },
    {
        url: '/servicesStocklist.png',
        label: 'Stocklist'
    },
    {
        url: '/servicesWireAndCables.png',
        label: 'Wires and Cables'
    },
    {
        url: '/servicesServicing.png',
        label: 'Servicing'
    },
]

const OurServices = () => {
    return (
        <div className="relative z-40 py-2 flex flex-col items-center">
            <h1 className="text-4xl z-10  font-bold text-white text-center relative">Our Services
                <div className="w-full -bottom-7 h-1 bg-white rounded-lg"></div>
            </h1>
            <div className="flex flex-wrap z-10 justify-center items-center gap-10 w-3/4 py-5">
                {svgs.map((svg, index) => {
                    return <Icon key={index} url={svg.url} label={svg.label} />
                })}
            </div>
        </div>
    )
}

const Icon = ({ url, label }: { url: string, label: string }) => {
    return (
        <div className="h-[300px] w-[300px] relative z-40 flex flex-col justify-center items-center ">
            <Image alt="gupaSwitchgearsServies" height={150} width={150} className="h-1/2 w-1/2 opacity-100 relative z-40 flex justify-center" src={url} />
            <label className="opacity-100 text-white relative z-40 text-xl">{label}</label>
            <div className="absolute w-full h-full opacity-60 bg-blue-900 top-0 left-0 z-30 rounded-2xl"></div>
        </div>
    )
}

export default OurServices
