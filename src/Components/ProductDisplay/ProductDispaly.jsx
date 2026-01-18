import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first");
      return;
    }
    addToCart(product.id, selectedSize);
  };

  return (
    <div className="product-display">
      {/* LEFT */}
      <div className="product-display-left">
        <div className="product-display-list">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={product.image} alt="" />
          ))}
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-image"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="product-display-right">
        <h1>{product.name}</h1>

        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p className="ratings">155</p>
        </div>

        <div className="product-display-right-prices">
          <div className="old-price ">GH₵ {product.old_price}</div>
          <div className="new-price">GH₵ {product.new_price}</div>
        </div>

        <div className="product-display-right-description">
          Lightweight Knit Pullover Shirt. Perfect for casual and smart wear.
        </div>

        {/* SIZE SELECTOR */}
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-size-list">
            {sizes.map((size) => (
              <div
                key={size}
                className={`size-box ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button className="product-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <p className="product-display-right-category">
          <span>Category:</span> Women, T-Shirt, Crop Top
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
