import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { Button } from "@/Components/ui/button";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const filteredProducts = all_product.filter(
    (item) => props.category === item.category
  );

  return (
    <div className="pb-10 md:pb-16">
      <img
        className="h-32 w-full object-cover sm:h-40 md:h-52 lg:h-64"
        src={props.banner}
        alt={`${props.category} collection`}
      />
      <div className="container">
        <div className="my-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:my-8">
          <p className="text-sm text-muted-foreground md:text-base">
            <span className="font-semibold text-foreground">
              Showing 1-{Math.min(12, filteredProducts.length)}
            </span>{" "}
            out of {filteredProducts.length} products
          </p>
          <Button
            variant="outline"
            className="w-fit gap-2 rounded-full text-sm"
          >
            Sort by
            <img src={dropdown_icon} alt="" className="h-3 w-3" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <Button
            variant="outline"
            className="rounded-full border-foreground/20 px-10 py-5 text-sm md:text-base"
          >
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
