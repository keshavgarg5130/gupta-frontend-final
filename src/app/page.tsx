import ImageBanner from "./ui/ImageBanner";
import CategoryIconRow from "./ui/CategoryIconRow";
import ThingsCounter from "./ui/ThingsCounter";
import OurParteners from "./ui/OurParteners";
import FeaturedProductsServer from "./ui/FeaturedProductsServer";
import Enquiry from "./ui/Enquiry";
import { ComparisonSlider } from "./ui/ComparisonSlider";
import WhatsappButton from './ui/WhatsappButton'
import ScrollToEnquiry from "./ui/ScrollToEnquiry";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <ImageBanner />
      <ThingsCounter />
      <div className="flex justify-center py-2">
        <div className="h-[2px] bg-gray-300 w-11/12" />
      </div>
      <FeaturedProductsServer />
      <ComparisonSlider beforeImage="/before.jpg" afterImage="/after.png" />
      <OurParteners />
      <div className="flex justify-center py-2">
        <div className="h-[2px] bg-gray-300 w-11/12" />
      </div>
      <Enquiry />
      <WhatsappButton />
      <ScrollToEnquiry />
    </div>
  );
}
