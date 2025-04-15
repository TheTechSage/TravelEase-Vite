import React from 'react'
import { ImStarFull } from "react-icons/im";
import { FaStarHalfAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
function FeaturedHotels() {
  return (
    <>
      <div className="container">
        <div className="p-10">
          <h1 className="font-bold text-center text-5xl">Featured Hotels</h1>
        </div>
        <div className="flex justify-center gap-5">
          <div className='flex-col relative'>
        <img className="w-60 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105" src="01-kkM7mXf9.jpg"></img>
              <div className='absolute  border-3xl bg-black bg-text-dark  text-white'>
                <div className='flex top-[-%10]'>
              <LuMapPin className='size-7 '/>New York
              </div>
              </div>
            
              <a className='text-xl font-bold hover:text-purple-500' href="#">
              Baga Comfort
            </a>
           <p className='text-green-400 font-bold text-xl '>$455/<small>Starting at</small></p>
          
          </div>
          <div className=' flex-col'>
            <a className='text-xl font-bold hover:text-purple-500' href="#">
           <img className="w-60 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105" src="02-E_sTtfo3.jpg"></img>New Apollo Hotels</a>
           <p className='text-green-400 font-bold text-xl '>$585/<small>Starting at</small></p>
          </div>
          <div className='flex-col'>
            <a className=' hover:text-purple-500 text-xl font-bold' href="#">
              <img className="w-60 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105" src="03-B8eH2v8V.jpg"></img>New Age Hotels</a>
              <p className='text-green-400 font-bold text-xl '>$455/<small>Starting at</small></p>
          </div>
          <div className='flex-col'>
            <a className='hover:text-purple-500 text-xl font-bold ' href="#">
              <img className="w-60 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 " src="04-SDLCq6RC.jpg"></img>Helios Beach Resort</a>
              <p className='text-green-400 font-bold text-xl '>$455/<small>Starting at</small></p>
          </div>
        </div>
        <div className="flex p-20 gap-15 relative">
          
          <img className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale" src="download (1).svg"></img>
          
          <img className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale" src="02-ja0MTAkK.svg"></img>
          <img className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale" src="03-ijqoOgvV.svg"></img>
          <img className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale" src="04-eZzuwS87.svg"></img>
          <img className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale" src="05-t3Mz4baO.svg"></img>
          <img className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale" src="06-Flg8Aftu.svg"></img>
        </div>
        <div className='slide1'>
        <div className="flex relative px-40 py-10 ">
          <img className="rounded-xl w-100" src="01-A46SX7OM.jpg"></img>
          <img className="absolute w-12 top-[15%] left-[10%] border-5 bg-amber-600 border-amber-600 rounded-xl" src="download (2).svg"></img>
          <div className="flex-col pl-10  gap-2">
            <p className=" text-2xl">Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed in laughing</p>
            <ul className="flex py-2">
              <li><ImStarFull color='yellow' size="15" /></li>
              <li><ImStarFull color='yellow' size="15" /></li>
              <li><ImStarFull color='yellow' size="15" /></li>
              <li><ImStarFull color='yellow' size="15" /></li>
              <li><FaStarHalfAlt color='yellow' size="15" /></li>
            </ul>
            <h5 className="font-bold">Billy Vasquez</h5>
            <span className="opacity-75">Ceo of Apple</span>
          </div>
          </div>
          <div className='slide 2 hidden'>
          <div className="flex relative px-40 py-10 ">
          <img className="rounded-xl w-100" src="01-A46SX7OM.jpg"></img>
          <img className="absolute w-12 top-[15%] left-[10%] border-5 bg-amber-600 border-amber-600 rounded-xl" src="download (2).svg"></img>
          <div className="flex-col pl-10  gap-2">
            <p className=" text-2xl">Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed in laughing</p>
            <ul className="flex py-2">
              <li><ImStarFull color='yellow' size="15" /></li>
              <li><ImStarFull color='yellow' size="15" /></li>
              <li><ImStarFull color='yellow' size="15" /></li>
              <li><ImStarFull color='yellow' size="15" /></li>
              <li><FaStarHalfAlt color='yellow' size="15" /></li>
            </ul>
            <h5 className="font-bold">Billy Vasquez</h5>
            <span className="opacity-75">Ceo of Apple</span>
          </div>
          </div>
        </div>
        </div>
      </div>
  
    
  

    </>
  )
}

export default FeaturedHotels

