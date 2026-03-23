import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/918000257686"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all duration-300 group"
    >
      {/* Premium Glow Effect matching WhatsApp green */}
      <div className="absolute inset-0 w-10 h-10 bg-[#25D366]/40 blur-2xl rounded-full animate-pulse transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="relative w-11 h-11 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#20ba58]">
        {/* Shine Overlay */}
        <div className="absolute top-1 left-1 w-4 h-4 bg-white/40 rounded-full blur-md" />
        
        <FaWhatsapp size={22} className="relative z-10" />
      </div>
    </a>
  );
}

export default WhatsappButton;
