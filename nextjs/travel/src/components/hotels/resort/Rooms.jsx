'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Rooms() {
  return (
    <>
      <div className="relative w-full py-8">
        <div className="absolute left-22 top-100 z-10">
          <div className="prev-button bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100">
            <FaArrowLeft className="text-xl text-gray-800" />
          </div>
        </div>
        <div className="absolute right-22 top-100 transform -translate-y-1/2 z-10">
          <div className="next-button bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100">
            <FaArrowRight className="text-xl text-gray-800" />
          </div>
        </div>
      </div>
      <Swiper

        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
        loop={true}
        scrollbar={{ draggable: true }}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >

        <SwiperSlide><img className='rounded-2xl px-20 py-10 w[50%] h-[50%]' src="01-jSTiCU9K.jpg" />
          <div className=' absolute top-[40%] left-[50%] bg-white border-2 w-[35%] rounded-xl text-center  border-white px-5 py-10'>
            <h2 className="text-3xl  tracking-wide font-bold">One Bedroom Ocean Suit</h2>
            <p>847-900 SQ.Ft</p>
            <p className='tracking-wide py-2'>Lively use looked latter regard had. We understand that theory is important to build a solid foundation</p>
            <ul className=' flex gap-5 py-2 px-4 text-center'>
              <li className='font-medium tracking-wide'>Ocean View</li>
              <li className='font-medium tracking-wide'>Leaving Roof</li>
              <li className='font-medium tracking-wide'>Outdoor Soaking Tub</li>
            </ul>
            <button className='font-bold tracking-wide px-40 py-2 hover:bg-blue-100 bg-blue-50 border-blue-50 rounded-2xl'>Reserve</button>
          </div>
        </SwiperSlide>
        <SwiperSlide><img className='rounded-2xl px-20 py-10 w[50%] h-[50%]' src="02-DyCMiWd4.jpg" />
          <div className=' absolute top-[40%] left-[50%] bg-white border-2 w-[35%] rounded-xl text-center  border-white px-5 py-10'>
            <h2 className="text-3xl  tracking-wide font-bold">The Penthouse Suite</h2>
            <p>789-850 SQ.Ft</p>
            <p className='tracking-wide py-2'>Lively use looked latter regard had. We understand that theory is important to build a solid foundation</p>
            <ul className=' flex gap-5 py-2 px-4 text-center'>
              <li className='font-medium tracking-wide'>Indoor Tub</li>
              <li className='font-medium tracking-wide'>Private Deck</li>
              <li className='font-medium tracking-wide'>FreeStanding</li>
            </ul>
            <button className='font-bold tracking-wide px-40 py-2 hover:bg-blue-100 bg-blue-50 border-blue-50 rounded-2xl'>Reserve</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className='rounded-2xl px-20 py-10 w[50%] h-[50%]' src="03-PUAwOsNf.jpg" />
            <div className=' absolute top-[40%] left-[50%] bg-white border-2 w-[35%] rounded-xl text-center  border-white px-5 py-10'>
              <h2 className="text-3xl  tracking-wide font-bold">The Entertainment Suite</h2>
              <p>847-900 SQ.Ft</p>
              <p className='tracking-wide py-2'>Lively use looked latter regard had. We understand that theory is important to build a solid foundation</p>
              <ul className=' flex gap-5 py-2 px-4 text-center'>
                <li className='font-medium tracking-wide'>Ocean View</li>
                <li className='font-medium tracking-wide'>Leaving Roof</li>
                <li className='font-medium tracking-wide'>Private Deck</li>
              </ul>
              <button className='font-bold tracking-wide px-40 py-2 hover:bg-blue-100 bg-blue-50 border-blue-50 rounded-2xl'>Reserve</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Rooms
