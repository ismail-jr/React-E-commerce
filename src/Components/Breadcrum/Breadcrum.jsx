import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = ({ product }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container flex flex-wrap items-center gap-1 py-4 text-xs text-muted-foreground sm:gap-2 sm:py-6 sm:text-sm"
    >
      <span className="font-medium">HOME</span>
      <img src={arrow_icon} alt="" className="h-2 w-2 sm:h-3 sm:w-3" />
      <span className="font-medium">SHOP</span>
      <img src={arrow_icon} alt="" className="h-2 w-2 sm:h-3 sm:w-3" />
      <span className="capitalize">{product.category}</span>
      <img src={arrow_icon} alt="" className="h-2 w-2 sm:h-3 sm:w-3" />
      <span className="line-clamp-1 text-foreground">{product.name}</span>
    </nav>
  );
};

export default Breadcrum;
