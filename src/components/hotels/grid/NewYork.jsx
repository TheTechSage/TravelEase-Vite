import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function NewYork() {
  return (
    <>
      <div className="w-full px-8 flex flex-col items-center">
        <div className='relative py-10 '>
          <img className="w-290 h-110 rounded-xl " src="05-4tYh3WRJ (1).jpg" />
          <div className='absolute top-30 left-50'>
            <h1 className='text-6xl text-white text-center font-bold' >150 Hotels in New York</h1>
            <div className='mt-6 bg-white rounded-xl shadow-lg py-10 px-10 flex flex-col'>
              <div className='flex text-center gap-2 '>
                <IoLocationOutline className='text-gray-500 size-12' />
                <select className='w-60 border-1 border-blue-200 rounded-xl'>

                  <option></option>
                  <option>Select location</option>
                  <option>San Jacinto,USA</option>
                  <option>North Dakota,Canada</option>
                  <option>West Virginia,Paris
                  </option>
                </select>
                <div className='flex item-center gap-2'>
                  <input type="date" placeholder='date' className='w-60 border-1 border-blue-200 rounded-xl' />
                </div>
                <div className='flex item-center gap-2'>
                  <input type="" placeholder='' className='w-60 border-1 border-blue-200 rounded-xl' />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='w-full flex justify-center gap-10'>

            <div className='flex flex-col justify-center shadow bg-white py-0 px-2 border-white border-1'>
              <img className="w-80 rounded-xl" src="09-NZkssKcO.jpg" />
              <h2 className='font-bold text-xl text-center'>Hotel Baljees Regency</h2>
              <ul className='flex gap-3 pb-10'>
                <li>Air Conditioning </li>
                <li className='font-bold'>.</li>
                <li>Wifi</li>
                <li className='font-bold'>.</li>
                <li>Kitchen</li>
                <li className='font-bold'>.</li>
                <li>Pool</li>
              </ul>
              <div className='flex py-2'>
                <p className='font-bold text-green-800 text-xl'>$750</p>
                <span className='text-xl opacity-75'>/days</span>
                <span className='px-5 text-xl opacity-75'>$1000</span>
                <button className='bg-blue-50 hover:bg-blue-300 px-7 py-1 rounded-xl'>View Detail</button>
              </div>
            </div>

            <div className='shadow  bg-white py-0 px-5 w-90 border-white border-1'>
              <img className="w-80 rounded-xl" src="10-fiISs2Co.jpg" />
              <h2 className='font-bold text-xl text-center'>Courtyard by Marriott New York</h2>
              <ul className='flex gap-3 pb-10'>
                <li>Air Conditioning </li>
                <li className='font-bold'>.</li>
                <li>Wifi</li>
                <li className='font-bold'>.</li>
                <li> Pool</li>
                <li className='font-bold'>.</li>
                <li>Kitchen</li>
              </ul>
              < div className='flex py-2'>
                <p className='font-bold text-green-800 text-xl'>$1200</p>
                <span className='text-xl opacity-75'>/days</span>
                <button className='bg-blue-50 hover:bg-blue-300 px-7 py-1 rounded-xl'>View Detail</button>
              </div>
            </div>

          <div className='shadow  bg-white py-0 px-5 w-90 border-white border-1'>
            <img className="w-80 rounded-xl" src="08-GrHLX0U-.jpg" />
            <h2 className='font-bold text-xl text-center'>Club Quarters Hotel</h2>
            <ul className='flex gap-3 pb-10'>
              <li>Air Conditioning </li>
              <li className='font-bold'>.</li>
              <li>Wifi</li>
              <li className='font-bold'>.</li>
              <li> Pool</li>
              <li className='font-bold'>.</li>
              <li>Kitchen</li>
            </ul>
            < div className='flex py-2'>
              <p className='font-bold text-green-800 text-xl'>$980</p>
              <span className='text-xl opacity-75'>/days</span>
              <button className='bg-blue-50 hover:bg-blue-300 px-7 py-1 rounded-xl'>View Detail</button>

            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default NewYork
