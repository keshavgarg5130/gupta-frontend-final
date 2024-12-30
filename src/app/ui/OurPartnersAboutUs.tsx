'use client'
import Slider from 'react-slick'

const Parteners = ['/partner1.png', '/partner2.png', '/partner3.png', '/partner4.png', '/partner5.jpg']

const OurPartnersAboutUs = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    }

    return (
        <div className='my-4 max-h-[200px] box-border px-10 md:px-10 lg:px-40 overflow-y-hidden bg-white w-full md:w-11/12 rounded-lg max-w-[1200px] py-5'>
            <div className='flex justify-center w-full'>
                <h1 className="text-4xl font-bold text-center text-themeBlue relative w-max">Our Partners
                    <div className="w-full -bottom-7 hidden md:block md:h-1 bg-themeBlue rounded-lg"></div>
                </h1>
            </div>
            <Slider {...settings} className='max-h-[150px] flex items-center bg-white' >
                {Parteners.map((partner, index) => {
                    return <Image key={index} imgUrl={partner} />
                })}
            </Slider>
        </div>
    )
}

const Image = ({ imgUrl }: { imgUrl: string }) => {
    return (
        <div className='max-w-[400px] w-full bg-white h-[140px] flex items-center justify-center m-1 '>
            <img src={imgUrl} className='w-[100px] h-[100px] bg-white' />
        </div>
    )
}

export default OurPartnersAboutUs
