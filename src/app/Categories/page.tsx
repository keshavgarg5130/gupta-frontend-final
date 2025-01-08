import AllCategoriesPage from '@/app/ui/AllCategoriesPage'
import fetchCategories from '../lib/fetchCategories';
import fetchBillboards from '../lib/fetchBillboards';
import PanelsCategory from '@/lib/PanelsCategory';

const Page = async () => {

  const billboards = await fetchBillboards();
  let categories = await fetchCategories();

  return (
    <AllCategoriesPage categories={categories} billboards={billboards} />
  )
}

export default Page;
