import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { LuClock11 } from "react-icons/lu";
import { MdOutlineSecurity, MdOutlineElectricBolt } from "react-icons/md";
import { FaStarOfLife } from "react-icons/fa6";
function BestHolidays() {
  return (
    <>
      <div className="container flex">
        <div className="pl-20 pb-5 pt-25">

          <img className="rounded-xl w-5xl " src="01-arqLn21s.jpg"></img>

          <div className="absolute top-400 button-0 left-35 z-index-1 flex">
            <div className="flex gap-8 ">
              <h6>Client</h6>
              <h6>Rating</h6>
            </div>
            <img className="rounded-full w-10" src="01-OzdCsrYE.jpg"></img>
            <img className="rounded-full w-10" src="02-5tPJRJB9.jpg"></img>
            <img className="rounded-full w-10" src="03-IDBN_S8O.jpg"></img>
            <img className="rounded-full w-10" src="04-AMc9pMzp.jpg"></img>
          </div>
        </div>
        <div className="px-40 py-25 pr-10 ">
          <h2 className="text-6xl pb-10 font-bold">The Best Holidays Start Here!</h2>
          <p className="opacity-75 pb-10 pr-28  ">Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>

          <div className="flex flex-nowrap gap-8  pb-5">
            <div className="flex-col">
              < ImSpoonKnife size="35" color="green" />
              <h2 className="font-bold text-xl">Quality Food</h2>
              <p className="opacity-75 t"> Departure defective arranging rapturous did. Conduct denied adding worthy little.</p>
            </div>
            <div className=" flex-col">
              <LuClock11 size="35" color="red" />
              <h2 className="font-bold text-xl">Quick Services</h2>
              <p className="opacity-75">Supposing so be resolving breakfast am or perfectly.</p>
            </div>
          </div>
          <div className="flex flex-nowrap gap-8 ">
            <div className=" flex-col">
              <MdOutlineSecurity size="35" color="yellow" />
              <h2 className="text-xl font-bold">High Security</h2>
              <p className=" opacity-75">Arranging rapturous did believe him all had supported.</p>
            </div>
            <div className=" flex-col">
              <MdOutlineElectricBolt size="35" color="blue" />
              <h2 className="font-bold text-xl">24 Hours Alert</h2>
              <p className="opacity-75">Rapturous did believe him all had supported.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestHolidays
