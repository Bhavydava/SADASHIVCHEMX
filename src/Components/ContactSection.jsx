import React from "react";
import { Link } from "react-router-dom";
import handleScrollTop from "../allconst/ScrollTop";

const ContactSection = () => {
  return (
    <section className="ml-mr py-6 md:py-8">
      <div className="space-y-10">
        <div className="space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
            <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.4em] text-xs">
              Industrial Support
            </h4>
          </div>
          <h2 className="text-center lg:text-left lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight">
            Advanced Synthesis, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              Powered by Engineering.
            </span>
          </h2>
          <div className="mt-6 md:mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-10">
            <p className="text-gray-400 text-sm md:text-base lg:text-base xl:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0 px-4 md:px-0">
              Seeking to optimize your chemical processing workflows? Our technical specialists provide 
              tailored molecular solutions and rigorous engineering support. Let's collaborate to 
              achieve your industrial excellence.
            </p>

            <div className="flex justify-center lg:justify-end">
              <Link
                to="/ContactpageLink"
                onClick={handleScrollTop}
                className="inline-flex w-fit items-center gap-3 md:gap-4 font-bold text-base md:text-lg hover:gap-5 md:hover:gap-6 transition-all duration-500 group border-b-2 border-white/10 pb-2 hover:border-[var(--button-bg-color)] whitespace-nowrap"
              >
                Contact Us
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform duration-500">
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

export default ContactSection;
