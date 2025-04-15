import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { LuClock11 } from "react-icons/lu";
import { MdOutlineSecurity, MdOutlineElectricBolt } from "react-icons/md";
import { FaStarOfLife } from "react-icons/fa6";
import { ImStarFull } from "react-icons/im";
function BestHolidays() {
  return (
    <>
      <div className="container flex">
        <div className="pl-20 pb-5 pt-25">

          <img className="rounded-xl w-3xl " src="01-arqLn21s.jpg"></img>

          <div className="absolute top-[90%] left-[8%] z-index-1 flex w-60">
          <div className='bg-white rounded-xl p-4  relative flex'>
          <img className="absolute top-[-20%] left-[-5%] w-10" src="download (3).svg"></img>
          <div className='me-4'>
            <h6 className='fw-light'>Client</h6>
            <ul className='flex mb-0'>
            <li><img className="rounded-[100%] w-10" src="01-OzdCsrYE.jpg"></img></li>
           <li> <img className="rounded-[100%] w-10" src="02-5tPJRJB9.jpg"></img></li>
           <li> <img className="rounded-[100%] w-10" src="03-IDBN_S8O.jpg"></img></li>
            <li><img className="rounded-[100%] w-10" src="04-AMc9pMzp.jpg"></img></li>
            <li>
            <div className=''>
             <p className='bg-violet-500 w-8 h-8  text-center rounded-full text-white'>1k+</p>
             </div>
            </li>
            </ul>
            </div>
            <div>
              <h6>Rating</h6>
              <h6 className='flex font-bold'>4.5 <ImStarFull  size="20" color="yellow"/></h6>
            </div>
            </div>
          </div>
        </div>
        <div className="px-40 py-25 pr-10 ">
          <h2 className="text-6xl pb-10 font-bold">The Best Holidays Start Here!</h2>
          <p className="opacity-75 pb-10 pr-28  ">Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>

          <div className="flex flex-nowrap gap-8 p-5 ">
            <div className="flex-col">
              < ImSpoonKnife className='bg-green-500 text-green-300 outline-green-500 size-10 border-3 rounded-full' />
              <h2 className="font-bold text-xl">Quality Food</h2>
              <p className="opacity-75 t"> Departure defective arranging rapturous did. Conduct denied adding worthy little.</p>
            </div>
            <div className=" flex-col">
              <LuClock11 className='bg-red-500 text-red-300 outline-red-500 size-10 border-3 rounded-full' />
              <h2 className="font-bold text-xl">Quick Services</h2>
              <p className="opacity-75">Supposing so be resolving breakfast am or perfectly.</p>
            </div>
          </div>
          <div className="flex flex-nowrap gap-8 ">
            <div className=" flex-col">
              <MdOutlineSecurity className='bg-orange-500 text-orange-300 outline-orange-500 size-10 border-3 rounded-full' />
              <h2 className="text-xl font-bold">High Security</h2>
              <p className=" opacity-75">Arranging rapturous did believe him all had supported.</p>
            </div>
            <div className=" flex-col">
              <MdOutlineElectricBolt className='bg-blue-500 text-blue-200 outline-blue-500 size-10 border-3 rounded-full' />
              <h2 className="font-bold text-xl">24 Hours Alert</h2>
              <p className="opacity-75">Rapturous did believe him all had supported.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestHolidays
