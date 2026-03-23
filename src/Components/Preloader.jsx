import React, { useState, useEffect } from "react";
import Navlogo from "../assets/Nav_Img.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 800);
      }, 600);
    };

    if (document.readyState === "complete") {
      setTimeout(handleComplete, 400);
    } else {
      window.addEventListener("load", handleComplete);
      const fallbackTimer = setTimeout(handleComplete, 3000);
      return () => {
        window.removeEventListener("load", handleComplete);
        clearTimeout(fallbackTimer);
        clearInterval(interval);
      };
    }

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#060918] transition-all duration-700 ease-in-out ${
        fadeOut ? "opacity-0 scale-110 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Decorative Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-blue-500 opacity-[0.03] blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-indigo-500 opacity-[0.03] blur-[90px]"></div>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Floating Logo Container */}
        <div className="relative mb-10 transform transition-transform duration-1000 animate-bounce-slow">
          <img
            src={Navlogo}
            alt="Sadashiv Logo"
            className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10 drop-shadow-2xl"
          />
        </div>

        {/* Brand Text Section */}
        <div className="mb-8 text-center">
          <h2 className="text-xl md:text-3xl font-black tracking-[0.3em] uppercase text-white mb-2">
            <span className="text-[var(--button-bg-color)] inline-block hover:scale-105 transition-transform duration-500">
              SADASHIV
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 overflow-hidden">
             <div className="h-[1px] w-8 bg-gradient-to-l from-[var(--button-bg-color)] to-transparent opacity-50"></div>
             <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/40">
               Chemical
             </span>
             <div className="h-[1px] w-8 bg-gradient-to-r from-[var(--button-bg-color)] to-transparent opacity-50"></div>
          </div>
        </div>

        {/* Progress Container */}
        <div className="w-64 md:w-80 space-y-4">
          <div className="flex justify-between items-end px-1">
            <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">Loading...</span>
            <span className="text-sm font-black text-[var(--button-bg-color)] tabular-nums">
              {Math.min(100, progress)}%
            </span>
          </div>

          <div className="h-1.5 w-full bg-blue-500/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 relative">
            
            <div
              className="h-full bg-gradient-to-r from-[var(--button-bg-color)] via-[#d4cf9e] to-[var(--button-bg-color)] transition-all duration-300 ease-out shadow-[0_0_15px_rgba(179,173,121,0.4)]"
              style={{ width: `${progress}%` }}
            >
            </div>
          </div>
          
            {/* <p className="text-center text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/20 animate-pulse">
              Simulating Molecular Synthesis...
            </p> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
