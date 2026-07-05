import React, { useContext, useState } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { Button } from "@/Components/ui/button";
import { cn } from "@/lib/utils";

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
    <div className="container pb-8 md:pb-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="flex flex-1 flex-col gap-4 sm:flex-row lg:max-w-[50%]">
          <div className="flex gap-2 overflow-x-auto sm:flex-col sm:overflow-visible">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={product.image}
                alt=""
                className="h-16 w-12 shrink-0 cursor-pointer rounded-md object-cover sm:h-20 sm:w-16"
              />
            ))}
          </div>
          <div className="flex flex-1 items-center justify-center">
            <img
              className="max-h-[400px] w-full max-w-md rounded-lg object-contain"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 md:gap-5">
          <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            {product.name}
          </h1>

          <div className="flex items-center gap-1">
            {[star_icon, star_icon, star_icon, star_icon, star_dull_icon].map(
              (icon, i) => (
                <img key={i} src={icon} alt="" className="h-4 w-4 md:h-5 md:w-5" />
              )
            )}
            <p className="ml-2 text-sm text-muted-foreground">155</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-muted-foreground line-through">
              GH₵ {product.old_price}
            </span>
            <span className="text-xl font-bold text-brand md:text-2xl">
              GH₵ {product.new_price}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Lightweight Knit Pullover Shirt. Perfect for casual and smart wear.
          </p>

          <div>
            <h2 className="mb-3 text-base font-semibold md:text-lg">
              Select Size
            </h2>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-md border text-sm font-medium transition-colors",
                    selectedSize === size
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:bg-secondary"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 sm:w-auto"
          >
            Add to Cart
          </Button>

          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Category:</span>{" "}
            Women, T-Shirt, Crop Top
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
