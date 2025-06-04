import React from "react";
import Header from "./common/Header";
import Hero from "./common/Hero";
import LatestProducts from "./common/LatestProducts";
import FeaturedProducts from "./common/FeaturedProducts";
import Footer from "./common/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <LatestProducts />
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default Home;
