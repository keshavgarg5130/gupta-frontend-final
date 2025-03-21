import Image from "next/image"
import LeftSideLinkComponent from "@/app/ui/LeftSideLinkComponent"
import Enquiry from '@/app/ui/Enquiry'
import PanelsData from "@/lib/PanelsData"
import { Para, Heading, Points } from "@/app/ui/PanelsPageComponents"
import WhatsappButton from "@/app/ui/WhatsappButton"
import ScrollToEnquiry from "@/app/ui/ScrollToEnquiry"

const data = {
  name: 'Load Sharing Panel',
  mainBanner: '/banner-1.jpg',
  smallBanner: '/banner-1.jpg',
  firstPara: ['Get ultramodern load sharing panels at a reasonably priced cost, which helps you control the unit in standalone mode i.e. frequency control and power control, or share loads between generators and interfaces through an electronic potentiometer. Gupta Associates is a leading Load Sharing panel manufacturer, dealing in manufacturing, supplying, trading, and exporting standard quality load-sharing panels in the global market.', 'The load-sharing panel is a process that facilitates the operation of multiple generators at the same time in parallel.  It is a proportional unit of active and reactive power of generator sets.  Our Load Sharing Units make sure smooth load sharing between generators and interfaces to a governor through an electronic potentiometer. It is appropriate for controlling gas and diesel generators.'],
  salientFeatures: ['Of controlling the power unit in stand-alone made (performing frequency control)', 'Parallel with grid (performing power control)', 'Or parallel with other power units (performing frequency and power control).'],
  secondPara: ['A single 300 KW generator has no load sharing so it shuts down without warning, but parallel generators come along with load sharing panels that adjust the load demands. In simple words, the generator sets have a higher risk of overloading an alternator that creates unstable energy flow. Load sharing plays a vital role to keep avoiding, fluctuation, stability, and overloading problems of the backup generator system.', 'Our sharing panels support parallel operations that improve the generator power backup capacity and increase the high energy output requirement. It avoids the risk of a power grid or generator damage due to insatiable energy flow and acts as a backup to the other. It also delivers redundancy to power grids at peak load demands.'],
  specifications: ['Easy-to set-up and use', 'High-tech contorols', 'Easily Installation', '', 'Optimum performance', 'High efficiency', 'Rugged structure', 'Longer service life', 'Pace saver design', 'User friendly operation', 'Higher capacity', 'Superior performance'],
  thirdPara: ['With the advantage of load-sharing panels, various operations rely on them to sustain equipment running continuously. It is very beneficial in frequent ongoing and changing power so it is widely used for large-scale operations and great applications such as power plants, data centers, construction sites, health care facilities, grow operations, telecommunications, and many more.'],
  fourthPara: ['Our load-sharing panels have several benefits, including shock resistance, sturdy and durable structure, ease of installation, and minimal maintenance requirements that improve flexibility, reliability, and power backup efficiency. It also increases the saving cost by providing the best load balance using the least amount of fuel.', 'At Gupta Associates, our load-sharing pales are designed by ingenious technocrats that serve the industry with quality-approved products at the best industrial prices.']
}

const Page = () => {
  return (
    <div className="bg-gray-100">
      <div>
        <Image src={data.mainBanner} alt={data.name} width={2000} height={1000} />
      </div>
      <div className="flex flex-col md:flex-row md:gap-5 md:px-5">
        <div className="hidden md:block">
          <LeftSideLinkComponent data={PanelsData} heading='Panels' />
        </div>
        <div className="lg:w-[1200px] md:w-[570px] relative md:-top-8 rounded-lg bg-white px-6 py-10 md:px-10 lg:p-20 shadow-xl shadow-gray-300 gap-5 md:font-semibold text-gray-500">
          <Image src={data.smallBanner} alt={data.name} height={800} width={700} className="rounded-lg hidden md:block mb-5" />
          <Heading text={data.name} />
          <Para texts={data.firstPara} />
          <Heading text="Salient Features" />
          <Points points={data.salientFeatures} />
          <Heading text="Some of the Key Specifications include:" />
          <Points points={data.specifications} />
          <Heading text="Used for applications:" />
          <Points points={data.thirdPara} />
          <Heading text="Benefits:" />
          <Points points={data.fourthPara} />
        </div>
      </div>
      <Enquiry />
      <WhatsappButton />
      <ScrollToEnquiry />
    </div>
  )
}

export default Page
