import Image from "next/image"
import LeftSideLinkComponent from "@/app/ui/LeftSideLinkComponent"
import PanelsData from "@/lib/PanelsData"
import Enquiry from '@/app/ui/Enquiry'
import { Para, Heading, Points } from "@/app/ui/PanelsPageComponents"

const data = {
  name: 'Busduct / Rising mains',
  mainBanner: '/banner-1.jpg',
  smallBanner: '/banner-1.jpg',
  firstPara: ['Gupta Associates is a renowned manufacturer, supplier, distributor, and exporter of supreme quality Bus Duct Rising Mains that are CPRI Approved for 100kA Short Circuit Rating. Indoor vertical erection type, flexible in-line connections, non-magnetic aluminum enclosures, and fixed type tap-off boxes, the bus duct rising mains supplied by us are ideal to be used in multiple industries for effective, efficient, and smooth supply of electricity', 'Precisely engineered by our skilled technicians, these products are made using top-grade components and materials sourced from authentic vendors. Hassle-free operations, long service life, high efficiency, reliable performance, user-friendly operation, long working life, and low maintenance are some of the key features of our bust duct rising mains. Plus, these rising mains are resistant to heat, easy to install, durable, and robust.'],
  keyFeatures: ['Air Insulated', 'Non-Segregated Type', 'Flexible Terminations', 'Also non-Magnetic Aluminum Enclosures', 'Flexible In-line Connections', 'Compact and Standard Design with Simple Structure', 'Easy Joint Systems', 'CPRI Approved For 100kA Short Circuit Rating', 'Flexible In-line Connections', 'Fire Barriers', 'Indoor Vertical Erection Type', 'Fixed Type Tap off Boxes'],
  secondPara: ['Further, the Bus Duct Rising Mains designed and supplied by Gupta Associates are available in Aluminum and other materials to meet requirements. They are primarily custom built suitable to layout, site conditions, and application. What else? Our bus ducts come with important accessories, such as flexible joints to easily connect DG Terminals and transformer terminals.', 'At Gupta Associates, every product undergoes a strict quality check before being delivered to clients. The quality inspection team conducts multiple checkers on different parameters to ensure all standards set by the industry are met. In addition, our bus duct rising mains are available at competitive prices and delivered within the deadline. Get in touch to know more details about our products and place an order.'],
  secondPoints: ['They can control different applications', 'They protect electrical and mechanical systems', 'They help measure and control different Electrical Parameters.', 'They distribute power to electrical machines or systems.'],
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
          <Heading text="Key Features of Busducts/ Rising Mains:" />
          <Points points={data.keyFeatures} />
          <Para texts={data.secondPara} />
        </div>
      </div>
      <Enquiry />
    </div>
  )
}

export default Page
