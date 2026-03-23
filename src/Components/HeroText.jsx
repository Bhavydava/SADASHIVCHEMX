import React from "react";

const HeroText = ({ title, backgroundTitle, Subtitle, description, overlay = false }) => {
  const baseClass = overlay
    ? "absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-8"
    : "ml-mr pt-6 md:pt-12";

  return (
    <section className={`${baseClass} overflow-x-hidden`} >
      {title?.trim() && (
        <div className="flex justify-center mb-2 md:mb-4">
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1 sm:px-5 sm:py-1.5 text-[11px] sm:text-xs md:text-sm rounded-full shadow-lg transition-all hover:bg-white/20">
            {title}
          </button>
        </div>
      )}
      <div className="relative flex flex-col items-center justify-center w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2">
        {Subtitle && (
          <div className="relative flex items-center justify-center w-full min-h-[60px] sm:min-h-[100px] md:min-h-[140px]">
            {(backgroundTitle || Subtitle) && (
              <h2
                className="absolute text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[180px] font-black uppercase text-white leading-none text-center pointer-events-none select-none z-0 opacity-[0.06] sm:opacity-[0.08] whitespace-normal md:whitespace-nowrap left-1/2 -translate-x-1/2 w-full flex justify-center tracking-tighter"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                {backgroundTitle || Subtitle}
              </h2>
            )}
            <h2 className="relative text-xl sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-[64px] font-bold text-center w-full z-10 leading-[1.1] tracking-tight px-1 drop-shadow-sm">
              {Subtitle}
            </h2>
          </div>
        )}
        {description && (
          <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-normal text-center mt-2 md:mt-4 w-full max-w-2xl lg:max-w-4xl z-10 opacity-75 leading-relaxed md:leading-snug tracking-wide px-4">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroText;
