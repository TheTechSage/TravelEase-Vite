import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Offers() {
  return (
    <div>
      <div className=' relative px-4 py-5'>
              <h2 className='text-6xl px-20 font-bold'>Our Favorite Rooms</h2>
              <div className='px-20 py-10'>
                <img className='rounded-2xl' src="02-DyCMiWd4.jpg"></img>
                <div className=' absolute top-[40%] left-[50%] bg-white border-2 w-[35%] rounded-xl text-center  border-white px-5 py-10'>
                  <h2 className="text-3xl  tracking-wide font-bold">The Entertainment Suite</h2>
                  <p>847-900 SQ.Ft</p>
                  <p className='tracking-wide py-2'>Lively use looked latter regard had. We understand that theory is important to build a solid foundation</p>
                  <ul className=' flex gap-5 py-2 px-4 text-center'>
                    <li className='font-medium tracking-wide'>Ocean View</li>
                    <li className='font-medium tracking-wide'>Leaving Roof</li>
                    <li className='font-medium tracking-wide'>Private Deck</li>
                  </ul>
               <button className='font-bold tracking-wide px-40 py-2 hover:bg-blue-100 bg-blue-50 border-blue-50 rounded-2xl'>Reserve</button>
                  </div>
                  </div>
              </div>
              <div className='container'>
                <h2 className='text-center text-5xl font-bold'>Offers Of The Month </h2>
                <div className='flex gap-5 px-8 pb-20 pt-5'>
                  <div className='flex-col'>
                    <img  className="w-50 h-40 rounded-2xl"src="02-ljXO_ntV.jpg"></img>
                    <h2 className='font-bold text-center'>Pass Holder Package</h2>
                    </div>
                    <div className='flex-col'>
                    <img className="w-50 h-40 rounded-2xl" src="03-nRUXp04j.jpg"></img>
                    <h2 className='font-bold text-center'>More Sun, More Fun</h2>
                    </div>
                   <div className='flex-col'>
                    <img className="w-50 h-40 rounded-2xl" src="07-af9uyz6f.jpg"></img>
                    <h2 className='font-bold text-center'>A Stay That Gives Back</h2>
                    </div>  
                    <div className='flex-col'>
                    <img className="w-50 h-40 rounded-2xl" src="04-o4jfQZFh.jpg" ></img>
                    <h2 className='font-bold text-center'>Elevate Your Story</h2>
                    </div>
                    <div className='flex-col'>
                    <img  className="w-50 h-40 rounded-2xl"src="06-mWXkhdJF.jpg" ></img>
                    <h2 className='font-bold text-center'>Spa Package Offer</h2>    
                     </div>
                     <div className='flex-col relative'>
                     <div className='bg-blue-200 h-40 w-50 rounded-2xl'>
                      <button className='bg-blue-500 absolute top-15 left-20 px-2 py-2 rounded-full text-white'><FaArrowRightLong /></button>
                      
                     </div>
                     <h2 className='font-bold text-center'>Views all Offer</h2>
                     
                </div>
              </div>
              </div>
    </div>
  )
}

export default Offers