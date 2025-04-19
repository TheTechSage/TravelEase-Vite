import { IoIosAirplane } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div class="py-10 text-[1rem] font-[400]">
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
      
      <div className=" px-30 pt-8 ">

        <div className="w-190 border h-130 rounded-xl p-4 ">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p className="text-gray-600 font-semibold tracking-wide">Travel Class:</p>
              <p className="font-semibold tracking-wide">Economy</p>
            </div>
            <div className=" text-blue-700 text-md font-semibold underline">
              <Link href="#" className="flex"><MdRemoveRedEye size={20} className="pt-1" />Baggage & Fare Rules</Link>
            </div>
          </div>
          <div className="flex justify-between gap-4 py-4">
            <div className="font-medium">
              <Image src="flightlogo1.svg" alt="Logo" width={80} height={80} className="py-4" />
              <p>Phillippines Airline</p>
              <p>PA - 5620</p> 
            </div>
            <div>
              <p className="text-2xl font-bold">BOM</p>
              <p className="font-bold">14:50</p>
              <div className="text-gray-500 text-md">
              <p>Sun, 29 Jan 2023</p>
              <p className="pt-2">Chhatrapati Shivaji</p>
              <p>International Airport</p>
              <p className="pt-2">Terminal - 2, Gate - 25</p>
            </div>
            </div>
            <div>
            <p className="font-bold text-xl pt-6 pl-6">9hr 50min</p>
            <hr className="w-40"></hr>
            </div>
            <div>
            <p className="text-2xl font-bold">CDG</p>
              <p className="font-bold">11:50</p>
              <div className="text-gray-500 text-md">
              <p>Sun, 29 Jan 2023</p>
              <p className="pt-2">Ch. De Gaulle, Paris,</p>
              <p>France</p>
              <p className="pt-2">Terminal - 2E, Gate - 3</p>
            </div>
            </div>
          </div>
          <div className="w-full p-2 bg-gray-100 rounded-xl">
          <p className="text-center text-red-700">Change of planes: 3h 15m Layover in France</p>
          </div>
        <div className="justify-between flex pt-5">
        <div className="font-medium">
              <Image src="flightlogo1.svg" alt="Logo" width={80} height={80} className="py-4" />
              <p>Phillippines Airline</p>
              <p>PA - 5620</p>
            </div>
        <div>
        <p className="text-2xl font-bold">CDG</p>
              <p className="font-bold">2:50</p>
              <div className="text-gray-500 text-md">
              <p>Sun, 30 Jan 2023</p>
              <p className="pt-2">Ch. De Gaulle, Paris,</p>
              <p>International Airport</p>
              <p className="pt-2">Terminal - 2E, Gate - 3</p>
        </div>
       </div>
       <div>
            <p className="font-bold text-xl pt-6 pl-6">5hr 50min</p>
            <hr className="w-40"></hr>
            </div>
        <div>
        <p className="text-2xl font-bold">JFK</p>
              <p className="font-bold">7:35</p>
              <div className="text-gray-500 text-md">
              <p>John F Kennedy Intl-NY</p>
              <p className="pt-2">Ch. De Gaulle, Paris,</p>
              <p>Terminal - 4, Gate - 08</p> 
        </div> 
        </div>
        </div>
      </div>
    </div>
    <div className=" px-30 pt-8 ">
    <div className="w-190 border h-130 rounded-xl p-4 ">
    <div>
      <p className="text-4xl font-bold">Important Information</p>
    </div>
   <div className="pt-4 w-full">
   <hr></hr>
   </div>
   <div className="pt-4">
    <p className="flex text-xl font-bold"><IoIosArrowRoundForward size={30}/>Passengers traveling to the United States, please note</p>
   </div>
   <div className="text-sm text-gray-500">
    <ul> 
      <div className="pt-4">
      <li>
        Who can travel? 
        <strong >
        All fully vaccinated travelers are allowed to enter the country. All WHO-approved vaccines, 
        including Covishield and Covaxin, are accepted by the USA.
        </strong>
      </li>
      </div>
      <div className="pt-2">
      <li>
      Destination restrictions: 
      <strong>
      Non-vaccinated travelers from India cannot enter. Any traveler transiting via EU/UK cannot enter the USA.
      </strong>
      </li>
      </div>
      <div className="pt-2">
     <li>
     Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor.
     </li>
     <div className="pt-2">
     <li>
     Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is.
     </li>
     </div>
      </div>
      <div className="pt-2">
     <li>
     Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.
     </li>
      </div>
    </ul>
   </div>
   <div className="pt-4">
    <p className="flex text-xl font-bold"><IoIosArrowRoundForward size={30}/>A Note on Guidelines</p>
    <div className="pt-4">
    <p className="text-sm text-gray-500 tracking-wider">While we do our best to get you the latest information, due to the rapidly evolving nature of current events, sometimes that is not possible. Please note, it is the sole responsibility of the passenger to ensure his or her eligibility to enter the destination or transit countries (as applicable). We accept no liability in this regard. Please check the travel rules of all regulatory websites before to booking as well as commencing.</p>
   </div>
   </div>
    </div>
    </div>
    
    </div>

  )
}