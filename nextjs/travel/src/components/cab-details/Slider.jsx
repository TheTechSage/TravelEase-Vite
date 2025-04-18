"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  const images = [
    "/cardetails/01-8mvqvLx3.jpg",
    "/cardetails/02-3fbvKqv5.jpg",
    "/cardetails/03-Q0x7rKqi.jpg",
    "/cardetails/04-gXOXNqA1.jpg",
    "/cardetails/05-C1bfLU-0.jpg",
  ];

  return (
    <div className="max-w-3xl mx-auto mt-6 p-4 sm:p-6 rounded-lg overflow-hidden relative bg-white">
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={3}
        navigation={{
          nextEl: ".nextBtn",
          prevEl: ".prevBtn",
        }}
        loop
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-44 object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
        <button className="prevBtn absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10">
          ❮
        </button>
        <button className="nextBtn absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10">
          ❯
        </button>
      </Swiper>
    </div>
  );
};

export default Slider;
