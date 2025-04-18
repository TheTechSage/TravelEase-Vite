import React from 'react'
import About from '../../components/hotels-details/About'
import Hero from '../../components/hotels-details/Hero'
import Policies from '../../components/hotels-details/Policies'
import Review from '../../components/hotels-details/Review'

function Page () {
  return (
    <div>
     <Hero /> 
     <About />
     <Review />
     <Policies />
    </div>
  )
}

export default Page
