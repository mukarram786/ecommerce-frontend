import React, { useState } from 'react';

function Cart({ product }) {
  const [quantity, setQuantity] = useState(1);
  const price = product.price * quantity;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="col-md-4">
      <div className="card product-card">
        <img
          src={product.image_url}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <span className="counter">{quantity}</span>
              <h5 className="card-title">{product.name}</h5>
            </div>
            <p className="card-text">${price}</p>
          </div>
          <p className="card-text">{product.description}</p>
          <div className="discount">
            <span className="discount-label">Discount:</span>
            <span className="badge badge-pill badge-dark">
              {product.discount_percentage}% off
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
            <button className="btn btn-primary" onClick={handleIncrement}>+</button>
          </div>
          <button className="btn btn-success btn-block">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
