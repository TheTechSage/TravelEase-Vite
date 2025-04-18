import Image from "next/image";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

export default function SearchCab() {
  return (
    <div className="flex items-center w-full py-20 pr-44">
      <div className="h-96 w-[500px] text-white bg-gray-900 z-20 translate-x-44 rounded-xl">
        <p className="py-4 px-4 text-2xl font-bold">Book Your Online Cab</p>
        <hr className="" />
        <form className="p-4">
          <div className="flex items-center text-lg gap-2">
            <input type="radio" id="round" name="radio" size={20}></input>
            <label htmlFor="round">One Way</label>
            <input type="radio" id="Round Trip" name="radio"></input>
            <label htmlFor="Round Trip">Round Trip</label>
          </div>
          <div className="flex items-center">
            <select className="px-4 text-gray-500 mt-4 border-purple-950 text-xl py-2">
              <option>Select location</option>
              <option>New York</option>
              <option>Canada</option>
              <option>Paris</option>
            </select>
            <HiOutlineSwitchHorizontal className="bg-black text-4xl p-1 rounded-full" />
            <select className="px-4 text-gray-500 mt-4 border-purple-950 text-xl py-2">
              <option>Select location</option>
              <option>Canada</option>
              <option>New York</option>
              <option>Paris</option>
            </select>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <p className="translate-y-3 px-2 text-sm ml-2 text-gray-300 bg-gray-900 w-4/6">
                Pickup date
              </p>
              <input
                type="date"
                name="date"
                className="border text-bgay-700 p-2 rounded"
              />
            </div>
            <div className="w-1/2">
              <p className="translate-y-3 px-2 text-sm ml-2 text-gray-300 bg-gray-900 w-4/6">
                Pickup Time
              </p>
              <input
                type="time"
                name="time"
                className="border text-bgay-700 p-2 rounded"
              />
            </div>
          </div>
          <input type="submit" value="Search Cabs" className="text-center w-full py-3 bg-black hover:bg-gray-700 rounded font-medium mt-4 duration-300"/>
        </form>
      </div>
      <Image
        src="/cab.jpg"
        alt="Cab"
        width={1200}
        height={900}
        className="p-2 rounded"
      />
    </div>
  );
}
