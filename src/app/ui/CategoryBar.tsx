'use client'
import categories from "@/lib/categoryData"
import AllCategoriesPage from "./AllCategoriesPage"

import { useEffect, useState } from "react"
import category from "../interfaces/category"
import billboard from "../interfaces/billboard"

const CategoryBar = ({ categoriesData, billboards }: { categoriesData: category[], billboards: billboard[] }) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setTimeout(() => {
      setClicked(!clicked)
    }, 10)
  }

  useEffect(() => {
    addEventListener('click', handleBodyClick)
    return () => {
      removeEventListener('click', handleBodyClick)
    }
  })

  const handleBodyClick = () => {
    if (clicked)
      setClicked(false)
  }

  return (
    <div className="h-[45px] w-full flex items-center box-border relative z-40 justify-evenly border-b-2 md:px-20">
      <div className="flex w-full relative ">
        <div className="flex group relative" onClick={handleClick}>
          <div className="w-18 cursor-pointer h-[45px] flex items-center">
            <div className="flex flex-col gap-[3px] mx-3 justify-center mr-2">
              < Bar />
              <Bar />
              <Bar />
            </div >
            <div className="select-none font-bold">All Categories</div>
          </div>
          <div className="hidden bg-white bg-opacity-95 absolute top-[45px] -left-16 md:hidden md:group-hover:block overflow-y-scroll w-[95vw] h-[80vh] scrollbar-hidden shadow-gray-500 shadow-lg rounded-b-lg">
            <AllCategoriesPage categories={categoriesData} billboards={billboards} />
          </div>
        </div>
        <div className={`absolute md:hidden top-[34px] md:max-w-[400px] w-full overflow-hidden bg-white transition-all ${clicked ? '' : 'hidden'} shadow-gray-300 shadow-md rounded-xl flex flex-col gap-1 py-5`}>
          {categories.map((category, index) => {
            return (
              <div key={index} className="justify-center min-h-8 flex">
                <CategoryButton  {...category} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const CategoryButton = ({ name, link, }: { name: string, link: string }) => {
  return (
    <a href={link} className="text-xs hover:text-sm transition-all flex justify-center items-center text-gray-600 w-4/5 border-gray-400 border-[0.5px] min-h-full rounded-xl">
      {name}
    </a>
  )
}
const Bar = () => {
  return (
    <div className={"h-[2px] w-[18px] bg-black"}></div>
  )
}
export default CategoryBar;
