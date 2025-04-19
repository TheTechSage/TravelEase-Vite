"use client";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight, } from "react-icons/fa";
import { IoMdQrScanner } from "react-icons/io";

const images = [
  "hotel-detail.jpg",
  "hotel-detail1.jpg",
  "hotel-detail3.jpg",
  "room-detail1.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const firstImage = images[currentIndex];
  const secondImage = images[(currentIndex + 1) % images.length];


  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalPrev = () => {
    setModalIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleModalNext = () => {
    setModalIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
    <div div className=" px-10 py-8">
      <div className="mb-4">
        <h1 className="text-[2.3rem] font-Poppins font-[700]">
          Luxury Room with Balcony
        </h1>
        <p className=" flex gap-1 text-gray-500  items-center">
            <CiLocationOn />
            5855 W Century Blvd, Los Angeles - 90045
          </p>
        </div>
      
      <div className="relative w-full flex mt-6">
        
        <button
          onClick={handlePrev}
          className="absolute left-30 top-30 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaArrowLeft size={20} />
        </button>

        <div className="flex gap-6 w-full justify-center items-center">
          {[firstImage, secondImage].map((img, i) => {
            const index = (currentIndex + i) % images.length;
            return (
              <div
                key={index}
                className="relative w-[40%] group cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="rounded-xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center  bg-opacity-30 opacity-0 group-hover:opacity-100 transition">
                  <IoMdQrScanner size={30} className="text-white border-0 bg-black " />
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-30 top-30 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-6 text-white text-2xl"
          >
            ✕
          </button>

        
          <button
            onClick={handleModalPrev}
            className="absolute left-8 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full"
          >
            <FaArrowLeft size={22} />
          </button>

          <img
            src={images[modalIndex]}
            alt={`Modal ${modalIndex + 1}`}
            className="w-[100%] max-w-[600px]"
          />

          <button
            onClick={handleModalNext}
            className="absolute right-8 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full"
          >
            <FaArrowRight size={22} />
          </button>
        </div>
      )}
     </div>
     
    </>
  );
}
