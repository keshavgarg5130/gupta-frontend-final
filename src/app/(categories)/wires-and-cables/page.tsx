import CategoryPage from "@/app/ui/CategoryPage"


export const metadata = {
	title: 'Wires and Cables Dealer in India | Gupta Switchgear',
	description: 'At Gupta Switchgears, we offer a premium range of ' +
		'Wires and cables of Top brands like '+
		' Polycab designed for superior protection' +
		', durability, and efficiency in power distribution systems. Ou' +
		'r Cables and wires provide reliable circuit protection against overloads, sh' +
		'ort circuits, and ground faults, ensuring seamless operation for ' +
		'industrial, commercial, and large-scale electrical setups.',
	alternates: {
		canonical: "https://guptaswitchgears.com/wires-and-cables",
	},
	robots: {
		index: true, //
		follow: true,}
}

export default function () {
	return (<CategoryPage category="Wires and Cables" />)
}
