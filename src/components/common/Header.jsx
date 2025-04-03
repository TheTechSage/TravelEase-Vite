import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaHotel } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdSupport } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { IoSunnyOutline } from "react-icons/io5";
import { TbMoonStars } from "react-icons/tb";
import { FaCircleHalfStroke } from "react-icons/fa6";
function Header() {
    return (
        <>
            <div className='flex'>
                <div>
                    <img class="h-18 pl-18 pt-8" src="logo-XeOrDTLq.svg"></img>
                </div>

                <div class="flex pt-10 pl-12 gap-8 font-arial">
                    <div class="border-none cursor-pointer relative group hover:bg-sky-50">
                        <a href="#listings">
                            <ul class="flex items-center"> Listings<IoIosArrowDown size="15" /></ul>
                        </a>
                        <div className="list-none border-none bg-white p-6 text-gray-600 shadow-lg w-60  
          absolute hidden group-hover:flex flex-col">
                            <li className="list-none flex justify-between hover:bg-sky-50">Hotel <HiDotsHorizontal /></li>
                            <div class="border-none relative group hover:bg-sky-50">

                                <div className="list-none border-none left-50 bg-white p-6 text-gray-600 shadow-lg w-50  
          absolute hidden group-hover:flex flex-col cursor-pointer">
                                    <li className="list-none flex justify-between hover:bg-sky-50">Hotel Home</li>
                                    <li className="list-none flex justify-between hover:bg-sky-50">Hotel Chain</li>
                                    <li className="list-none flex justify-between hover:bg-sky-50">Hotel Resort</li>
                                    <li className="list-none flex justify-between hover:bg-sky-50">Hotel Grid</li>
                                    <li className="list-none flex justify-between hover:bg-sky-50">Hotel List</li>
                                    <li className="list-none flex justify-between hover:bg-sky-50">Hotel Details</li>
                                    <li className="list-none flex justify-between hover:bg-sky-50">Room Detail</li>
                                    <li className="list-none flex justify-between hover:bg-sky-50">Hotel Booking</li>
                                </div>
                            </div>

                            <li class="flex justify-between hover:bg-sky-50">Flight <HiDotsHorizontal /></li>
                            <li class="flex justify-between hover:bg-sky-50">Tour <HiDotsHorizontal /></li>
                            <li class="flex justify-between hover:bg-sky-50">Cab <HiDotsHorizontal /></li>
                            <li class="flex  justify-between hover:bg-sky-50">Directory <HiDotsHorizontal /></li>
                            <li class="flex  justify-between hover:bg-sky-50">AddListing <HiDotsHorizontal /></li>
                            <li class="flex justify-between hover:bg-sky-50">Hero <HiDotsHorizontal /></li>
                            <li>Booking Confirmed</li>
                            <li>Compare Details</li>
                            <li>Offer Details</li>
                        </div>
                    </div>
                    <div class=" border-none relative group hover:bg-sky-50 cursor-pointer">
                        <a href="#Page">
                            <ul class="flex items-center"> Pages<IoIosArrowDown size="15" /></ul>
                        </a>
                        <div className="list-none border-none bg-white p-6 text-gray-600 shadow-lg w-60 
        absolute hidden group-hover:flex flex-col">
                            <li className="list-none">About</li>
                            <li>Contact</li>
                            <li>Contact 2</li>
                            <li>Our Team</li>
                            <li class="flex justify-between">Authentication <HiDotsHorizontal /></li>
                            <li class="flex justify-between">Blog <HiDotsHorizontal /></li>
                            <li class="flex justify-between">Help <HiDotsHorizontal /></li>
                            <li>pricing</li>
                            <li>FAQs</li>
                            <li>Error 404</li>
                            <li>Coming Soon</li>
                        </div>
                    </div>
                    <div class=" border-none relative group cursor-pointer hover:bg-sky-50">
                        <a href="#account">
                            <ul class="flex items-center"> Account<IoIosArrowDown size="15" /></ul>
                        </a>
                        <div className="list-none border-none bg-white p-6 text-gray-600 rounded-lg shadow-lg w-53 
            absolute hidden group-hover:flex flex-col">
                            <li className="list-none flex justify-between">User Profile <HiDotsHorizontal /></li>
                            <li class="flex justify-between">Agent Dashboard <HiDotsHorizontal /></li>
                            <li>Master Admin</li>
                        </div>
                    </div>
                </div>
                <div class="flex border-none relative group pt-11 pl-10 hover:bg-white 
 rounded-lg cursor-pointer ">
                    <HiDotsHorizontal />
                    <div className="list-none border-none bg-white p-2 text-gray-600 rounded-xl shadow-lg w-45 
           h-45 absolute hidden group-hover:flex flex-col top-15">
                        <li class="flex gap-1 hover:bg-sky-200 rounded-lg "> <MdSupport size="20" />Support </li>
                        <li class="flex gap-1 hover:bg-sky-200 rounded-lg pt-3"> <GrDocumentText size="20" />Documentation</li>
                        <hr></hr>
                        <li class="flex gap-1 hover:bg-sky-200 rounded-lg pt-3"><IoCloudDownloadSharp size="20" />Buy Booking!</li>
                        <hr></hr>
                        <li class="flex gap-1 hover:bg-sky-200 rounded-lg pt-3"> Components</li>
                    </div>
                </div>
                <div class="flex pt-10 pl-32 gap-10 font-arial">
                    <a class="flex gap-1 hover:bg-sky-100 rounded-lg " href="#hotel"><FaHotel size="20" />Hotel</a>
                    <a class="flex gap-1 hover:bg-sky-100 rounded-lg" href="#flight"><MdFlight size="20" /> Flight</a>
                    <a class="flex gap-1 hover:bg-sky-100 rounded-lg" href="#tour"> <FaGlobeAmericas size="20" />Tour</a>
                    <a class="flex gap-1 hover:bg-sky-100 rounded-lg" href="#cab"> <FaCarAlt size="20" />Cab</a>
                </div >
                <div className="group relative">
                    <div class="flex pt-11 pl-8  cursor-pointer">
                        <IoMdNotificationsOutline />
                    </div>
                    <div className="absolute hidden group-hover:block border-none bg-white rounded-lg shadow-xl w-90 py-5 px-5 right-0">
                        <div class="flex ">
                        <div class="font-bold text-sm ">Notifications</div>
                        <button class="text-red-600 bg-red-100 rounded-m relative left-5 top-0 text-xs">4 new</button>
                        <div class="text-xs text-blue-600 relative left-30 ">Clear all</div>
                        </div>
                        <div class="pt-10 bg-sky-50 hover:bg-sky-100 rounded-lg">
                         <div class="font-bold ">New! Booking flights from New York</div>
                        <div class="text-gray-400">
                        <div class="text-sm">Find the flexible ticket on flights around the world.Start searching today </div>
                        <div>05 Feb 2024</div>
                        </div>
                        </div>

                        <div class="pt-8 hover:bg-sky-100">
                        <div class="font-bold">sunshine saving are here save 30% or more on a stay</div>
                        <div class="text-gray-400">24 Aug 2024</div>
                        </div>
                        <div class="pt-10 pl-15 cursor-pointer">
                           <div class="text-sky-600 text-sm">see all incoming activity</div> 
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <img class="w-10 h-10 rounded-lg relative top-5 left-5 
                cursor-pointer " src="logo02.jpg"></img>
        <div className="absolute hidden text-gray-700 group-hover:block border-none bg-white rounded-lg shadow-lg w-65 h-80 top-18 right-5">
                   <img class="rounded-full w-10 h-10 relative top-5 left-5" src="logo02.jpg"></img>
                        <span class="absolute top-5 left-20 font-bold">Lori Ferguson</span>
                        <email class="absolute top-10 left-20 text-sm">example@gmail.com</email>
                        <ul class="relative top-10 left-8 ">
                            <li class="flex"> <CiBookmarkCheck size="20" />My Bookings</li>
                            <li class="flex pt-3"><CiHeart size="20" />My Wishlist</li>
                            <li class="flex pt-3"><CiSettings size="20" />Settings</li>
                            <li class="flex pt-3"><IoMdHelpCircleOutline size="20" /> Help Center</li>
                            <li class="flex pt-3"> <LiaSignOutAltSolid size="20" />Sign Out</li>
                        </ul>

                       <div>
             <h3 class="absolute top-60 left-8 flex gap-5 pt-10 cursor-pointer ">Mode:
                         <IoSunnyOutline size="22" />
                         <TbMoonStars size="20" /><FaCircleHalfStroke size="18" /></h3>  
                       </div>
                    
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
