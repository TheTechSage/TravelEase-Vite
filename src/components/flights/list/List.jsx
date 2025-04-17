import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
import { LuDot } from "react-icons/lu";
import { IoEye } from "react-icons/io5";

import { Slider } from "@/components/ui/slider"

function List() {
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

            <div className='flex py-10 justify-center'>
                <div className="border-1 border-solid rounded-lg border-gray-300 w-[80%] px-10 py-4 pb-15">
                    <div className=' flex'>
                        <button className='bg-gray-300 rounded-l-lg px-4 py-2 text-black  font-semibold '>one way</button>
                        <button className='bg-black rounded-r-lg text-white  font-semibold px-4 py-2'>Round Trip</button>

                        <div className='bg-gray-100 absolute left-155 rounded-md flex'>

                            <div className={`w-[200px] py-2 text-gray-500 rounded-t-lg border ${visible ? "border-b-1" : "border-transparent"}`}>

                                <div ref={visibleRef} onClick={() => { setVisible(!visible) }} id="class" className=" px-1 relative flex items-center justify-between cursor-pointer ">
                                    <p className='text-black'>Premium Economy</p>
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

                                        <p className='pt-1 pl-2 text-black'>2</p>
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

                    <div className='flex gap-4 relative top-8 left-1'>
                        <div className='bg-gray-100 w-70 rounded-lg  text-gray-500  cursor-pointer '>
                            <p className='text-gray-600 pl-2 pt-2 text-sm flex items-center'>
                                <IoLocationOutline size={20} className="mr-1" /> From
                            </p>
                            <select ref={fromRef} onClick={() => setFrom(!from)} className={`w-60 px-2 py-3 relative left-2 top-0 bg-white flex-1/3 flex justify-between rounded-t-lg border border-b-0 ${from ? "" : "border-transparent"}`}>
                                {/* <p className='text-black'>San Jacinto, USA</p> */}
                                <IoIosArrowDown />

                                {/* <div className={`${from ? "flex" : "hidden"} absolute border top-10 left-0 flex-col bg-white w-60 rounded-b-lg `}> */}
                                <option value="">
                                    <input type="text" className="border-b-0 p-1 mb-1" />
                                </option>
                                <option className='list-none hover:bg-gray-200'>select location</option>
                                <option className='list-none hover:bg-gray-200'>San Jacinto, USA</option>
                                <option className='list-none hover:bg-gray-200'>North Dakota, Canada</option>
                                <option className='list-none hover:bg-gray-200'>West Virginia, Paris</option>
                                {/* </div> */}
                            </select>
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
                                        <div className='flex text-black'>North Dakota, Canada</div>
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

                <div className='absolute top-75 left-230'>
                    <button className='flex cursor-pointer hover:bg-sky-700 text-white rounded-lg p-2 px-6 bg-blue-700 font-semibold'>Find ticket<FaArrowRightLong size={19} className='pt-2 pl-2' /></button>
                </div>
            </div>
            <div >

                <p className='font-bold text-4xl pl-30 '>09 Flight Available</p>
                <div className='flex'>
                    <p className='pl-30 font-bold pt-2'>25 Jan</p>
                    <p className=' pt-2'><LuDot size={28} className='text-gray-700' /> </p>
                    <p className='font-bold pt-2'> 1 Stop</p>
                </div>
            </div>
            <div className='pl-25 pr-25 py-10 '>
                <div className='bg-gray-200 w-full p-22 rounded-2xl'>
                    <div className='w-28 absolute top-128 '>
                        <img src="public/img01.svg"></img>
                    </div>
                    <div className='absolute top-130 left-90'>
                        <p className='font-bold text-3xl '>International Guideline</p>
                        <p className='text-gray-400 pt-2 '>COVID safety measures adopted by various countries including VISA <br></br>restrictions,
                            quarantine rules, etc.</p>
                    </div>
                    <div className='w-38 absolute top-127 left-230'>
                        <img src="public/img02.svg"></img>
                    </div>
                    <div className='relative top-15 left-44'>
                        <button className='flex cursor-pointer hover:bg-sky-700 text-white rounded-md p-1 px-3 bg-blue-700 font-semibold text-sm'>View Guidelines</button>
                    </div>
                </div>

            </div>
            
            <div className="pl-24 py-10 flex gap-10">
                <div className="bg-white w-80 p-8 rounded shadow">
                    <p className='font-bold'>Popular Filters</p>
                    <form action="/action_page.php">
                        <div className='flex'>
                            <input type="checkbox" id="Fare" name="Fare" value="Price" />
                            <label htmlFor="Fare" className="ml-1 text-gray-500 text-sm">Refundable Fare</label>
                            <p className='text-gray-500 text-sm relative left-35'>(41)</p>
                        </div>
                        <div className="mt-2 flex">
                            <input type="checkbox" id="stop" name="stop" value="1" />
                            <label htmlFor="stop" className="ml-1  text-gray-500 text-sm">1 Stop</label>
                            <p className='text-gray-500 text-sm relative left-50'>(20)</p>
                        </div>
                        <div className="mt-2 flex ">
                            <input type="checkbox" id="dept" name="dept" value="Late" />
                            <label htmlFor="dept" className="ml-1 text-gray-500 text-sm">Late Departure</label>
                            <p className='text-gray-500 text-sm relative left-37'>(4)</p>
                        </div>
                        <div className="mt-2 flex">
                            <input type="checkbox" id="Non-stop" name="Non-stop" value="Non" />
                            <label htmlFor="Non-stop" className="ml-1 text-gray-500 text-sm">Non-Stop</label>
                            <p className='text-gray-500 text-sm relative left-45'>(2)</p>
                        </div>
                    </form>

                   <div className='pt-5'>
                   <Slider defaultValue={[33]} max={100} step={1} />
                   </div>
                    


                </div>

                <div className=' relative border-1 border-solid rounded-lg border-gray-300 w-160 px-10 py-12  '>
                    <div className='absolute top-4 left-5'>
                        <img src="public/img04.svg"></img>
                        <div>
                            <p className='text-md font-semibold pt-3'>Phillippines Airline</p>
                            <p className='text-md font-semibold '> PA - 5620</p>
                        </div>

                    </div>
                    <div className='absolute top-4 left-44'>
                        <p className='font-bold text-[25px]'>14:50</p>
                    </div>
                    <div className='absolute top-12 left-44'>
                        <p className='font-bold text-md'>Sun, 29 Jan 2023</p>
                        <p className='text-md text-gray-500'>BOM - Terminal 2 </p>
                        <p className='text-md text-gray-500'> Mumbai, India</p>
                    </div>
                    <div className='absolute top-4 left-84'>
                        <p className='font-bold text-[25px]'>07:35</p>
                    </div>
                    <div className='absolute top-12 left-84'>
                        <p className='font-bold text-md'>Sun, 30 Jan 2023</p>
                        <p className='text-md text-gray-500'>JFK - Terminal 2 </p>
                        <p className='text-md text-gray-500'>New York, USA</p>
                    </div>
                    <div className='absolute top-4 left-125' >
                        <p className='font-bold text-[25px]'>$18,500</p>
                        <button className='bg-black text-white text-md font-semibold p-2 px-4 rounded-md '>Book Now</button>
                        <p className='text-sm underline text-sky-700 pt-2 pl-1 flex gap-1'><IoEye size={18} />Flight Details</p>
                    </div>
                    <div className='pt-25 pb-0 '>
                        <div className='bg-gray-100 w-140 rounded-md p-2 flex gap-25'>
                            <p className='text-red-700 text-sm pl-4'>Only 10 Seat Left</p>
                            <p className='text-gray-500 text-sm'>Total time: 10h 35m</p>
                            <p className='text-green-700 text-sm'>Refundable</p>
                        </div>
                    </div>
                </div>
            </div>

            
            </>
            )
}

            export default List
