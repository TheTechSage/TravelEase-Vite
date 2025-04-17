import { IoIosAirplane } from "react-icons/io"; 
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
export default function Hero(){  
    return(
       <div className="py-10">
           <div className="flex pl-20">
           <IoIosAirplane size={80} />
           <p className="pt-2 tracking-wide text-4xl font-bold">Mumbai(BOM)</p>
           <div className="pt-2">
           <IoIosArrowRoundForward size={52} />
           </div>
           <p className="pt-2 tracking-wide text-4xl font-bold">New York(JFK)</p>
           </div>
           <div className="flex pl-40">
            <div className="absolute top-42 text-md text-gray-500 font-semibold flex gap-1">
            <p className="flex">25 Jan</p>
           <div className="pt-1"><BsDot size={20} /></div> 
            <p className="flex ">1 Stop</p>
            <div className="pt-1"><BsDot size={20} /></div> 
            <p className="flex ">05h 25m</p>
            </div>
             </div>
             <div className="pl-20 pt-5 flex">
            <div className="w-200 p-40 border border-gray-400 rounded-lg">
            <div className="flex">
            <p className="absolute top-58 left-24 text-gray-500 font-semibold tracking-wide">Travel Class: </p>
            <p className="absolute top-58 left-48 font-semibold tracking-wide">Economy</p>
            <p className="absolute top-58 left-170 flex underline text-blue-700 text-md font-semibold"><MdRemoveRedEye size={20} className="pt-1"/>Baggage & Fare Rules</p>
            </div>
           <div>
           <p className="absolute top-78 left-24 font-semibold tracking-wide">Phillippines Airline</p>
           <p className="absolute top-85 left-24 font-semibold tracking-wide">PA - 5620</p>
           </div>
           <div className="absolute top-70 left-68">
           <p className="font-bold text-2xl">BOM</p> 
           <p className="font-bold">14:50</p>
           <div className="text-gray-500 text-md">
            <p>Sun, 29 Jan 2023</p>
            <p className="pt-2">Chhatrapati Shivaji</p>
            <p>International Airport</p>
            <p className="pt-2">Terminal - 2, Gate - 25</p>
           </div>
           </div>
           <div className="font-bold text-xl absolute top-76 left-118">
            <p>9hr 50min</p>
           </div>
           <div className="absolute top-70 left-170">
           <p className="font-bold text-2xl">CDG</p> 
           <p className="font-bold">11:50</p>
           <div className="text-gray-500 text-md">
            <p>Sun, 29 Jan 2023</p>
            <p className="pt-2">Ch. De Gaulle, Paris,</p>
            <p>France</p>
            <p className="pt-2">Terminal - 2E, Gate - 3</p>
           </div>
           </div>
            </div>
            <div >
          
            </div>
            </div>
            </div>
           
        
    )
}