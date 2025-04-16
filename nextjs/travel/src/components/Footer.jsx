import React from "react";
import { MdOutlinePhone, MdOutlineMailOutline, MdFlight } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagram,
  FaCar,
  FaGlobeAsia,
  FaHotel,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
function Footer() {
  return (
    <>
      <footer className=" bg-black pt-8 ">
        <div className="container flex gap-20 pl-15 pr-15">
          <div className="flex flex-col text-white">
            <div className="pl-2">
              <img className="h-10 " src="logo-light-q8SM9mVG.svg"></img>
            </div>
            <div className="opacity-75  ">
              <p>
                Departure defective arranging rapturous did believe him all had
                supported.
              </p>
            </div>
            <div className="p-2">
              <Link
                className="text-white opacity-75 hover:text-blue-500 gap-2 flex"
                href="#"
              >
                {" "}
                <MdOutlinePhone size="25px" /> +1234 567 678
              </Link>
              <Link
                className="=text-white opacity-75 hover:text-blue-500  gap-2 flex"
                href="#"
              >
                <MdOutlineMailOutline size="25px" />
                example@gmail.com
              </Link>
            </div>
          </div>
          <div>
            <h5 className="text-2xl text-white mb-3">Page</h5>
            <div className="flex-col">
              <ul className="gap-5 opacity-75">
                <li className="text-white hover:text-blue-500 pb-2">
                  <Link href="#">About us</Link>
                </li>
                <li className="text-white hover:text-blue-500 pb-2">
                  <Link href="#">Contact us</Link>
                </li>
                <li className="text-white  hover:text-blue-500 pb-2">
                  <Link href="#">News and blog</Link>
                </li>
                <li className="text-white  hover:text-blue-500 pb-2">
                  <Link href="#">Meet a team</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h5 className=" text-white  text-2xl mb-3">Link</h5>
            <div className=" flex-col">
              <ul className="opacity-75 gap-5">
                <li className="text-white  hover:text-blue-500 pb-2">
                  <Link href="#">Signout</Link>
                </li>
                <li className="text-white hover:text-blue-500 pb-2">
                  <Link href="#">Signin</Link>
                </li>
                <li className="text-white  hover:text-blue-500 pb-2">
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li className="text-white  hover:text-blue-500 pb-2">
                  <Link href="#">Terms</Link>
                </li>
                <li className="text-white  hover:text-blue-500 pb-2">
                  <Link href="#">Cookies</Link>
                </li>
                <li className="text-white   hover:text-blue-500 pb-2">
                  <Link href="#">Support</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-2xl text-white pb-3 ">Globel Site</h4>
            <div className="flex-col">
              <ul className="opacity-75 gap-5">
                <li className="text-white opacity-75 hover:text-blue-500 pb-2">
                  <Link href="#">India</Link>
                </li>
                <li className="text-white opacity-75 hover:text-blue-500 pb-2">
                  <Link href="#California">California</Link>
                </li>
                <li className="text-white hover:text-blue-500 opacity-75 pb-2">
                  <Link href="#indonasia">Indonasia</Link>
                </li>
                <li className="text-white hover:text-blue-500 opacity-75 pb-2">
                  <Link href="#canada">Canada</Link>
                </li>
                <li className="text-white hover:text-blue-500 opacity-75 pb-2">
                  <Link href="#Malaysia">Malaysia</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h3 className="text-2xl text-white pb-3">Booking</h3>
            <div className="flex-col">
              <ul className="opacity-75 ">
                <li className="text-white hover:text-blue-500 pb-2 gap-2 flex">
                  <FaHotel size="20px" />
                  <Link href="#hotel">Hotel</Link>
                </li>
                <li className="text-white hover:text-blue-500 pb-2 gap-2 flex">
                  <MdFlight size="20px" />
                  <Link href="#flight">Flight</Link>
                </li>
                <li className="text-white hover:text-blue-500 pb-2 gap-2 flex">
                  <FaGlobeAsia size="20px" />
                  <Link href="#tour">Tour</Link>
                </li>
                <li className="text-white hover:text-blue-500 pb-2  gap-2 flex">
                  {" "}
                  <FaCar size="20px" />
                  <Link href="#cabs">Cabs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section py-15 px-15 ">
          <h5 className="text-2xl text-white pb-2">Top Links</h5>
          <div className="flex flex-wrap gap-5 pr-15 opacity-75">
            <div className="text-white hover:text-blue-500 ">
              <Link href="#flight">Flight</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Hotels</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              {" "}
              <Link href="#">Tour</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Cabs</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">About</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Contact Us</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Blogs</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Services</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Detail page</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Policy</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Testimonials</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Newsletters</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Podcast</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Protest</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">NewsCybers</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Educations</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Sports</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Tech And Auto</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Opinion</Link>
            </div>
            <div className="text-white hover:text-blue-500">
              <Link href="#">Share Market</Link>
            </div>
          </div>
        </div>
        <div className="flex gap-200 p-10">
          <div>
            <h3 className="text-2xl text-white">Payment & Security</h3>
            <div className="flex gap-2 py-3">
              <img className="h-8" src="paypal-p0Cf0jrR.svg"></img>
              <img className="h-8" src="download.svg"></img>
              <img className="h-8" src="mastercard-7AdMRYoz.svg"></img>
              <img className="h-8" src="expresscard-lzb9gcWA.svg"></img>
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-white">Follow us on</h3>
            <div className="flex gap-3">
              <Link href="https://facebook.com">
                {" "}
                <FaFacebookSquare color="blue" size="30" />
              </Link>
              <Link href="https://instagram.com">
                <FaInstagram size="30" color=" pink" />
              </Link>
              <Link href="https://twitter.com">
                <FaTwitter color="blue" size="30" />
              </Link>
              <Link href="https://linkedin.com">
                <FaLinkedin color="blue" size="30" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-100 ">
          <div className="pl-5">
            <h4 className=" text-white opacity-75">
              Copyrights ©2025 Booking. Build by StackBros
            </h4>
          </div>
          <div className="right flex gap-20 opacity-75 ">
            <h2 className="text-white hover:text-blue-500">
              <Link href="#">Privacy policy</Link>
            </h2>
            <h2 className="text-white hover:text-blue-500">
              <Link href="#">Terms and Conditions</Link>
            </h2>
            <h2 className="text-white hover:text-blue-500">
              <Link href="#">Refund policy</Link>
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
