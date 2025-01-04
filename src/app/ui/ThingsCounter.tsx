'use client'
import { Children, useEffect, useRef, useState } from "react";

const things = [
  {
    imgUrl: '/productsSold.svg',
    title: 'PRODUCTS SOLD',
    number: 150000
  },
  {
    imgUrl: '/thingEmoji2.png',
    title: 'PINCODES DELIVERED',
    number: 20000
  },
  {
    imgUrl: '/thingEmoji1.png',
    title: 'HAPPY CUSTOMERS',
    number: 20000
  },
]

const ThingsCounter = () => {
  return (
    <div className="h-[100px] bg-white flex items-center justify-around flex-wrap">
      {things.map((thing, index) => {
        return <Counter key={index}{...thing} />
      })}
    </div>
  )
}

const Counter = ({ imgUrl, number, title }: { imgUrl: string, number: number, title: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < number) setCount(count => count + 500)
    }, 1);
    setTimeout(() => {
      clearInterval(interval)
      setCount(number)
    }, 1000)
  }, [])
  return (
    <div className="flex items-center">
      <div className="rounded-2xl h-[40px] w-[40px]">
        <img src={imgUrl} />
      </div>
      <div className="px-1">
        <div className="" >{count}+</div>
        <div className="font-thin text-gray-700 text-xs" >{title}</div>
      </div>
    </div>
  )
}

export default ThingsCounter;
