export const revalidate = 3600;
const fetchBillboard = async (bannerId: string) => {
	return (await fetch('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/billboards/' + bannerId, { cache: 'force-cache' }).then(res => res.json())).imageUrl
}

export default fetchBillboard
