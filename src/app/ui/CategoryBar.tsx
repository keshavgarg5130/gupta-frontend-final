'use client'
import categories from "@/lib/categoryData"

import { useState } from "react"

const CategoryBar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <div className="h-[45px] w-full bg-white flex items-center box-border relative z-40 justify-evenly border-b-2 ">
      <div className="flex w-full sm:hidden relative" onClick={handleClick}>
        <div className="flex flex-col gap-[3px] mx-3 justify-center mr-2">
          <Bar />
          <Bar />
          <Bar />
        </div>
        <div>Categories</div>
        <div className={`absolute top-[34px] w-full overflow-hidden bg-white ${clicked ? '' : 'h-0'}`}>
          {categories.map((category, index) => {
            return (
              <div key={index} className="justify-center py-2 border flex transition-[h]">
                <CategoryButton  {...category} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="hidden sm:flex h-[45px] w-full bg-white items-center box-border justify-evenly flex-grow">
        {categories.map((category, index) => {
          return <CategoryButton key={index} {...category} />
        })}
      </div>
    </div>
  )
}

const CategoryButton = ({ name, link, }: { name: string, link: string }) => {
  return (
    <a href={link} className="text-xs font-semibold hover:text-sm hover:shadow-lg transition-all w-full h-full flex justify-center items-center">
      {name}
    </a>
  )
}

const Bar = () => {
  return (
    <div className="h-[2px] w-[18px] bg-black"></div>
  )
}

export default CategoryBar;
