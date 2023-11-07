import React, { useEffect, useState } from "react";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../../Notification/Notification";
import { useParams } from "react-router";
import api from "../../services/axios";
import './OrderItem.css'

function OrderItems() {
  const [orderItems, setOrderItems] = useState([]);
  const { orderId } = useParams();

  useEffect(() => {
    api
      .get(`/api/v1/orders/${orderId}/order_items`)
      .then((response) => {
        setOrderItems(response.data);
      })
      .catch((error) => {
        showSuccessNotification(response.error)
      });
  });

  return (
    <>
      <div className="order-item-container">
        <h1 className="text-center mt-5">Order Details</h1>
        {orderItems.map((product, index) => {
          return (
            <div className="container mt-3">
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
                        <div className="product-cart">
                          <label className="product-name">Name</label>
                          {product.name}
                          </div>
                        <div className="product-cart">
                          <label>Quantity</label>
                          <div className="text-center">{product.quantity}</div>
                          </div>
                        <div className="mr-5">
                          <label>Price</label>
                          {product.price} $
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OrderItems;
