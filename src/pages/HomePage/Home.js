import React from "react";
import Features from "../../Components/Features";
import Products from "../../Components/Products";
import HomeSlide from "../../Components/Slider";

export default function Home() {
  return (
    <>
      <HomeSlide />
      <Features />
      <Products />
    </>
  );
}