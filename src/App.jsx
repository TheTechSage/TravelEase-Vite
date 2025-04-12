import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Outlet } from 'react-router-dom'
import FeaturedHotels from './components/hotels/home/FeaturedHotels'
import BestHolidays from './components/hotels/home/BestHolidays'
import Resort from './components/hotels/Resort'
import Grid from './components/hotels/Grid'
import Home from './components/heroo/Home'
function App() {
  return (
    <> 
      <Header />
      <Outlet />
      {/* <Resort /> */}
       <Grid /> 
      {/* <Home /> */}
      <Footer />
    </>
  )
}

export default App
