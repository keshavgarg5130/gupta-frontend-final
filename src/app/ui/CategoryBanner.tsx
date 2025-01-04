'use client'
import { useEffect, useState } from "react";
import fetchBillboard from "../lib/fetchBillboard"

const CategoryBanner = ({ bannerId }: { bannerId: string }) => {

  const [url, setUrl] = useState('');
  useEffect(() => {
    const getUrl = async () => {
      setUrl(await fetchBillboard(bannerId));
    }
    getUrl();
  }, [])
  if (url)
    return (
      <div className="mt-2">
        <img src={url} className="max-h-[500px]" />
      </div>
    )
  return (<div className="w-full max-h-[500px] min-h-[300px] bg-white box-border m-3 mx-10 rounded-lg"></div>)
}

export default CategoryBanner
