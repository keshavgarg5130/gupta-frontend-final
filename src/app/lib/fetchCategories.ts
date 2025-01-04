import category from "../interfaces/category";

const fetchCategories = async () => {
	return (await fetch('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/categories').then(res => res.json()) as category[])
}

export default fetchCategories;
