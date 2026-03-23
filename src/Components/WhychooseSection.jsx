import React from "react";
import whychooseImg from "../assets/Choose_Img.jpg";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import handleScrollTop from "../allconst/ScrollTop";
import Hero1 from "../assets/Whychoose.jpg";

const WhychooseSection = () => {

  return (
    <section className="py-6 md:py-8">
      <div className="ml-mr">
        <div className="space-y-6 md:space-y-10">
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
            <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.4em] text-xs">
              Industrial Advantages
            </h4>
            </div>
          <h2 className="text-center lg:text-left lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight">
            Chemical Precision, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              Engineered for Performance.
            </span>
          </h2>
          </div>
        </div>

        <div className="mt-8 md:mt-12 relative overflow-hidden rounded-[40px] md:rounded-[80px] lg:rounded-[100px] min-h-[450px] sm:min-h-[500px] lg:min-h-0 lg:aspect-[2/1] xl:aspect-[3/1]">
          <img
            src={Hero1}
            alt="Why Choose Us"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#060918] via-[#060918]/60 to-transparent flex items-center justify-center lg:justify-start p-4 sm:p-8 md:p-12 lg:p-16">
            <div className="w-full max-w-xl lg:max-w-lg xl:max-w-xl p-6 sm:p-10 md:p-12 lg:p-10 xl:p-12 rounded-[30px] md:rounded-[50px] bg-[#060918]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Chemical Expertise</h3>
                <div className="w-12 md:w-16 h-1 bg-[var(--button-bg-color)] mb-4 md:mb-6"></div>
                <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-gray-300 leading-relaxed font-light">
                  We specialize in high-purity chemical synthesis backed by advanced analytical validation, ensuring that every molecular formulation adheres to the most stringent international industrial benchmarks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <Link
                  to="/SustainabilitypageLink"
                  onClick={handleScrollTop}
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white text-black text-sm md:text-base font-bold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                  Get in Touch
                </Link>
                <div className="flex items-center gap-3 text-sm md:text-base text-white/80 font-medium">
                  <GiCheckMark className="text-green-500 text-lg" />
                  <span className="tracking-wide">ISO 9001 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default WhychooseSection;
