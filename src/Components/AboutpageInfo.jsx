import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutHero01 from "../assets/AboutPage/lab.jpg";
import AboutHero02 from "../assets/AboutPage/molecular.jpg";

const AboutpageInfo = ({ sectionId }) => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash || !location.hash.startsWith("#about-")) return;

    const currentSection = document.getElementById(location.hash.replace("#", ""));
    if (!currentSection) return;

    const scrollToSection = () => {
      const navbarOffset = 120;
      const top = currentSection.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const timeout = setTimeout(scrollToSection, 80);
    return () => clearTimeout(timeout);
  }, [location.hash]);

  return (
    <section id={sectionId} className="ml-mr">
      <div className="text-center">

        <div className="">
          <h2
            className="text-2xl sm:text-4xl lg:text-3xl xl:text-5xl mt-5 md:mt-10 font-extrabold uppercase text-transparent leading-tight break-words mx-auto px-4 md:px-0"
            style={{ WebkitTextStroke: "1.6px rgba(255,255,255,0.28)" }}
          >
            Welcome To Sadashiv Chemical Industries.
          </h2>

          <h1 className="text-sm md:text-base lg:text-base xl:text-lg mt-4 md:mt-5 text-gray-2  00 leading-relaxed max-w-4xl mx-auto px-4 md:px-0">
            At Sadashiv Chemical Industries, we take pride in delivering quality
            products that meet global standards—earning the trust of clients
            worldwide.
          </h1>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-0">
          <p className="text-sm md:text-base lg:text-base xl:text-lg mt-6 text-gray-400 leading-relaxed font-light text-center">
            At Sadashiv Chemical Industries, we take pride in delivering quality
            products that meet global standards—earning the trust of clients
            worldwide. Backed by cutting-edge facilities, we power seamless and
            efficient trade operations across borders. Our packaging practices
            are aligned with the ethics and standards set by the Indian
            Institute of Packaging, ensuring safety and sustainability.
            Committed to value, we believe in exporting excellence at the right
            price, making international trade both competitive and reliable.
            With a sharp focus on timely shipments, we ensure every order is
            delivered with precision and punctuality—because your time is our
            priority.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-16 mb-20 md:mb-32 px-4">
        {/* Vision Image Card */}
        <div className="group relative rounded-[40px] md:rounded-[60px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl h-[450px] md:h-[600px]">
          <img
            src={AboutHero01}
            alt="Vision"
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-[25px] flex items-center justify-center text-white shadow-2xl transform transition-transform duration-500 group-hover:rotate-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-white leading-none">Vision</h3>
            </div>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-light line-clamp-4 md:line-clamp-none max-w-xl">
              We envision becoming a globally significant and respected conglomerate and enrich the lives of people associated with us while contributing to the nation by building a brighter tomorrow. Continuously exploring new avenues and pushing forward the boundaries in an infinite, yet mindful way.
            </p>
          </div>
        </div>

        {/* Mission Image Card */}
        <div className="group relative rounded-[40px] md:rounded-[60px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl h-[450px] md:h-[600px]">
          <img
            src={AboutHero02}
            alt="Mission"
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-[25px] flex items-center justify-center text-white shadow-2xl transform transition-transform duration-500 group-hover:rotate-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="8"/></svg>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-white leading-none">Mission</h3>
            </div>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-light line-clamp-4 md:line-clamp-none max-w-xl">
              We strive to achieve our objectives in an environment of fairness, honesty, and courtesy towards our clients, employees, vendors, and society. To consistently introduce new products and services by leveraging our leading technical expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutpageInfo;
