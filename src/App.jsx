import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Hero from './components/hero/Hero'
import BestHolidays from './components/BestHolidays'
import FeaturedHotels from './components/hero/FeaturedHotels'
import Explore  from './components/hero/Explore'

function App() {
  return (
    <> 
      <Header />
      <Hero />
      <BestHolidays/>
      <FeaturedHotels/>
      <Explore/>
      <Footer />
    </>
  )
}

export default App
