import React from "react";
import "../../App.css";
import Hero from "./BS";
import slides from "./hotel.json";
import Cardhotel from "./HotelCard";
export default function Services() {
  return (
    <>
      <Hero slides={slides} />
      <Cardhotel />
    </>
  );
}
