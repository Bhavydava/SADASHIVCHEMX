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
      className="group relative overflow-hidden flex flex-col h-full bg-[#0d1127]/50 rounded-[20px] sm:rounded-[32px] p-2 sm:p-3.5 border border-white/5 hover:border-white/10 hover:bg-[#0d1127] transition-all duration-500 shadow-xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_55%)] pointer-events-none"></div>

      <div className={`relative z-10 overflow-hidden rounded-[15px] sm:rounded-[24px] mb-3 sm:mb-5 w-full aspect-[4/3] sm:aspect-square`}>
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow px-1.5 sm:px-3 pb-1.5 sm:pb-3">
        {(item.date || item.readTime) && (
          <div className="mb-1.5 flex items-center gap-2 text-[9px] sm:text-[11px] font-semibold uppercase tracking-widest text-gray-500">
            {item.date && <span>{item.date}</span>}
            {item.date && item.readTime && <span className="w-1 h-1 bg-gray-500 rounded-full"></span>}
            {item.readTime && <span>{item.readTime}</span>}
          </div>
        )}
        <h3 className="text-base md:text-xl lg:text-lg xl:text-xl font-bold mb-1 sm:mb-2.5 leading-snug group-hover:text-[var(--button-bg-color)] transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-400 text-[xs] sm:text-sm md:text-sm leading-relaxed line-clamp-2 mb-2.5 sm:mb-5">
          {item.desc}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-[var(--button-bg-color)] transition-colors duration-300">
            {ctaText}
          </span>
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[var(--button-bg-color)] group-hover:text-black transition-all duration-300 shadow-sm">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-3 sm:h-3">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;