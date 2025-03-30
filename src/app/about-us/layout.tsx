import { ReactNode } from "react";


export const metadata = {
  title: 'Gupta Switchgear | Electrical Switchgear Dealer in India',
  description: 'At Gupta Switchgears, we offer a premium range of ' +
      'Electrical Components and Switchgear of Top brands like LT, LK,' +
      ' Siemens, Schneider, Havells designed for superior protection' +
      ', durability, and efficiency in power distribution systems. ' +
      'We also manufacture and supply a wide range of ' +
      'Electrical panels made with high-quality materials and components ' +
      'for industrial, commercial, and large-scale electrical setups.',
  alternates: {
    canonical: "https://guptaswitchgears.com/about-us",
  },
  robots: {
    index: true, //
    follow: true,}
}

const Layout = ({
  children
}: {
  children: Readonly<ReactNode>
}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout;
