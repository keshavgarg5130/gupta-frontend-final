import CategoryPage from "@/app/ui/CategoryPage"


export const metadata = {
	title: 'Mcb Isolator Dealer in India | Gupta Switchgear',
	description: 'At Gupta Switchgears, we offer a premium range of Miniature Circuit Breakers Isolators (ISOLATOR) of Top brands like LT, LK, Siemens. designed for superior protection, durability, and efficiency in power distribution systems. Our Isolators provide reliable circuit protection against overloads, short circuits, and ground faults, ensuring seamless operation for industrial, commercial, and large-scale electrical setups.',
	alternates: {
		canonical: "https://guptaswitchgears.com/isolator",
	},
	robots: {
		index: true, //
		follow: true,}
}

export default function () {
	return (<CategoryPage category="Isolator" />)

}
