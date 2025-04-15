import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Outlet } from 'react-router-dom'
// import Resort from './components/hotels/Resort'
import Grid from './components/hotels/Grid'
import Hero from './components/Hero'
import Takeoff from './components/flights/home/Takeoff'

function App() {
  return (
    <> 
      <Header />
      <Outlet />
      {/* <Resort /> */}
         <Grid />   
       <Hero />   
      <Takeoff />
      <Footer />
    </>
  )
}

export default App
