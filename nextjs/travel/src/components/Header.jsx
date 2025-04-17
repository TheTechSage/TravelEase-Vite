import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaHotel } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdSupport } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { IoSunnyOutline } from "react-icons/io5";
import { TbMoonStars } from "react-icons/tb";
import { FaCircleHalfStroke } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <div>
      <div className="flex">
        <div>
          <Image
            width={200}
            height={200}
            className="h-18 pl-18 pt-8"
            src="/logo.svg"
            alt="logo"
          />
        </div>

        <div className="flex pt-10 pl-12 gap-8 font-arial">
          <div className="border-none cursor-pointer relative group hover:bg-sky-50">
            <Link href="#listings">
              <ul className="flex items-center">
                {" "}
                Listings
                <IoIosArrowDown size="15" />
              </ul>
            </Link>
            <div
              className="list-none border-none bg-white p-6 text-gray-600 
                       shadow-lg w-60 absolute hidden group-hover:flex flex-col"
            >
              <li className="list-none flex justify-between hover:bg-sky-50">
                Hotel <HiDotsHorizontal />
              </li>
              <div className="border-none relative group hover:bg-sky-50">
                <div className="list-none border-none left-50 bg-white p-6 text-gray-600 shadow-lg w-50 absolute hidden group-hover:flex flex-col cursor-pointer">
                  <li className="list-none flex justify-between hover:bg-sky-50">
                    Hotel Home
                  </li>
                  <li className="list-none flex justify-between hover:bg-sky-50">
                    Hotel Chain
                  </li>
                  <li className="list-none flex justify-between hover:bg-sky-50">
                    Hotel Resort
                  </li>
                  <li className="list-none flex justify-between hover:bg-sky-50">
                    Hotel Grid
                  </li>
                  <li className="list-none flex justify-between hover:bg-sky-50">
                    Hotel List
                  </li>
                  <li className="list-none flex justify-between hover:bg-sky-50">
                    Hotel Details
                  </li>
                  <li className="list-none flex justify-between hover:bg-sky-50">
                    Room Detail
                  </li>
                  <li className="list-none flex justify-between hover:bg-sky-50">
                    Hotel Booking
                  </li>
                </div>
              </div>

              <li className="flex justify-between hover:bg-sky-50">
                Flight <HiDotsHorizontal />
              </li>
              <li className="flex justify-between hover:bg-sky-50">
                Tour <HiDotsHorizontal />
              </li>
              <li className="flex justify-between hover:bg-sky-50">
                Cab <HiDotsHorizontal />
              </li>
              <li className="flex  justify-between hover:bg-sky-50">
                Directory <HiDotsHorizontal />
              </li>
              <li className="flex  justify-between hover:bg-sky-50">
                AddListing <HiDotsHorizontal />
              </li>
              <li className="flex justify-between hover:bg-sky-50">
                Hero <HiDotsHorizontal />
              </li>
              <li>Booking Confirmed</li>
              <li>Compare Details</li>
              <li>Offer Details</li>
            </div>
          </div>
          <div className=" border-none relative group hover:bg-sky-50 cursor-pointer">
            <Link href="#Page">
              <ul className="flex items-center">
                {" "}
                Pages
                <IoIosArrowDown size="15" />
              </ul>
            </Link>
            <div className="list-none border-none bg-white p-6 text-gray-600 shadow-lg w-60 absolute hidden group-hover:flex flex-col">
              <li className="list-none">About</li>
              <li>Contact</li>
              <li>Contact 2</li>
              <li>Our Team</li>
              <li className="flex justify-between">
                Authentication <HiDotsHorizontal />
              </li>
              <li className="flex justify-between">
                Blog <HiDotsHorizontal />
              </li>
              <li className="flex justify-between">
                Help <HiDotsHorizontal />
              </li>
              <li>pricing</li>
              <li>FAQs</li>
              <li>Error 404</li>
              <li>Coming Soon</li>
            </div>
          </div>
          <div className=" border-none relative group cursor-pointer hover:bg-sky-50">
            <Link href="#account">
              <ul className="flex items-center">
                {" "}
                Account
                <IoIosArrowDown size="15" />
              </ul>
            </Link>
            <div className="list-none border-none bg-white p-6 text-gray-600 rounded-lg shadow-lg w-53 absolute hidden group-hover:flex flex-col">
              <li className="list-none flex justify-between">
                User Profile <HiDotsHorizontal />
              </li>
              <li className="flex justify-between">
                Agent Dashboard <HiDotsHorizontal />
              </li>
              <li>Master Admin</li>
            </div>
          </div>
        </div>
        <div className="flex border-none relative group pt-11 pl-10 hover:bg-white rounded-lg cursor-pointer ">
          <HiDotsHorizontal />
          <div className="list-none border-none bg-white p-2 text-gray-600 rounded-xl shadow-lg w-45 absolute hidden group-hover:flex flex-col top-15">
            <li className="flex gap-1 hover:bg-sky-200 rounded-lg ">
              {" "}
              <MdSupport size="20" />
              Support{" "}
            </li>
            <li className="flex gap-1 hover:bg-sky-200 rounded-lg pt-3">
              {" "}
              <GrDocumentText size="20" />
              Documentation
            </li>
            <hr></hr>
            <li className="flex gap-1 hover:bg-sky-200 rounded-lg pt-3">
              <IoCloudDownloadSharp size="20" />
              Buy Booking!
            </li>
            <hr></hr>
            <li className="flex gap-1 hover:bg-sky-200 rounded-lg pt-3">
              {" "}
              Components
            </li>
          </div>
        </div>
        <div className="flex pt-10 pl-32 gap-10 font-arial">
          <Link
            className="flex gap-1 hover:bg-sky-100 rounded-lg "
            href="#hotel"
          >
            <FaHotel size="20" />
            Hotel
          </Link>
          <Link
            className="flex gap-1 hover:bg-sky-100 rounded-lg"
            href="#flight"
          >
            <MdFlight size="20" /> Flight
          </Link>
          <Link className="flex gap-1 hover:bg-sky-100 rounded-lg" href="#tour">
            {" "}
            <FaGlobeAmericas size="20" />
            Tour
          </Link>
          <Link className="flex gap-1 hover:bg-sky-100 rounded-lg" href="#cab">
            {" "}
            <FaCarAlt size="20" />
            Cab
          </Link>
        </div>
        <div className="group relative">
          <div className="flex pt-11 pl-8 cursor-pointer">
            <IoMdNotificationsOutline />
          </div>
          <div className="absolute hidden group-hover:block border-none bg-white rounded-lg shadow-xl w-90 py-5 px-5 right-0">
            <div className="flex ">
              <div className="font-bold text-sm ">Notifications</div>
              <button className="text-red-600 bg-red-100 rounded-m relative left-5 top-0 text-xs">
                4 new
              </button>
              <div className="text-xs text-blue-600 relative left-30 ">
                Clear all
              </div>
            </div>
            <div className="pt-10 bg-sky-50 hover:bg-sky-100 rounded-lg">
              <div className="font-bold ">
                New! Booking flights from New York
              </div>
              <div className="text-gray-400">
                <div className="text-sm">
                  Find the flexible ticket on flights around the world.Start
                  searching today{" "}
                </div>
                <div>05 Feb 2024</div>
              </div>
            </div>

            <div className="pt-8 hover:bg-sky-100">
              <div className="font-bold">
                sunshine saving are here save 30% or more on a stay
              </div>
              <div className="text-gray-400">24 Aug 2024</div>
            </div>
            <div className="pt-10 pl-15 cursor-pointer">
              <div className="text-sky-600 text-sm">
                see all incoming activity
              </div>
            </div>
          </div>
        </div>
        <div className="group relative">
          <Image
            width={200}
            height={200}
            className="w-10 h-10 rounded-lg relative top-5 left-5
                cursor-pointer "
            src="/logo02.jpg"
            alt="profile pic"
          />
          <div className="absolute hidden text-gray-700 group-hover:block border-none bg-white rounded-lg shadow-lg w-65 h-80 top-18 right-0">
            <Image
              width={200}
              height={200}
              className="rounded-full w-10 h-10 relative top-5 left-5"
              src="/logo02.jpg"
              alt="profile pic"
            />
            <span className="absolute top-5 left-20 font-bold">
              Lori Ferguson
            </span>
            <p className="absolute top-10 left-20 text-sm">example@gmail.com</p>
            <div>
              <ul className="relative top-10 left-8 cursor-pointer">
                <li className="flex hover:text-blue-500 rounded-lg">
                  {" "}
                  <CiBookmarkCheck size="20" />
                  My Bookings
                </li>
                <li className="flex pt-3 hover:bg-sky-100 hover:text-blue-500 rounded-lg ">
                  <CiHeart size="20" />
                  My Wishlist
                </li>
                <li className="flex pt-3 hover:bg-sky-100 rounded-lg">
                  <CiSettings size="20" />
                  Settings
                </li>
                <li className="flex pt-3 hover:bg-sky-100 rounded-lg">
                  <IoMdHelpCircleOutline size="20" /> Help Center
                </li>
                <li className="flex pt-3 hover:bg-red-100 rounded-lg">
                  {" "}
                  <LiaSignOutAltSolid size="20" />
                  Sign Out
                </li>
              </ul>
            </div>

            <span className="absolute top-60 left-8 flex gap-5 pt-10 cursor-pointer ">
              Mode:
              <IoSunnyOutline size="22" />
              <TbMoonStars size="20" />
              <FaCircleHalfStroke size="18" />
            </span>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
