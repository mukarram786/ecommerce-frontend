import React, { useEffect, useState } from 'react'
import api from '../../services/axios'
import { Link } from 'react-router-dom'
// import { useAsyncError } from 'react-router';

// const ordersData = [
//   {
//     id: 1,
//     orderNumber: "ORD12345",
//     date: "2023-11-06",
//     totalAmount: 100.00,
//     status: "Shipped",
//   },
//   {
//     id: 2,
//     orderNumber: "ORD56789",
//     date: "2023-11-08",
//     totalAmount: 75.50,
//     status: "Delivered",
//   },
//   // Add more orders here
// ];

function Order() {
  const [orders, setOrders] = useState([])

  useEffect(()=> {
    api.get('/api/v1/orders').then((response)=> {
      setOrders(response.data)
    }).catch((error)=> {
      console.log(ErrorEvent)
    })
  }, [])

  return (
    <div className="container mt-3">
      <h2 className="text-center">Orders</h2>
      <table className="table  table-bordered">
        <thead>
          <tr>
            <th className='text-cneter'>Order Number</th>
            <th className='text-cneter'>Date</th>
            <th className='text-cneter'>Total Amount</th>
            <th className='text-cneter'>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.order_id}</td>
              <td>{order.date}</td>
              <td>${order.price.toFixed(2)}</td>
              <td>Pending</td>
              <td><Link to={`/order-items/${order.id}`} className='btn btn-dark'>Order Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Order;


