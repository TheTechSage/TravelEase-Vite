import HotelInformation from '../../components/hotel-bookings/HotelInformation'
import BookingReview from '../../components/hotel-bookings/BookingReview'
import React from 'react'

export default function Page(){
    return(
        <div>
            <BookingReview />
            <HotelInformation />
        </div>
    )
}