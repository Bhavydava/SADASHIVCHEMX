import React from "react";
import HeroText from "./HeroText";
import { ContactheroSlides } from "../allconst/heroimg";

const ContactpageImg = () => {
  const slide = ContactheroSlides[0];

  return (
    <section className="ml-mr mt-30 md:mt-43 mb-16 px-4 md:px-0">
      <div className="w-full relative overflow-hidden h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px] xl:h-[850px] rounded-[30px] md:rounded-[60px] lg:rounded-[100px] shadow-2xl">
        <img
          src={slide.image}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-100 transition-all duration-[5000ms] opacity-50"
        />
        {/* Subtle gradient overlay to match other Heroes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>

        {/* Reusing the site's HeroText logic for perfect consistency */}
        <HeroText 
          overlay 
          {...slide.text} 
        />
      </div>
    </section>
  );
};

export default ContactpageImg;
