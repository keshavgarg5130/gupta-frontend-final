import CategoryPage from "@/app/ui/CategoryPage"


export const metadata = {
	title: 'Mccb Dealer in India | Gupta Switchgear',
	description: 'At Gupta Switchgears, we offer a premium range of ' +
		'Molded Case Circuit Breaker (MCCB) of Top brands like LT, LK,' +
		' Siemens, Schneider, Havells designed for superior protection' +
		', durability, and efficiency in power distribution systems. Ou' +
		'r MCCBs provide reliable circuit protection against overloads, sh' +
		'ort circuits, and ground faults, ensuring seamless operation for ' +
		'industrial, commercial, and large-scale electrical setups.',
	alternates: {
		canonical: "https://guptaswitchgears.com/mccb",
	},
	robots: {
		index: true, //
		follow: true,}
}


export default function () {
	return (<CategoryPage category="MCCB" />)
}
