import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../../Notification/Notification";
import { addProduct } from "../../slices/cartSlice";
import "./Product.css";

function Product({ product }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const [cartProduct, setCartProduct] = useState(false);

  const addCardItem = () => {
    dispatch(addProduct(product));
    showSuccessNotification("Product added to the cart");
  };

  useEffect(() => {
    let cartProduct = cartProducts.find(
      (CrtProduct) => CrtProduct.id === product.id
    );
    if (cartProduct) {
      setCartProduct(true);
    }
  }, [cartProducts]);
  console.log(cartProduct, product.name);
  return (
    <>
      <div className="col-md-4">
        <div className="card product-card">
          <img
            src={`https://picsum.photos/id/${product.id}/200/300`}
            className="card-img-top card-image"
            alt={product.title}
          />
          <hr />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <div className="price">
              <span className="discount-label">Price:</span>${product.price}
            </div>
            <div className="discount">
              <span className="discount-label">Discount:</span>
              <span className="badge badge-pill badge-dark">
                {product.discount_percentage}% off
              </span>
            </div>
          </div>
          <button onClick={addCardItem} className="btn btn-dark btn-block" disabled={cartProduct}>
            {cartProduct ? "Added to Cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
