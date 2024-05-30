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
          An e-commerce website is an online platform where businesses sell
          products or services over the internet. It facilitates transactions
          between buyers and sellers electronically, providing a virtual
          marketplace accessible from anywhere with an internet connection.
        </p>
        <p>
          An e-commerce website revolutionizes the way people shop by providing
          a seamless, secure, and convenient online shopping experience. From
          browsing products to making purchases and receiving deliveries,
          e-commerce platforms empower customers to fulfill their needs and
          preferences with just a few clicks or taps.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
