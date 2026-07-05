import React from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

const NewsLetter = () => {
  return (
    <section className="container py-10 md:py-16">
      <div className="mx-auto max-w-3xl rounded-2xl bg-secondary/60 px-4 py-10 text-center md:px-8 md:py-14">
        <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Subscribe to our Newsletter and Get Updated
        </p>
        <form
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            placeholder="Your Email"
            className="h-11 flex-1 rounded-full px-5"
          />
          <Button
            type="submit"
            className="h-11 rounded-full bg-brand px-8 hover:bg-brand/90"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
