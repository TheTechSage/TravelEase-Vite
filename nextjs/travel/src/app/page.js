// import { Outlet } from "react-router-dom";
import Grid from "./hotels/grid/page";
import Takeoff from "../components/flights/home/Takeoff";
import Image from "next/image";
import Hero from "../components/hotels/home/Hero";
import List from "../components/flights/home/List";

export default function Home() {
  return (
    <div >
      {/* <Outlet /> */}
      <Grid />
      <List />
      <Takeoff />
    </div>
  );
}
