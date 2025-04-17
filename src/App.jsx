import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Outlet } from "react-router-dom";

import List from "./components/flights/list/List";
import ListHotels from "./components/hotels/ListHotels";

function App() {
  return (
    <>
      <Header />
      <Outlet />

      <List />
      <ListHotels />

      <Footer />
      
    </>
  );
}

export default App;
