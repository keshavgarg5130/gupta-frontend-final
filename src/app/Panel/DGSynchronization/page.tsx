import Image from "next/image"
import LeftSideLinkComponent from "@/app/ui/LeftSideLinkComponent"
import PanelsData from "@/lib/PanelsData"
import Enquiry from '@/app/ui/Enquiry'
import { Para, Heading, Points } from "@/app/ui/PanelsPageComponents"
import WhatsappButton from "@/app/ui/WhatsappButton"
import ScrollToEnquiry from "@/app/ui/ScrollToEnquiry"

const data = {
  name: 'DG Synchronization Panel',
  mainBanner: '/banner-1.jpg',
  smallBanner: '/banner-1.jpg',
  firstPara: ['Gupta Associates is a leading manufacturer, supplier, and distributor of advanced DG Synchronization Panel that controls the functionality of several diesel generator sets. Backed with decades of experience and domain expertise, we are able to manufacture, supply, and install a wide range of panels to meet the specific requirements of our esteemed clients. Our range of products includes DG to DG synchronization, DG to MAINS (GRID) synchronization, and Reverse synchronization, based on load generation.', 'Having domain expertise, we are capable of manufacturing, designing, installing, and commissioning a qualitative range of DG Synchronization Panel as per the demand of our esteemed clients. We provide DG to DG synchronization, DG to MAINS (GRID) synchronization, and Reverse synchronization, based on load generation. Some of the specific features of our panel include excellent components, perfect for varied industries, capacity to control various processes with accuracy, Optimum functionality, and manual as well as digital operation.'],
  specifications: ['DG Synchronization', 'DG Automation', 'Auto DG On Off', 'Parallel DG Operation', 'Feed Back Control in DG', 'DG PLC System', 'Fuel Saving in DG', 'DG Load Sharing', 'DG Load Management', 'DG efficiency improvement', 'Excellent Components', 'Perfect for Varied Industries', 'Optimum Functionality', 'Manual as Well as Digital Operation', 'Made Up of Very Excellent Quality Materials', 'Equipped With all the Latest Technologies'],
  secondPara: ['DG Synchronization Panels offer complete controlling and protection relays that can simultaneously synchronize several DG sets. These panels require less space, are easy to use, and are corrosion-resistant. They offer high efficiency and are precision engineered. They can perform multiple functions, like starting, sharing, transferring, and stopping load variations.', 'Our CPRI-approved DG Synchronization Panels are packed with diverse features, such as excellent components, perfect for varied industries, capacity to control various processes with accuracy, Optimum functionality, and manual as well as digital operation.'],
  secondPoints: ['Manual as well as Digital Operatoin', 'Made Up of top-Quality materials', 'Indoor / Ourdoor type Structure', 'Single front/double front Operated', 'Panel structure with MS CRCA/SS', 'Extensible for future use', 'Rubber Gaskets to meet IP requirements', 'Heat Dissipation using Exhaust Fan or Lowers.'],
  thirdPara: ['Inspired by the ‘Make in India’ initiative and is categorized as one of the micro and small enterprises initiatives under NSIC, we manufacture CPRI-approved DG Synchronization Panels that come with diverse features such as:', 'At Gupta Associates, we are committed to manufacturing panels using top-grade raw materials and modern machines under the supervision of a highly skilled and experienced team. If you are looking out for a higher reliable and trusted DG synchronizing panel manufacturer in India, then get in touch with Gupta Associates. We offer highly sophisticated equipment and quality after-sale customer service.']
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
          <Heading text="Product Specifications:" />
          <Points points={data.specifications} />
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
