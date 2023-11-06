import React from "react";
import Product from "../Product";
import "./Home.css";
import Carousel  from "../Crousel";

const products = [
  {
    title: "Product 1",
    description: "Description for Product 1",
    price: 19.99,
    image: "../../assets/images/croiusel-imge.jpg",
  },
  {
    title: "Product 2",
    description: "Description for Product 2",
    price: 24.99,
    image: "../../assets/images/croiusel-imge.jpg",
  },
  {
    title: "Product 3",
    description: "Description for Product 3",
    price: 29.99,
    image: "../../assets/images/croiusel-imge.jpg",
  },
];

function Home() {
  return (
    <>
      <div className="container crousel-container">
        <Carousel />
        <div className="row mt-4">
          {products.map((product, index) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
