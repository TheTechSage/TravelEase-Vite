import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar,CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div class="flex ">
        <div class="flex-col">
    <h1 class="text-6xl px-20 py-5">Find the top</h1>
    <span class="text-6xl px-20">Hotel  nearby </span>
    <p class="p-10 opacity-75 text-xl">We bring you not only a stay option, but an experience in your budget to enjoy the luxury.</p>
    <div class="flex p-5 gap-5">
<button class="bg-blue-300 text-blue-800 bg-opacity-75 hover:bg-blue-800 hover:text-white px-6 py-3 " > Discover Now </button>
      <p>Watch Our Story</p>
    </div>
    <div>
    <form class="flex border-3 border-solid  rounded-xl">
    <IoLocationOutline size="40" /><input type="location" placeholder='Select Location'></input>
    <CiCalendar  size="40"/><input type="date-time-local"placeholder="Current time"></input>
    <FaRegUser  size="40"/><input type="text" placeholder=""></input>
    <CiSearch color="blue" size="40" />
    </form>
    </div>
    </div>
    <div class="p-4">
      <img  class="w-xl rounded-xl" src="06-hDeq7Yvr.jpg"></img>
    
      <div class=" flex absolute top-20 left-193">
      <img class=" h-10 rounded-full "src="11-gZgLx6ik.jpg"></img>
      </div>
<div class="absolute top-45 left-190">
      <img class=" h-15 rounded-full "src="11-gZgLx6ik.jpg"></img>
      </div>
    </div>
    
    </div>
    
  

      <Footer />
    </>
  )
}

export default App
