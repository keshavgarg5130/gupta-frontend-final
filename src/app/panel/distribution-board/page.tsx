import Image from "next/image"
import LeftSideLinkComponent from "@/app/ui/LeftSideLinkComponent"
import Enquiry from '@/app/ui/Enquiry'
import PanelsData from "@/lib/PanelsData"
import { Para, Heading, Points } from "@/app/ui/PanelsPageComponents"
import WhatsappButton from "@/app/ui/WhatsappButton"
import ScrollToEnquiry from "@/app/ui/ScrollToEnquiry"

const data = {
  name: 'Distribution Board Panels',
  mainBanner: '/banner-1.jpg',
  smallBanner: '/banner-1.jpg',
  firstPara: ['Leveraging cutting-edge technologies, Gupta Associates manufacturers and supplies Distribution Board Panels of international standards. Our panels are fully type-tested assemblies, designed with accuracy using premium quality raw materials, and electrical and high-efficiency components. They are packed with multiple components such as bus bars, switches, fuse links, bypass equipment, and residual current detector (RSD).'],
  specificationPoints: ['Resistant to corrosion', 'Excellent performance', 'Cost effective', 'Varied enclosure options', 'Interlock', 'External handles in off position and much more'],
  secondPara: ['Suitable for both industrial and domestic sectors, these panels are perfect for distributing and supplying power. They are powerful enough to distribute the power supply evenly throughout the building using different circuits. Also, they direct power from one or more sources of supply to different loads. They allow electrical power to be redirected, allowing division and control of the power supplied to the switchboard for further distribution.', ' In addition, the distribution-board panels designed by us can automatically cut off electric current in case of overload or occurrence of some other anomaly. They have the ability to prevent circuits from overheating due to a defective appliance or a wiring problem.'],
  secondPoints: ['They can control different applications', 'They protect electrical and mechanical systems', 'They help measure and control different Electrical Parameters.', 'They distribute power to electrical machines or systems.'],
  thirdPara: ['As a leading manufacturer and supplier, Gupta Associates offers customized distribution-board panels that can be varying sizes with single or double front access. The equipment can be used in indoor or outdoor applications. They come with different load capacities. In addition, the panels are resistant to corrosion, cost-effective, impart excellent performance, and have various enclosure options, external handles in off position, and much more.', 'They are sturdy, firm, strong, and resilient in their construction with high accuracy. In addition, we manufacture board panels using high-quality components that are sourced from popular vendors.']
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
          <Heading text="Product Specifications" />
          <Points points={data.specificationPoints} />
          <Para texts={data.secondPara} />
          <Points points={data.secondPoints} />
          <Para texts={data.thirdPara} />
        </div>
      </div>
      <Enquiry />
      <WhatsappButton />
      <ScrollToEnquiry />
    </div>
  )
}

export default Page
