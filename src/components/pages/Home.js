import React from "react";

import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import BS from "./BS";
import slides from './mock.json'
function Home() {
  return (
    <>
      <HeroSection />
      <BS slides={slides}/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
