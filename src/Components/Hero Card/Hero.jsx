import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import HeroText from "../HeroText";
import { HomeheroSlides } from "../../allconst/heroimg";

const Hero = ({ slides = HomeheroSlides, sectionId }) => {
  const heroSlides = slides;

  return (
    <section id={sectionId} className="ml-mr mt-30 md:mt-32">
      <div className="flex justify-center">
        <div className="w-full">
          <div className="rounded-[20px] md:rounded-[100px] 2xl:rounded-[120px] shadow-lg h-full overflow-hidden ">
            <div className="h-[400px] sm:h-[480px] md:h-[580px] lg:h-[600px] xl:h-[740px] 2xl:h-[820px]">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full h-full "
              >
                {heroSlides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full overflow-hidden ">
                      <img
                        src={slide.image}
                        alt={`Hero ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 from-black/40 to-black/10 pointer-events-none"></div>
                      <HeroText overlay {...slide.text} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
