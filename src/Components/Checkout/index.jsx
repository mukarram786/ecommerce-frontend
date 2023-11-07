import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../../Notification/Notification";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../slices/cartSlice";
import api from "../../services/axios";
import "./CheckoutForm.css";
import { useNavigate } from "react-router";

function CheckoutForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.user);
  const [paymentMethod, setMethodPayment] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let cartItems = cartProducts.map((product) => ({
      id: product.id,
      price: product.price,
      quantity: product.quantity
    }));

    api
      .post(`/api/v1/orders/`, {
        order: {
          cartItems: cartItems,
          payment_method: paymentMethod,
        },
      })
      .then((response) => {
        showSuccessNotification(response.data.message);
        dispatch(emptyCart());
        navigate("/");
      })
      .catch((error) => {
        showErrorNotification(response.data.error);
      });
  };

  const handlePaymentMethodChange = (e) => {
    setMethodPayment(e.target.value);
  };
debugger
  return (
    <div className="checkout-container mt-5">
      <h2 className="checkout-title">Checkout Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>First Name</label>
            <input type="text" value={user.first_name} required />
          </div>
          <div className="col-lg-6">
            <label>Last Name</label>
            <input type="text" value={user.last_name} required />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label>Email</label>
            <input type="email" value={user.email} required />
          </div>
          <div className="col-lg-6">
            <label>Phone Number</label>
            <input type="tel" value={user.phone_no} required />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <label>Shipping Address</label>
            <textarea
              value={user.address}
              className="checkout-form-textarea"
              required
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="col-lg-5">
            <div className="d-flex align-items-center">
              <input
                type="radio"
                id="cashPayment"
                value="cash_on_delivery"
                onChange={handlePaymentMethodChange}
                disabled={paymentMethod === "payment_by_card"}
              />
              <label htmlFor="cashPayment">Payment by Cash</label>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-flex align-items-center">
              <input
                type="radio"
                id="cardPayment"
                value="payment_by_card"
                onChange={handlePaymentMethodChange}
                disabled={paymentMethod === "cash_on_delivery"}
              />
              <label htmlFor="cardPayment">Payment by Card</label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-dark">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
