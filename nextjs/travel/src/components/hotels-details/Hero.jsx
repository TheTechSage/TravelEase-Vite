"use client";
import React, { useState } from 'react'
import { FaHeart, FaShareAlt, FaEye, FaWifi } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { PiSwimmingPoolDuotone } from "react-icons/pi";
import { MdOutlineAcUnit, MdRoomService } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Hero() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore(!showMore);

  return (
    <div className='px-15 py-5'>
      <div className='flex justify-between items-center'>
        <h1 className='text-5xl font-semibold'>
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

      <div className='flex py-2 gap-2 text-gray-500 items-center flex-wrap'>
        <CiLocationOn className='text-2xl' />
        <h6>5855 W Century Blvd, Los Angeles - 90045</h6>
        <div className='flex gap-1 items-center cursor-pointer'>
          <FaEye className='text-xl text-blue-600' />
          <button className='text-blue-600 cursor-pointer underline underline-offset-4'>View On Map</button>
        </div>
      </div>

      <div className='flex'>
        <img src="" alt="first-image" />
        <img src="" alt="second-image" />
        <img src="" alt="third-image" />
        <img src="" alt="forth-image" />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
  {/* Left Section */}
  <div className="flex-1">
    <h2 className="text-4xl font-semibold mb-6 border-b border-gray-300 pb-3">
      About This Hotel
    </h2>

    <h5 className="tracking-wide text-2xl mb-4">Main Highlights</h5>

    <div className="flex flex-wrap gap-5 text-2xl mb-6">
      {/* Icons */}
      <div className="relative group p-3 rounded-lg border shadow border-gray-300 bg-gray-100">
        <FaWifi />
        <span className="absolute bottom-full hidden group-hover:block text-sm bg-black text-white px-4 py-1 rounded">
          Free Wifi
        </span>
      </div>
      <div className="relative group p-3 rounded-lg border shadow border-gray-300 bg-gray-100">
        <PiSwimmingPoolDuotone />
        <span className="absolute bottom-full hidden group-hover:block text-sm bg-black text-white px-4 py-1 rounded">
          Swimming Pool
        </span>
      </div>
      <div className="relative group p-3 rounded-lg border shadow border-gray-300 bg-gray-100">
        <MdOutlineAcUnit />
        <span className="absolute bottom-full hidden group-hover:block text-sm bg-black text-white px-4 py-1 rounded">
          Central AC
        </span>
      </div>
      <div className="relative group p-3 rounded-lg border shadow border-gray-300 bg-gray-100">
        <MdRoomService />
        <span className="absolute bottom-full hidden group-hover:block text-sm bg-black text-white px-4 py-1 rounded">
          Free Service
        </span>
      </div>
    </div>

    <div className="space-y-4 text-gray-500">
      <p>
      Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions.
      </p>
      <p>
      Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.


      </p>

      {showMore && (
        <>
          <p>
          We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this rickets is packed with practical hands-on examples that you can follow step by step.
          </p>
          <p>
          Behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this tickets is packed with practical hands-on examples that you can follow step by step.
          </p>
        </>
      )}

      <button
        onClick={handleToggle}
        className=" flex items-center gap-2 text-blue-600 hover:underline"
      >
        {showMore ? 'See Less' : 'See More'} {showMore ? <FiChevronUp /> : <FiChevronDown />}
      </button>
    </div>
    <div>
        <h4 className='text-xl tracking-wider'>Advantage</h4>
        <ul className='text-lg text-gray-500 py-2'>
            <li className='py-1'>
            Every hotel staff to have Proper PPT kit for COVID-19.
            </li>
            <li className='py-1'>
            Every staff member wears face masks and gloves at all service times.
            </li>
            <li className='py-1'>
            Hotel staff ensures to maintain social distancing at all times.
            </li>
            <li className='py-1'>
            The hotel has In-Room Dining options available.
            </li>
        </ul>
    </div>
  </div>
  <div className="w-full lg:w-[30%] pl-2 rounded-2xl">
    <div className=' flex border border-gray-400 rounded-2xl px-3 py-1'>
        < div className='flex-col'>
    <h4 className="text-s text-gray-400">Price Start At</h4>
    <h4 className='text-3xl font-bold'>$3,500</h4>
    
        <h6>1 room per night</h6>
       <h6> + $285 taxes & fees</h6>
       <p>4.6</p>
    </div>

  </div>
</div>
</div>
    </div>
  );
}

export default Hero;
