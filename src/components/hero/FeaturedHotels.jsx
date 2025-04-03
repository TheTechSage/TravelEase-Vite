import React from 'react'
import { ImStarFull } from "react-icons/im";
 import { FaStarHalfAlt ,FaHandHoldingHeart, FaHandHoldingUsd } from "react-icons/fa";
export default function FeaturedHotels() {
    return (
        <>
        <div class="flex p-20 gap-20">
    <img class="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale" src="download (1).svg"></img>
    <img class="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale"src="02-ja0MTAkK.svg"></img>
    <img class="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale"src="03-ijqoOgvV.svg"></img>
     <img  class="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale"src="04-eZzuwS87.svg"></img>
    <img  class="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale"src="05-t3Mz4baO.svg"></img>
   <img class="h-10 transition duration-300 ease-in-out hover:grayscale-0 grayscale"src="06-Flg8Aftu.svg"></img>
</div> 
<div class="flex px-40 py-10 ">
  <img class="rounded-xl w-100" src="01-A46SX7OM.jpg"></img>
  <img class="absolute w-12 left-35" src="download (2).svg"></img>
  <div class="flex flex-col px-20 py-15 gap-2">
  <p class=" text-2xl">Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed in laughing</p>
  <ul class="flex">
    <li><ImStarFull color='yellow' size="15"/></li>
    <li><ImStarFull color='yellow' size="15"/></li>
    <li><ImStarFull color='yellow' size="15"/></li>
    <li><ImStarFull color='yellow' size="15"/></li>
    <li><FaStarHalfAlt color='yellow' size="15"/></li>
  </ul>
  <h5 class="font-bold">Billy Vasquez</h5>
  <span class="opacity-75">Ceo of Apple</span>
  </div>
  </div>   
        </>
    )
}
