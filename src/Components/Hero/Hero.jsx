import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero from "../Assets/c22.jpeg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] md:min-h-screen">
      <div className="container flex flex-col items-center gap-8 py-10 md:flex-row md:gap-12 md:py-16 lg:py-20">
        <div className="flex flex-1 flex-col justify-center gap-4 md:gap-5">
          <h2 className="text-sm font-semibold tracking-wide text-foreground md:text-base lg:text-lg">
            NEW ARRIVALS
          </h2>
          <div className="space-y-1">
            <div className="flex items-center gap-3 md:gap-5">
              <p className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                new
              </p>
              <img
                src={hand_icon}
                alt=""
                className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
              />
            </div>
            <p className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              collections
            </p>
            <p className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              for everyone
            </p>
          </div>
          <Button className="mt-4 w-fit gap-3 rounded-full bg-brand px-6 py-5 text-base hover:bg-brand/90 md:mt-6 md:px-8 md:text-lg">
            Latest collections
            <img src={arrow_icon} alt="" className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <img
            src={hero}
            alt="New collections"
            className="w-full max-w-sm object-contain sm:max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
