
export const metadata = {
  title: 'AMF Panels | Gupta Switchgear',
  description: 'At Gupta Switchgears, we manufacture and supply a wide range of ' +
      'Panels made with high-quality materials and components for industrial, ' +
      'commercial, and large-scale electrical setups. Our panels are designed ' +
      'to meet the specific requirements of our clients, ensuring optimal performance ' +
      'and reliability in power distribution systems. Our panels are available in All over India'
,
  alternates: {
    canonical: "https://guptaswitchgears.com/panels/amf",
  },
  robots: {
    index: true, //
    follow: true,}
}
const Layout = ({
  children
}: {
  children: Readonly<React.ReactNode>
}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout;
