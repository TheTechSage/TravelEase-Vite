import React from 'react'
import { FaHandHoldingHeart, FaHandHoldingUsd } from "react-icons/fa";
function Explore() {
    return (
        <>
            < div className="manyimage ">
                <div className="px-20 py-20">
                    <h2 className="text-5xl font-bold text-center">Explore Nearby</h2>

                    <div className=" flex flex-wrap gap-6 py-15">
                        <div className='flex pb-10 '>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl text-center px-5" href="#">
                                <img className="rounded-full w-35" src="01-SppmAcgj (1).jpg"></img> San Francisco </a>
                            <p className="opacity-75 text-center">13 mins drive</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl  text-center px-5" href="#">
                                <img className="rounded-full w-35" src="02-GRL65llU.jpg"></img> Los Angeles </a>
                            <p className="opacity-75 text-center">25 mins drive</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl text-center px-5" href="#">
                                <img className="rounded-full w-35" src="03-4mB89xkp.jpg"></img> Miami </a>
                            <p className="opacity-75  text-center">45 mins drive</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl text-center px-5" href="#">
                                <img className="rounded-full w-35" src="04-pnduE6qY.jpg"></img> Sanjosh </a>
                            <p className="opacity-75  text-center">55 mins drive</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl text-center px-5" href="#">
                                <img className="rounded-full w-35" src="05-2KGCHYz-.jpg"></img> New york </a>
                            <p className="opacity-75  text-center">1 hour drive</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl text-center px-5" href="#">
                                <img className="rounded-full w-35" src="06-NVeYwMw_.jpg"></img> North Justen </a>
                            <p className="opacity-75  text-center">2 hour drive</p>
                        </div>
                        </div>
                        <div className="flex pt-10">
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl text-center px-5" href="#">
                                <img className="rounded-full w-35" src="07-cKl6NSY7.jpg"></img> Rio </a>
                            <p className="opacity-75  text-center">20 mins drive</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl text-center px-5 " href="#">
                                <img className="rounded-full w-35" src="08-mIVX0-EV.jpg"></img> Las Vegas </a>
                            <p className="opacity-75  text-center"> 3 hours drive</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl text-center px-5" href="#">
                                <img className="rounded-full w-35" src="09-U3qhstmi.jpg"></img> Texas</a>
                            <p className="opacity-75  text-center"> 55 mins drive</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl text-center px-5" href="#">
                                <img className="rounded-full w-35" src="10-wqfqgIeR.jpg"></img> Chicago </a>
                            <p className="opacity-75  text-center">  13 mins drive</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl text-center px-5" href="#">
                                <img className="rounded-full w-35" src="11-GaBY5L70.jpg"></img>New Keagan </a>
                            <p className="opacity-75  text-center">  35 mins drive</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="hover:text-blue-500 text-xl text-center px-5" href="#">
                                <img className="rounded-full w-35" src="01-SppmAcgj (1).jpg"></img> Oslo</a>
                            <p className="opacity-75  text-center"> 1 hour 13 mins drive</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex gap-10">
                <div className=" pl-10 shadow border-3 border-white rounded-xl ">
                    <FaHandHoldingHeart size="50" />
                    <div className="flex-col ">
                        <h2 className="font-bold text-xl p-2">24x7 Help</h2>
                        <p className="opacity-75 p-2"> If we fall short of your expectation in any way, let us know</p>
                    </div>
                </div>
                <div className="p-5 shadow border-3 border-white rounded-xl ">
                    <FaHandHoldingUsd size="50" />
                    <div className="flex-col ">
                        <h2 className="font-bold text-xl p-2">Payment Trust</h2>
                        <p className="opacity-75 p-2"> All refunds come with no questions asked guarantee</p>
                    </div>
                </div>
            </div>
            <div className="pl-20 pb-5">
                <h2 className="font-bold text-2xl">Downloaded app</h2>
                <div className="flex gap-8 pt-5  ">
                    <a href="#"><img className="h-18" src="google-play-Oy7Jtnye.svg"></img></a>
                    <a href="#"><img className="h-18" src="app-store-n2CVq0lh.svg"></img></a>
                </div>
            </div>
        </>
    )
}

export default Explore