import React from 'react'
import { RiUserLocationLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { IoStar } from "react-icons/io5";
function Rating() {
  return (
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
  )
}

export default Rating
