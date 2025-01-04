import category from "../interfaces/category";

export const revalidate = 3600;

const fetchCategories = async () => {
	return (await fetch('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/categories', {
		cache: 'force-cache'
	}).then(res => res.json()) as category[])
}

export default fetchCategories;
