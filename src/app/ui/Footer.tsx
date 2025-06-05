import { PropsWithChildren } from "react"
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'
import Image from "next/image";
const iconsUrls = ['/footerIcon1.png', '/footerIcon2.png', '/footerIcon3.png', '/footerIcon4.png', '/footerIcon5.svg']

const footerContents = [
  {
    header: 'About Us',
    labels: [{
      lable: 'About GuptaSwitches',
      redirectsTo: '/about-us',
    },
      {
        lable: 'GuptaSwitchgears',
        redirectsTo: '/',
      }]
  },
  {
    header: 'Our Products',
    labels: [{
      lable: 'acb',
      redirectsTo: '/acb',
    }, {
      lable: 'mccb',
      redirectsTo: '/mccb',
    }, {
      lable: 'Overload Relay',
      redirectsTo: '/overload-relay',
    }, {
      lable: 'Power Contactors',
      redirectsTo: '/power-contractor',
    }, {
      lable: 'Wires & Cables',
      redirectsTo: '/wires-and-cables',
    }]
  },
  {
    header: 'Help',
    labels: [{
      lable: 'Terms and Conditions',
      redirectsTo: '/terms-conditions',
    }, {
      lable: 'Shipping Policy',
      redirectsTo: '/shipping-policy',
    }, {
      lable: 'Return and Refund Policy',
      redirectsTo: '/return-refund-policy',
    }, {
      lable: 'Privacy Policy',
      redirectsTo: '/privacy-policy',
    }]
  },
  {
    header: 'Contact ',
    labels: [{
      lable: 'Contact Us',
      redirectsTo: '/contact-us',
    }, {
      lable: '+91 9311440607',
      redirectsTo: 'tel: +91-9311440607 (Sales)',
    }, {
      lable: '+91 9818091111',
      redirectsTo: 'tel: +91-9818091111 (Sales)',
    }, {
      lable: '+91 9717419853',
      redirectsTo: 'tel: +91-9717419853 (Sales)'
    }, {
      lable: 'info@guptaswitchgears.com',
      redirectsTo: 'mailto:guptaswitchgears.com',
    }]
  }
]

const Footer = () => {
  return (
    <div className="min-h-[380px] bg-[#353332] px-5 md:px-20 py-10 text-white pb-20 md:pb-4 relative z-50">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="box-border h-[50px] flex justify-center mb-4">
          <Image alt='GuptaSwitchgearLogo' height={50} width={50} src="/logoOG.jpeg" className="h-full" />
        </div>
        <div className="flex gap-3 justify-evenly">
          <Instagram />
          <Twitter />
          <Linkedin />
          <Facebook />
        </div>
      </div>
      <div className="h-[0.1px] my-4 w-full bg-[#454545]"></div>
      <div>
        <div className="flex m-1 flex-wrap gap-0">
          {footerContents.map((block, index) => {
            return (
              <div className="flex flex-col max-w-[250px] items-center md:items-start flex-1" key={index}>
                <Heading>{block.header}</Heading>
                <div className="flex flex-col items-center md:items-start">
                  {block.labels.map((label, index) => {
                    return <Label key={index} redirectsTo={label.redirectsTo}>{label.lable}</Label>
                  })}
                </div>
              </div>
            )
          })}
          <div className="flex flex-col items-center flex-1">
            <span className="font-bold text-lg">Reach Us</span>
            <a href={process.env.GOOGLE_LOCATION} className="max-w-[350px] max-h-[350px]" target="_blank">
              <Image alt='GuptaSwitchgearLocationImage' src="/guptaImages.png" height={350} width={350} className="h-full w-full" />
            </a>
          </div>
        </div>
      </div>
    </div >
  )
}

const Heading: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="font-bold w-max mb-6 text-lg">{children}</div>
}

const Label: React.FC<PropsWithChildren<{ redirectsTo: string }>> = ({ children, redirectsTo }) => {
  return <a className="block w-max group relative text-sm font-thin my-1 md:my-3 hover:font-bold transition-all" href={redirectsTo}>{children}
    <span className="absolute w-0 group-hover:w-full transition-all h-[1px] bg-white bottom-0 left-0"></span>
  </a>
}

export default Footer;
