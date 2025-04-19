import React from "react";
import { FaSquareFull, FaBed } from "react-icons/fa";
import { MdOutlineViewModule } from "react-icons/md";

export default function SelectRoom() {
  return (
    <div className="px-10 py-8">
      <div className="flex gap-10">
        <div className="w-2/3">

          <div className="flex justify-between items-center border-b py-5">
            <h5 className="text-[2.3rem] font-Poppins font-bold">
              Select Rooms
            </h5>
            <select className="border px-5 py-1 rounded">
              <option value="" disabled selected>
                Select Option
              </option>
              <option>Search Option</option>
              <option>Recently Searched</option>
              <option>Most Popular</option>
              <option>Top Rated</option>
            </select>
          </div>

          <div className="flex-col py-4">
            <div className="flex gap-4 border px-4 py-2 rounded-xl w-full">
              <img
                className="w-1/5 rounded-xl object-cover"
                src="room-detail.jpg"
                alt="Room"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h5 className="text-xl font-extrabold mb-2">
                    Deluxe Pool View with Breakfast
                  </h5>
                  <ul className="flex gap-4 text-sm text-gray-600 items-center flex-wrap">
                    <li className="flex items-center gap-1">
                      <FaSquareFull /> 315 sq.ft
                    </li>
                    <li className="flex items-center gap-1">
                      <MdOutlineViewModule /> City View
                    </li>
                    <li className="flex items-center gap-1">
                      <FaBed /> King Bed
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end mt-6">
                  <p className="text-xl font-semibold text-green-600">
                    $385{" "}
                    <span className="text-sm font-normal text-green-600">
                      / per night
                    </span>
                  </p>
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-75 transition">
                    Select Room
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col py-4">
            <div className="flex gap-4 border px-4 py-2 rounded-xl w-full">
              <img
                className="w-1/5 rounded-xl object-cover"
                src="room-detail2.jpg"
                alt="Room"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h5 className="text-xl font-extrabold mb-2">Deluxe Room</h5>
                  <ul className="flex gap-4 text-sm text-gray-600 items-center flex-wrap">
                    <li className="flex items-center gap-1">
                      <FaSquareFull /> 458 sq.ft
                    </li>
                    <li className="flex items-center gap-1">
                      <MdOutlineViewModule /> City View
                    </li>
                    <li className="flex items-center gap-1">
                      <FaBed /> King Bed
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end mt-6">
                  <p className="text-xl font-semibold text-green-600">
                    $485{" "}
                    <span className="text-sm font-normal text-green-600">
                      / per night
                    </span>
                  </p>
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-75 transition">
                    Select Room
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="border rounded-xl overflow-hidden bg-white">
            <div className="border-b px-6 py-4">
              <h5 className="text-center text-lg font-semibold">
                Price Summary
              </h5>
            </div>

            <div className="flex gap-4 px-6 py-4">
              <div className="flex-1 bg-gray-200 py-3 px-4 rounded-xl">
                <h5>Check-in</h5>
                <h6>4 March 2025</h6>
              </div>
              <div className="flex-1 bg-gray-200 py-3 px-4 rounded-xl">
                <h5>Check-out</h5>
                <h6>8 March 2025</h6>
              </div>
            </div>

            <div className="px-6 py-2">
              <div className="flex justify-between">
                <h5>$6,100 x 2 Nights</h5>
                <h5>$13,200</h5>
              </div>
            </div>
            <div className="px-6 py-2">
              <div className="flex justify-between">
                <h5>10% campaign discount</h5>
                <h5>- $500</h5>
              </div>
            </div>
            <div className="px-6 py-2">
              <div className="flex justify-between">
                <h5>Service Fee</h5>
                <h5>$100</h5>
              </div>
            </div>

            <div className="border-t px-6 py-4 bg-gray-200 font-semibold">
              <div className="flex justify-between">
                <h5>Total</h5>
                <h5>$13,500</h5>
              </div>
            </div>

            <div className="border-t px-6 py-4">
              <button className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Continue to Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
