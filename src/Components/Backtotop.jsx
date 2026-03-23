import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-24 right-5 z-50 flex items-center justify-center transition-all duration-500 group
      ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-0 pointer-events-none"}`}
    >
      {/* Premium Glow Effect matching brand gold */}
      <div className="absolute inset-0 w-10 h-10 bg-[#b3ad79]/40 blur-2xl rounded-full animate-pulse transition-opacity duration-300 group-hover:opacity-100"></div>

      {/* Teardrop Shape with Brand Gold Gradient */}
      <div
        className="relative w-11 h-11 flex items-center justify-center bg-gradient-to-br from-[#d4cc9a] via-[#b3ad79] to-[#8e865a] shadow-[0_8px_25px_rgba(179,173,121,0.35)] border border-white/30 transform rotate-45 transition-transform duration-500 hover:rotate-[45deg] group-hover:scale-110"
        style={{ borderRadius: "0 50% 50% 50%" }}
      >
        {/* Arrow - rotated back to point upwards */}
        <div className="transform -rotate-45 text-white">
          <FiArrowUp size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-translate-y-1" />
        </div>

        {/* Shine Overlay */}
        <div className="absolute top-1 left-1 w-4 h-4 bg-white/40 rounded-full blur-md" />
      </div>
    </button>
  );
}

export default BackToTop;
