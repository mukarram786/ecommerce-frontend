import React, { useEffect, useState } from 'react'
import api from '../../services/axios'
import { useAsyncError } from 'react-router';

const ordersData = [
  {
    id: 1,
    orderNumber: "ORD12345",
    date: "2023-11-06",
    totalAmount: 100.00,
    status: "Shipped",
  },
  {
    id: 2,
    orderNumber: "ORD56789",
    date: "2023-11-08",
    totalAmount: 75.50,
    status: "Delivered",
  },
  // Add more orders here
];

function Order() {
  const [orders, setOrders] = useState([])

  useEffect(()=> {
    
  }, [])
  return (
    <div className="container mt-3">
      <h2 className="text-center">Orders</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order) => (
            <tr key={order.id}>
              <td>{order.orderNumber}</td>
              <td>{order.date}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Order;


