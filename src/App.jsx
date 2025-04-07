import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Hero from './components/hero/Hero'
import BestHolidays from './components/BestHolidays'
import FeaturedHotels from './components/hero/FeaturedHotels'
import Explore  from './components/hero/Explore'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header />
       
  <Hero />
  <BestHolidays/>
    <FeaturedHotels/>
<Explore/>
      <Footer />
      </div>
    </>
  )
}

export default App
