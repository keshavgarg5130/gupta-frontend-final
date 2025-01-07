import ImageBanner from "../ui/ImageBanner"
import Enquiry from "../ui/Enquiry"
import OurKeyClients from "../ui/OurKeyClients"
import OurServices from "../ui/OurServices"
import OurPartnersAboutUs from "../ui/OurPartnersAboutUs"
import { MapPin, Phone } from "lucide-react"
import { Mail } from "lucide-react"

const Page = () => {
  return (
    <div className="bg-gray-100">
      <img className="fixed z-30 top-0 left-0 w-screen h-screen object-none object-center brightness-[0.65]" src="/factoryImage.webp" />
      <div className="relative z-40 bg-gray-100">
        <div className="hidden md:block relative z-40 bg-gray-100">
          <ImageBanner />
        </div>
        <div className="flex flex-col items-center relative z-40">
          <div className="md:w-3/4 max-w-[1200px] relative md:-top-20 bg-white rounded-lg p-5 md:p-10 flex flex-col items-center shadow-gray-500 shadow-lg my-5">
            <Enquiry />
          </div>
          <div className="md:w-3/4 max-w-[1200px] relative md:-top-20 bg-white rounded-lg p-5 md:p-10 flex items-center shadow-gray-500 shadow-lg my-5 text-themeBlue gap-5 flex-wrap justify-center">
            <div className="flex flex-col justify-center gap-6 border-[1px] rounded-xl p-5 shadow-lg shadow-gray-500 flex-1 items-center py-10">
              <div className="text-3xl font-bold">Gupta Associates</div>
              <div className="flex flex-col gap-6 h-[130px]">
                <a className="flex gap-2" href="https://maps.app.goo.gl/7r2SxZUTjZfJgPE66" target="_blank">
                  <MapPin color='#0c77b6'/>
                  <div>4,5 GT Road Ghaziabad</div>
                </a>

                <a className="flex gap-2" href="tel: +91 9818091111 (Sales)" target="_blank">
                  <Phone color='#0c77b6'/>
                  <div>+91 9818091111</div>
                </a>
                <a className="flex gap-2" href="https://maps.app.goo.gl/7r2SxZUTjZfJgPE66" target="_blank">
                  <div>GST NO. - 09AJCPG6279Q2ZF</div>
                </a>
              </div>
            </div>
            <div
                className="flex flex-col justify-center gap-6 border-[1px] rounded-xl p-5 shadow-lg shadow-gray-500 flex-1 items-center py-10">
              <div className="text-3xl font-bold">Contact Us</div>
              <div className="flex flex-col gap-6 h-[130px]">
                <a className="flex gap-2" href="tel: +91 9999706609 (Sales)" target="_blank">
                  <Phone color='#0c77b6' />
                  <div>+91 9999706608</div>
                </a>
                <a className="flex gap-2" href="tel: +91 9311440607 (Sales)">
                  <Phone color='#0c77b6' />
                  <div>+91 9311440607</div>
                </a>
                <a className="flex gap-2" href="mailto:info@guptaswitchgears.com" target="_blank">
                  <Mail color='#0c77b6' />
                  <div>info@guptaswitchgears.com</div>
                </a>
              </div>
            </div>
          </div>
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


export default Page
