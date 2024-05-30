// import React from "react";
// import { useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import { useParams } from "react-router-dom";
// import Breadcrum from "../Components/Breadcrum/Breadcrum";

// const Products = () => {
//   const { all_product } = useContext(ShopContext);
//   const { productID } = useParams;
//   const product = all_product.find((e) => e.id === Number(productID));
//   return (
//     <div>
//       <Breadcrum product={product} />
//     </div>
//   );
// };

// export default Products;
import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDispaly from "../Components/ProductDisplay/ProductDispaly";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RealatedProducts/RelatedProducts";

const Products = () => {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams(); // Ensure useParams is called as a function
  const product = all_product.find((e) => e.id === Number(productID));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDispaly product={product} />
      <DescriptionBox />
      <RelatedProducts />
      {/* Add other product details here */}
    </div>
  );
};

export default Products;
