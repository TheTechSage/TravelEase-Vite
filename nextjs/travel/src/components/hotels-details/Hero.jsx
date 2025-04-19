
import React from 'react'
import { FaHeart, FaShareAlt, FaEye } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

function Hero() {
  

  return (
    <div className='px-15 py-2'>
      <div className='flex justify-between items-center'>
        <h1 className='  text-black font-Poppins text-[3em] font-[700]'>
          Courtyard by Marriott New York
        </h1>
        <div className='flex gap-4'>
          <div className='p-2 rounded-xl border shadow border-gray-300 bg-gray-100 cursor-pointer'>
            <FaHeart />
          </div>
          <div className='p-2 rounded-xl border shadow border-gray-300 bg-gray-100 cursor-pointer'>
            <FaShareAlt />
          </div>
        </div>
      </div>

      <div className='flex py-1 gap-2 text-gray-500 items-center flex-wrap'>
        <CiLocationOn className='text-2xl' />
        <h6 className='text-[1em] font-sans'>5855 W Century Blvd, Los Angeles - 90045</h6>
        <div className='flex gap-1 items-center cursor-pointer'>
          <FaEye className='text-xl text-blue-600' />
          <button className='text-blue-600 cursor-pointer underline underline-offset-4'>View On Map</button>
        </div>
      </div>

      <div className='flex py-5'>
       <div className="flex flex-col lg:flex-row gap-4 py-5">
    <div className="lg:w-1/2 w-full">
    <img
      className="rounded-2xl w-full h-full object-cover"
      src="hotel-detail1.jpg"
      alt="main-image"
    />
  </div>

  
  <div className="lg:w-1/2 w-full flex flex-col gap-4">
     <div className="w-full">
      <img
        className="rounded-2xl w-full h-full object-cover"
        src="hotel-detail.jpg"
        alt="second-image"
      />
    </div>

    
    <div className="flex gap-4">
      <img
        className="rounded-2xl w-1/2 h-full object-cover"
        src="hotel-detail2.jpg"
        alt="third-image"
      />
      <img
        className="rounded-2xl w-1/2 h-full object-cover"
        src="hotel-detail3.jpg"
        alt="fourth-image"
      />
    </div>
  </div>
</div>
</div>
    </div>
  );
}

export default Hero;
