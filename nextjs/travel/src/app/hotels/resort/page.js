import React from "react";
import Luxury from "../../../components/hotels/resort/Luxury";
import Tribute from "../../../components/hotels/resort/Tribute";
import Experience from "../../../components/hotels/resort/Experience";
import Rooms from "../../../components/hotels/resort/Rooms";
import Offers from "../../../components/hotels/resort/Offers";
import Moments from "../../../components/hotels/resort/Moments";
import OurResort from "../../../components/hotels/resort/OurResort";
import Discount from "../../../components/hotels/resort/Discount";
import { Switch } from "@/src/components/ui/switch";

function Resort() {
  return (
    <>
      <Switch />

      <Luxury />
      <Tribute />
      <Experience />
      <Rooms />
      <Offers />
      <Moments />
      <OurResort />
      <Discount />
    </>
  );
}

export default Resort;
