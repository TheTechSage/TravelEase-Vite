import React from 'react'
import { FaHotel } from "react-icons/fa6";

export default function HotelInformation() {
  return (
    <div className="max-w-6xl mx-auto flex gap-6 px-10 py-5">
      <div className="w-2/3 bg-white shadow rounded-xl px-6 py-4">
        <div className='flex items-center gap-2 mb-4'>
          <FaHotel className='text-[2.3rem]' />
          <h2 className='font-bold text-[2.3rem]'>Hotel Information</h2>
        </div>
        <div className='flex gap-4 mb-4'>
          <img className='w-40 rounded-xl object-cover' src="hotel-detail5.jpg" alt="Hotel" />
          <div>
            <h2 className='text-xl font-semibold'>Pride Moon Village Resort & Spa</h2>
            <h3 className='text-gray-600'>5855 W Century Blvd, Los Angeles - 90045</h3>
          </div>
        </div>
        <div className='flex gap-4 mb-6'>
          <div className='flex-1 bg-gray-200 text-center rounded-xl py-4'>
            <h5 className='font-semibold'>Check-in</h5>
            <h5>4 March 2022</h5>
            <h5>12:30 PM</h5>
          </div>
          <div className='flex-1 bg-gray-200 text-center rounded-xl py-4'>
            <h5 className='font-semibold'>Check-out</h5>
            <h5>8 March 2022</h5>
            <h5>4:30 PM</h5>
          </div>
          <div className='flex-1 bg-gray-200 text-center rounded-xl py-4'>
            <h5 className='font-semibold'>Rooms & Guests</h5>
            <h5>2 G - 1 R</h5>
            <h5>3 Nights - 4 Days</h5>
          </div>
        </div>

        <div className='border rounded-xl p-4'>
          <div className='flex justify-between items-center border-b'>
            <h5 className='font-bold text-xl'>Deluxe Pool View with Breakfast</h5>
            <button className='text-blue-500 text-s cursor-pointer'>
              View Cancellation Policy
            </button>
          </div>
          <h4>Price Include</h4>
          <div>
            <p>Free Breakfast and Lunch/Dinner.</p>
          </div>
          <div>
            <p>Great Small Breaks.</p>
          </div>
          <div>
            <p>Free Stay for Kids Below the age of 12 years.
            </p>
          </div>
        <div>
            <p>On Cancellation, You will not get any refund
            </p>
        </div>

        </div>
      </div>

      
      <div className="w-1/3">
        <div className='bg-white shadow border rounded-xl p-6'>
            <h5 className='text-xl  font-extrabold mb-4'>Price Summary</h5>
          <div className='flex justify-between mb-2'>
            <span>Room Charges</span>
            <span>$28,660</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span>Total Discount</span>
            <span>-$2,560</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span>Price after discount</span>
            <span>$1852</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span>Taxes % Fees</span>
            <span>$350</span>
          </div>
          <div className='border-t flex justify-between font-extrabold text-xl bg-gray-100 px-2 py-2'>
            <span>Payable Now</span>
            <span>$22,500</span>
          </div>
        </div>
      </div>
    </div>
  )
}
