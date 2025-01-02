import Image from "next/image"
import LeftSideLinkComponent from "@/app/ui/LeftSideLinkComponent"
import PanelsData from "@/lib/PanelsData"
import Enquiry from '@/app/ui/Enquiry'

const data = {
  name: 'AMF Panel',
  mainBanner: '/banner-1.jpg',
  smallBanner: '/banner-1.jpg',
  firstPara: ['Gupta Associates is committed to manufacturing and supplying superior quality AMF (Automatic Main Failure) Panel, using genuine components. The range of panels manufactured by us is Power Inverters, Battery Charger, Automatic Changeover with Current Limit, Automatic Changeover, and Sine Wave Inverters.', 'The designed AMF panels are seamlessly used to manage DG sets. They make the power switch to emergency standby generators in case of a significant loss of main power or total blackout. The panels can be used where generators between the main AC and load where generators are installed. They are used to automatically start or stop the generator and change over the generator lines. Our AMF panels are appropriate for diverse applications and industries, like foundries, apartments, textiles, factories, and so on.'],
  specificationPoints: ['Automatic Mains Failure Detection', 'Continuous Monitoring Of Three-Phase', 'Voltage / Frequency / Current / Of Mains &', 'DG, Available in Different Models', 'Automatic Shutdown during DG Fault', 'Auto / Manual Selector', 'Fault Indicationvia LED / LCD', 'Configurable Solid State Output', 'Genset Stop With Delay 3 Minutes', 'Auto Delay in Start Of Genset', 'Hooter-Alarm Annunciation For Fail to Start', 'Emergency Stop Switch And Manual Start & Stop Switch'],
  secondPara: ['Our AMF panel is a kind of module that is designed under the supervision of highly experienced and knowledgeable engineers and professionals. Several quality inspections are done on different parameters before the delivery of the product. No fault, no default product, no hidden costs! Get in touch for more information about our AMF panel or place your order.'],
  SalientFeatures: ['Easy to install', 'CPRI Approved', 'High Efficiency', 'Longer Service Life', 'Easy Opearation', 'Excellent Performance'],
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
          <Heading text="Product Details With Specifications:" />
          <Points points={data.specificationPoints} />
          <Para texts={data.secondPara} />
          <Heading text="Salient Features of AMF Panels:" />
          <Points points={data.SalientFeatures} />
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
