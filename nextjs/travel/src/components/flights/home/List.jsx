import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";

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
      {/* <div className="flex py-10 justify-center ">
  <div className="border-1 border-solid rounded-lg border-gray-300 w-[1000px] p-28">
  <div className='absolute top-35 left-34 flex'>
  <button className='bg-gray-300 rounded-l-lg px-4 py-2 text-black  font-semibold '>one way</button>
  <button className='bg-black rounded-r-lg text-white  font-semibold px-4 py-2'>Round Trip</button> 
  </div>
</div>
</div> */}

                   
                
                    
                    <div className='w-full h-55 mt-75  left-10 bg-white'>
                        <div className='pt-5 pl-6 flex'>
                            <button className='bg-gray-300 rounded-l-lg px-4 py-2 text-black  font-semibold '>one way</button>
                            <button className='bg-black rounded-r-lg text-white  font-semibold px-4 py-2'>Round Trip</button>

                            <div className='bg-gray-100 absolute left-155 rounded-md flex'>

                                <div className={`w-[200px] py-2 text-gray-500 rounded-t-lg border ${visible ? "border-b-1" : "border-transparent"}`}>

                                    <div ref={visibleRef} onClick={() => { setVisible(!visible) }} id="class" className=" px-1 relative flex items-center justify-between cursor-pointer ">
                                        <div>Premium Economy</div>
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

                                            <p className='pt-1'>2</p>
                                            <span className='pt-2 pl-2 '><IoIosArrowDown /></span>

                                            <div className={`z-50 bg-white w-[190px] absolute  top-8 left-0 ${visibleSecond ? "flex" : "hidden"} flex-col border px-2`}>
                                                <form>
                                                    <input type="text"></input>
                                                    <ul>
                                                        <li className='list-none hover:bg-gray-200'>Select Travelers</li>
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
                                    <div >San Jacinto, USA</div>
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
                                            <div className='flex'>North Dakota, Canada</div>
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
                                <div className='bg-white w-60 rounded-lg'>
                                    <input className='p-3 cursor-pointer ' type="date" name="date" id="date" />
                                </div>
                            </div>

                        </div>



                    </div>
                
         <p className='text-gray-600 pl-3 text-sm  gap-1 flex'><FaRegCalendar size={20} />Departure </p>
                                   

            <div>
            <div>
          <p>09 Flight Available</p>
            </div>
            <div className='flex'>
            <p>25 Jan</p>
            <p>1 Stop</p>
            </div>
            </div>

            <div>
            <div className='bg-blue-100 w-full h-45 rounded-2xl'>
              <div>
              <p>International Guideline</p>
              </div>
            <div>
              <p>COVID safety measures adopted by various 
                countries including VISA restrictions, quarantine rules, etc.</p>
            </div>
          </div> 
            </div>
          
    </>
  )
}

export default List
