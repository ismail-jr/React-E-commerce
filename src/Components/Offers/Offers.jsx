import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
import { Button } from "@/Components/ui/button";

const Offers = () => {
  return (
    <section className="container py-10 md:py-16">
      <div className="flex flex-col items-center gap-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#fde1ff] to-[#e1ffea44] p-6 md:flex-row md:gap-12 md:p-10 lg:p-16">
        <div className="flex flex-1 flex-col gap-3 text-center md:text-left">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Exclusive</h1>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Offers for You
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            ONLY ON BEST SELLERS PRODUCTS
          </p>
          <Button className="mx-auto mt-2 w-fit rounded-full bg-brand px-8 hover:bg-brand/90 md:mx-0">
            Check Now
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img
            src={exclusive_image}
            alt="Exclusive offers"
            className="w-full max-w-xs object-contain sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
