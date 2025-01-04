import Image from "next/image"
import Enquiry from '@/app/ui/Enquiry'
import LeftSideLinkComponent from "@/app/ui/LeftSideLinkComponent"
import PanelsData from "@/lib/PanelsData"
import { Para, Heading, Points } from "@/app/ui/PanelsPageComponents"
import WhatsappButton from "@/app/ui/WhatsappButton"
import ScrollToEnquiry from "@/app/ui/ScrollToEnquiry"

const data = {
  name: 'PLC Panel / SCADA System',
  mainBanner: '/banner-1.jpg',
  smallBanner: '/banner-1.jpg',
  firstPara: ['Get customized PLC Panels/SCADA System at an affordable price, which is designed, developed and manufactured by using high quality raw materials. Our PLC Panels are applicable for Power, Process, and Manufacturing & Automation Industries. They are compatible for diverse Industrial protocols to connect to SCADA, Control, Monitor &. They are low cost machine-automation systems that come with PLC control panel, HMI interface and Web enabled SCADA system.'],
  systemIntegrations: ['PLC Control Panel with HMI Interface', 'Web Enabled SCADA System', 'Solutions Delievered at Very Competitive Prices', 'Low Cost machine-Automations System', 'Based on Ebmedded Technology for OEM', 'System Designed using Known Brands of PLC  Hardware', 'Complete Project Handling from Concepts to Commissiong', 'PLC System work station (SCADA)'],
  features: ['Cost Effective', 'User Friendly', 'Efficient Performance', 'Quality Tested', 'Highly Reliabel', 'Excellent Functionality', 'Robust Structure'],
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
          <Heading text="System Integration Service Features:" />
          <Points points={data.systemIntegrations} />
          <Heading text="Features:" />
          <Points points={data.features} />
        </div>
      </div>
      <Enquiry />
      <WhatsappButton />
      <ScrollToEnquiry />
    </div>
  )
}

export default Page
