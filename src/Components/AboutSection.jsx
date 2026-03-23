import React from "react";
import AboutImg from "../assets/AboutSection/About_Img.jpg";
import AboutImg02 from "../assets/AboutSection/About-2.jpg";
import { Link } from "react-router-dom";
import handleScrollTop from "../allconst/ScrollTop";

const AboutSection = () => {
  return (
    <section className="ml-mr py-16 md:py-20 xl:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-24 items-center">
        {/* Left Image Section */}
        <div className="flex flex-col items-center lg:items-start justify-center order-1 lg:order-1">
          
          <div className="relative w-full max-w-[540px] lg:max-w-none lg:translate-x-[6%]">
            {/* Main Image Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-[var(--button-bg-color)] to-blue-500 rounded-[60px] blur-3xl opacity-20 hidden sm:block"></div>

            {/* Main Rounded Image */}
            <div className="rounded-[40px] md:rounded-[80px] lg:rounded-[90px] overflow-hidden h-[300px] sm:h-[450px] md:h-[550px] lg:h-[480px] xl:h-[600px] 2xl:h-[750px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative group">
              <img
                src={AboutImg}
                alt="About Sadashiv Chemical"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060918]/80 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Circular Overlapping Image */}
            <div className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-10 md:-bottom-20 md:-left-16 lg:-bottom-6 lg:-left-10 xl:-bottom-16 xl:-left-16 w-32 h-32 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-44 lg:h-44 xl:w-64 xl:h-64 2xl:w-80 2xl:h-80 rounded-full border-8 md:border-[15px] lg:border-[12px] xl:border-[18px] border-[#060918] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 bg-[#060918]">
              <img
                src={AboutImg02}
                alt="Analytical Services"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="order-2 lg:order-2 space-y-8 md:space-y-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-1 bg-[var(--button-bg-color)] rounded-full"></div>
                <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.4em] text-xs">
                  Industry Excellence
                </h4>
              </div>
              <h2 className="text-center lg:text-left lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight">
                Engineering Chemical <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                  Solutions for Tomorrow.
                </span>
              </h2>
            </div>
          </div>

          <div className="space-y-6 md:space-y-0 text-center lg:text-left">
            <div className="space-y-4 md:space-y-4 text-gray-400 font-light leading-relaxed">
              <p className="text-base md:text-lg lg:text-base xl:text-xl">
                Sadashiv Chemical Industries operates at the intersection of technical innovation
                and industrial reliability, engineered to deliver high-performance molecular 
                solutions for the most demanding sector requirements globally.
              </p>
              <p className="text-base md:text-lg lg:text-base xl:text-xl">
                Specializing in high-purity industrial compounds and specialized chemical 
                formulations, we empower our global partners with products that meet stringent 
                analytical benchmarks and environmental standards.
              </p>
            </div>

            <div className="pt-6 flex justify-center lg:justify-start">
              <Link
                to="/AboutpageLink"
                onClick={handleScrollTop}
                className="inline-flex items-center gap-4 font-bold text-sm md:text-lg tracking-widest uppercase py-4 px-8 border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-500 group overflow-hidden relative"
              >
                <span className="relative z-10">Discover Our Heritage</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-2 transition-transform duration-500 relative z-10"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
