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
                      {/* <div className="text-center g-4 flex "> */}
                    <IoLocationOutline size="40" /><input type="location" placeholder='Select Location'></input>
                    <CiCalendar  size="40"/><input type="date-time-local"placeholder="Current time"></input>
                    <FaRegUser  size="40"/><input type="text" placeholder=""></input>
                    <CiSearch color="blue" size="40" />
                    </form>
                    </div>
                    </div>
                    
                <div className="p-4">
      <img  className="w-xl rounded-xl" src="06-hDeq7Yvr.jpg"></img>
     <div className="absolute top-30 end-0 z-index-1">
      <div className="bg-blur border-light rounded-xl shadow-lg p-4  text-center">
      <FaHeadset color="red" size="30"/>
      <h5 className="text-bold">24/7</h5>
      <h5 className="text-bold">Guide Supports</h5>
      </div>
     </div>
      <div className=" flex absolute top-35 left-193">
      <img className=" w-15 rounded-full border-3 border-white "src="11-gZgLx6ik.jpg"></img>
      </div>
      <div className="absolute top-70 left-190">
      <img className=" w-20 rounded-full border-3 border-white "src="11-gZgLx6ik.jpg"></img>
      </div>
    
      </div>
      </div>
                    
                
        </>
    )
}

