import AllCategoriesPage from '@/app/ui/AllCategoriesPage'
import fetchCategories from '../lib/fetchCategories';
import fetchBillboards from '../lib/fetchBillboards';

const Page = async () => {

  const billboards = await fetchBillboards();
  const categories = await fetchCategories();
  return (
    <AllCategoriesPage categories={categories} billboards={billboards} />
  )
}

export default Page;
