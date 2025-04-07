import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdCardTravel } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { IoIosArrowDown } from 'react-icons/io';
function Takeoff () {
    return (
        <> 
        <div className="flex">
    <nav className="w-full h-16 bg-blue-500 items-center text-white">
            <h4>Traveling internationally? 
            Get update information on COVID-19 travel guidance and restrictions</h4>
            <div>
                <button>Learn more!</button>
            </div>
            <div>
               <RxCross2 />
            </div>
        </nav>
        </div>

        <div>
        <img className="h-18 pl-18 pt-8" src="logo-XeOrDTLq.svg"></img>
        </div>
            
          <div className="flex pt-10 pl-12 gap-8 font-arial">
        <div className="border-none cursor-pointer relative group hover:bg-sky-50">
          <a href="#travels">
         <ul className="flex items-center"><MdCardTravel />Travelers<IoIosArrowDown size={15}/></ul>
            </a>
            <div className="list-none border-none bg-white p-6 text-bold 
             shadow-lg w-60 absolute hidden group-hover:flex flex-col">
                <li className="list-none"> <FaHotel />Hotel</li>
                  <li> <MdFlight />Flight</li>
                  <li><FaGlobeAmericas />Tour</li>
                  <li><FaCar />cab</li>
              </div>
             </div>
            </div>
     

        </>
    )
}

export default Takeoff
