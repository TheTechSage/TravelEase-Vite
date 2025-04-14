import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { FaArrowLeft } from "react-icons/fa";
 import { FaArrowRight } from "react-icons/fa";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Moments() {
  return (
     <>
    
    <div>
     <h2 className='text-5xl pt-10 pb-5 font-extrabold text-center'>Some Of Our Happy Moments</h2>
          </div>
          <div className='relative flex gap-4 pb-60'>
          <div className='px-5 py-4'>
          
        <img className='w-[70%] content-end rounded-2xl' src="05-avohIMq8.jpg"/>
        </div>
        <div className= "py-5">
        <img className='h-[160%] rounded-xl' src="04-KW179Bm7.jpg"/>
        </div>  
         </div>
        <div className="relative w-full py-8">
          <div className="absolute left-9 top-100 z-10">
            <div className="prev-button bg-black p-2 rounded-full shadow cursor-pointer hover:bg-blue-500">
              <FaArrowLeft className="text-xl text-white" />
            </div>
          </div>
          <div className="absolute right-9 top-100  z-10">
            <div className="next-button bg-black p-2 rounded-full shadow cursor-pointer hover:bg-blue-500">
              <FaArrowRight className="text-xl text-white" />
            </div>
            </div>
            </div>
          <Swiper
           modules={[Navigation]}
                spaceBetween={8}
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
                <SwiperSlide>
                  <div className='px-8 py-5'>
                    <img className='rounded-xl hover:opacity-90' src="05-avohIMq8 (1).jpg"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='px-8 py-5 '>
                    <img className='rounded-xl hover:opacity-90' src="06-7b7X2pfU (1).jpg"/>
                  </div>
                </SwiperSlide>
              
              </Swiper>
       </>
  )
}

export default Moments
