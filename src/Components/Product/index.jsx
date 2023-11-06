import React from "react";
import "./Product.css";

function Product({ product }) {
  return (
    <>
      <div className="col-md-4">
        <div className="card product-card">
          <img
            src={product.image_url}
            className="card-img-top card-image"
            alt={product.title}
          />
          <hr/>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <div className="price">
              <span className="discount-label">Price:</span>
                ${product.price}
            </div>
            <div className="discount">
              <span className="discount-label">Discount:</span>
              <span className="badge badge-pill badge-dark">
                {product.discount_percentage}% off
              </span>
            </div>
          </div>
          <a href="#" className="btn btn-dark btn-block">Buy Now</a>
        </div>
      </div>
    </>
  );
}

export default Product;
