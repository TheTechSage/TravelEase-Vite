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
    <nav className="w-full h-10 bg-blue-500 items-center text-white">
            <h4>Traveling internationally? 
            Get update information on COVID-19 travel guidance and restrictions</h4>
            <div className="justify-items-end pt-0">
               <RxCross2 size={20} />
            </div>
        </nav>
            </div>

        </>
    )
}

export default Takeoff
