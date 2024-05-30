// import React from "react";
// import "./ProductDispaly";
// import star_icon from "../Assets/star_icon.png";
// import star_dull_icon from "../Assets/star_dull_icon.png";

// const ProductDispaly = (props) => {
//   const { product } = props;
//   return (
//     <div className="product-display">
//       <div className="product-dispalyLeft">
//         <div className="product-dispaly-list">
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//         </div>
//         <div className="product-dispaly-img">
//           <img
//             className="product-dispaly-main-image"
//             src={product.image}
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="product-display-right">
//         <h1>{product.name}</h1>
//         <div className="product-display-right-star">
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_dull_icon} alt="" />
//           <p className="ratings">155</p>
//         </div>
//         <div className="product-display-right-prices">
//           <div className="product-dispaly-right-price-old">
//             ${product.old_price}
//           </div>
//           <div className="product-dispaly-right-price-new">
//             ${product.new_price}
//           </div>
//         </div>
//         <div className="product-display-right-description">
//           Lightweight Knit Pullover Shirt
//           <br />
//           Embrace effortless style with our lightweight knit pullover shirt.
//           Featuring a classic round neckline and short sleeves, this versatile
//           piece is perfect for layering or wearing on its own. Ideal as an
//           undershirt or outerwear, it combines comfort and elegance for any
//           occasion.
//         </div>
//         <div className="product-display-right-size">
//           <h1>Select Size</h1>
//           <div className="product-display-right-size-list">
//             <div>S</div>
//             <div>M</div>
//             <div>L</div>
//             <div>XL</div>
//             <div>XXL</div>
//           </div>
//         </div>
//         <button>Add to Cart</button>
//         <p className="product-display-right-cateory">
//           <span>Category: </span>Women, T-Shirt, Crop Top
//         </p>
//         <p className="product-display-right-cateory">
//           <span>Tags: </span>Modern, Latest
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductDispaly;
import React, { useContext } from "react";
import "./ProductDisplay.css"; // Make sure the CSS file name matches exactly
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-image"
            src={product.image}
            alt=""
          />
        </div>
      </div>
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
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          Lightweight Knit Pullover Shirt
          <br />
          Embrace effortless style with our lightweight knit pullover shirt.
          Featuring a classic round neckline and short sleeves, this versatile
          piece is perfect for layering or wearing on its own. Ideal as an
          undershirt or outerwear, it combines comfort and elegance for any
          occasion.
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-size-list">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          className="product-btn"
          onClick={() => {
            {
              addToCart(product.id);
            }
          }}
        >
          Add to Cart
        </button>
        <p className="product-display-right-category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
