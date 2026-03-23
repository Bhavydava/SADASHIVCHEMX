import React from "react";
import Product1 from "../assets/ProductImg/Product_Img1.png";

const SingleBlogHero = ({ product }) => {
  const productTitle = product?.title || "Blog Post";
  const productDescription = product?.desc || "";
  const productImage = product?.img || Product1;

  return (
    <section className="ml-mr pt-15 md:pt-40 lg:pt-44 mt-20 md:mt-0 overflow-x-hidden">
      {/* Header Content Above Image */}
      <div className="text-center relative mb-12 md:mb-16 lg:mb-24">
        <div className="relative z-10 flex flex-col items-center px-4">
          <span className="px-5 py-2 rounded-full bg-white text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-xl">
            SadaShiv Chemical - Blogs
          </span>

          <div className="relative w-full flex justify-center items-center mb-4">
            {/* Large Decorative Background Text directly behind title */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[2.2rem] sm:text-6xl md:text-9xl lg:text-[11rem] font-black text-white/[0.08] sm:text-white/[0.04] uppercase tracking-[0.1em] z-[-1] pointer-events-none select-none w-full max-w-full truncate lg:overflow-visible">
              {productTitle}
            </h2>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold max-w-6xl leading-[1.1] tracking-tight px-2">
              {productTitle}
            </h1>
          </div>
          <p className="text-gray-400 text-[10px] sm:text-base md:text-xl lg:text-2xl max-w-4xl leading-relaxed font-medium px-4">
            {productDescription || "Technical guidelines for selecting industrial partners in high-compliance reactive environments."}
          </p>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="w-full px-4 md:px-6 lg:px-0">
        <div className="w-full relative overflow-hidden h-[300px] sm:h-[450px] md:h-[550px] xl:h-[700px] 2xl:h-[850px] rounded-[30px] md:rounded-[60px] lg:rounded-[100px] 2xl:rounded-[120px] shadow-2xl">
          <img
            src={productImage}
            alt={productTitle}
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="mt-10 md:mt-24 lg:mt-22 max-w-4xl mx-auto px-4 pb-24 text-left">
        <div className="mb-12"> 
          {/* Date & Comments */}
          <div className="flex items-center gap-2 text-gray-500 text-[10px] md:text-sm font-medium uppercase tracking-widest mb-6">
            {product?.date}
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
            {productTitle}
          </h1>
        </div>

        {product?.details ? (
          <div className="space-y-12">
            {/* Detailed Description with better formatting */}
            <div className="text-gray-300 space-y-8 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              {product.details.split('\n\n').map((paragraph, pIdx) => {
                // Check if it's a heading (short, no period at end)
                const isHeading = paragraph.length < 80 && !paragraph.trim().endsWith('.');
                const isListItem = paragraph.trim().startsWith('•');

                if (isHeading) {
                  return (
                    <h2 key={pIdx} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-12 mb-8 tracking-tight leading-[1.2]">
                      {paragraph}
                    </h2>
                  );
                }
                
                if (isListItem) {
                  return (
                    <div key={pIdx} className="flex gap-4 items-start py-4 group">
                      <div className="w-8 h-8 rounded-full bg-[var(--button-bg-color)]/20 flex items-center justify-center text-[var(--button-bg-color)] shrink-0 transition-transform group-hover:scale-110">
                        <span className="text-xl leading-none">•</span>
                      </div>
                      <p className="flex-1 text-gray-300 text-base md:text-lg">{paragraph.substring(1).trim()}</p>
                    </div>
                  );
                }

                return (
                  <p key={pIdx} className="opacity-90 leading-[1.8]">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default SingleBlogHero;
