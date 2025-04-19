import React from 'react'

export default function BookingReview() {
  return (
    <div className="px-10 py-4 rounded-xl bg-gray-200 max-w-6xl mx-auto">
    <div className="flex justify-between items-start">
         <div>
          <ul className="flex gap-3">
            <li>Home</li>
            <li>.</li>
            <li>Hotel details</li>
            <li>.</li>
            <li>Booking</li>
          </ul>
          <h1 className="text-7xl font-semibold mt-2">Review your Booking</h1>
        </div>
        <img className="w-[15%]" src="hotel-booking.svg" alt="Booking" />
      </div>

    </div>
  )
}
