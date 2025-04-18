import React from 'react'
import { BsDot } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";

const Head = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 my-10 px-4 md:my-16 md:mx-32'>
      <div className='flex flex-wrap text-lg md:text-2xl items-center max-w-full'>
        <h1 className='font-extrabold'>Chicago - San Antonio</h1>
        <BsDot />
        <h2>Outstation - Oneway</h2>
        <BsDot />
        <h2>22 Jan 2022 - 07.25 PM</h2>
      </div>

      <div className='bg-gray-200 p-2 rounded-md self-end md:self-auto'>
        <IoShareSocial size={24} />
      </div>
    </div>
  )
}

export default Head;
