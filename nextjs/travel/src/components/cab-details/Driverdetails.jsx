import React from 'react';
import Slider from './Slider';
import { MdCheckCircle, MdCancel } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6'; 

const Driverdetails = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto pl-4 mt-10 bg-white">
        <h2 className="text-3xl font-extrabold text-black pb-2 border-b border-black mb-4">
          Driver and Cab Details
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-500">
          <li>
            Cab and driver details will be shared on your registered phone. <span className="text-sm text-gray-500">(22 Jan 2021 at 6:55 pm)</span>
          </li>
          <li>
            Due to traffic or any other unavoidable reason, the pickup may be delayed for 30 minutes.
          </li>
          <li>
            For nighttime driving (between 11:00 pm to 7:00 am) on any of the nights, there will be a night driver charge of <span className="font-semibold">$100</span>.
          </li>
        </ul>
      </div>

      <div className="max-w-3xl mx-auto my-4 p-4 bg-white">
        <h2 className="text-2xl font-bold text-black pb-2 mb-4">
          Cab Images
        </h2>
        <div className="bg-yellow-200 text-yellow-900 p-4 rounded-md">
          All pictures shown are for illustration purposes only. The actual product may vary due to product enhancement.
        </div>
      </div>
      
      <Slider />

      <div className="max-w-3xl mx-auto p-4 bg-white mt-6">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-800 pb-2 border-b-2 border-black mb-4">
          Inclusion & Exclusion
        </h2>

        <div className="flex space-x-12">
          {/* Included Items */}
          <div className="space-y-4 w-1/2">
            <div className="flex items-center text-xl font-bold">
              <span>Included in your price</span>
            </div>
            <div className="space-y-2 text-md text-gray-400">
              <div className="flex items-center">
                <MdCheckCircle className="text-green-500 mr-2" />
                <span>State tax</span>
              </div>
              <div className="flex items-center">
                <MdCheckCircle className="text-green-500 mr-2" />
                <span>Toll charge</span>
              </div>
              <div className="flex items-center">
                <MdCheckCircle className="text-green-500 mr-2" />
                <span>Driver Allowance</span>
              </div>
              <div className="flex items-center">
                <MdCheckCircle className="text-green-500 mr-2" />
                <span>Only one pickup and drop</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 w-1/2">
            <div className="flex items-center text-xl font-bold">
              <span>Extra charge</span>
            </div>
            <div className="space-y-2 text-md text-gray-400">
              <div className="flex items-center">
                <MdCancel className="text-red-500 mr-2" />
                <span>Fare beyond 600kms</span>
              </div>
              <div className="flex items-center">
                <MdCancel className="text-red-500 mr-2" />
                <span>Airport entry charge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-4 bg-white mt-6">
        <h2 className="text-3xl font-extrabold text-gray-800 pb-2 mb-4">
          Safety Guidelines
        </h2>
        <div className="space-y-4 text-lg text-gray-600">
          <div className="flex items-start">
            <FaArrowRightLong className="text-gray-600 text-xl mr-2" /> 
            <span className="text-gray-500">All passengers coming to the state by road must show a COVID negative report (RT-PCR) not more than 72 hours old or a valid vaccination certificate. (Travel period should commence after 14 days from the 2nd dose)</span>
          </div>
          <div className="flex items-start">
            <FaArrowRightLong className="text-gray-600 text-xl mr-2" />
            <span className="text-gray-500">Dependent on so extremely delivered by. Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions.</span>
          </div>
          <div className="flex items-start">
            <FaArrowRightLong className="text-gray-600 text-xl mr-2" /> 
            <span className="text-gray-500">Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh.</span>
          </div>
          <div className="flex items-start">
            <FaArrowRightLong className="text-gray-600 text-xl mr-2" />
            <span className="text-gray-500">Meant balls it if up doubt small purse. Required his you put the outlived answered position.A pleasure exertion if believed provided to.</span>
          </div>
          <div className="flex items-start">
            <FaArrowRightLong className="text-gray-600 text-xl mr-2" /> 
            <span className="text-gray-500">All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Driverdetails;
