import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import { Separator } from "@/components/ui/separator";

const Popular = () => {
  return (
    <section className="container py-10 md:py-16">
      <h1 className="text-center text-2xl font-semibold md:text-3xl">
        WOMENS & MENS POPULAR
      </h1>
      <Separator className="mx-auto my-4 w-24 bg-brand md:my-6" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
        {data_product.map((item) => (
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
    </section>
  );
};

export default Popular;
