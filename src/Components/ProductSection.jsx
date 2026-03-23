import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductData from "../allconst/product";
import Card from "./Product and Blogs Card/Card";

const ProductSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash || !location.hash.startsWith("#prod")) return;

    const sectionId = location.hash.replace("#", "");
    const section = document.getElementById(sectionId);

    if (!section) return;

    const scrollToSection = () => {
      const navbarOffset = 120;
      const top = section.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const timeout = setTimeout(scrollToSection, 80);
    return () => clearTimeout(timeout);
  }, [location.hash]);

  return (
    <section className="ml-mr mt-5 xl:mt-15">
      <div className="space-y-10">
        <div className="space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
            <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.4em] text-xs">
              Product Portfolio
            </h4>
          </div>
          <h2 className="text-center lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight">
            Advanced Purification, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              Engineered by Chemistry.
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-base xl:text-lg mt-4 max-w-2xl leading-relaxed mx-auto lg:mx-0 px-4 md:px-0">
            Premium-grade coagulants and specialized chemical formulations designed to optimize municipal water treatment and enhance industrial processes globally.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 mt-10 px-4 sm:px-0">
        {ProductData.slice(0, 5).map((item, index) => (
          <div key={item.id} id={`prod${index + 1}`} className="w-full">
            <Card item={item} ctaText="View Details" imageRatio="square" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
