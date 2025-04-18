/** @format */
import { BsDot } from 'react-icons/bs';

const CarBooking = () => {
  return (
    <>
      <div className="py-9 px-4 sm:px-8 flex justify-center bg-white/90">
        <div className="shadow-xl rounded-2xl  py-4 w-full lg:w-[60%] ">
          <div className="border-b border-gray-200 py-6">
            <h1 className="text-xl sm:text-4xl font-bold px-2 sm:px-6">
              Booking summary
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-9 py-6 px-2 sm:px-6 ">
            <div className="w-full  lg:w-48 h-60 lg:h-32 bg-gray-200 rounded-2xl flex items-center ">
              <img src="/car.svg" className="p-2" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">Camry, Accord</h1>
              <div className="flex items-center font-semibold">
                <span> SEDAN</span> <BsDot size={20} />
                <span>AC</span> <BsDot size={20} />
                <span>2</span>
                <BsDot size={20} /> <span>Seats</span>
              </div>
              <div className="flex flex-col lg:flex-row justify-between gap-8 mt-4 ">
                <div className="w-1/2 ">
                  <p className=" text-gray-400">Pickup address</p>
                  <p className=" font-semibold">
                    8 Central Ave, Chelsea, Maine, United States
                  </p>
                </div>
                <div className="w-1/2">
                  <p className=" text-gray-400">Drop address</p>
                  <p className=" font-semibold">
                    1846 S Oates St, Dothan, Alaska, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-9 py-4 px-2 sm:px-6 ">
            <div className="w-full sm:w-1/2 flex flex-col gap-4">
              <p>
                <span className="text-gray-500">Journey Date:</span>{' '}
                <span className="font-semibold">25 Nov 2022</span>
              </p>
              <p>
                <span className="text-gray-500">Distance:</span>{' '}
                <span className="font-semibold">230 km</span>
              </p>
            </div>
            <div className=" w-full sm:w-1/2 flex flex-col gap-4">
              <p>
                <span className="text-gray-500">Passengers:</span>{' '}
                <span className="font-semibold"> 1</span>
              </p>
              <p>
                <span className="text-gray-500">Luggages:</span>{' '}
                <span className="font-semibold">2</span>
              </p>
            </div>
          </div>
          <div className="py-2 px-2 sm:px-6 ">
            <h1 className="text-xl font-semibold">Passenger Detail</h1>
            <div className="flex flex-col lg:flex-row justify-between mt-2">
              <div className="flex flex-col gap-3 lg:gap-2">
                <p>
                  <span className="text-gray-500">Passenger Name:</span>{' '}
                  <span className="font-semibold"> Billy Vasquez</span>
                </p>
                <p>
                  <span className="text-gray-500">Passenger Email:</span>{' '}
                  <span className="font-semibold">example@gmail.com</span>
                </p>
                <p>
                  <span className="text-gray-500">Passenger Number:</span>{' '}
                  <span className="font-semibold">+222 555 666 85</span>
                </p>
              </div>
              <div className="flex flex-col lg:text-center mt-3">
                <p className="font-bold">Total Amount</p>
                <p className="text-green-600/70 text-6xl  font-bold ">$458</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-9 px-4 sm:px-8 flex justify-center bg-white/90">
        <div className="shadow-xl rounded-2xl  py-4 w-full   lg:w-[60%]">
          <div className="border-b border-gray-200 py-6">
            <h1 className="text-xl sm:text-4xl font-semibold px-2 sm:px-6">
              How would you like to pay?
            </h1>
          </div>
          <div className="px-2 sm:px-6 py-3 flex flex-col">
            <div className="flex gap-4 ">
              <h1 className="font-bold">We Accept :</h1>
              <div className="flex gap-2">
                <img src="/visa.svg" className="w-12" />
                <img src="/mastercard.svg" className="w-12" />
                <img src="/expresscard.svg" className="w-12" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <h1 className="text-gray-500">Card Number</h1>
              <div className="flex border border-gray-300 px-1 rounded-md">
                <input
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="w-full outline-hidden p-2 rounded-2xl"
                />
                <img src="/visa.svg" className="w-8" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-between mt-4">
              <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-4">
                <h1 className="text-gray-500">Expiration Date</h1>
                <div className="flex flex-col lg:flex-row ">
                  <input
                    placeholder="Month"
                    className="border rounded-tl-sm rounded-bl-sm p-2 h-12 w-full lg:w-1/2"
                  />
                  <input
                    placeholder="Year"
                    className="border rounded-tr-sm rounded-br-sm p-2 h-12 w-full lg:w-1/2"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <h1 className="text-gray-500">CVV / CVC *</h1>
                <input
                  placeholder="xxx"
                  className=" outline-hidden border  p-2 w-full rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h1 className="text-gray-500">Name on Card *</h1>
              <input
                placeholder="Enter card holder name"
                className="w-full p-2 outline-hidden border rounded-md"
              />
            </div>
            {/* <div className=" "> */}
            <button className="mt-4 text-center bg-[#4539bc] text-white p-2  rounded-md font-semibold w-24">
              Pay Now
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default CarBooking;
