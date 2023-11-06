import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import emptyCartImage from "../../assets/images/empty-cart.png";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const [totalprice, setTotalPrice] = useState(products.reduce((acc, product) => acc + product.price, 0));
  const navigate = useNavigate();

  return (
    <>
      {products.length !== 0 ? (
        <div className="container product-container">
          <div className="text-center mb-4 mt-2">
            <h1>CART ITEMS</h1>
          </div>
          {products.map((product, index) => (
            <CartProduct
              key={index}
              product={product}
              setTotalPrice={setTotalPrice}
            />
          ))}
          <div class="card cart-product ">
            <div class="card-body d-flex justify-content-around">
              <div>TOTAL PRICE</div>
              <div className="price">{parseFloat(totalprice).toFixed(2)} $</div>
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-outline-dark" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <img src={emptyCartImage} />
        </div>
      )}
    </>
  );
}

export default Cart;
