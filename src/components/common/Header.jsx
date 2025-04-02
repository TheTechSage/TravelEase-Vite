import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaHotel } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdSupport } from "react-icons/md";
function Header() {
    return (
        <>
            <div className='flex'>
                <div>
                    <img class="h-18 pl-18 pt-8" src="logo-XeOrDTLq.svg"></img>
                </div>
                <div class="flex pt-10 pl-12 gap-8 font-arial">
                    <div class="border-none relative group hover:bg-sky-50">
                        <a href="#listings">
                    <ul class="flex"> Listings<IoIosArrowDown size="15" /></ul>
                        </a>
<div className="list-none border-none bg-white p-6 text-gray-600 shadow-lg w-60  
absolute hidden group-hover:flex flex-col">
                            <li className="list-none flex gap-35">Hotel <HiDotsHorizontal /></li>
                            <li class="flex gap-35">Flight <HiDotsHorizontal /></li>
                            <li class="flex gap-36">Tour <HiDotsHorizontal /></li>
                            <li class="flex gap-38">Cab <HiDotsHorizontal /></li>
                            <li class="flex gap-26">Directory <HiDotsHorizontal /></li>
                            <li class="flex gap-26">AddListing <HiDotsHorizontal /></li>
                            <li class="flex gap-32">Hero <HiDotsHorizontal /></li>
                            <li>Booking Confirmed</li>
                            <li>Compare Details</li>
                            <li>Offer Details</li>
                        </div>
                    </div>
                    <div class=" border-none relative group hover:bg-sky-50"> 
                    <a href="#Page">  
                    <ul class="flex"> Pages<IoIosArrowDown size="15" /></ul>
                       </a>
<div className="list-none border-none bg-white p-6 text-gray-600 shadow-lg w-50 
absolute hidden group-hover:flex flex-col">                 
                            <li className="list-none">About</li>
                            <li>Contact</li>
                            <li>Contact 2</li>
                            <li>Our Team</li>
                            <li>Authentication</li>
                            <li>Blog</li>
                            <li>Help</li>
                            <li>pricing</li>
                            <li>FAQs</li>
                            <li>Error 404</li>
                            <li>Coming Soon</li>
                            </div> 
                    </div>
                    <div class=" border-none relative group  hover:bg-sky-50">
                        <a href="#account">
                        <ul class="flex"> Account<IoIosArrowDown size="15" /></ul>
                       </a>
           <div className="list-none border-none bg-white p-6 text-gray-600 shadow-lg w-50 
            absolute hidden group-hover:flex flex-col"> 
             <li className="list-none">User Profile</li>  
                            <li>Agent Dashboard</li>
                            <li>Master Admin</li>
                        
                    </div>
                    </div>
                    </div>
           <div class="flex border-none relative group pt-11 pl-10 hover:bg-sky-100">
                    <HiDotsHorizontal />
        <div className="list-none border-none bg-white p-2 text-gray-600 shadow-lg w-40 
            absolute hidden group-hover:flex flex-col"> 
            <li class="flex gap-1"> <MdSupport />Support</li>
            <li class="flex">Documentation</li>
            <hr></hr>
            <li class="flex">Buy Booking!</li>
            <hr></hr>
            <li class="flex">Components</li>
            </div>
            </div>
                <div class="flex pt-10 pl-32 gap-10 font-arial">
                    <a class="flex gap-1 hover:bg-sky-100 rounded-lg " href="#hotel"><FaHotel size="20" />Hotel</a>
                    <a class="flex gap-1 hover:bg-sky-100 rounded-lg" href="#flight"><MdFlight size="20" /> Flight</a>
                    <a class="flex gap-1 hover:bg-sky-100 rounded-lg" href="#tour"> <FaGlobeAmericas size="20" />Tour</a>
                    <a class="flex gap-1 hover:bg-sky-100 rounded-lg" href="#cab"> <FaCarAlt size="20" />Cab</a>
                </div>
                <div class="flex pt-11 pl-10 ">
                    <IoMdNotificationsOutline />
                </div>
            </div>
        </>
    )
}

export default Header
