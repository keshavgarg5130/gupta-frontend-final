import ImageBanner from "../ui/ImageBanner"
import OurKeyClients from "../ui/OurKeyClients"
import OurPartnersAboutUs from "../ui/OurPartnersAboutUs"
import OurServices from '../ui/OurServices'

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <img className="fixed z-30 top-0 left-0 w-screen h-screen object-none object-center brightness-[0.65]" src="/factoryImage.webp" />
      <div className="relative z-40 bg-gray-100">
        <div className="hidden md:block relative z-40 bg-gray-100">
          <ImageBanner />
        </div>
        <div className="flex flex-col items-center relative z-40">
          <div className="md:w-3/4 max-w-[1200px] relative md:-top-20 bg-white rounded-lg p-5 md:p-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center text-themeBlue relative">Our Small But Firm Steps
              <div className="w-full -bottom-7 hidden md:block md:h-1 bg-themeBlue rounded-lg"></div>
            </h1>
            <div className="flex flex-col gap-5 p-5 md:p-24 text-gray-600 relative">
              <div>
                Gupta Associates, founded in 2002 by Mr. and Mrs. Ashish Gupta, has evolved significantly over the years. In 2005, the company expanded its expertise by joining the Nokia and Samsung Service Center franchise, marking its initial steps into the electronics and service industry. By 2010, Gupta Associates further broadened its horizon by joining hands with L&T Switchgears, a move that showcased its diversification and commitment to quality.
              </div>
              <div>The journey continued as the company associated with Polycab in 2012, and by 2013, it took another significant step by partnering with Siemens for servicing, solidifying its position in the market. The year 2023 marked a pivotal point with the commencement of panel manufacturing, highlighting two decades of growth and innovation.</div>
              <div>Gupta Associates has successfully undertaken numerous projects over the years, including collaborations with Nagar Nigam in 2010, and undertaking projects for TATA Steel Sahibabad (formerly Bhushan Steel) in 2012. The partnership with the Uttarakhand Sugar Federation in 2015, ESSAR Steel in 2018, and recent projects with Rungta Steel and MSP Steel in 2023. Signifying the company's expertise and trustworthiness in the</div>
              <div>In the last three years, notable projects include TATA Steel in Orissa and Jamshedpur, and Jindal Steel. Furthermore, Gupta Associates has made substantial contributions to major sectors by engaging in projects with Indian Railways Baroni, NTPC, NHPC, GAIL, and the Indian Airforce Hindon Airbase in Ghaziabad.</div>
              <div>Additionally, the company has served renowned clients like Mother Dairy, Indian Potash Ltd., and various sugar mills across North India, showcasing its wide-ranging capabilities and commitment to delivering excellence in every project. Through its journey, Gupta Associates has demonstrated resilience, adaptability, and a drive to innovate, making it a trusted name in the industry.</div>
            </div>
            <div className="w-3/4 h-[1px] bg-gray-400"></div>
            <div className="shadow-gray-300 shadow-2xl rounded-lg w-full flex flex-col items-center gap-9 mt-5">
              <h1 className="text-4xl font-bold text-center text-themeBlue relative">Certificates
                <div className="w-full -bottom-7 h-[2px] bg-themeBlue rounded-lg"></div>
              </h1>
              <div className="flex flex-shrink gap-5 justify-evenly items-center flex-wrap p-2 w-full">
                <img src="/certificate1.jpg" className="w-3/4 md:w-1/4 border" />
                <img src="/certificate2.jpg" className="w-3/4 md:w-1/4 max-h-[250px]" />
                <img src="/certificate3.jpg" className="w-3/4 md:w-1/4 max-h-[250px]" />
              </div>
              <h1 className="text-4xl font-bold text-center text-themeBlue relative">Awards
                <div className="w-full -bottom-7 h-[2px] bg-themeBlue rounded-lg"></div>
              </h1>
              <div className="flex flex-shrink gap-5 justify-evenly items-center flex-wrap p-2 text-sm text-gray-700 font-bold">
                <div className="flex flex-col w-3/4 md:w-1/4">
                  <img src="/award1.png" className="w-full" />
                  <div className="text-center">Highest Perfomance - Segment Sales</div>
                  <div className="text-center">CY 2021</div>
                </div>
                <div className="flex flex-col w-3/4 md:w-1/4">
                  <img src="/award2.png" className="w-full" />
                  <div className="text-center">Consistent Performance Award</div>
                  <div className="text-center">CY 2022</div>
                </div>
                <div className="flex flex-col w-3/4 md:w-1/4">
                  <img src="/award3.png" className="w-full" />
                  <div className="text-center">Best in Consumer Satisfaction</div>
                  <div className="text-center">for Q3'2013</div>
                </div>
              </div>
            </div>
          </div>
          <OurKeyClients />
        </div>
      </div>
      <div className="flex flex-col items-center bg-transparent z-10">
        <OurServices />
      </div>
      <div className="flex flex-col items-center relative bg-gray-100 z-40">
        <OurPartnersAboutUs />
      </div>
    </div >
  )
}

export default AboutUs
