import PanelsPage from "../ui/PanelsPage"
import panelsInterface from "../interfaces/panels"

const data: panelsInterface = {
  name: 'Automatic Street Light Switching Panels',
  mainBanner: '/banner-1.jpg',
  smallBanner: '/banner-1.jpg',
  firstPara: ['Leveraging cutting-edge technologies, Rashmi Electricals manufacturers and supplies Distribution Board Panels of international standards. Our panels are fully type-tested assemblies, designed with accuracy using premium quality raw materials, and electrical and high-efficiency components. They are packed with multiple components such as bus bars, switches, fuse links, bypass equipment, and residual current detector (RSD).'],
  specificationPoints: ['Resistant to corrosion', 'Excellent performance', 'Cost effective', 'Varied enclosure options', 'Interlock', 'External handles in off position and much more'],
  secondPara: ['Suitable for both industrial and domestic sectors, these panels are perfect for distributing and supplying power. They are powerful enough to distribute the power supply evenly throughout the building using different circuits. Also, they direct power from one or more sources of supply to different loads. They allow electrical power to be redirected, allowing division and control of the power supplied to the switchboard for further distribution.', ' In addition, the distribution board panels designed by us can automatically cut off electric current in case of overload or occurrence of some other anomaly. They have the ability to prevent circuits from overheating due to a defective appliance or a wiring problem.'],
  secondPoints: ['They can control different applications', 'They protect electrical and mechanical systems', 'They help measure and control different Electrical Parameters.', 'They distribute power to electrical machines or systems.'],
  thirdPara: ['As a leading manufacturer and supplier, Rashmi Electricals offers customized distribution board panels that can be varying sizes with single or double front access. The equipment can be used in indoor or outdoor applications. They come with different load capacities. In addition, the panels are resistant to corrosion, cost-effective, impart excellent performance, and have various enclosure options, external handles in off position, and much more.', 'They are sturdy, firm, strong, and resilient in their construction with high accuracy. In addition, we manufacture board panels using high-quality components that are sourced from popular vendors.']
}

const Page = () => {
  return (
    <div>
      <PanelsPage {...data} />
    </div>
  )
}

export default Page
