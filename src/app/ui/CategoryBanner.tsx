'use client'
import { useEffect, useState } from "react";
import fetchBillboard from "../lib/fetchBillboard"
import OptimizedImage from "@/app/components/OptimizedImage";

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
        <OptimizedImage alt={"MCCB,ACB"} src={url} className="max-h-[500px]" />
      </div>
    )
  return (<div className="w-full max-h-[500px] min-h-[300px] bg-white box-border m-3 mx-10 rounded-lg"></div>)
}

export default CategoryBanner
