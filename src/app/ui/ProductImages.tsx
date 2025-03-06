"use client"

import React, { useState } from 'react'
import Image from 'next/image'

interface imageInterface {
  id: string,
  url: string
}

const ProductImages = ({ images }: { images: imageInterface[] }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className='h-[500px] relative '>
        <Image src={images[index].url}
          alt='image'
          fill
          className='object-cover rounded-md border'
          sizes='50vw' />

      </div>
      <div className='flex justify-between gap-4 mt-8'>
        {images.map((img, i) => (
          <div key={img.id}
            className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer'
            onClick={() => setIndex(i)}>
            <Image src={img.url}

              alt='image'
              height={100} width={100}
              className='object-cover rounded-md border'
              sizes='30vw' />
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProductImages
