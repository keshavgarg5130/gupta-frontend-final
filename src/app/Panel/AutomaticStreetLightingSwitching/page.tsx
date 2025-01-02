import Image from "next/image"
import LeftSideLinkComponent from "@/app/ui/LeftSideLinkComponent"
import PanelsData from "@/lib/PanelsData"
import Enquiry from '@/app/ui/Enquiry'

const data = {
  name: 'Automatic Street Light Switching Panel',
  mainBanner: '/banner-1.jpg',
  smallBanner: '/banner-1.jpg',
  firstPara: ['Rashmi Electricals is a technology company engaged in offering CPRI-approved Automatic Street Light Switching Panel for energy efficiency in lighting. Pioneered with innovative lighting controls based on patented sensing technology, we design panels that are easy to install, user-friendly, corrosion-free, long-lasting, sturdy, smooth operational, and perfect for real-time monitoring and alarming of street lights. Our panels are ideal for automatically switching on and off street lights for commercial and industrial.', 'Being an ISO and IP certified manufacturer and supplier, we are committed to designing international standard Automatic Street Light Switching Panels that come equipped with ample specifications such as:'],
  firstPoints: ['Voltage Indicator', 'Turning ON and OFF the power load', 'Various basic operation modes', 'Minimum maximum voltage relay', 'Programmable real time switch', 'Light sensitive illumination relay', 'Suitable for single and three phase loads of all capacities.'],
  secondPara: ['Our  Street Light Switching Panels are suitable for single and three-phase loads of all capacities. They are available in different sizes, designs, and thicknesses. This suits your specific requirements most efficiently. Further, we manufacture Automatic Street Light Switching Panels as per international quality standards. To achieve this, advanced machinery and equipment are used in the manufacturing process in state-of-the-art manufacturing units of Rashmi Electricals.'],
  thirdPara: ['The designed products are known for high functionality, rigid construction, high consistent, high performance, long service life, etc.'],
  fourthPara: ['With the help of experienced and knowledgeable professionals, we are able to offer Automatic Street Light Switching Panels that are suitable for diverse applications, including but not limited to -'],
  suitablePoints: ['TFountains', 'Park Lights', 'Street lights', 'Common lights', 'Compound lights', 'Parking lights', 'Divider lights', 'Hoarding lights', 'Pumps / motors', 'High mast lights', "Sequencial operations of loads like AC's"]
}

const Page = () => {
  return (
    <div className="bg-gray-100">
      <div>
        <Image src={data.mainBanner} alt={data.name} width={2000} height={1000} />
      </div>
      <div className="flex flex-col md:flex-row md:gap-5 md:px-5">
        <div className="hidden md:block">
          <LeftSideLinkComponent data={PanelsData} heading="Panels" />
        </div>
        <div className="lg:w-[1200px] md:w-[570px] relative md:-top-8 rounded-lg bg-white px-6 py-10 md:px-10 lg:p-20 shadow-xl shadow-gray-300 gap-5 md:font-semibold text-gray-500">
          <Image src={data.smallBanner} alt={data.name} height={800} width={700} className="rounded-lg hidden md:block mb-5" />
          <Heading text={data.name} />
          <Para texts={data.firstPara} />
          <Points points={data.firstPoints} />
          <Para texts={data.secondPara} />
          <Heading text="Key Hilights:" />
          <Para texts={data.thirdPara} />
          <Heading text="Suitable for Diverse Applications:" />
          <Para texts={data.fourthPara} />
          <Points points={data.suitablePoints} />
        </div>
      </div>
      <Enquiry />
    </div>
  )
}

const Para = ({ texts }: { texts: string[] }) => {
  return (
    <div className="">
      {texts.map(text => {
        return <div><div className="text-justify leading-7 lg:leading-9" >{text}</div><br /></div>
      })}
    </div>
  )
}
const Heading = ({ text }: { text: string }) => {
  return (
    <div className="flex">
      <h1 className="text-4xl font-bold text-center text-themeBlue relative mb-4">{text}
        <div className="w-full -bottom-7 hidden md:block md:h-1 bg-themeBlue rounded-lg"></div>
      </h1>
    </div>
  )
}

const Points = ({ points }: { points: string[] }) => {
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
export default Page