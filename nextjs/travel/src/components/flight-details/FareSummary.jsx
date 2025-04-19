import { IoMdInformationCircleOutline } from "react-icons/io";
import React from 'react'
import { MdRemoveRedEye } from "react-icons/md";
export default function FareSummary(){
    return(
        <div className='ml-25 justify-center mt-10 mb-10 '>
        <div className='w-[23%] h-70 bg-gray-100 rounded-lg'>
        <p className='text-xl pt-5 pl-3 font-bold border-b pb-5'>Fare Summary</p>
        <div className="flex gap-8 justify-between">
        <p className="flex mt-5 ml-3 font-semibold tracking-wide gap-1">Base Fare<IoMdInformationCircleOutline size={20}/></p>
        <p className="mt-5 mr-3 tracking-wide text-gray-500 text-xl">$38,660</p>
        </div>
        <div className="flex gap-8 justify-between">
        <p className="font-semibold tracking-wide ml-3 mt-3">Discount</p>
        <p className="font- text-green-600 tracking-wide mr-3 mt-3">+$2,560</p>
        </div>
        <div className="flex gap-8 justify-between">
        <p className="font-semibold tracking-wide ml-3 mt-3">Other Services</p>
        <p className="text-xl text-gray-500 tracking-wide mr-3 mt-3">$20</p>
        </div>
       <div className='flex border-t pb-5 justify-between mt-5'>
        <p className='text-xl mt-4 pl-3 font-semibold tracking-wide'>Total Fare</p>
        <p className="mt-4 mr-3 tracking-wide text-xl">$36,500</p>
        </div>
        </div>
        <div className='ml-2 justify-center mt-10 mb-10 '>
        <div className='w-[23%] h-30 bg-gray-100 rounded-lg '>
        <p className="font-bold text-xl tracking-tight pl-4 pt-4">Offer & Discount</p>
        <div className="pl-4 pr-4 pt-4 flex">
        <form className="border border-gray rounded-l-lg py-2 flex">
        <input type="text" placeholder="Coupan code" className="outline-none"></input>
        </form>
        <button className="bg-blue-700  rounded-r-lg">Apply</button>
        </div>
        </div>
        </div>
        <div className="border  border-gray-300 rounded-lg w-[23%] h-80">
        <div className="text-xl font-bold pt-4 pl-4">
        <p>Cancellation & </p>
        <p>Date Change</p>
        <p>Charges</p>
        </div>
        <div>
        <p className="text-md font-bold text-red-700 pl-4 pt-4">Non Refundable</p>
        <p className="pl-4 pt-4 pr-4 text-sm text-gray-500 tracking-wider">The Cancellation penalty on this booking will depend on how close to the departure date you cancel your ticket. View fare rules to know more</p>
        </div>  
        {/* <div className=" text-blue-700 text-md font-semibold underline">
              <Link href="#" className="flex"><MdRemoveRedEye size={20} className="pt-1" />Baggage & Fare Rules</Link>
            </div> */}
        </div>
        </div>
    )
}