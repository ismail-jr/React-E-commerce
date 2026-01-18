// // import React, { useContext } from "react";
// // import "./CartItem.css";
// // import { ShopContext } from "../../Context/ShopContext";
// // import remove_icon from "../Assets/cart_cross_icon.png";

// // const CartItems = () => {
// //   const { all_product, CartItems, removeFromCart } = useContext(ShopContext);
// //   return (
// //     <div className="CartItems">
// //       <div className="card-item-format-main">
// //         <p>Products</p>
// //         <p>Price</p>
// //         <p>Title</p>
// //         <p>Quantity</p>
// //         <p>Total</p>
// //         <p>Remove</p>
// //       </div>
// //       <hr />

// //       {all_product.map((e) => {
// //         if (CartItems[e.id] > 0) {
// //           return;
// //           <div>
// //             <div className="cart-item-format">
// //               <img src={e.image} alt="" className="cart-icon-product-icon" />
// //               <p>{e.name}</p>
// //               <p>${e.new_price}</p>
// //               <button className="cart-items-quantity">{CartItems[e.id]}</button>
// //               <p>{e.new_price * CartItems[e.id]}</p>
// //               <img
// //                 src={remove_icon}
// //                 onClick={() => {
// //                   removeFromCart(e.id);
// //                 }}
// //                 alt=""
// //               />
// //             </div>
// //             <hr />
// //           </div>;
// //         }
// //       })}
// //     </div>
// //   );
// // };

// // export default CartItems;
// import React, { useContext } from "react";
// import "./CartItem.css";
// import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from "../Assets/cart_cross_icon.png";

// const CartItems = () => {
//   const { getTotalAmount, all_product, cartItems, removeFromCart } =
//     useContext(ShopContext);

//   return (
//     <div className="CartItems">
//       <div className="card-item-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />

//       {all_product.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div key={e.id}>
//               <div className="cart-item-format card-item-format-main">
//                 <img
//                   src={e.image}
//                   alt={e.name}
//                   className="cart-icon-product-icon"
//                 />
//                 <p>{e.name}</p>
//                 <p>${e.new_price}</p>
//                 <button className="cart-items-quantity">
//                   {cartItems[e.id]}
//                 </button>
//                 <p>${e.new_price * cartItems[e.id]}</p>
//                 <img
//                   className="cart-remove"
//                   src={remove_icon}
//                   onClick={() => removeFromCart(e.id)}
//                   alt="Remove"
//                 />
//               </div>
//               <hr />
//             </div>
//           );
//         }
//         return null; // Return null for items not in the cart
//       })}
//       <div className="cart-items-down">
//         <div className="cart-items-total">
//           <h1>Cart Total</h1>
//           <div>
//             <div className="cart-items-total-items">
//               <p>Subtotal</p>
//               <p>${getTotalAmount()}</p>
//             </div>
//             <hr />
//           </div>
//           <div className="cart-total">
//             <h3>Total</h3>
//             <h3>${getTotalAmount()}</h3>
//           </div>
//           <button>PROCEEDE TO CHECKOUT</button>
//         </div>
//         <div className="cart-items-promo-code">
//           <p>If you have a promo code enter it here</p>
//           <div className="promo-box">
//             <input type="text" placeholder="Enter promo code" />
//             <button>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;
import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="CartItems">
      <div className="card-item-format-main">
        <p>Products</p>
        <p className="pt">Title</p>
        <p className="pp">Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p className="rv">Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-item-format card-item-format-main">
                <img
                  src={e.image}
                  alt={e.name}
                  className="cart-icon-product-icon"
                />
                <p>{e.name}</p>
                <p className="np"> GH₵{e.new_price}</p>
                <button className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p className="tt"> GH₵{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cart-remove"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null; // Return null for items not in the cart
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-items-total-items">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
          </div>
          <div className="cart-total">
            <h3>Total</h3>
            <h3> GH₵{getTotalAmount()}</h3>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promo-code">
          <p>If you have a promo code, enter it here</p>
          <div className="promo-box">
            <input type="text" placeholder="Enter promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
