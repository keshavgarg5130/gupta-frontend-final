import CategoryPage from "@/app/ui/CategoryPage";

export const metadata = {
	title: 'ACB Dealer in India | Gupta Switchgear',
	description: 'At Gupta Switchgears, we offer a premium range of Air Circuit Breakers (ACBs) of Top brands like LT, LK, Siemens. designed for superior protection, durability, and efficiency in power distribution systems. Our ACBs provide reliable circuit protection against overloads, short circuits, and ground faults, ensuring seamless operation for industrial, commercial, and large-scale electrical setups.',
	alternates: {
		canonical: "https://guptaswitchgears.com/acb",
	},
	robots: {
		index: true, //
		follow: true,}
}
export default function () {
	return (<CategoryPage category="ACB" />)
}
