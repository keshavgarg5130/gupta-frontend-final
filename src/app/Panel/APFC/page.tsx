import Image from "next/image"
import LeftSideLinkComponent from "@/app/ui/LeftSideLinkComponent"
import PanelsData from "@/lib/PanelsData"

const data = {
  name: 'APFC / Power Factor Improvement Panel',
  mainBanner: '/banner-1.jpg',
  smallBanner: '/banner-1.jpg',
  firstPara: ['Gupta Associates is one of the leading Automatic Power Factor Improvement Panels manufacturers in the power distribution equipment industry in India. It is popularly known as APFC Panels. It is a prime component used for power improvement and measuring electricity consumption. As its name defines its work and usability that it is an automatic system or capacitor bank unit that improves power factors by switching On and Off as per requirement.', 'A modern power network is inductive and requires a wide variety of reactive power and electronic loads that creates extensive power demand on the power supply system. Most of the reactive power is wasted and not properly used for actual work which leads to the necessity of additional power to run heavy industrial machinery. Keeping this perspective in mind, we deliver the APFC Panels to ensure consistent high power factors without manual interventions. Our panels consist of features including a digital power-saving display, power monitoring display, pluggable current sensor, LED indicators, etc. that offer several benefits which include:'],
  features: ['Perfect to Improve Power Factor', 'User-Friendly Microprocessor Based APFC Relay', 'Self Optimizing Control Capability', 'Dust-Proof Cabinet With Power Coating', 'Perfect Control With Different System Parameters Measurement With Indicating Light', 'Cost Effective Reliable Static Devices', 'Durable Construction'],
  secondPara: ['Ingeniously designed, our panel provides a unique solution to meet the variations of loads. Our panels consist of multiple capacitors, and a microprocessor controller that understands the power consumption, improves capacitance energy saving at peak and low energy demand levels, magnetizes the current, and optimizes real-time energy uses. Moreover, it is used in conjunction with applications with Bluetooth connection, and many other renewable energy sources such as wind turbines, solar panels, and inverters as well.'],
  specifications: ['Non-Compartmentalized', 'MOdular Design For Easier Assembly, Installation & Maintenance', 'Automatic Power Factor Correction', '4-14 Correction Stages', 'Optimum Reactive Power Compensation', 'Indoor', 'Floor Mounted', 'Cable Entry From Bottom', 'Better Reliability And Lower Losses', 'Withstands High Temperature', 'Step Protection MCCB', 'Savings And Incentives in Electricity Bills'],
  thirdPara: ['Benefits of APFC panels include shortening mal-operation of diesel generation sets, avoiding over-voltages, voltage fluctuations, and power issues, delivering smooth power factor to avoid sound and disturbance, overcoming electrical issues and maintaining a consistent power factor. The panels also reduce operational losses occur due to a lack of leading power and minimize the higher electricity bills and heavy penalties led by the power distribution authorities. They can be used in a wide range of industries like.'],
  secondPoints: ['Hospitals / Hostels', 'Building Segment', 'Steel Rolling Mills', 'Chemical Industry', 'Textile', 'Cement Plant', 'Sugar Plant', 'Automobile Industry']
}

const Page = () => {
  return (
    <div className="bg-gray-100">
      <div>
        <Image src={data.mainBanner} alt={data.name} width={2000} height={1000} />
      </div>
      <div className="flex flex-col md:flex-row md:gap-5 md:px-5">
        <div className="hidden md:block">
          <LeftSideLinkComponent data={PanelsData} />
        </div>
        <div className="lg:w-[1200px] md:w-[570px] relative md:-top-8 rounded-lg bg-white px-6 py-10 md:px-10 lg:p-20 shadow-xl shadow-gray-300 gap-5 md:font-semibold text-gray-500">
          <Image src={data.smallBanner} alt={data.name} height={800} width={700} className="rounded-lg hidden md:block mb-5" />
          <Heading text={data.name} />
          <Para texts={data.firstPara} />
          <Heading text="Some of the key features of our APFC products are:" />
          <Points points={data.features} />
          <Para texts={data.secondPara} />
          <Heading text="Product Specifications" />
          <Points points={data.specifications} />
          <Para texts={data.thirdPara} />
          <Points points={data.secondPoints} />
        </div>
      </div>
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
