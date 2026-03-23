import React from "react";
import HeroText from "./HeroText";
import { InnovationheroSlides } from "../allconst/heroimg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const InnovationHero = ({ slides = InnovationheroSlides }) => {
    return (
        <section className="ml-mr mt-20 md:mt-24">
            <div className="flex justify-center">
                <div className="w-full">
                    <div className="rounded-[20px] md:rounded-[100px] 2xl:rounded-[120px] shadow-2xl h-full overflow-hidden border border-white/10">
                        <div className="h-[400px] sm:h-[480px] md:h-[580px] lg:h-[700px] 2xl:h-[820px]">
                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                effect="fade"
                                spaceBetween={0}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 5000, disableOnInteraction: false }}
                                className="w-full h-full"
                            >
                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative w-full h-full overflow-hidden">
                                            <img
                                                src={slide.image}
                                                alt={`Hero ${index + 1}`}
                                                className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-[5000ms]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none"></div>
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

export default InnovationHero;
