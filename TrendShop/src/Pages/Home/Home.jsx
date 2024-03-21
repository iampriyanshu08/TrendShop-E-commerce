import React from "react";

import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import Gallery from "../../Components/Gallery/Gallery";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import Testimonial from "../../Components/Testimonail/Testimonial";

const Home = ({addToCart}) => {
  return (
    <>
      <Hero />
      <Services />
      <PopularProducts addToCart={addToCart} />
      <Gallery />
      <Testimonial/>
    </>
  );
};

export default Home;
