import React from 'react'
import { MdOutlinePhone,MdOutlineMailOutline,MdFlight } from "react-icons/md";
import { FaFacebookSquare ,FaInstagram ,FaCar,FaGlobeAsia, FaHotel,FaTwitter ,FaLinkedin } from "react-icons/fa";

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
    <p>Departure defective arranging rapturous did believe him all had supported.</p>
</div>  
<div className="p-2">
    <a  className="text-white opacity-75 hover:text-blue-500 gap-2 flex"href="#"> <MdOutlinePhone size="25px"/> +1234 567 678</a>
    <a className="=text-white opacity-75 hover:text-blue-500  gap-2 flex"href="#"><MdOutlineMailOutline  size="25px"/>example@gmail.com</a>
    </div>
</div>
        <div>
        <h5 className="text-2xl text-white mb-3">Page</h5>
        <div className="flex-col" >
        <ul className="gap-5 opacity-75">
            <li className="text-white hover:text-blue-500 pb-2"><a href="#">About us</a></li>
            <li className="text-white hover:text-blue-500 pb-2"><a href="#">Contact us</a></li>
            <li className="text-white  hover:text-blue-500 pb-2"><a href="#">News and blog</a></li>
            <li className="text-white  hover:text-blue-500 pb-2"><a href="#">Meet a team</a></li>
        </ul>
    </div>
    </div>
        <div>
            <h5 className=" text-white  text-2xl mb-3">Link</h5>
            <div className=" flex-col">
            <ul className="opacity-75 gap-5">
                <li className="text-white  hover:text-blue-500 pb-2"><a href="#">Signout</a></li>
                <li className="text-white hover:text-blue-500 pb-2"><a href="#">Signin</a></li>
                <li className="text-white  hover:text-blue-500 pb-2"><a href="#">Privacy Policy</a></li>
                <li className="text-white  hover:text-blue-500 pb-2"><a href="#">Terms</a></li>
                <li className="text-white  hover:text-blue-500 pb-2"><a href="#">Cookies</a></li>
                <li className="text-white   hover:text-blue-500 pb-2"><a href="#">Support</a></li>
            </ul>
        </div>
    </div>
    <div>
     <h4 className="text-2xl text-white pb-3 ">Globel Site</h4>
     <div className="flex-col">
        <ul className="opacity-75 gap-5">
            <li className="text-white opacity-75 hover:text-blue-500 pb-2"><a href="#">India</a></li>
            <li className="text-white opacity-75 hover:text-blue-500 pb-2"><a href="#California">California</a></li>
            <li className="text-white hover:text-blue-500 opacity-75 pb-2"><a href="#indonasia">Indonasia</a></li>
            <li className="text-white hover:text-blue-500 opacity-75 pb-2"><a href="#canada">Canada</a></li>
            <li className="text-white hover:text-blue-500 opacity-75 pb-2"><a href="#Malaysia">Malaysia</a></li>
            </ul>
            </div>   
    </div>
<div className=''>
    <h3 className="text-2xl text-white pb-3">Booking</h3>
    <div className="flex-col">
        <ul className="opacity-75 "> 
            <li className="text-white hover:text-blue-500 pb-2 gap-2 flex"><FaHotel size="20px" /><a href="#hotel">Hotel</a></li>
            <li className="text-white hover:text-blue-500 pb-2 gap-2 flex"><MdFlight size="20px" /><a href="#flight">Flight</a></li>
            <li className="text-white hover:text-blue-500 pb-2 gap-2 flex"><FaGlobeAsia  size="20px"/><a href="#tour">Tour</a></li>
            <li className="text-white hover:text-blue-500 pb-2  gap-2 flex"> <FaCar  size="20px"/><a href="#cabs">Cabs</a></li>
        </ul>
    </div>
    </div>
    
</div>
<div className="section py-15 px-15 ">
        <h5 className="text-2xl text-white pb-2">Top Links</h5>
        <div className="flex flex-wrap gap-5 pr-15 opacity-75">
            <div className="text-white hover:text-blue-500 "><a href="#flight">Flight</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Hotels</a></div>
            <div className="text-white hover:text-blue-500"> <a href="#">Tour</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Cabs</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">About</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Contact Us</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Blogs</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Services</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Detail page</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Policy</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Testimonials</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Newsletters</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Podcast</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Protest</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">NewsCybers</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Educations</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Sports</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Tech And Auto</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Opinion</a></div>
            <div className="text-white hover:text-blue-500"><a href="#">Share Market</a></div>
        </div>
    </div>
    <div className="flex gap-200 p-10">
        <div>
            <h3 className="text-2xl text-white">Payment & Security</h3>
            <div className="flex gap-2 py-3">
            <img className="h-8" src="paypal-p0Cf0jrR.svg"></img>
            <img  className="h-8"src="download.svg"></img>
            <img  className="h-8"src="mastercard-7AdMRYoz.svg"></img>
            <img className="h-8" src="expresscard-lzb9gcWA.svg"></img>
        </div>
        </div>
        <div>
            <h3 className="text-2xl text-white">Follow us on</h3>
            <div className="flex gap-3">
         <a  href="https://facebook.com"> <FaFacebookSquare color="blue" size="30"/></a>
           <a href="https://instagram.com"><FaInstagram size="30"  color=" pink"/>
           </a> 
           <a href="https://twitter.com"><FaTwitter color="blue" size="30" /></a>
           <a href="https://linkedin.com"><FaLinkedin  color="blue" size="30"/></a>
           </div>
        </div>
         </div>
         <div className="flex gap-100 ">
            <div className="pl-5">
                <h4 className=" text-white opacity-75">Copyrights ©2025 Booking. Build by StackBros</h4>
    </div>
            <div className="right flex gap-20 opacity-75 ">
                <h2 className="text-white hover:text-blue-500"><a href="#">Privacy policy</a></h2>
                <h2 className="text-white hover:text-blue-500"><a href="#">Terms and Conditions</a></h2>
                <h2 className="text-white hover:text-blue-500"><a href="#">Refund policy</a></h2>
            </div>
         </div>
         

 </footer>
         </>
    )
}

export default Footer
