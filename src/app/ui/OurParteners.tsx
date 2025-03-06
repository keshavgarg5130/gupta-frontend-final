'use client'
import Slider from 'react-slick'
import Image from 'next/image'
const Clients = ['/partner1.png', '/partner2.png', '/partner3.png', '/partner4.png', '/partner5.jpg']


const OurParteners = () => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  }

  return (
    <div className='my-4 h-[200px] bg-white box-border md:px-20 lg:px-40 overflow-y-hidden'>
      <div className='flex items-center font-bold justify-center text-4xl p-1 box-border overflow-hidden'>
        Our Partners
      </div>
      <Slider {...settings} className='h-[150px] flex items-center bg-white' >
        {Clients.map((partner, index) => {
          return <PartnerImage key={index} imgUrl={partner} />
        })}
      </Slider>
    </div>
  )
}

const PartnerImage = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className='max-w-[400px] w-full bg-white h-[140px] flex items-center justify-center m-1 '>
      <Image alt="guptaSwitchgearpartnerImage" height={100} width={100} src={imgUrl} className='w-[100px] h-[100px] bg-white' />
    </div>
  )
}

export default OurParteners;
