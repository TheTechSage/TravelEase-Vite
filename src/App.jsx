import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Outlet } from "react-router-dom";
// import Resort from './components/hotels/Resort'
import Grid from "./components/hotels/Grid";
import Takeoff from "./components/flights/home/Takeoff";
import List from "./components/flights/list/List";
import ListHotels from "./components/hotels/ListHotels";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Resort /> 
       <Grid /> */}
      
      <ListHotels />
      {/* <Takeoff /> 
      <List /> */}
      <Footer />
      
    </>
  );
}

export default App;
