// import { Outlet } from "react-router-dom";
import Grid from "../components/hotels/Grid";
import Takeoff from "../components/flights/home/Takeoff";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      {/* <Outlet /> */}
      <Grid />
      <Takeoff />
    </div>
  );
}
