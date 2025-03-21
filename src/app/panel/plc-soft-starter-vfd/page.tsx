import Image from "next/image"
import LeftSideLinkComponent from "@/app/ui/LeftSideLinkComponent"
import Enquiry from '@/app/ui/Enquiry'
import PanelsData from "@/lib/PanelsData"
import { Para, Heading, Points } from "@/app/ui/PanelsPageComponents"
import WhatsappButton from "@/app/ui/WhatsappButton"
import ScrollToEnquiry from "@/app/ui/ScrollToEnquiry"

const data = {
  name: 'Soft-Starter & VFD Panel',
  mainBanner: '/banner-1.jpg',
  smallBanner: '/banner-1.jpg',
  firstPara: ['Gupta Associates manufactures industry-centric VFD Pannel ( Variable Frequency drive panel) using the most advanced technologies and tools. They are pre-engineered simplex, duplex, and triplex panels with a user-friendly HMI control interface. These panels are the best solution when it comes to controlling the motor, pump, and fan applications in Industries. They are ideal for multiple industries, such as textile, pharma, paper industry, cable industry, and more.', 'At Gupta Associates , we provide you with guaranteed and standard Soft-Starter & amp; VED Panels, which are multifunctional, easy to perform, and easy-to-install. They are designed to control acceleration and declaration of various phases of motors. Our soft-starter & amp; VFD Panels provide you with extensive benefits such as lower stress on motors, energy efficiency, diagnostic capabilities, and process control integration. You can use our product to control motor speed. The bonus point is that lowering motor speed usually increases energy efficiency.'],
  features: ['Optimum Strength', 'Durability', 'Well Designed', 'Technical Effectiveness', 'Efficiency', 'Scaratch Resistant', 'Smooth Operation', 'Standard Quality', 'Economic Rates', 'Achieving Optimum Level Of Power Consumption', 'Dust and Vermin Proof and Much More', 'Designed Using the High Quality Material', 'Comfortable Use for a Longer Period Of Time'],
  secondPara: ['With in-depth industry experience, Gupta Associates provides you with guaranteed and standard VED Panels, which are multifunctional, easy to use, and install. The VFD Panels manufactured and supplied by us provide you with comprehensive benefits such as energy efficiency, lower stress on motors, process control integration, and diagnostic capabilities. Energy efficiency is possible because our product controls the motor speed which leads to less power consumption.'],
  thirdPara: ['The VFD Control panel we supply is packed with advanced features that control the speed of the electric motor and feed pump. They can be used in your drinking, pumping, and other large machine applications, such as compressors and conveyors. These products will meet your requirements of quality standards. They come with a modular design and an excellent power range that can resolve issues in complicated applications easily.'],
  salientFeatures: ['Low maintenance', 'Long Service', 'Thermal Resistance', 'Energy Efficient', 'Sturdy Construction', 'Easy Monitoring', 'High Tensile Strength', 'Supreme Quality'],
  fourthPara: ['On top of that, our VDF Panels are also known for durability, optimum strength, technical effectiveness, efficiency, smooth operation, scratch resistance, economic rates, international quality standards, Optimum Level Of Power Consumption, usage of high-quality materials, and so on.', 'What else? At Gupta Associates, we are committed to manufacturing VDF Panels as per the industry standards under the strict supervision of highly experienced and knowledgeable professionals. The best is we can customize these panels as per your specific requirements.']
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
          <Heading text="Key Features" />
          <Points points={data.features} />
          <Para texts={data.secondPara} />
          <Heading text="Why You Need Our VFD Panel:" />
          <Para texts={data.thirdPara} />
          <Heading text="Salient Features and Specifications:" />
          <Points points={data.salientFeatures} />
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
