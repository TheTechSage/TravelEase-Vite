import React from 'react'
import Hero from './home/Hero'
import FeaturedHotels from './home/FeaturedHotels'
import BestHolidays from './home/BestHolidays'
import Explore from './home/Explore'

function Home() {
  return (
    <>
        <Hero />
        <BestHolidays />
        <FeaturedHotels />
        <Explore />
    </>
  )
}

export default Home
