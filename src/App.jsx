import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Outlet } from 'react-router-dom'
// import Resort from './components/hotels/Resort'
import Grid from './components/hotels/Grid'
import Hero from './components/Hero'

function App() {
  return (
    <> 
      <Header />
      <Outlet />
      {/* <Resort /> */}
         <Grid />   
       <Hero />   
      <Footer />
    </>
  )
}

export default App
