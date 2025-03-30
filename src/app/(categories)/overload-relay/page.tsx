import CategoryPage from "@/app/ui/CategoryPage"


export const metadata = {
	title: 'Overload Relay Dealer in India | Gupta Switchgear',
	description: 'At Gupta Switchgears, we offer a premium range of ' +
		'Overload Relay of Top brands like LT, LK,' +
		' Siemens, Schneider, Havells designed for superior protection' +
		', durability, and efficiency in power distribution systems. Ou' +
		'r Relays provide reliable circuit protection against overloads, sh' +
		'ort circuits, and ground faults, ensuring seamless operation for ' +
		'industrial, commercial, and large-scale electrical setups.',
	alternates: {
		canonical: "https://guptaswitchgears.com/overload-relay",
	},
	robots: {
		index: true, //
		follow: true,}
}

export default function () {
	return (<CategoryPage category="Overload Relay" />)
}
