import React from 'react'
import Hero from '../../components/hotels/home/Hero'
import FeaturedHotels from '../../components/hotels/home/FeaturedHotels'
import BestHolidays from '../../components/hotels/home/BestHolidays'
import Explore from '../../components/hotels/home/Explore'

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
