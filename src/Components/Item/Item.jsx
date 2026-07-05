import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="group flex flex-col gap-2">
      <Link to={`/products/${props.id}`} onClick={handleClick}>
        <div className="overflow-hidden rounded-lg bg-secondary/30">
          <img
            src={props.image}
            alt={props.name}
            className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <p className="line-clamp-2 text-sm font-medium md:text-base">{props.name}</p>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-brand md:text-base">
          GH₵{props.new_price}
        </span>
        <span className="text-xs text-muted-foreground line-through md:text-sm">
          GH₵{props.old_price}
        </span>
      </div>
    </div>
  );
};

export default Item;
