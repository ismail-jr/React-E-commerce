// import React, { createContext, useState } from "react";
// import all_product from "../Components/Assets/all_product";

// export const ShopContext = createContext(null);
// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 0; i < all_product.length + 1; i++) {
//     cart[i] = 0;
//   }

//   return cart;
// };
// const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const addToCart = (id) => {
//     setCartItems({ ...cartItems, [id]: cartItems[id] + 1 });
//   };
//   console.log(cartItems);
//   const removeFromCart = (id) => {
//     setCartItems({ ...cartItems, [id]: cartItems[id] - 1 });
//   };
//   // const getTotalAmount = () => {
//   //   let total = 0;
//   //   for ( const item in cartItems ) {
//   //     if( cartItems [item>0])
//   //       {
//   //         let iteminfo = all_products.find ((product)=> product.id === Number(item)
//   //         total += iteminfo.new_price * cartItems [item]
//   //       }
//   //   }

//   //   return total;
//   // };
//   const getTotalAmount = () => {
//     let total = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = all_products.find(
//           (product) => product.id === Number(item)
//         );
//         if (itemInfo) {
//           total += itemInfo.new_price * cartItems[item];
//         }
//       }
//     }
//     return total;
//   };

//   const contexValue = {
//     getTotalAmount,
//     all_product,
//     cartItems,
//     addToCart,
//     removeFromCart,
//   };

//   return (
//     <ShopContext.Provider value={contexValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[all_product[i].id] = 0; // Use the product ID as the key
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (id) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [id]: prevCartItems[id] + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [id]: prevCartItems[id] > 0 ? prevCartItems[id] - 1 : 0,
    }));
  };

  const getTotalAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          total += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return total;
  };

  const getTotalCart = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    getTotalCart,
    getTotalAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
