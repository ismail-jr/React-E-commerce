// import React from "react";
// import "./Item.css";
// import { Link } from "react-router-dom";

// const Item = (props) => {
//   return (
//     <div className="item">
//       <Link to={`/products/${props.id}`}>
//         <img
//           src={props.image}
//           alt={props.name}
//           onClick={window.scrollTo(0, 0)}
//         />
//       </Link>
//       <p>{props.name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">${props.new_price}</div>
//         <div className="item-price-old">${props.old_price}</div>
//       </div>
//     </div>
//   );
// };

// export default Item;
import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <div className="item">
      <Link to={`/products/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          onClick={handleClick} // Call handleClick function on click
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
