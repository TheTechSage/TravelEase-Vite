import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Outlet } from 'react-router-dom'
import Takeoff from './components/flights/home/Takeoff'
import FlightList from './components/flights/FlightsList'


function App() {
  return (
    <> 
      <Header />
      <Outlet />
       <Takeoff />  
      {/* <FlightList /> */}
      <Footer />
      
    </>
  )
}

export default App
