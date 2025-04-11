import React from 'react'
import { IoThumbsUpOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
function OurResort() {
    return (

        <div className='px-10 py-5'>
            <img className='rounded-2xl hover:opacity-90' src="06-7b7X2pfU.jpg"></img>
            <h2 className='font-bold tracking-wide text-4xl pt-8 '>What makes our resort best than others?</h2>
            <h6 className='opacity-75 py-3 text-s'>Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do.</h6>
            <div className='flex g-4 px-2 py-5'>
                <div className='bg-blue-50 px-2 py-2 rounded-full h-10 text-center'><IoThumbsUpOutline size="20" color="blue" /></div>
                <div className='flex-col'>
                    <h5 className='text-xl font-bold px-2 '>Hassle Free Booking</h5>
                    <p className='opacity-75 px-2 tracking-wide'>Departure defective arranging rapturous did. Conduct denied adding worthy little.</p>
                </div>
                <div className='flex g-4 px-2 py-5'>
                    <div className='bg-orange-200 rounded-full  px-2 py-2 h-10 text-center'><IoStar size="20" color="orange" /></div>
                    <div className='flex-col'>
                        <h5 className='text-xl font-bold px-2 '>18,000 Reviews</h5>
                        <p className='opacity-75 px-2 tracking-wide'>Supposing so be resolving breakfast am or perfectly. Conduct denied adding worthy little.</p>
                    </div>
                </div>
                <div className='flex g-4 px-2 py-5'>
                    <div className='bg-red-200 rounded-full  px-2 py-2 h-10 text-center'><FaHeadphones size="20" color="red" /></div>
                    <div className='flex-col'>
                        <h5 className='text-xl font-bold px-2 '>24/7 Supports</h5>
                        <p className='opacity-75 px-2 tracking-wide'>Arranging rapturous did believe him all had supported. Conduct denied adding worthy little.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default OurResort
