import React, { useEffect, useState } from "react";
import Product from "../Product";
import api from "../../services/axios";

function DashbaordProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api
      .get(`/api/v1/products/random_products`, {
        params: {
          offset: 20,
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section>
      <hr/>
      <div className="text-center mt-5">
        <h3 className="">Products</h3>
      </div>
      <div className="row mt-4">
        {products.map((product, index) => (
          <Product product={product} />
        ))}
      </div>
    </section>
  );
}

export default DashbaordProducts;
