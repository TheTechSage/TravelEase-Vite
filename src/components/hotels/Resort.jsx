import React from 'react'
import { RiUserLocationLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { IoStar } from "react-icons/io5";
function Resort() {
  return (
    <>
    <div className='relative'>
      <img className="pr-5 "src="bg-01-VdAw2zNW.jpg"></img>
      <div className='absolute flex flex-col top-[25%] left-[15%] w-[70%]'>
       <h1 className='text-white text-7xl font-bold text-center p-10'>A World Of Luxury Awaits You</h1>
       <p className='text-white text-2xl font-bold text-center'>Discover a New Look of Luxury Resorts.</p>
       <div className='text-center p-6'>
       <a className="bg-black text-white px-8 py-4 rounded-2xl tracking-wide font-bold"href="#">Discover Now</a>
       </div>
      </div>
      <div className='text-center px-50 py-5'>
        <h2 className='text-5xl font-bold'>Here is a tribute to good life!</h2>
        <h5 className='opacity-75 text-xl'>Size-like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effects wish change way and any wanted. Lively use looked latter regard had. Do he it part more last in. We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this is packed with practical hands-on examples that you can follow step by step.</h5>
        </div>
        <div className='flex  px-50 py-2'>
          <ul className="flex  flex-wrap gap-15 text-xl text-center font-bold">
            <li className='flex'>< CiStar className='size-8'/>Have High Rating</li>
            <li className='flex'><RiUserLocationLine className='size-8 ' />Best Locations</li>
            <li className='flex'>< MdOutlineCancel className='size-8' />Free Cancellation</li>
            <li className='flex'>< MdOutlinePayment className='size-8' />Payment Options</li>
            <li className='flex'>4.5
              <IoStar /> <IoStar/> <IoStar/> <IoStar/></li>
          </ul>
        </div>
        <div>
          <h2 className="text-5xl text-center">Our Exciting Experience</h2>
          <div className=' relative flex gap-3 px-20'>
            <div className=' p-4 '>
            <img className='rounded-xl' src="06-QqSLmC0X.jpg"></img>
            <div className='absolute top-[50%] p-2'>
            <h2 className='font-bold text-white text-3xl'>Fitness Center</h2>
            <p className='text-white w-50'>Praise effect wishes change way and any wanted</p>
            <button className='text-white'>Explore Now</button>
           </div>
           </div>
           <div className=' p-4 '>
            <img className='rounded-xl' src="07-Edm2uAmn.jpg"></img>
            <div className='absolute top-[50%] p-2'>
            <h2 className='font-bold text-white text-3xl'>Shop</h2>
            <p className='text-white w-50'>Do he it part more last in. We understand that theory is important</p>
            <button className='text-white'>Explore Now</button>
           </div>
            </div>
            <div className=' p-4 '>
            <img className='rounded-xl' src="01-Vv-QOWAZ.jpg"></img>
            <div className='absolute top-[50%] p-2'>
            <h2 className='font-bold text-white text-3xl'>Spa & Wellness</h2>
            <p className='text-white w-50'>We focus a great deal on the understanding of behavioral psychology and influence</p>
            <button className='text-white'>Explore Now</button>
           </div>
            </div>
            <div className=' p-4 '>
            <img className='rounded-xl' src="02-dtQPmdAF.jpg"></img>
            <div className='absolute top-[50%] p-2'>
            <h2 className='font-bold text-white text-3xl'>Event Calendar</h2>
            <p className='text-white w-50'>Praise effect wishes change way and any wanted behavioral psychology and influence</p>
            <button className='text-white'>Explore Now</button>
           </div>
            </div>

          </div>
        </div>
      
      </div>
      <div className=' relative p-4'>
        <h2 className='text-6xl font-bold'>Our Favorite Rooms</h2>
        <div className='px-10 py-4'>
          <img className='rounded-2xl' src="02-DyCMiWd4.jpg"></img>
          <div className=' absolute top-[60%] left-[60%] bg-white border-2 w-100 rounded-xl text-center border-white p-4'>
            <h2 class="text-2xl">The Entertainment Suite</h2>
            <p>847-900 SQ.Ft</p>
            <p>Lively use looked latter regard had. We understand that theory is important to build a solid foundation</p>
            <ul className='p-4 flex gap-5'>
              <li>Ocean View</li>
              <li>Leaving Roof</li>
              <li>Private Deck</li>
            </ul>
          </div>
        </div>
      </div>
      
      

  
   </> 
      
  )
}

export default Resort
