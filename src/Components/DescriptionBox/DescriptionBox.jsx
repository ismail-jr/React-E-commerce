import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews (155)</div>
      </div>
      <div className="description-box-description">
        <p>
          Welcome to Shopify UCC clothing store, your go-to destination for
          stylish and quality apparel for kids, women, and men. We provide a
          wide range of trendy outfits, from everyday essentials to
          fashion-forward pieces that suit all occasions.
        </p>
        <p>
          Our platform makes shopping easy and convenient, allowing you to
          browse categories, select your favorite sizes, and place orders from
          the comfort of your home. Whether you're looking for casual wear,
          formal outfits, or fun kids' clothing, we aim to deliver high-quality
          products with a seamless online experience.
        </p>
        <p>
          With secure payments, fast shipping, and detailed product
          descriptions, our e-commerce site empowers customers to shop
          confidently and discover the perfect clothing for every style and age.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
