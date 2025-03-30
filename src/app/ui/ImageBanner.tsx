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

        .filter(billboard => {
          return parseInt(billboard.label)
        })
        .sort((a, b) => parseInt(a.label) - parseInt(b.label))
        .map(billboard => billboard.imageUrl);
      setImages(bannerData)

    }
    banners();
  }, [])
  if (images.length == 0) {
    return (
      <div className='h-[776px] w-full'>GuptaSwithgear banner Images</div>
    )
  }
  return (
    <div className='mb-5 '>
      <Slider {...settings} className='h-min overflow-hidden' >
        {images.map((imgU, i) => {
          return <ImageB imgUrl={imgU} key={i} />
        })}
      </Slider>
    </div>
  )
}
const ImageB = ({ imgUrl }: { imgUrl: string }) => {
  return (
      <Image
    src={imgUrl}
    alt='Gupta Switchgear Banner'
    width={2560}
    height={776}
      />)
}

export default ImageBanner;
