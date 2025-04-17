import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar,CiSearch } from "react-icons/ci";
import { FaRegUser , FaHeadset,FaPlay } from "react-icons/fa6";


export default function Hero() {
    return (
        <>
                <div className="flex ">
                        <div className="flex-col">
                    <h1 className="text-6xl px-20 py-5 font-bold">Find the top</h1>
                    <span className="text-6xl px-20 font-bold">Hotel  nearby </span>
                    <p className="p-10 opacity-75 text-xl">We bring you not only a stay option, but an experience in your budget to enjoy the luxury.</p>
                    <div className="flex p-5 gap-5">
                <button className="bg-blue-300 text-blue-800 bg-opacity-75 hover:bg-blue-800 hover:text-white px-6 py-3 " > Discover Now </button>
                      <img className="rounded-full h-13" src="12-Fg48wljI.jpg"></img>
                      <FaPlay />
                      <p>Watch Our Story</p>
                    </div>
                    <div>
                      <h2>Check Availability</h2>
                      
                    <form className="flex  shadow rounded-xl relative p-4">
                      <div>
                    <IoLocationOutline size="40" />
                    </div>
                    <div>
                      <label className="form-level">Location</label>
                      <input type="location" placeholder='Select Location'></input>
                      </div>
                      <div>
                    <CiCalendar  size="40"/>
                    </div>
                    <div>
                      <label className="form-level">Check in -out</label>
                    </div>
                    <input type="date-time-local"placeholder="Current time"></input>
                       <div>
                    <FaRegUser  size="40"/>
                    </div>
                    <div>
                      <label className='form-level'>Guests & rooms</label>
                      <input type="text" placeholder=""></input>
                      </div>
                    <CiSearch color="blue" size="40" />
                    </form>
                    </div>
                    </div>
                    
                <div className="container">
                  <div className="w-xl p-5">
      <img className="rounded-2xl "src="06-hDeq7Yvr.jpg"></img>
      </div>
      <div className="absolute top-5 end-0 z-1 ">
<div className="bg-blur border-light rounded-xl shadow-lg p-4  text-center">
      <FaHeadset color="red" size="30"/>
      <h5 className="text-bold">24/7</h5>
      <h5 className="text-bold">Guide Supports</h5>
      </div>
      </div>
      <div className="flex flex-col absolute top-25 right-140 gap-10 z-0">
      <img className="w-15 top-0 rounded-full border-3 border-white "src="11-gZgLx6ik.jpg"></img>
      <img className="w-20 top-0 rounded-full border-3 border-white "src="11-gZgLx6ik.jpg"></img>
      </div>
      </div>
      
      </div>
        </>
    )
}

