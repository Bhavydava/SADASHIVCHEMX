import React from "react";
import { Link } from "react-router-dom";
import Product1 from "../assets/ProductImg/Product_Img1.png";

const SingleProductHero = ({ product }) => {
  const productTitle = product?.title || "Product";
  const productDescription = product?.desc || "";
  const productImage = product?.img || Product1;

  return (
    <section className="ml-mr pt-15 md:pt-40 lg:pt-44 mt-20 md:mt-0 overflow-x-hidden">
      {/* Header Content Above Image */}
      <div className="text-center relative mb-12 md:mb-16 lg:mb-24">
        <div className="relative z-10 flex flex-col items-center px-4">
          <span className="px-5 py-2 rounded-full bg-white text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-xl">
            SadaShiv Chemical - Products
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

      {/* Product Content Section */}
      <div className="mt-10 md:mt-24 lg:mt-22 max-w-4xl mx-auto px-4 pb-24 text-left">
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

      {/* Sub Products Cards - Premium Redesign */}
      {product?.subProducts && (
        <div className="pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {product.subProducts.map((sp, idx) => (
              <div 
                key={idx} 
                className="group relative bg-[#0a0e20] rounded-[32px] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] flex flex-col h-full transform hover:-translate-y-2"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Top Image Section */}
                <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-t-[32px]">
                  <img src={sp.img} alt={sp.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000" />
                  {/* Subtle vignette/gradient over image to blend exactly with bg */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e20] via-[#0a0e20]/20 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-col flex-1 px-8 pb-10 pt-4">
                  <h3 className="text-2xl font-black text-white mb-8 leading-tight tracking-wide transition-all duration-500">
                    {sp.title}
                  </h3>
                  
                  <ul className="space-y-4 mb-10 flex-1">
                    {sp.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 group/item">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-white/50 group-hover/item:bg-white/10 transition-colors duration-300">
                           <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                             <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                           </svg>
                        </div>
                        <span className="text-gray-300 font-medium tracking-wide group-hover/item:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/RequestpageLink" className="relative w-full overflow-hidden bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] py-4 rounded-full transition-all duration-300 hover:bg-white hover:border-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] block text-center">
                    Request a Sample
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleProductHero;
