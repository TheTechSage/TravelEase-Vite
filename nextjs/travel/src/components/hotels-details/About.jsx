"use client";
import React, { useState } from 'react'
import {  FaWifi } from "react-icons/fa";
import { PiSwimmingPoolDuotone } from "react-icons/pi";
import { MdOutlineAcUnit, MdRoomService } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoMdBicycle } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { HiMiniSpeakerWave } from "react-icons/hi2";
function About() {
    const [showMore, setShowMore] = useState(false);
    
      const handleToggle = () => setShowMore(!showMore);
    
    return (
        <div className='px-15 py-5'>
 <div className="flex flex-col lg:flex-row gap-10 mt-10">
  
  <div className="flex-1">
    <h2 className="text-4xl font-semibold mb-6 border-b border-gray-300 pb-3">
      About This Hotel
    </h2>

    <h5 className="tracking-wide text-2xl mb-4">Main Highlights</h5>

    <div className="flex flex-wrap gap-5 text-2xl mb-6">
      
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
    <div className=''>
  <h2 className="text-5xl font-semibold mb-6 border-b border-gray-300 pb-3">Amenities</h2>

  
     <div className="flex flex-col md:flex-row gap-8">
  <div className="flex-1">
    
    <div className='flex items-center gap-2 text-xl mb-1'>
      <IoMdBicycle />
      <p className='text-lg font-bold'>Activities</p>
    </div>
    <ul className='space-y-1 text-gray-700 text-lg mb-4'>
      {["Swimming pool", "Spa", "Kids' play area", "Gym"].map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="bg-green-500 text-white p-1 rounded-full">
            <FaCheck size={10} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    
    <div className='flex items-center gap-2 text-xl mb-1'>
      <MdRoomService />
      <p className='text-lg font-bold'>Services</p>
    </div>
    <ul className='space-y-1 text-gray-700 text-lg'>
      {[
        "Dry cleaning",
        "Room Service",
        "Special service",
        "Waiting Area",
        "Secrete smoking area",
        "Concierge",
        "Laundry facilities",
        "Ironing Service",
        "Lift"
      ].map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="bg-green-500 text-white p-1 rounded-full">
            <FaCheck size={10} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>

  <div className="flex-1">
    <div className='flex items-center gap-2 text-xl mb-1'>
      <MdPayment />
      <p className='text-lg font-bold'>Payment Method</p>
    </div>
    <ul className='space-y-1 text-gray-700 text-lg'>
      {["Credit card (Visa, Master card)", "Cash", "Debit Card"].map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="bg-green-500 text-white p-1 rounded-full">
            <FaCheck size={10} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className='flex items-center gap-4 text-xl mb-1'>
      <AiFillSafetyCertificate />
      <p className='text-lg font-bold'>Safety & Security</p>
    </div>
    <ul className='space-y-3 text-gray-700 text-lg'>
      {["Doctor on Call"].map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="bg-green-500 text-white p-1 rounded-full">
            <FaCheck size={10} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className='flex items-center gap-2 text-xl mb-1'>
      <HiMiniSpeakerWave />
      <p className='text-lg font-bold'>Staff Language </p>
    </div>
    <ul className='space-y-1 text-gray-700 text-lg'>
      {["English","Spanish","Hindi"].map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="bg-green-500 text-white p-1 rounded-full">
            <FaCheck size={10} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
</div>   
   
  </div>
  <div className="w-full lg:w-[30%] pl-2 rounded-2xl">
    <div className=' flex border border-gray-300 rounded-2xl px-3 py-5'>
        < div className='flex-col'>
    <h4 className="text-s text-gray-400">Price Start At</h4>
    <h4 className='text-3xl font-bold'>$3,500</h4>
    
        <h6>1 room per night</h6>
       <h6> + $285 taxes & fees</h6>
       <div className='flex  gap-2'>
      < FaArrowRightLong className='text-xl' />
      <h6 className=''>4.5</h6>
      </div>
      <div className='flex  gap-2'>
      < FaArrowRightLong className='text-xl' />
      <h6 className=''>Free breakfast available</h6> 
      </div>
      <div className='border px-20 py-2 rounded-xl border-blue-200 bg-blue-200 hover:bg-blue-600 hover:text-white'>
      <button>View 10 Rooms Option</button>
      </div>
    </div>
</div>
</div>
</div>
</div>

    );
}

export default About;
