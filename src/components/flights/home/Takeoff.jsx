import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdCardTravel } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaHotel } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

function Takeoff() {
    return (
        <>
            <div className='flex' >
                <nav className='w-full bg-blue-500 h-10 flex items-center pl-45 text-white text-sm'>
                    <h5>Traveling internationally?
                        Get update information on COVID-19 travel guidance and restrictions</h5>
                    <div className='bg-black  rounded-md '>
                        <button >Learn more!</button>
                    </div>
                    <div className='pl-90'>
                        <RxCross2 size={25} />
                    </div>
                </nav>
            </div>
            <div className='flex pt-10 pl-50'>
                <div className='hover:text-blue-600 cursor-pointer'>
                    <MdCardTravel size={25} />
                </div>

                <div className=" border-none relative group hover:bg-sky-50 cursor-pointer">
                    <a href="#Page">
                        <ul className="flex items-center text-base pl-1 hover:text-blue-600">Travelers<IoIosArrowDown size={15} /></ul>
                    </a>
                    <div className="list-none border-none bg-white p-6 text-black-500 shadow-lg w-60 absolute hidden group-hover:flex flex-col">
                        <li className="list-none font-bold flex"><FaHotel size={20} />Hotel</li>
                        <p>small description here</p>
                        <li className="list-none font-bold flex"><MdFlight size={20} />Flight</li>
                        <p>small description here</p>
                        <li className="list-none font-bold flex"><FaGlobeAmericas size={20} />Tour</li>
                        <p>small description here</p>
                        <li className="list-none font-bold flex"><FaCarAlt size={20} />Cab</li>
                        <p>small description here</p>
                    </div>
                </div>

                <div className="border-none cursor-pointer relative group hover:text-blue-600 hover:bg-sky-50 pl-70">
                    <a href="#listings">
                        <ul className="flex items-center"> Listings<IoIosArrowDown size="15" /></ul>
                    </a>
                    <div className="list-none border-none bg-white p-6 text-gray-600 
                       shadow-lg w-60 absolute hidden group-hover:flex flex-col">
                        <li className="list-none flex justify-between hover:bg-sky-50">Hotel <HiDotsHorizontal /></li>
                        <div className="border-none relative group hover:bg-sky-50">

                            <div className="list-none border-none left-50 bg-white p-6 text-gray-600 shadow-lg w-50 absolute hidden group-hover:flex flex-col cursor-pointer">
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

                        <li className="flex justify-between hover:bg-sky-50">Flight <HiDotsHorizontal /></li>
                        <li className="flex justify-between hover:bg-sky-50">Tour <HiDotsHorizontal /></li>
                        <li className="flex justify-between hover:bg-sky-50">Cab <HiDotsHorizontal /></li>
                        <li className="flex  justify-between hover:bg-sky-50">Directory <HiDotsHorizontal /></li>
                        <li className="flex  justify-between hover:bg-sky-50">AddListing <HiDotsHorizontal /></li>
                        <li className="flex justify-between hover:bg-sky-50">Hero <HiDotsHorizontal /></li>
                        <li>Booking Confirmed</li>
                        <li>Compare Details</li>
                        <li>Offer Details</li>
                    </div>
                </div>

                <div className=" border-none relative group hover:bg-sky-50 hover:text-blue-600 cursor-pointer pl-10">
                    <a href="#Page">
                        <ul className="flex items-center"> Pages<IoIosArrowDown size="15" /></ul>
                    </a>
                    <div className="list-none border-none bg-white p-6 text-gray-600 shadow-lg w-60 absolute hidden group-hover:flex flex-col">
                        <li className="list-none">About</li>
                        <li>Contact</li>
                        <li>Contact 2</li>
                        <li>Our Team</li>
                        <li className="flex justify-between">Authentication <HiDotsHorizontal /></li>
                        <li className="flex justify-between">Blog <HiDotsHorizontal /></li>
                        <li className="flex justify-between">Help <HiDotsHorizontal /></li>
                        <li>pricing</li>
                        <li>FAQs</li>
                        <li>Error 404</li>
                        <li>Coming Soon</li>
                    </div>
                </div>
                <div className=" border-none relative pl-10 group hover:text-blue-600 cursor-pointer hover:bg-sky-50">
                    <a href="#account">
                        <ul className="flex items-center"> Account<IoIosArrowDown size="15" /></ul>
                    </a>
                    <div className="list-none border-none bg-white p-6 text-gray-600 rounded-lg shadow-lg w-53 absolute hidden group-hover:flex flex-col">
                        <li className="list-none flex justify-between">User Profile <HiDotsHorizontal /></li>
                        <li className="flex justify-between">Agent Dashboard <HiDotsHorizontal /></li>
                        <li>Master Admin</li>
                    </div>
                </div>
                <div className='pl-20 flex gap-5 cursor-pointer'>
                    <FaCircleHalfStroke size={20} />
                    <IoSearchOutline size={25} />
                    <div className='bg-blue-300 rounded-md text-sm w-20 h-6 
                    relative  hover:bg-sky-600 hover:text-white mb-0'>
                        <button className='cursor-pointer' ><FaArrowRightToBracket />sign Up</button>
                    </div>
                </div>
            </div>
            <div className='px-20 py-20'>
                <div className='w-full pl-20 pr-15 pt-4 pb-8 h-[600px] bg-[url(/flight.jpg)]'>
                <h1 className='font-extrabold text-7xl absolute top-110 left-60 tracking-wider'>Ready to take off?</h1>
                <div className='w-full h-50 mt-75  left-10 bg-white'> 
                    <div className='pt-5 pl-6 flex'>
            <button className='bg-gray-300 w-25 h-8  text-black  font-semibold '>one way</button>
            <button className='bg-black text-white w-25 h-8  font-semibold '>Round Trip</button>
            <div className='bg-gray-100 w-50 h-8 absolute right-90 rounded-md'>
            <div className='text-gray-500 pl-5 pt-1'>
            <form>
            <select id="class" className="cursor-pointer">
            <option value="Select Class">Select Class  <IoIosArrowDown size={20}/> </option>
            <option value="Select Class">Economy</option>
            <option value="Select Class">Premium Economy</option>
            <option value="Select Class">Business</option>
            <option value="Select Class">First Class</option>
            <option value="Select Class">Select class</option>
            </select>
           </form>
            </div>
            </div>
         </div>  
          <div className='bg-gray-100 w-50 h-20 relative left-5 top-6 rounded-md'>
             <p className='text-gray-400 pl-6 pt-3 flex'><IoLocationOutline size={20} />From </p>
           </div>
           </div>
            </div>
            </div>
            <div className='relative left-40 font-bold text-3xl pt-0'>
             <p>Special Offers</p>
            </div>
            <div className="flex gap-5 py-10 pt-1">
            <div className='relative left-40 top-5 bg-blue-100 w-58 h-60 rounded-md'>
                <img className='w-40 pt-5 pl-8' src="public/07-opohBWBK.svg"></img>
                <p className='text-gray-600 pl-5 pt-6'>Flat</p>
                <p className='text-3xl font-bold pl-4'>$899 off</p>
                <p className='text-lg pl-4 pt-1'>On Demestic Flights</p>
                <p className='pl-4 pt-4 text-2xl border-dashed'>8B99OFF</p>
            </div>
            <div className='relative left-40 top-5 bg-pink-100 w-58 h-60 rounded-md'>
            <img className='w-40 pt-5 pl-8' src="public/08-DvZHGsr_.svg"></img>
            <p className='text-gray-600 pl-5 pt-6'>Flat</p>
                <p className='text-3xl font-bold pl-4'>13% off</p>
                <p className='text-lg pl-4 pt-1'>On Demestic Flights</p>
                <p className='pl-4 pt-4 text-2xl border-dashed'>13POOFF</p>
            </div>
            <div className='relative left-40 top-5 bg-blue-100 w-58 h-60 rounded-md' >
            <img className='w-40 pt-5 pl-8' src="public/09-lbUh0dwJ.svg"></img>
            <p className='text-gray-600 pl-5 pt-6'>Flat</p>
                <p className='text-3xl font-bold pl-4'>$2,400 off</p>
                <p className='text-lg pl-4 pt-1'>On International Flights</p>
                <p className='pl-4 pt-4 text-2xl border-dashed'>LOGI65F</p>
            </div>
            </div>
            <div className='justify-items-center font-bold text-5xl '>
                <p>Popular Destinations</p>
            </div>
            <div class="flex py-10 pl-25 pr-20 cursor-pointer">
                <div>
                <img className='w-[90%] rounded-lg transition-transform duration-500 ease in out transform hover:scale-105' src="public/01-XLNMkZnp.jpg"></img>
                <div className='flex'>
                 <p className='font-bold text-xl pl-1 pt-3 ' >Thailand</p>
                 <p class='font-bold text-md pl-25 pt-4 flex'>4.3<FaStar size={18} color='yellow'/></p>
                </div>
                <div className='text-gray-500 text-md pl-1'>
                <p>The next flight is on 26th Dec</p>
                </div>
                </div>
             <div>
             <img className='w-[90%] rounded-lg transition-transform duration-500 ease in out transform hover:scale-105' src="public/03-EPDgyWjn.jpg"></img>
             <div className='flex'>
                 <p className='font-bold text-xl pl-1 pt-3 ' >Hong Kong</p>
                 <p class='font-bold text-md pl-25 pt-4 flex'>4.3<FaStar size={18} color='yellow'/></p>
                </div>
                <p className='text-gray-500 text-md pl-1'>Daily 1 flight</p>
             </div>
             
            <div>
            <img className='w-[90%] rounded-lg transition-transform duration-500 ease in out transform hover:scale-105' src="public/02-wSem_cAO.jpg"></img>
            <div className='flex'>
                 <p className='font-bold text-xl pl-1 pt-3 ' >Maldives</p>
                 <p class='font-bold text-md pl-25 pt-4 flex'>4.3<FaStar size={18} color='yellow'/></p>
                </div>
                <p className='text-gray-500 text-md pl-1'>2 flights everyweek</p>
            </div>
             
             <div>
             <img className='w-[90%] rounded-lg transition-transform duration-500 ease in out transform hover:scale-105' src="public/04-QN3VUbn5.jpg"></img>
             <div className='flex'>
                 <p className='font-bold text-xl pl-1 pt-3' >Switzerland</p>
                 <p class='font-bold text-md pl-25 pt-3 flex'>4.3<FaStar size={18} color='yellow'/></p>
                </div>
                <p className='text-gray-500 text-md pl-1'>Filling fast next available flight on 2nd Oct </p>
             </div>
            </div>
          <div className='flex gap-20'>
            <div className='pl-45 py-10'>
            <img className='w-35 ' src="public/step-3-7OYqXIyu.svg"></img>
            <p className='font-bold text-xl pt-2'>Search Choice</p>
            <p className='text-gray-500 text- pt-3'>Total 630+ destinations that we work with</p>
            </div>
            <div className='py-10'>
            <img className='w-45 pt-10 pl-10'src="public/step-2-FFQO7UxQ.svg"></img>
            <p className='font-bold text-xl pt-2'>Select Destination</p>
            <p className='text-gray-500 text-md pt-3'>Insipidity the sufficient discretion</p>
            </div>
            <div className='py-10 pl-20'>
             <img className='w-35 ' src="public/step-1-MvdtJvxb.svg"></img>
             <p className='font-bold text-xl pt-2'>Easy to Book</p>
            <p className='text-gray-500 text-md pt-3'>With an easy and fast ticket purchase process</p>
            </div>
          </div>
        

        
           
        </>
    )
}

export default Takeoff
