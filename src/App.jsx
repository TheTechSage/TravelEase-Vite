import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Takeoff from './components/flight/Takeoff'
// import Hero from './hero/Hero'
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar,CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";

//  import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { ImSpoonKnife } from "react-icons/im";
 import { LuClock11 } from "react-icons/lu";
import { MdOutlineSecurity,MdOutlineElectricBolt } from "react-icons/md";
import { ImStarFull } from "react-icons/im";
 import { FaStarHalfAlt } from "react-icons/fa";

function App() {

  return (
    <>
      <Header />
       <div className="flex ">
        <div className="flex-col">
    <h1 className="text-6xl px-20 py-5 font-bold">Find the top</h1>
    <span className="text-6xl px-20 font-bold">Hotel  nearby </span>
    <p className="p-10 opacity-75 text-xl">We bring you not only a stay option, but an experience in your budget to enjoy the luxury.</p>
    <div className="flex p-5 gap-5">
<button className="bg-blue-300 text-blue-800 bg-opacity-75 hover:bg-blue-800 hover:text-white px-6 py-3 " > Discover Now </button>
      <p>Watch Our Story</p>
    </div>
    <div>
      <h2>Check Availability</h2>
    <form className="flex border-3 border-solid  rounded-xl">
    <IoLocationOutline size="40" /><input type="location" placeholder='Select Location'></input>
    <CiCalendar  size="40"/><input type="date-time-local"placeholder="Current time"></input>
    <FaRegUser  size="40"/><input type="text" placeholder=""></input>
    <CiSearch color="blue" size="40" />
    </form>
    </div>
    </div>
    <div className="p-4">
      <img  className="w-xl rounded-xl" src="06-hDeq7Yvr.jpg"></img>
    
      <div className=" flex absolute top-20 left-193">
      <img className=" h-10 rounded-full "src="11-gZgLx6ik.jpg"></img>
      </div>
<div className="absolute top-45 left-190">
      <img className=" h-15 rounded-full "src="11-gZgLx6ik.jpg"></img>
      </div>
    </div>
    </div>
<div className="container flex">
  <div className="pl-20 pb-5 pt-25">
    <img className="rounded-xl w-5xl "src="01-arqLn21s.jpg"></img>
  <div className="absolute top-280 button-0 left-35 z-index-1 flex">
    <div className="flex gap-8 ">
  <h6>Client</h6>
  <h6>Rating</h6>
  </div> 
    <img className="rounded-full w-10" src="01-OzdCsrYE.jpg"></img>
    <img className="rounded-full w-10" src="02-5tPJRJB9.jpg"></img>
    <img className="rounded-full w-10"src="03-IDBN_S8O.jpg"></img>
    <img className="rounded-full w-10" src="04-AMc9pMzp.jpg"></img>
  </div>
  </div>
  <div className="px-25 py-25 ">
    <h2 className="text-6xl pb-10 font-bold">The Best Holidays Start Here!</h2>
    <p className="opacity-75 pb-10 pr-28 ">Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>
    <div className="flex gap-4 flex-wrap">
      <div className="flex-col">
 < ImSpoonKnife size="35" color="green" />
 <h2 className="font-bold text-xl">Quality Food</h2>
<p className="opacity-75 tracking-wide "> Departure defective arranging rapturous did. Conduct denied adding worthy little.</p>
</div>
<div className="flex-col">
<LuClock11 size="35" color="red"/>
  <h2 className="font-bold text-xl">Quick Services</h2>
 <p className="opacity-75 tracking-wide">Supposing so be resolving breakfast am or perfectly.</p>
</div>
<div className="flex-col">
<MdOutlineSecurity size="35" color="yellow"/>
<h2 className="text-xl font-bold">High Security</h2>
<p className=" opacity-75">Arranging rapturous did believe him all had supported.</p>
</div>
<div className="flex-col">
<MdOutlineElectricBolt size="35" color="blue"/>
<h2 className="font-bold text-xl">24 Hours Alert</h2>
<p className="opacity-75">Rapturous did believe him all had supported.</p>
</div>
</div>
</div>
</div>
<div className="flex p-20 gap-20">
  <img className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale" src="download (1).svg"></img>
  <img className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale"src="02-ja0MTAkK.svg"></img>
  <img className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale"src="03-ijqoOgvV.svg"></img>
  <img  className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale"src="04-eZzuwS87.svg"></img>
  <img  className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale"src="05-t3Mz4baO.svg"></img>
  <img className="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale"src="06-Flg8Aftu.svg"></img>
</div>
<div className="flex px-40 py-10 ">
  <img className="rounded-xl w-100" src="01-A46SX7OM.jpg"></img>
  <img className="absolute w-12 left-35" src="download (2).svg"></img>
  <div className="flex flex-col px-20 py-15 gap-2">
  <p className=" text-2xl">Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed in laughing</p>
  <ul className="flex">
    <li><ImStarFull color='yellow' size="15"/></li>
    <li><ImStarFull color='yellow' size="15"/></li>
    <li><ImStarFull color='yellow' size="15"/></li>
    <li><ImStarFull color='yellow' size="15"/></li>
    <li><FaStarHalfAlt color='yellow' size="15"/></li>
  </ul>
  <h5 className="font-bold">Billy Vasquez</h5>
  <span className="opacity-75">Ceo of Apple</span>
  </div>
  </div>
<div className="manyimage ">
  <div className="px-20 py-20">
    <h2 className="text-5xl font-bold text-center">Explore Nearby</h2>
    <div className=" flex flex-wrap gap-5 py-10">
    <a  className="hover:text-blue-500 text-xl px-5"href="#">
    <img  className="rounded-full w-35"src="01-SppmAcgj (1).jpg"></img> San Francisco </a>
    <a  className="hover:text-blue-500 text-xl px-5"href="#">
    <img  className="rounded-full w-35"src="02-GRL65llU.jpg"></img> Los Angeles </a>
    <a  className="hover:text-blue-500 text-xl px-5"href="#">
    <img  className="rounded-full w-35"src="03-4mB89xkp.jpg"></img> Miami </a>
    <a  className="hover:text-blue-500 text-xl px-5"href="#">
    <img  className="rounded-full w-35"src="04-pnduE6qY.jpg"></img> Sanjosh </a>
    <a  className="hover:text-blue-500 text-xl px-5"href="#">
    <img  className="rounded-full w-35"src="05-2KGCHYz-.jpg"></img> New york </a>
    <a  className="hover:text-blue-500 text-xl px-5"href="#">
    <img  className="rounded-full w-35"src="06-NVeYwMw_.jpg"></img> North Justen </a>
    <a  className="hover:text-blue-500 text-xl px-5"href="#">
    <img  className="rounded-full w-35"src="07-cKl6NSY7.jpg"></img> Rio </a>
    <a  className="hover:text-blue-500 text-xl px-5 "href="#">
    <img  className="rounded-full w-35"src="08-mIVX0-EV.jpg"></img> Las Vegas </a>
    <a  className="hover:text-blue-500 text-xl px-5"href="#">
    <img  className="rounded-full w-35"src="09-U3qhstmi.jpg"></img> Texas</a>
    <a  className="hover:text-blue-500 text-xl px-5"href="#">
    <img  className="rounded-full w-35"src="10-wqfqgIeR.jpg"></img> Chicago </a>
    <a  className="hover:text-blue-500 text-xl px-5"href="#">
    <img  className="rounded-full w-35"src="11-GaBY5L70.jpg"></img>New Keagan </a>
    <a  className="hover:text-blue-500 text-xl px-5"href="#">
    <img  className="rounded-full w-35"src="01-SppmAcgj (1).jpg"></img> Osla</a>
</div>
  </div>
</div>
 

     <Takeoff/>
  

      <Footer />
    </>
  )
}

export default App
