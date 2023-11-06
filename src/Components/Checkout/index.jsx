import React, { useState } from "react";
import { useSelector } from "react-redux";
import api from '../../services/axios';
import './CheckoutForm.css';


function CheckoutForm() {
  const cartProducts = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user);
  const [paymentMethod, setMethodPayment] = useState("");
  debugger

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let cartItems = cartProducts.map((product)=> ({id: product.id, price: product.price}))
    api.post(`/api/v1/orders/`, {
      params: {
        order: {
        cartItems: cartItems,
        payment_method: paymentMethod
        }
      },
    })
    .then((response) => {
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const handlePaymentMethodChange = (e) => {
    setMethodPayment(e.target.value)
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>First Name</label>
            <input type="text" value={user.firstName} required />
          </div>
          <div className="col-lg-6">
            <label>Last Name</label>
            <input type="text" value={user.lastName} required />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label>Email</label>
            <input type="email" value={user.email} required />
          </div>
          <div className="col-lg-6">
            <label>Phone Number</label>
            <input type="tel" value={user.phoneNumber} required />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <label>Shipping Address</label>
            <textarea
              value={user.shippingAddress}
              className="checkout-form-textarea"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <label>Payment Method</label>
          </div>
          <div className="col-lg-4">
            <div className="d-flex">
              <label>
                Payment by Cash
              </label>
              <input
                   style={{width: "15px", height: "15px"}}
                  type="radio"
                  value="cash_on_delivery"
                  className="ml-5"
                  onChange={handlePaymentMethodChange}
                />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex">
              <label>
                Payment by Card
              </label>
              <input
                  style={{width: "15px", height: "15px"}}
                  type="payment_by_card"
                  value=""
                  onChange={handlePaymentMethodChange}
                />
            </div>
          </div>
        </div>

        <button type="submit" className="checkout-btn btn btn-dark">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
