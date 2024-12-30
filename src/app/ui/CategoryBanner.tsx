import fetchBillboard from "../lib/fetchBillboard"

const CategoryBanner = async ({ bannerId }: { bannerId: string }) => {

  let url = ''
  if (bannerId)
    url = await fetchBillboard(bannerId);
  if (url)
    return (
      <div className="mt-2">
        <img src={url} className="max-h-[500px]" />
      </div>
    )
  return (<div className="w-full max-h-[500px] min-h-[300px] bg-white box-border m-3 mx-10 rounded-lg"></div>)
}

export default CategoryBanner
