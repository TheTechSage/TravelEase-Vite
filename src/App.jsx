import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Outlet } from 'react-router-dom'

import Resort from './components/hotels/Resort'
import Takeoff from './components/flights/home/Takeoff'

function App() {
  return (
    <> 
      <Header />
      <Outlet />
      <Resort />
      <Takeoff />
      <Footer />
    </>
  )
}

export default App
