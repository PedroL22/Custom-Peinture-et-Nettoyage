import React from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import HeroImage1 from '../../images/orange-living-room-accent-wall.jpg'
import HeroImage2 from '../../images/orange-living-room-accent-wall2.jpg'
import HeroImage3 from '../../images/orange-living-room-accent-wall3.jpg'

export default function HeroCarousel() {
  return (
    <div className='flex items-center justify-center'>
      <div className='absolute z-10'>
        <div className='relative flex flex-col'>
          <h1 className='mx-[15vw] max-w-[900px] text-center text-lg font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
            Service de NETTOYAGE et de PEINTURE RÉSIDENTIEL
          </h1>
        </div>
      </div>
      <Carousel
        fade
        interval={4500}
        className='carousel-arrows mx-auto h-[30vh] w-full sm:h-[40vh] md:h-[720px]'
      >
        <Carousel.Item>
          <div className='absolute h-[30vh] w-full bg-gradient-to-t from-transparent to-black opacity-50 sm:h-[40vh] md:h-[720px]'></div>
          <Image
            src={HeroImage1}
            alt=''
            placeholder='blur'
            className='h-[30vh] w-full object-cover sm:h-[40vh] md:h-[720px]'
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className='absolute h-[30vh] w-full bg-gradient-to-t from-transparent to-black opacity-50 sm:h-[40vh] md:h-[720px]'></div>
          <Image
            src={HeroImage2}
            alt=''
            placeholder='blur'
            className='h-[30vh] w-full object-cover sm:h-[40vh] md:h-[720px]'
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className='absolute h-[30vh] w-full bg-gradient-to-t from-transparent to-black opacity-50 sm:h-[40vh] md:h-[720px]'></div>
          <Image
            src={HeroImage3}
            alt=''
            placeholder='blur'
            className='h-[30vh] w-full object-cover sm:h-[40vh] md:h-[720px]'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
