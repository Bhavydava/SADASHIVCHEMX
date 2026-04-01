import React from "react";
import footerImg from "../assets/Nav_Img.png";
import { Link } from "react-router-dom";
import handleScrollTop from "../allconst/ScrollTop";
import footerbgImg from "../assets/FooterBG.jpg";
import { Mail, Phone, MapPin } from "lucide-react";
import Product from "../allconst/product";

const FooterSection = () => {
  return (
    <section className="bg-[#060918] relative overflow-hidden z-0 border-t border-white/5">
      {/* Premium Background Design with Static Glows */}
      <div className="absolute inset-0 z-0">
        {/* Top Fade Overlay to blend with section above */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#060918] via-transparent to-transparent h-40 pointer-events-none" />
        
        {/* Static Radial Glows for Depth */}
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-[var(--button-bg-color)] opacity-[0.08] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-full bg-blue-600 opacity-[0.05] blur-[150px] rotate-12" />
        <div className="absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-[var(--button-bg-color)] opacity-[0.1] blur-[120px]" />

        {/* Static Mesh/Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.3]"
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1.5px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Faded Decorative Image with better blending */}
        <img
          src={footerbgImg}
          alt="decorative"
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none"
        />
      </div>

      <div className="ml-mr lg:h-full bg-transparent grid lg:grid-cols-2 relative z-10">
        <div>
          <Link to="/">
            <img
              src={footerImg}
              onClick={handleScrollTop}
              alt="Logo"
              className="pt-10 md:pt-15 w-24 sm:w-28 lg:w-32 xl:w-36 2xl:w-40"
            />
          </Link>
          <p className="pt-4 md:pt-5 text-white text-[13px] md:text-[16px] lg:text-[15px] xl:text-[18px] font-light max-w-[35rem] opacity-70 leading-relaxed tracking-wide">
            Empowering global industries through advanced chemical synthesis, 
            uncompromised purity, and sustainable molecular engineering.
          </p>

          <div className="mt-8 mb-12 lg:mb-20 space-y-4">
            <div className="flex items-start gap-3.5 group">
              <MapPin className="text-white w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 mt-0.5 group-hover:text-[var(--button-bg-color)] transition-colors opacity-70" strokeWidth={1.5} />
              <p className="text-white text-[13px] md:text-[15px] font-light tracking-wider opacity-80">
                Chanchavadarda, Morbi, India
              </p>
            </div>

            <div className="flex items-center gap-3.5 group">
              <Mail className="text-white w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 group-hover:text-[var(--button-bg-color)] transition-colors opacity-70" strokeWidth={1.5} />
              <a href="mailto:sadashivchemical@gmail.com" className="text-white text-[13px] md:text-[15px] font-light tracking-wider opacity-80 group-hover:text-[var(--button-bg-color)] transition-colors hover:opacity-100">
                sadashivchemical@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3.5 group">
              <Phone className="text-white w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 group-hover:text-[var(--button-bg-color)] transition-colors opacity-70" strokeWidth={1.5} />
              <a href="tel:+919586355000" className="text-white text-[13px] md:text-[15px] font-light tracking-wider opacity-80 group-hover:text-[var(--button-bg-color)] transition-colors hover:opacity-100">
                +91 95863 55000
              </a>
            </div>

            <div className="flex items-center gap-3.5 group">
              <Phone className="text-white w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 group-hover:text-[var(--button-bg-color)] transition-colors opacity-70" strokeWidth={1.5} />
              <a href="tel:+919586155000" className="text-white text-[13px] md:text-[15px] font-light tracking-wider opacity-80 group-hover:text-[var(--button-bg-color)] transition-colors hover:opacity-100">
                +91 95861 55000
              </a>
            </div>
          </div>

        </div>

        <div className="text-white mt-1 md:mt-20 lg:mt-24 mb-10 md:mb-15 justify-items-start lg:justify-items-end lg:mr-0 pr-0">
          <div className="text-white grid md:grid-cols-2 grid-cols-1 gap-6 lg:gap-6 lg:justify-items-end w-full lg:max-w-[35rem]">
            <div className="w-full max-w-[20rem] lg:text-center">
              <h1 className="font-bold ext-sm md:text-xl lg:text-lg xl:text-xl transition-transform duration-300 hover:scale-105">Product  and  Services</h1>
              {Product.map((item) => (
                <Link key={item.id} to={`/SingleProductpageLink?product=${item.id}`} onClick={handleScrollTop}>
                  <h1 className="mt-4 text-[13px] md:text-[16px] lg:text-[15px] xl:text-[18px] transition-all duration-300 hover:translate-x-1 hover:tracking-wide opacity-80">
                    {item.title}
                  </h1>
                </Link>
              ))}
            </div>

            <div className="lg:text-center lg:w-50 mt-8 md:mt-0 2xl:mt-0 lg:mt-0">
              <h1 className="font-bold text-sm md:text-xl lg:text-lg xl:text-xl transition-transform duration-300 hover:scale-105">Quick Links</h1>
              <Link to="/" onClick={handleScrollTop}>
                <h1 className="mt-4 text-[13px] md:text-[16px] lg:text-[15px] xl:text-[18px] transition-all duration-300 hover:translate-x-1 hover:tracking-wide opacity-80">Home</h1>
              </Link>
              <Link to="/AboutpageLink" onClick={handleScrollTop}>
                <h1 className="mt-4 text-[13px] md:text-[16px] lg:text-[15px] xl:text-[18px] transition-all duration-300 hover:translate-x-1 hover:tracking-wide opacity-80">About us</h1>
              </Link>
              <Link to="/InnovationpageLink" onClick={handleScrollTop}>
                <h1 className="mt-4 text-[13px] md:text-[16px] lg:text-[15px] xl:text-[18px] transition-all duration-300 hover:translate-x-1 hover:tracking-wide opacity-80">Innovation</h1>
              </Link>
              <Link to="/SustainabilitypageLink" onClick={handleScrollTop}>
                <h1 className="mt-4 text-[13px] md:text-[16px] lg:text-[15px] xl:text-[18px] transition-all duration-300 hover:translate-x-1 hover:tracking-wide opacity-80">Sustainability</h1>
              </Link>
              <Link to="/BlogPageLink" onClick={handleScrollTop}>
                <h1 className="mt-4 text-[13px] md:text-[16px] lg:text-[15px] xl:text-[18px] transition-all duration-300 hover:translate-x-1 hover:tracking-wide opacity-80">Blog</h1>
              </Link>
              <Link to="/ContactpageLink" onClick={handleScrollTop}>
                <h1 className="mt-4 text-[13px] md:text-[16px] lg:text-[15px] xl:text-[18px] transition-all duration-300 hover:translate-x-1 hover:tracking-wide opacity-80">Contact Us</h1>
              </Link>
              <Link to="/PolicypageLink" onClick={handleScrollTop}>
                <h1 className="mt-4 text-[13px] md:text-[16px] lg:text-[15px] xl:text-[18px] transition-all duration-300 hover:translate-x-1 hover:tracking-wide opacity-80">Privacy Policy</h1>
              </Link> 
            </div>
          </div>
        </div>
      </div>

      <div className="ml-mr border-t border-gray-500 text-white py-4 lg:mt-0 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
        <h1 className="text-[14px] sm:text-base">Copyright © {new Date().getFullYear()} Sadashiv Chemx. All rights reserved.</h1>
        <h1 className="text-[14px] sm:text-base">Developer By : VEERTECH SOLUTION</h1>
      </div>
    </section>
  );
};

export default FooterSection;
