'use client'
import Slider from 'react-slick'
import fetchBillboards from '../lib/fetchBillboards'
import { useEffect, useState } from 'react'

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
      console.log(bannerData)
    }
    banners();
  }, [])
  if (images.length == 0) {
    return (
      <div>Getting Images</div>
    )
  }
  return (
    <div className='mb-5 '>
      <Slider {...settings} className='h-min overflow-hidden' >
        {images.map((imgU, i) => {
          return <Image imgUrl={imgU} key={i} />
        })}
      </Slider>
    </div>
  )
}
const Image = ({ imgUrl }: { imgUrl: string }) => {
  return (<img
    src={imgUrl}
  />)
}

export default ImageBanner;
