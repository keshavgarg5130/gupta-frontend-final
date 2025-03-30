'use client'
import Slider from 'react-slick'
import fetchBillboards from '../lib/fetchBillboards'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const ImageBanner = () => {
  const [images, setImages] = useState<string[]>([]);
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slideToScroll: 1
  }

  useEffect(() => {
    const banners = async () => {
      const bannerData = (await fetchBillboards())
          .filter(billboard => parseInt(billboard.label))
          .sort((a, b) => parseInt(a.label) - parseInt(b.label))
          .map(billboard => billboard.imageUrl);
      setImages(bannerData);
    }
    banners();
  }, [])

  if (images.length == 0) {
    return (
        <div className='h-[180px] w-full flex items-center justify-center text-lg'>
          Gupta Switchgear Banner Images
        </div>
    )
  }

  return (
      <div className='mb-5'>
        <Slider {...settings} className='h-min overflow-hidden'>
          {images.map((imgU, i) => (
              <ImageB imgUrl={imgU} key={i} />
          ))}
        </Slider>
      </div>
  )
}

const ImageB = ({ imgUrl }: { imgUrl: string }) => {
  return (
      <div className="relative w-full aspect-[16/5]">
        <Image
            src={imgUrl}
            alt="Gupta Switchgear Banner"
            fill
            className="object-cover"
            priority
        />
      </div>
  )
}

export default ImageBanner;
