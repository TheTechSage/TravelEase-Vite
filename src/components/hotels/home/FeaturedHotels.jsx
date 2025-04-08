import React from 'react'
import { ImStarFull } from "react-icons/im";
 import { FaStarHalfAlt  } from "react-icons/fa";
 function FeaturedHotels() {
    return (
        <>
        <div className="container">
          <div className="p-10">
            <h1 className="font-bold text-center text-5xl">Featured Hotels</h1>
          </div>
          <div className="flex px-50 py-10 gap-4 ">
            <img className="w-60 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105" src="01-kkM7mXf9.jpg"></img>
            <img className="w-60 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105" src="02-E_sTtfo3.jpg"></img>
            <img  className="w-60 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105"src="03-B8eH2v8V.jpg"></img>
            <img className="w-60 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105"src="04-SDLCq6RC.jpg"></img>
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
  </div>  
        </>
    )
  }

    export default FeaturedHotels

