import React from "react";
import { cn } from "@/lib/utils";

const DescriptionBox = () => {
  return (
    <section className="container pb-10 md:pb-16">
      <div className="flex flex-wrap border-b">
        <button
          type="button"
          className="border-b-2 border-foreground px-4 py-3 text-sm font-semibold md:px-8 md:text-base"
        >
          Description
        </button>
        <button
          type="button"
          className={cn(
            "px-4 py-3 text-sm font-semibold text-muted-foreground md:px-8 md:text-base"
          )}
        >
          Reviews (155)
        </button>
      </div>
      <div className="space-y-4 py-6 text-sm leading-relaxed text-muted-foreground md:py-8 md:text-base">
        <p>
          Welcome to Shopify UCC clothing store, your go-to destination for
          stylish and quality apparel for kids, women, and men. We provide a
          wide range of trendy outfits, from everyday essentials to
          fashion-forward pieces that suit all occasions.
        </p>
        <p>
          Our platform makes shopping easy and convenient, allowing you to
          browse categories, select your favorite sizes, and place orders from
          the comfort of your home. Whether you&apos;re looking for casual wear,
          formal outfits, or fun kids&apos; clothing, we aim to deliver
          high-quality products with a seamless online experience.
        </p>
        <p>
          With secure payments, fast shipping, and detailed product
          descriptions, our e-commerce site empowers customers to shop
          confidently and discover the perfect clothing for every style and age.
        </p>
      </div>
    </section>
  );
};

export default DescriptionBox;
