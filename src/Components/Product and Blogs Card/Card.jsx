import React from "react";
import { Link } from "react-router-dom";
import handleScrollTop from "../../allconst/ScrollTop";

const Card = ({ item, ctaText = "View Details", imageRatio = "square" }) => {
  if (!item) return null;

  const ratioClass = imageRatio === "landscape" ? "aspect-[4/3]" : "aspect-square";

  return (
    <Link
      to={item.link}
      onClick={handleScrollTop}
      className="group relative overflow-hidden flex flex-col h-full bg-[#0d1127]/50 rounded-[24px] sm:rounded-[40px] p-2.5 sm:p-4 border border-white/5 hover:border-white/10 hover:bg-[#0d1127] transition-all duration-500 shadow-xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_55%)] pointer-events-none"></div>

      <div className={`relative z-10 overflow-hidden rounded-[18px] sm:rounded-[30px] mb-3 sm:mb-6 w-full aspect-[4/3] sm:aspect-square`}>
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow px-2 sm:px-4 pb-2 sm:pb-4">
        {(item.date || item.readTime) && (
          <div className="mb-2 flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500">
            {item.date && <span>{item.date}</span>}
            {item.date && item.readTime && <span className="w-1 h-1 bg-gray-500 rounded-full"></span>}
            {item.readTime && <span>{item.readTime}</span>}
          </div>
        )}
        <h3 className="text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold mb-1.5 sm:mb-3 leading-snug group-hover:text-[var(--button-bg-color)] transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-2 mb-3 sm:mb-6">
          {item.desc}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-[var(--button-bg-color)] transition-colors duration-300">
            {ctaText}
          </span>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[var(--button-bg-color)] group-hover:text-black transition-all duration-300 shadow-sm">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-3.5 sm:h-3.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;