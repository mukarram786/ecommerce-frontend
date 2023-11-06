import React, { useState } from "react";
import { removeProduct } from '../../slices/cartSlice'
import {showSuccessNotification, showErrorNotification} from '../../Notification/Notification'
import { useDispatch } from "react-redux";

function CartProduct({ product, setTotalPrice }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);
  const price = parseInt(product.price) * quantity;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setTotalPrice((prevPrice) => prevPrice + product.price);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice((prevPrice) => prevPrice - product.price);
    }
  };

  const deleteCartItem = () => {
    dispatch(removeProduct(product))
    setTotalPrice((prevPrice) => prevPrice - product.price);
    showSuccessNotification("Item has been removed from cart")
  }

  return (
    <>
      <div className="card mb-3 cart-product">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-2">
              <img
                src="https://picsum.photos/200/300"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <div className="col-lg-8 mt-1">
              <div className="d-flex justify-content-between mb-3">
                <div className="product-cart">{product.name}</div>
                <div className="d-flex">
                  <button
                    className="btn btn-danger ml-4 plus-quantity"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <span className="ml-2 mr-2">{quantity}</span>
                  <button
                    className="btn btn-success minus-quantity"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
                <div className="mr-5">{price} $</div>
              </div>
            </div>
            <div className="col-lg-2 mt-1">
              <button className="btn btn-danger rounded-circle" onClick={deleteCartItem}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
