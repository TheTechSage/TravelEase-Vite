import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Outlet } from "react-router-dom";
// import Resort from './components/hotels/Resort'
import Grid from "./components/hotels/Grid";
import Hero from "./components/Hero";
import Takeoff from "./components/flights/home/Takeoff";
import List from "./components/flights/list/List";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Resort /> */}
      {/* <Grid /> */}
      {/* <Hero /> */}
      {/* <Takeoff /> */}
      <List />
      <Footer />
      
    </>
  );
}

export default App;
