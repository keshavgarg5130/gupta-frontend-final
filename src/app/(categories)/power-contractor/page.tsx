import CategoryPage from "@/app/ui/CategoryPage"


export const metadata = {
	title: 'Power Contractor Dealer in India | Gupta Switchgear',
	description: 'At Gupta Switchgears, we offer a premium range of ' +
		'Power Contractor of Top brands like LT, LK,' +
		' Siemens, Schneider, Havells designed for superior protection' +
		', durability, and efficiency in power distribution systems. Ou' +
		'r Power Contractors provide reliable circuit protection against overloads, sh' +
		'ort circuits, and ground faults, ensuring seamless operation for ' +
		'industrial, commercial, and large-scale electrical setups.',
	alternates: {
		canonical: "https://guptaswitchgears.com/power-contractor",
	},
	robots: {
		index: true, //
		follow: true,}
}

export default function () {
	return (<CategoryPage category="Power Contractor" />)
}
