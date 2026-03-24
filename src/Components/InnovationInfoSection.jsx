import React, { useEffect } from "react";
import { RiLightbulbFlashFill, RiMicroscopeLine, RiFlaskLine, RiTrophyLine, RiGlobalLine, RiSeedlingLine } from "react-icons/ri";
import AboutImg from "../assets/Innovation/Technical Research.jpg";
import AboutHero01 from "../assets/Innovation/Data-driven.jpg";
import AboutHero02 from "../assets/Innovation/Sustainable.jpg";

import { Link, useLocation } from "react-router-dom";
import handleScrollTop from "../allconst/ScrollTop";

const InnovationInfoSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash || !location.hash.startsWith("#innovation-")) return;

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

  const businessPractices = [
    {
      icon: <RiGlobalLine />,
      title: "Molecular Sourcing",
      desc: "Providing high-purity chemical feedstock through a globally integrated network, ensuring technical compliance for international standards."
    },
    {
      icon: <RiMicroscopeLine />,
      title: "Technical Research",
      desc: "Our laboratory infrastructure specializes in advanced chemical synthesis and reactive compound testing for industrial applications."
    },
    {
      icon: <RiSeedlingLine />,
      title: "Sustainable Synthesis",
      desc: "Integrating Green Chemistry principles to reduce environmental footprint while maintaining high-yield chemical productivity."
    }
  ];

  const innovationAreas = [
    { icon: <RiFlaskLine />, title: "Molecular Design" },
    { icon: <RiLightbulbFlashFill />, title: "Smart Solutions" },
    { icon: <RiTrophyLine />, title: "Quality Benchmarks" },
    { icon: <RiGlobalLine />, title: "Global Compliance" },
    { icon: <RiMicroscopeLine />, title: "R&D Excellence" },
    { icon: <RiFlaskLine />, title: "Custom Synthesis" }
  ];

  return (
    <div className="space-y-12 md:space-y-24 mb-16 md:mb-32 overflow-hidden">
      {/* Hero Welcome Section */}
      <section id="innovation-overview" className="ml-mr relative pt-2 md:pt-10">
        
        <div className="text-center lg:text-left">

          <div className="">


            {/* <h1
            className="text-xl sm:text-xl md:text-2xl lg:text-5xl font-bold bg-[linear-gradient(90deg,_#f2b60a,_#72ac57,_#c1c1c1,_#b3ad79)] bg-clip-text text-transparent"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome To Sadashiv Chemical Industries.
          </h1> */}




            <h2 className="text-center lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl mt-5 md:mt-20 font-extrabold uppercase text-transparent leading-[1.15] tracking-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.28)" }}
            >
              Welcome To Sadashiv Chemical Industries.
            </h2>

            <h1 className="text-xl sm:text-2xl mt-5 text-gray-400 font-medium text-center lg:text-left">
              At Sadashiv Chemical Industries, we take pride in delivering quality
              products that meet global standards—earning the trust of clients
              worldwide.
            </h1>
          </div>

          <div className="px-4 md:px-0">
            <h1 className="text-sm md:text-base xl:text-lg mt-7 text-center lg:text-left text-gray-400 leading-relaxed font-light">
              At Sadashiv Chemical Industries, we specialize in delivering high-purity 
              chemical solutions that exceed international quality benchmarks. Backed 
              by a technical infrastructure, we facilitate seamless 
              cross-border trade of specialized industrial raw materials. Our 
              methodologies follow stringent safety protocols, ensuring absolute 
              reliability in chemical handling and industrial distribution.
            </h1>
            <h1 className="text-base sm:text-lg md:text-xl mt-5 text-center lg:text-left text-gray-400 leading-relaxed font-light">
              We operate with a focus on technical excellence and cost-effective 
              supply chain efficiency, making international chemical trade both 
              competitive and reliable for our global partners. With specialized 
              logistics for hazardous and specialty chemicals, we ensure punctual 
              delivery to meet critical manufacturing timelines.
            </h1>
          </div>

        </div>
      </section>

      {/* Business Practice Cards */}
      <section id="innovation-capabilities" className="ml-mr py-10  ">
         <div className="space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
                <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.4em] text-xs">
                  Innovation Hub
                </h4>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <h2 className="text-center lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl   font-bold leading-[1.15] tracking-tight">
                  Engineering Future <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                    Molecular Solutions.
                  </span>
                </h2>


              </div>
            </div>
          </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-0">
          {businessPractices.map((practice, index) => (
            <div key={index} className="group relative p-8 md:p-10 rounded-[30px] md:rounded-[40px] bg-white/5 border border-white/5 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2">
              <div className="w-14 h-14 md:w-16 md:h-16 mb-6 md:mb-8 rounded-2xl bg-[var(--button-bg-color)] text-[var(--button-text-color)] flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-[var(--button-bg-color)]/20 group-hover:scale-110 transition-transform duration-500">
                {practice.icon}
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">{practice.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
                {practice.desc}
              </p>
              <div className="absolute top-6 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-4xl md:text-6xl font-black">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Innovation Hub (Large Feature) */}
      <section id="innovation-hub" className="ml-mr py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--button-bg-color)] to-blue-500 rounded-[60px] blur-2xl opacity-20"></div>
            <div className="relative rounded-[30px] sm:rounded-[60px] overflow-hidden border border-white/10">
              <img src={AboutImg} alt="Innovation" className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060918] via-transparent to-transparent"></div>
            </div>


          </div>

          <div className="space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
                <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.4em] text-xs">Technical Research</h4>
              </div>
              <h2 className="text-center lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight">
                Industrial Research, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Molecular Engineering.</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 text-sm md:text-base xl:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left px-4 md:px-0">
              <p>
                Our innovation center is dedicated to bridging the gap between local production and international demand. We leverage advanced chemical engineering to create products that are both high-performing and sustainable.
              </p>
              <p>
                By integrating smart supply chain solutions with rigorous quality control, we ensure that Sadashiv Chemical remains a leader in the global chemical industry.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Areas of Excellence Grid */}
      <section id="innovation-excellence" className="ml-mr relative pt-10 pb-8 px-4 md:p-20 rounded-[60px] md:rounded-[100px] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 px-4">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.15]">Areas of Excellence</h2>
          <div className="w-20 md:w-24 h-1 bg-[var(--button-bg-color)] rounded-full"></div>
          <p className="text-sm md:text-base xl:text-lg text-gray-400 mt-6 md:mt-8 max-w-4xl leading-relaxed font-light">
            Our centers of excellence focus on specialized chemical engineering domains, 
            bridging the gap between reactive laboratory synthesis and global industrial 
            application. We maintain strict adherence to international safety metrics 
            and analytical purity standards.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10">
          {innovationAreas.map((area, index) => (
            <div key={index} className="group flex flex-col items-center text-center relative">
              <div className="w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl md:text-4xl group-hover:bg-[var(--button-bg-color)] group-hover:text-[var(--button-text-color)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:-translate-y-3">
                {area.icon}
              </div>
              <h5 className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-[var(--button-bg-color)] transition-all px-1 md:px-0">
                {area.title}
              </h5>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Showcase */}
      <section id="innovation-showcase" className="ml-mr">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 xl:gap-12">
          {/* Card 1: Data-driven R&D */}
          <div className="relative overflow-hidden group rounded-[40px] md:rounded-[60px] border border-white/10 shadow-2xl h-[550px] sm:h-[500px] lg:h-[550px] xl:h-[600px] flex items-center p-4 sm:p-8 lg:p-6 xl:p-12">
            <img 
              src={AboutHero01} 
              alt="Data-driven R&D" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-[2s]" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000"></div>
            
            <div className="relative z-10 bg-black/40 backdrop-blur-2xl p-6 sm:p-8 lg:p-8 xl:p-12 rounded-[30px] sm:rounded-[45px] border border-white/10 shadow-2xl text-left w-full transform group-hover:-translate-y-2 transition-transform duration-700">
              <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight leading-tight">Data-driven <br className="hidden sm:block"/> R&D</h3>
              <p className="text-gray-200 text-xs sm:text-sm lg:text-[13px] xl:text-base leading-relaxed font-light">
                Sadashiv Chemical Industries believe in a data-driven approach to research and development. 
                This helps us ensure safer processes by reducing risks, as well as ensure that our products 
                are suitable and more likely to succeed. Instant access to the right data, information, 
                and forecasts has helped us comply with ever-changing regulations and trends. 
                Including new guidelines in the field of research and development.
              </p>
            </div>
          </div>

          {/* Card 2: Sustainable R&D */}
          <div className="relative overflow-hidden group rounded-[40px] md:rounded-[60px] border border-white/10 shadow-2xl h-[550px] sm:h-[500px] lg:h-[550px] xl:h-[600px] flex items-center p-4 sm:p-8 lg:p-6 xl:p-12">
            <img 
              src={AboutHero02} 
              alt="Sustainable R&D" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-[2s]" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000"></div>
            
            <div className="relative z-10 bg-black/40 backdrop-blur-2xl p-6 sm:p-8 lg:p-8 xl:p-12 rounded-[30px] sm:rounded-[45px] border border-white/10 shadow-2xl text-left w-full transform group-hover:-translate-y-2 transition-transform duration-700">
              <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight leading-tight">Sustainable <br className="hidden sm:block"/> R&D</h3>
              <p className="text-gray-200 text-xs sm:text-sm lg:text-[13px] xl:text-base leading-relaxed font-light">
                Sustainability is the true guiding principle in any industrial organization and we, 
                at Sadashiv Chemical Industries, consider it to be the core of our organizational structure. 
                So much so that we have made it our mission to incorporate sustainability at every stage 
                of our processes, including research and development. We have allocated product-oriented 
                sustainability methods and measures to the different phases of our R&D process, 
                allowing for more efficient development of sustainable products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ml-mr relative pt-16 pb-8 px-4 md:p-20 rounded-[60px] md:rounded-[100px] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 px-4">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.15]">Quality Framework</h2>
          <div className="w-20 md:w-24 h-1 bg-[var(--button-bg-color)] rounded-full"></div>
          <p className="text-sm md:text-base xl:text-lg text-gray-400 mt-6 md:mt-8 max-w-4xl leading-relaxed font-light">
            Uncompromising quality control is the core of our technical framework. 
            By integrating real-time batch monitoring and specialized 
            spectroscopic analysis, we ensure that every chemical compound 
            delivered reflects our commitment to industrial reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10">
          {innovationAreas.map((area, index) => (
            <div key={index} className="group flex flex-col items-center text-center relative">
              <div className="w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl md:text-4xl group-hover:bg-[var(--button-bg-color)] group-hover:text-[var(--button-text-color)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:-translate-y-3">
                {area.icon}
              </div>
              <h5 className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-[var(--button-bg-color)] transition-all px-1 md:px-0">
                {area.title}
              </h5>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default InnovationInfoSection;
