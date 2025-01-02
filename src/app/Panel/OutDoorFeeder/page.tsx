import LeftSideLinkComponent from "@/app/ui/LeftSideLinkComponent"
import Enquiry from '@/app/ui/Enquiry'
import Image from "next/image"
import PanelsData from "@/lib/PanelsData"
import { Para, Heading, Points } from "@/app/ui/PanelsPageComponents"
import WhatsappButton from "@/app/ui/WhatsappButton"
import ScrollToEnquiry from "@/app/ui/ScrollToEnquiry"

const data = {
  name: 'Ourdoor Feeder Pillars',
  mainBanner: '/banner-1.jpg',
  smallBanner: '/banner-1.jpg',
  firstPara: ['Rashmi Electricals is a renowned manufacturer and supplier of outdoor feeder pillars. Our feeder pillars are made for outdoor usage for a two-phase and three-phase AC system. They are ideal for outdoor purposes and are widely applicable in different industrial and non-industry applications. Engineers design the product carefully for giving high performance, and demonstrate the robustness and absolute safety.', 'Having state-of-the-art infrastructure, we perform the manufacturing procedure under careful supervision and in a controlled environment. We specialize in designing the pillars as per the specific requirements of the customers. These products meet international standards.'],
  specifications: ['DG Synchronization', 'DG Automation', 'Auto DG On Off', 'Parallel DG Operation', 'Feed Back Control in DG', 'DG PLC System', 'Fuel Saving in DG', 'DG Load Sharing', 'DG Load Management', 'DG efficiency improvement'],
  secondPara: ['By incorporating several resources, top-grade raw materials, and advanced technologies in our manufacturing process, we supply outdoor feeder pillars of excellent quality and are capable of making good quality LT feeder pillars in an extensive variety of applications and conditions. We achieve accurate results in our production. These feeder pillars are perfect for many industries, such as high-rise buildings, Residential Complexes, Townships, Industrial Parks, commercial buildings, offices, malls, etc.'],
  thirdPara: ['Inspired by the ‘Make in India’ initiative and being categorized as one of the micro and small enterprises initiative under NSIC, we manufacture CPRI-approved DG Synchronization Panels that come with diverse features such as:'],
  secondPoints: ['Excellent Components', 'Perfect for Varied Industries', 'Capacity to Control Various Processes with Accuracy', 'Capacity to Control Various Processes with Accuracy', 'Optimum Functionality', 'Manual as Well as Digital Operation', 'Made Up of Very Excellent Quality Materials', 'Equipped With all the Latest Technologies'],
  fourthPara: ['Typically, the outdoor feeder pillar we supply is an excellent electrical enclosure for providing electrical services for low voltage electrical distribution applications. They are compact, robust, corrosion-free, strong, long-lasting, rust-free, and can withstand harsh weather conditions. They are designed carefully for the best performance and demonstrate the robustness and absolute safety.', 'Backed by our ultra-modern manufacturing facility, we manufacture this equipment using advanced technologies and tools under a well-controlled environment and careful supervision. The quality inspection professionals carry out multiple quality checks in different parameters to ensure we can bring the best products to our customers. They review industry standards, research, and common quality standards, set the most important measures, align processes with outcomes, and cross-check document data.']
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
          <Heading text="Features:" />
          <Para texts={data.thirdPara} />
          <Points points={data.secondPoints} />
          <Para texts={data.fourthPara} />
        </div>
      </div>
      <Enquiry />
      <WhatsappButton />
      <ScrollToEnquiry />
    </div>
  )
}

export default Page
