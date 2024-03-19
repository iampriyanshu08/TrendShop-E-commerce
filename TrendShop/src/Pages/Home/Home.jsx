import React from "react";

import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import Gallery from "../../Components/Gallery/Gallery";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";

const Home = ({addToCart}) => {
  return (
    <>
      <Hero />
      <Services />
      <PopularProducts addToCart={addToCart} />
      <Gallery />
    </>
  );
};

export default Home;
