import React from 'react'

export default function Traveler() {
  return (
    <div>
      <div className=" px-30 pt-8 py-5">
        <div className="w-190 border h-20 rounded-xl p-4 ">
          <div>
            <p className="text-4xl font-bold">Traveler Details</p>
          </div>
          <div className="pt-4 w-full">
            <hr></hr>
          </div>
          <div className="pt-4">
            <div className="w-full p-3 bg-red-50 rounded-md flex gap-2">
              <p className="bg-red-700 w-10 border rounded-md text-center text-xs text-white ">New</p>
              <p className="text-sm">Please make sure you enter the Name as per your passport</p>
            </div>
          </div>
          <div className="flex justify-end pt-4">
            <button className="bg-gray-100 cursor-pointer hover:bg-blue-800 hover:text-white rounded-lg px-6 py-3 text-sm font-bold text-blue-700 tracking-wide">Add New Adult</button>
          </div>
          <div className="pt-4">
            <div className="w-full p-3 bg-gray-100 cursor-pointer rounded-t-lg flex gap-2">
              <p className="font-semibold ">Adult 1</p>
            </div>
            <div className="">
              <div className="pt-4 flex pl-3">
                <div className='w-[45%] text-gray-400 sans-serif'>
                  <p className="text-md  text-gray-400">Title</p>
                  <select className="title-select border py-2 px-6 cursor-pointer rounded-md border-gray-400 ">
                    <option value="">Select Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                </div>
                <form className=" w-full text-gray-400  items-center">
                  <p>Full Name</p>
                  <div className='border border-gray-400 rounded-lg flex w-full'>
                    <div className='border-r-2 w-1/2 h-full'>
                      <input type="text" placeholder="First Name" className='outline-none p-2' />
                    </div>
                    <div className='w-1/2'>
                      <input type="text" placeholder="Last Name" className='outline-none p-2' />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='flex items-center gap-4 mt-4'>
              <div className="text-gray-400 w-[50%] text-md pl-2">
                <p>Date Of Birth</p>
                <div className="flex items-center w- border  cursor-pointer rounded-md border-gray-400">
                  <select className="outline-none cursor-pointer py-2 border-r-2 text-gray-700 w-1/3">
                    <option value="">Date</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="31">31</option>
                  </select>
                  <select className="outline-none border-r-2 p-2 cursor-pointer text-gray-700 w-1/3">
                    <option value="">Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="12">December</option>
                  </select>

                  <select className="outline-none p-2 cursor-pointer text-gray-700 w-1/3">
                    <option value="">Year</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="1900">1900</option>
                  </select>
                </div>
              </div>
              <div className='w-[50%]' >
                <p className='text-md  text-gray-400'>Nationality</p>
                < div className='items-center border  cursor-pointer rounded-md border-gray-400 px-2 py-2'>
                  <select className="outline-none  cursor-pointer text-gray-700">
                    <option value="">Select Nationality</option>
                    <option value="2025">Indian</option>
                    <option value="2024">Mali</option>
                    <option value="1900">Japan</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-4 mt-4'>
              <div className='pl-2 text-gray-400 w-[50%] '>
                <p>Passport Number</p>
                <div className='border border-gray-400  rounded-lg'>
                  <form>
                    <input type="text" placeholder="Enter Passport Number" className='outline-none p-2'></input>
                  </form>
                </div>
              </div>
              <div className='w-[50%]' >
                <p className='text-md  text-gray-400'>Passport Issuing Country</p>
                < div className='items-center border  cursor-pointer rounded-md border-gray-400 px-2 py-2'>
                  <select className="outline-none  cursor-pointer text-gray-700">
                    <option value="">Select Country</option>
                    <option value="2025">Indian</option>
                    <option value="2024">Capanada</option>
                    <option value="1900">Jan</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='w-[50%] text-gray-400 mt-4'>
              <p>Passport Expiry</p>
              <div className='border border-gray-400  rounded-lg'>
                <form>
                  <input type="text" placeholder="Enter Passport Date" className='outline-none p-2'></input>
                </form>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="w-full p-3 bg-gray-100 cursor-pointer rounded-t-lg flex gap-2">
              <p className="font-semibold ">Adult 1</p>
            </div>
            <div className='font-sans text-gray-500 ml-2 mt-2'>
              <p>What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.</p>
            </div>
            <div className='mt-5'>
              <p className='text-xl font-bold tracking-tight'>Booking detail will be sent to</p>
            </div>
          </div>
          <div className='flex w-full justify-between items-center gap-4 mt-4'>
            <div className='pl-2 text-gray-400 w-[50%] '>
              <p>Mobile Number</p>
              <div className='border border-gray-400  rounded-lg'>
                <form>
                  <input type="text" placeholder="Enter your mobile number" className='outline-none p-2'></input>
                </form>
              </div>
            </div>
            <div className='w-[50%]'>
              <div className='flex items-center w-full '>
                <div className='pl-2 text-gray-400 w-full'>
                  <p> Email Address</p>
                  <div className='border border-gray-400 rounded-lg'>
                    <form>
                      <input type="text" placeholder="Enter your email address" className='outline-none p-2 w-full'></input>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <button className="bg-blue-700 p-2 cursor-pointer hover:bg-blue-800 hover:text-white rounded-lg w-full text-sm font-bold text-white tracking-wide">Proceed To Payment</button>
          </div>
       
        </div>
      </div>
    </div>
  )
}
