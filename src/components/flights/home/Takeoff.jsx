import React, { useEffect, useRef, useState } from 'react'
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
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";

function Takeoff() {
    const [visible, setVisible] = useState(false);
    const [visibleSecond, setVisibleSecond] = useState(false);
    const [from, setFrom] = useState(false);
    const [to, setTo] = useState(false);

    
    const fromRef = useRef(null);
    const toRef = useRef(null);
    const visibleRef = useRef(null);
    const visibleSecondRef = useRef(null);

    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (fromRef.current && !fromRef.current.contains(event.target)) {
                setFrom(false);
            }
            if (toRef.current && !toRef.current.contains(event.target)) {
                setTo(false);
            }
            if (visibleRef.current && !visibleRef.current.contains(event.target)) {
                setVisible(false);
            }
            if (visibleSecondRef.current && !visibleSecondRef.current.contains(event.target)) {
                setVisibleSecond(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <>
            <div className='flex  ' >
                <div className='w-full gap-3  bg-blue-500 h-10 flex pl-40 items-center text-white text-sm'>
                    <h5>Traveling internationally?
                        Get update information on COVID-19 travel guidance and restrictions</h5>
                    <div className=' bg-black  rounded-md '>
                        <button className=' ' >Learn more!</button>
                    </div>
                    <div className='pl-0'>
                        <RxCross2 size={25} />
                    </div>
                </div>
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
                    <FaCircleHalfStroke size={20} color='#ffa31a' />
                    <IoSearchOutline size={25} color="gray-200" />
                    <div className='bg-blue-300 rounded-md text-sm w-22 p-1 
                     hover:bg-sky-600 hover:text-white flex'>
                        <div className='flex'>
                            <button className='cursor-pointer flex gap-2'><FaArrowRightToBracket className='relative top-1' />sign Up </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-20 py-20'>
                <div className='w-full pl-20 pr-15 pt-4 pb-8 h-[600px] bg-[url(/flight.jpg)]'>
                    <h1 className='font-extrabold text-7xl absolute top-110 left-60 tracking-wider'>Ready to take off?</h1>
                    <div className='w-full h-55 mt-75  left-10 bg-white'>
                        <div className='pt-5 pl-6 flex'>
                            <button className='bg-gray-300 rounded-l-lg px-4 py-2 text-black  font-semibold '>one way</button>
                            <button className='bg-black rounded-r-lg text-white  font-semibold px-4 py-2'>Round Trip</button>

                            <div className='bg-gray-100 absolute left-155 rounded-md flex'>

                                <div className={`w-[200px] py-2 text-gray-500 rounded-t-lg border ${visible ? "border-b-1" : "border-transparent"}`}>

                                    <div ref={visibleRef} onClick={() => { setVisible(!visible) }} id="class" className=" px-1 relative flex items-center justify-between cursor-pointer ">
                                        <p>Select Class</p>
                                        <span className='pt-1 pl-2'><IoIosArrowDown /></span>

                                        <div className={`z-50 bg-white w-[200px] absolute  top-8 left-0 ${visible ? "flex" : "hidden"} flex-col border px-2`}>
                                            <input type="text"></input>
                                            <ul>
                                                <li className='hover:bg-gray-200'>Select Class </li>
                                                <li className='hover:bg-gray-200'>Economy</li>
                                                <li className='hover:bg-gray-200'>Premium Economy</li>
                                                <li className='hover:bg-gray-200'>Business</li>
                                                <li className='hover:bg-gray-200'>First Class</li>
                                                <li className='hover:bg-gray-200'>Select class</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div className='bg-gray-100 w-48 h-10 absolute left-55 rounded-md flex text-gray-500 pt-1'>

                                    <div className={`w-[200px]  text-gray-500 rounded-t-lg border ${visibleSecond ? "border-b-1" : "border-transparent"}`}>

                                        <div ref={visibleSecondRef} onClick={() => { setVisibleSecond(!visibleSecond) }} id="class" className="px-1 relative flex justify-between cursor-pointer">

                                            <p className='pt-1'>Select Travelers</p>
                                            <span className='pt-2 pl-2 '><IoIosArrowDown /></span>

                                            <div className={`z-50 bg-white w-[190px] absolute  top-8 left-0 ${visibleSecond ? "flex" : "hidden"} flex-col border px-2`}>
                                                <form>
                                                    <input type="text"></input>
                                                    <ul>
                                                        <li className='list-none hover:bg-gray-200'>1</li>
                                                        <li className='list-none hover:bg-gray-200'>2</li>
                                                        <li className='list-none hover:bg-gray-200'>3</li>
                                                        <li className='list-none hover:bg-gray-200'>4</li>
                                                    </ul>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-4 relative top-4 left-4'>
                            <div className='bg-gray-100 w-70 rounded-lg  text-gray-500  cursor-pointer '>
                                <p className='text-gray-600 pl-2 pt-2 text-sm flex items-center'>
                                    <IoLocationOutline size={20} className="mr-1" /> From
                                </p>
                                <div ref={fromRef} onClick={() => setFrom(!from)} className={`w-60 px-2 py-3 relative left-2 top-0 bg-white flex-1/3 flex justify-between rounded-t-lg border border-b-0 ${from ? "" : "border-transparent"}`}>
                                    <p >Select Travelers</p>
                                    <IoIosArrowDown />

                                    <div className={`${from ? "flex" : "hidden"} absolute border top-10 left-0 flex-col bg-white w-60 rounded-b-lg `}>
                                        <input type="text" className="border-b-0 p-1 mb-1" />
                                        <ul className='p-1'>
                                            <li className='list-none hover:bg-gray-200'>select location</li>
                                            <li className='list-none hover:bg-gray-200'>San Jacinto, USA</li>
                                            <li className='list-none hover:bg-gray-200'>North Dakota, Canada</li>
                                            <li className='list-none hover:bg-gray-200'>West Virginia, Paris</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                            <button className="cursor-pointer hover:bg-sky-50 bg-white rounded-full h-10  w-10 absolute top-7 left-66 "> <FaArrowRightArrowLeft size={26} className='pl-3' />
                            </button>

                            
                            <div className='bg-gray-100 w-70 rounded-lg  text-gray-500  cursor-pointer '>
                                <div className='text-gray-500 pl-2 gap-1 text-sm z-30 flex'>
                                    <TbLocation size={20} />To
                                </div>

                                <div className='mx-auto bg-gray-100 flex rounded-lg text-gray-500 cursor-pointer justify-between px-4 py-1'>
                                    <div className={`top-14 left-0 `}>
                                        <div ref={toRef} onClick={() => setTo(!to)} className={`w-60 px-2 py-3 relative left-2 top-0 bg-white flex-1/3 flex justify-between rounded-t-lg border border-b-0 ${to ? "" : "border-transparent"}`}>
                                            <div className='flex'>Select Travelers</div>
                                            <span className='pt-1'><IoIosArrowDown /></span>
                                            <div className={`${to ? "flex" : "hidden"} absolute top-10 left-0 flex-col items-center border bg-white w-full rounded-b-lg`}>

                                                <input type="text" className="w-full p-1 mb-1" />
                                                <ul className='p-1 w-full'>
                                                    <li className='list-none hover:bg-gray-200'>select location</li>
                                                    <li className='list-none hover:bg-gray-200'>San Jacinto, USA</li>
                                                    <li className='list-none hover:bg-gray-200'>North Dakota, Canada</li>
                                                    <li className='list-none hover:bg-gray-200'>West Virginia, Paris</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='bg-gray-100  w-70 p-3 rounded-lg'>
                                <p className='text-gray-600 pl-3 text-sm  gap-1 flex'><FaRegCalendar size={20} />Departure </p>
                                <div className='bg-white w-60 rounded-lg'>
                                    <input className='p-3 cursor-pointer ' type="date" name="date" id="date" />
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>

            <div className='absolute top-193 left-230'>
                <button className='flex cursor-pointer hover:bg-sky-700 text-white rounded-lg p-2 px-6 bg-blue-700 font-semibold'>Find ticket<FaArrowRightLong size={19} className='pt-2 pl-2' /></button>
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
                    <div className='pl-4 pt-4'>
                        <div className='inline-block  border-dashed 
               rounded-md border-blue-800 border-2 p-6 py-4 px-14 '>
                        </div>
                        <div className='absolute top-50  left-8'>
                            <p className='font-semibold text-xl'>8B99OFF</p>
                        </div>
                        <button className="cursor-pointer hover:bg-sky-50 bg-white rounded-full h-12 w-12 relative left-10 "><FaArrowRightLong size={29} className='pl-4' /></button>
                    </div>
                </div>

                <div className='relative left-40 top-5 bg-pink-100 w-58 h-60 rounded-md'>
                    <img className='w-40 pt-5 pl-8' src="public/08-DvZHGsr_.svg"></img>
                    <p className='text-gray-600 pl-5 pt-6'>Flat</p>
                    <p className='text-3xl font-bold pl-4'>13% off</p>
                    <p className='text-lg pl-4 pt-1'>On Demestic Flights</p>
                    <div className='pl-4 pt-4'>
                        <div className='inline-block  border-dashed 
               rounded-md border-blue-800 border-2 p-6 py-4 px-14 '>
                        </div>
                        <div className='absolute top-49  left-8  '>
                            <p className='font-semibold text-xl'>13POOFF</p>
                        </div>
                        <button className="cursor-pointer hover:bg-sky-50 bg-white rounded-full h-12 w-12 relative left-10 "><FaArrowRightLong size={29} className='pl-4' /></button>
                    </div>
                </div>


                <div className='relative left-40 top-5 bg-blue-100 w-58 h-60 rounded-md' >
                    <img className='w-40 pt-5 pl-8' src="public/09-lbUh0dwJ.svg"></img>
                    <p className='text-gray-600 pl-5 pt-6'>Flat</p>
                    <p className='text-3xl font-bold pl-4'>$2,400 off</p>
                    <p className='text-lg pl-4 pt-1'>On International Flights</p>
                    <div className='pl-4 pt-4'>
                        <div className='inline-block  border-dashed 
               rounded-md border-blue-800 border-2 p-6 py-4 px-14 '>
                        </div>
                        <div className='absolute top-49  left-8  '>
                            <p className='text-xl font-semibold'>LOGI65F</p>
                        </div>
                        <button className="cursor-pointer hover:bg-sky-50 bg-white rounded-full h-12 w-12 relative left-10 "><FaArrowRightLong size={29} className='pl-4' /></button>
                    </div>


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
                        <p class='font-bold text-md pl-25 pt-4 flex'>4.3<FaStar size={18} color='yellow' /></p>
                    </div>
                    <div className='text-gray-500 text-md pl-1'>
                        <p>The next flight is on 26th Dec</p>
                    </div>
                </div>
                <div>
                    <img className='w-[90%] rounded-lg transition-transform duration-500 ease in out transform hover:scale-105' src="public/03-EPDgyWjn.jpg"></img>
                    <div className='flex'>
                        <p className='font-bold text-xl pl-1 pt-3 ' >Hong Kong</p>
                        <p class='font-bold text-md pl-25 pt-4 flex'>4.3<FaStar size={18} color='yellow' /></p>
                    </div>
                    <p className='text-gray-500 text-md pl-1'>Daily 1 flight</p>
                </div>

                <div>
                    <img className='w-[90%] rounded-lg transition-transform duration-500 ease in out transform hover:scale-105' src="public/02-wSem_cAO.jpg"></img>
                    <div className='flex'>
                        <p className='font-bold text-xl pl-1 pt-3 ' >Maldives</p>
                        <p class='font-bold text-md pl-25 pt-4 flex'>4.3<FaStar size={18} color='yellow' /></p>
                    </div>
                    <p className='text-gray-500 text-md pl-1'>2 flights everyweek</p>
                </div>

                <div>
                    <img className='w-[90%] rounded-lg transition-transform duration-500 ease in out transform hover:scale-105' src="public/04-QN3VUbn5.jpg"></img>
                    <div className='flex'>
                        <p className='font-bold text-xl pl-1 pt-3' >Switzerland</p>
                        <p class='font-bold text-md pl-25 pt-3 flex'>4.3<FaStar size={18} color='yellow' /></p>
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
                    <img className='w-45 pt-10 pl-10' src="public/step-2-FFQO7UxQ.svg"></img>
                    <p className='font-bold text-xl pt-2'>Select Destination</p>
                    <p className='text-gray-500 text-md pt-3'>Insipidity the sufficient discretion</p>
                </div>
                <div className='py-10 pl-20'>
                    <img className='w-35 ' src="public/step-1-MvdtJvxb.svg"></img>
                    <p className='font-bold text-xl pt-2'>Easy to Book</p>
                    <p className='text-gray-500 text-md pt-3'>With an easy and fast ticket purchase process</p>
                </div>
            </div>
            <div className='pl-25 pr-25 py-10 '>
                <div className='bg-blue-100 w-full h-45 rounded-2xl'>
                    <div className='pl-6 pt-10'>
                        <p className='text-4xl font-bold'>It's time to discover </p>
                    </div>
                    <div className='absolute top-565 left-118'>
                        <img className='w-10' src="public/04-62COr-Za.svg"></img>
                    </div>
                    <div className='pl-6 pt-4'>
                        <p className='text-gray-500 text-md'>He moonlights difficult engrossed it, sportsmen.
                            Interested has all Devonshire difficulty gay assistance joy.</p>
                    </div>
                    <div className='absolute top-575 left-240 '>
                        <button className='bg-black  font-semibold text-white p-3 px-6 rounded-xl'>Book a flight</button>
                    </div>
                </div>
            </div>

            <div className='text-center '>
                <p className='font-bold text-5xl'>Latest Blogs & News</p>
            </div>
            <div className=' py-10 pl-30'>
                <img className='rounded-xl w-130' src="public/01-DIQDz2ce.jpg"></img>
                <div>
                    <p className='text-3xl font-bold hover:text-blue-800 cursor-pointer'>10 ways on How to Improve your<br></br> Hotel Operations</p>
                </div>

                <div className='flex-col'>
                    <div className='absolute top-633 left-170'>
                        <div className='flex'>
                            <img className='w-37 rounded-xl' src="public/02-HjfkwpD3.jpg"></img>
                            <div className='flex-col'>
                                <p className='text-xl pt-8 px-5 hover:text-blue-800 cursor-pointer font-bold'>Story of Water World adventure</p>
                                <p className='text-gray-500 px-6 pt-2 cursor-pointer'>Jacqueline Miller</p>
                            </div>
                        </div>
                        <div className='pt-10 flex'>
                            <img className='w-37 rounded-xl' src="public/03-rK62pTNA.jpg"></img>
                            <div className='flex-col'>
                                <p className='text-xl pt-8 px-5 hover:text-blue-800 cursor-pointer font-bold'>How Hotel Technology Can Help Small Hotel Businesses</p>
                                <p className='text-gray-500 px-6 pt-2 cursor-pointer'>Frances Guerrero</p>
                            </div>
                        </div>
                        <div className='pt-10 flex'>
                            <img className='w-37 rounded-xl' src="public/04-VFGGPgDc.jpg"></img>
                            <div className='flex-col'>
                                <p className='text-xl pt-8 px-5 hover:text-blue-800 cursor-pointer font-bold'>Hotel Service-Become a Guide for Your Guests</p>
                                <p className='text-gray-500 px-6 pt-2 cursor-pointer'>Louis Ferguson</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Takeoff
