import { ReactNode } from "react"


export const metadata = {
  title: 'Gupta Switchgear | Contact Us',
  description: 'You can contact us on out email address(info@guptaswitchgears.com) or call us on our phone number(+91 9311440607,+91 9818091111,+91 9717419853). Given on the website . We have more products than listed on the website. If you want to buy any product , or have any enquiry, you can contact us.',
  alternates: {
    canonical: "https://guptaswitchgears.com/contact-us",
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
