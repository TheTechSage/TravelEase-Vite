import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Experience() {
  return (
    <>
      <div className='heading'>
        <h1 className='text-6xl pt-10 text-center font-bold'>Our Exciting Experience</h1>
      </div>
      <div className="relative w-full py-8">
        <div className="absolute left-7 top-80 z-10">
          <div className="prev-button bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100">
            <FaArrowLeft className="text-xl text-gray-800" />
          </div>
        </div>
        <div className="absolute right-7 top-80 transform -translate-y-1/2 z-10">
          <div className="next-button bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100">
            <FaArrowRight className="text-xl text-gray-800" />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={4}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',

        }}


        loop={true}
        scrollbar={{ draggable: true }}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >

        <SwiperSlide>
          <div className='px-5 py-5'>
            <img className='relative w-100 h-120 rounded-xl' src="06-QqSLmC0X.jpg"></img>
              <div className='absolute top-80'>
                <h2 className='text-2xl font-bold text-white'>Fitness Center</h2>
                <p className='text-white'>Praise effect wishes change way and any wanted.</p>
                <button className='text-white text-2xl  opacity-90 font-bold'>Explore Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='px-5 py-5'>
            <img className=' relative w-100 h-120 rounded-xl' src="07-Edm2uAmn.jpg" />
            <div className='absolute top-80'>
                <h2 className='text-2xl font-bold text-white'>Shop</h2>
                <p className='text-white'>Do he it part more last in. We understand that theory is important.</p>
                <button className='text-white text-2xl  opacity-90 font-bold'>Explore Now <FaArrowRight /></button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='px-5 py-5'>
           <img className=' w-100 h-120 rounded-xl' src="01-Vv-QOWAZ.jpg"/>
           <div className='absolute top-80'>
                <h2 className='text-xl font-bold text-white'>Spa & Wellness</h2>
                <p className='text-white'>We focus a great deal on the understanding of behavioral psychology and influence.</p>
                <button className='text-white text-2xl  opacity-90 font-bold'>Explore Now</button>
              </div>
          </div>
          </SwiperSlide>
           <SwiperSlide>
           <div className='px-5 py-5'>
            <img className='w-100 h-120 rounded-xl' src="02-dtQPmdAF.jpg"/>
            <div className='absolute top-80'>
                <h2 className='text-xl font-bold text-white'>Wedding & Romance</h2>
                <p className='text-white'>Understand that theory alone isn't going to get the job done.</p>
                <button className='text-white text-2xl  opacity-90 font-bold'>Explore Now</button>
              </div>
          </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className='px-5 py-5'>
            <img className=' w-100 h-120 rounded-xl' src="03-h8aofatb (1).jpg"></img>
        <div className='absolute top-80'>
                <h2 className='text-2xl font-bold text-white'>Activities</h2>
                <p className='text-white'>Tolerably behavior may admit daughters offending effect wishes change way and any wanted.</p>
                <button className='text-white text-2xl  opacity-90 font-bold'>Explore Now</button>
              </div>
              </div>
              </SwiperSlide>
        <SwiperSlide>
          <div className='px-5 py-5'>
          <img className=' w-100 h-120 rounded-xl' src="04-o-9HcIsU.jpg"/>
          <div className='absolute top-80'>
          <h2 className='text-2xl font-bold text-white'>Event Calendar</h2>
        <p className='text-white'>Praise effect wishes change way and any wanted behavioral psychology and influence</p>
                <button className='text-white text-2xl  opacity-90 font-bold'>Explore Now</button>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='px-5 py-5'>
          <img className='  w-100 h-120 rounded-xl' src="05-Lg50ZEZT.jpg"/>
        
        <div className='absolute top-80'>
          <h2 className='text-2xl font-bold text-white'>Dining</h2>
        <p className='text-white'>Focus a great deal on the understanding of behavioral psychology and influence</p>
                <button className='text-white text-2xl  opacity-90 font-bold'>Explore Now</button>
                </div> 
</div>
          </SwiperSlide>

      </Swiper>


    </>

  )
}

export default Experience