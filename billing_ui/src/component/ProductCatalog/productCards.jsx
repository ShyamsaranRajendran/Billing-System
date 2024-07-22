import React from "react";
import { Link } from "react-router-dom";
import "./css/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link
        to={`/Dashboard/products/${product.id}`}
        className="product-card-link"
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
        <div className="product-card-details">
          <h3 className="product-card-name">{product.name}</h3>
          <p className="product-card-price">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
