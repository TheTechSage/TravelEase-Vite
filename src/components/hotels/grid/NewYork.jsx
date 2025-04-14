import React from 'react'

import { ImStarFull } from "react-icons/im";
import { MdOutlinePerson } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
 
function NewYork() {
 return (
    <>
    <Button variant="primary">Click Me</Button>
      <div className="w-full py-12 px-8 flex flex-col items-center">
        <div className='relative py-10 '>
          <img className="w-290 h-110 rounded-xl " src="05-4tYh3WRJ.jpg" />
          <div className='absolute top-30 left-30'>
            <h1 className='text-6xl text-white text-center font-bold' >150 Hotels in New York</h1>
            <div className='mt-6 bg-white rounded-lg shadow-lg py-10 px-10 flex flex-col'>
              <div className='flex text-center gap-2 '>
                <IoLocationOutline className='text-gray-500 text-4xl' />
                <select className='w-60 border-2 border-blue-100 rounded-xl'>

                  <option></option>
                  <option>Select location</option>
                  <option>San Jacinto,USA</option>
                  <option>North Dakota,Canada</option>
                  <option>West Virginia,Paris
                  </option>
                </select>
                <div className='flex item-center gap-2'>
               < FaRegCalendar  className=' text-gray-500 text-4xl'/>
                  <input type="date" placeholder='date' className='w-60 border-2 border-[#5143d9]-100 rounded-xl' />
                </div>
                <div className='flex item-center gap-2'>
                <MdOutlinePerson className='text-4xl text-gray-500' />
                  <input type="" placeholder='' className='w-60 border-2 border-[#5143d9]-100 rounded-xl' />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='w-full flex justify-center  gap-10  '>
          <div className='flex flex-col gap-5 justify-center shadow bg-white py-0 px-2 rounded-xl border-white border-2'>
            <img className="w-80 rounded-xl" src="09-NZkssKcO.jpg" />
            <div className='flex justify-between'>
              <div className='flex gap-2 px-2  bg-black rounded-lg text-center text-white'>
                < ImStarFull className='text-yellow-500 text-xl' />4.5
              </div>
              
            </div>
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
              <button className='bg-blue-100 hover:bg-[#5143d9] hover:text-white text-[#5143d9] text-bold px-7 py-2 rounded-lg'>View Detail</button>
            </div>
          </div>

          <div className='flex flex-col justify-center shadow bg-white py-0 px-2 gap-5 rounded-xl border-white border-2'>
            <img className="w-80 rounded-xl" src="10-fiISs2Co.jpg" />
            <div className='flex justify-between'>
              <div className='flex gap-2  px-2  bg-black rounded-lg text-center text-white'>
                < ImStarFull className='text-yellow-500 text-xl' />4
              </div>
             
            </div>
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
              <button className='bg-blue-100 hover:bg-[#5143d9]  hover:text-white text-[#5143d9] px-7 py-2 rounded-lg'>View Detail</button>
            </div>
          </div>

          <div className='flex flex-col justify-center shadow bg-white py-0 px-2 rounded-xl gap-5 border-white border-2'>
            <img className="w-80 rounded-xl" src="08-GrHLX0U-.jpg" />
            <div className='flex justify-between'>
              <div className='flex gap-2  px-2  bg-black rounded-lg text-center text-white'>
                < ImStarFull className='text-yellow-500 text-xl' />4.8
              </div>
              
            </div>
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
              <button className='bg-blue-100 hover:bg-[#5143d9]  hover:text-white text-[#5143d9] px-7 py-2 rounded-lg'>View Detail</button>

            </div>
          </div>
        </div>
        <div className='w-full justify-center py-10 flex gap-10  '>
          <div className='flex flex-col justify-center shadow bg-white py-0 px-2  gap-5 rounded-xl border-white border-2'>
            <img className="w-80 rounded-xl" src="07-cP0hfe1k.jpg" />
            <div className='flex justify-between'>
              <div className='flex gap-2  px-2  bg-black rounded-lg text-center text-white'>
                < ImStarFull className='text-yellow-500 text-xl' />4.8
              </div>

            </div>
            <h2 className='font-bold text-xl text-center'>Beverly Hills Marriott</h2>
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
              <p className='font-bold text-green-800 text-xl'>$1400</p>
              <span className='text-xl opacity-75'>/days</span>
              <button className='bg-blue-100 hover:bg-[#5143d9]  hover:text-white text-[#5143d9] px-7 py-2 rounded-lg'>View Detail</button>

            </div>

          </div>
          <div className='flex flex-col justify-center shadow bg-white py-0 px-2 gap-5 rounded-xl border-white border-2'>
            <img className="w-80 rounded-xl" src="02-DQEzloor.jpg" />
            <div className='flex justify-between'>
              <div className='flex gap-2  px-2  bg-black rounded-lg text-center text-white'>
                < ImStarFull className='text-yellow-500 text-xl' />4.5
              </div>
              
            </div>
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
              <p className='font-bold text-green-800 text-xl'>$680</p>
              <span className='text-xl opacity-75'>/days</span>
              <button className='bg-blue-100 hover:bg-[#5143d9]  hover:text-white text-[#5143d9] px-7 py-2 rounded-lg'>View Detail</button>

            </div>

          </div>
          <div className='flex flex-col justify-center shadow bg-white py-0 px-2 gap-5 rounded-xl border-white border-2'>
            <img className="w-80 rounded-xl" src="05-SZCETu7r.jpg" />
            <div className='flex justify-between'>
              <div className='flex gap-2  px-2 bg-black rounded-lg text-center text-white'>
                < ImStarFull className='text-yellow-500 text-xl' />4.4
              </div>
              
            </div>
            <h2 className='font-bold text-xl text-center'>Park Plaza Lodge Hotel</h2>
            <ul className='flex gap-3 pb-10'>
              <li>Air Conditioning </li>
              <li className='font-bold'>.</li>
              <li>Wifi</li>
              <li className='font-bold'>.</li>
              <li> Pool</li>
              <li className='font-bold'>.</li>
              <li>Kitchen</li>
            </ul>
            < div className='flex py-2 gap-6'>
              <p className='font-bold text-green-800 text-xl'>$680</p>
              <span className='text-xl opacity-75'>/days</span>
              <button className='bg-blue-100 hover:bg-[#5143d9]  hover:text-white text-[#5143d9] px-7 py-2 rounded-lg'>View Detail</button>

            </div>

          </div>

        </div>
        <div className='w-full flex justify-center gap-10  '>
          <div className='flex flex-col justify-center shadow bg-white py-0 px-2 rounded-xl gap-5 border-white border-2'>
            <img className="w-80 rounded-xl" src="04-YZ9GNmrm.jpg" />
            <div className='flex justify-between'>
              <div className='flex gap-2  px-2 bg-black rounded-lg text-center text-white'>
                < ImStarFull className='text-yellow-500 text-xl' />4
              </div>
              
            </div>
            <h2 className='font-bold text-xl text-center'>Royal Beach Resort</h2>
            <ul className='flex gap-3 pb-10'>
              <li>Air Conditioning </li>
              <li className='font-bold'>.</li>
              <li>Wifi</li>
              <li className='font-bold'>.</li>
              <li>Kitchen</li>
              <li className='font-bold'>.</li>
              <li>Pool</li>
            </ul>
            <div className='flex py-2 gap-6'>
              <p className='font-bold text-green-800 text-xl'>$750</p>
              <span className='text-xl opacity-75'>/days</span>
              <button className='bg-blue-100 hover:bg-[#5143d9]  hover:text-white text-[#5143d9] px-7 py-2 rounded-xl'>View Detail</button>
            </div>
          </div>
          <div className='flex flex-col justify-center shadow bg-white py-0 px-2 gap-5 rounded-xl border-white border-2'>
            <img className="w-80 rounded-xl" src="03-vKmVhHE6.jpg" />
            <div className='flex justify-between'>
              <div className='flex gap-2  px-2 bg-black rounded-lg text-center text-white'>
                < ImStarFull className='text-yellow-500 text-xl' />3.8
              </div>
            
            </div>
            <h2 className='font-bold text-xl text-center'>Pride moon Village Resort & Spa</h2>
            <ul className='flex gap-3 pb-10'>
              <li>Air Conditioning </li>
              <li className='font-bold'>.</li>
              <li>Wifi</li>
              <li className='font-bold'>.</li>
              <li>Kitchen</li>
              <li className='font-bold'>.</li>
              <li>Pool</li>
            </ul>
            <div className='flex py-2 gap-6'>
              <p className='font-bold text-green-800 text-xl'>$896</p>
              <span className='text-xl opacity-75'>/days</span>
              <button className='bg-blue-100 hover:bg-[#5143d9]  hover:text-white text-[#5143d9] px-6 py-2 rounded-xl'>View Detail</button>
            </div>
          </div>
          <div className='flex flex-col justify-center shadow bg-white py-0 px-2 gap-5 rounded-xl border-white border-2'>
            <img className="w-80 rounded-xl" src="01-6PVBScu5.jpg" />
            <div className='flex justify-between'>
              <div className='flex gap-2  px-2 bg-black rounded-lg text-center text-white'>
                < ImStarFull className='text-yellow-500 text-xl' />4
              </div>
          
            </div>
            <h2 className='font-bold text-xl text-center'>Carina Beach Resort</h2>
            <ul className='flex gap-3 pb-10'>
              <li>Air Conditioning </li>
              <li className='font-bold'>.</li>
              <li>Wifi</li>
              <li className='font-bold'>.</li>
              <li>Kitchen</li>
              <li className='font-bold'>.</li>
              <li>Pool</li>
            </ul>
            <div className='flex py-2 '>
              <p className='font-bold text-green-800 text-xl'>$475</p>
              <span className='text-xl opacity-75'>/days</span>
            
              <button className='bg-blue-100 hover:bg-[#5143d9]  hover:text-white text-[#5143d9] px-7 py-2 rounded-xl'>View Detail</button>
            </div>
            </div>
          </div>
          </div>
          <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  

      
      
    </>

  )
}

export default NewYork
