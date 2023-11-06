import React from "react";
import Product from "../Product";
import "./Home.css";
import Carousel from "../Crousel";
import DashbaordProducts from "./DashbaordProducts";

function Home() {
  return (
    <>
      <div className="container crousel-container">
        <Carousel />
        <DashbaordProducts />
      </div>
    </>
  );
}

export default Home;
