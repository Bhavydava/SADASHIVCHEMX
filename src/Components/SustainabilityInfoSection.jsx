import React, { useEffect } from "react";
import AboutImg from "../assets/Molecular-Integrity.jpg";
import AboutHero01 from "../assets/TECHNICAL-HEALTH & SAFETY.jpg";
import { Link, useLocation } from "react-router-dom";
import handleScrollTop from "../allconst/ScrollTop";
import {
  RiLightbulbFlashFill,
  RiShieldCheckFill,
  RiFlaskFill,
} from "react-icons/ri";

const SustainabilityInfoSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
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

  const practices = [
    {
      icon: <RiFlaskFill className="w-10 h-10" />,
      title: "Molecular Research",
      desc: "Investing in green chemistry R&D to develop next-generation bio-catalysts and sustainable solvent frameworks.",
    },
    {
      icon: <RiShieldCheckFill className="w-10 h-10" />,
      title: "Compliance Metrics",
      desc: "Strict adherence to environmental safety protocols and ISO-certified quality monitoring in every reactive cycle.",
    },
    {
      icon: <RiLightbulbFlashFill className="w-10 h-10" />,
      title: "Eco-Logistics",
      desc: "Optimized carbon-neutral distribution frameworks for seamless international chemical trade and delivery.",
    },
  ];

  const businessPractices = [
    {
      icon: <RiFlaskFill />,
      title: "Technical Sourcing",
      desc: "Delivering high-purity chemical feedstock that exceeds global industrial standards and technical purity benchmarks.",
    },
    {
      icon: <RiShieldCheckFill />,
      title: "Analytical Excellence",
      desc: "Our technical facilities focus on developing high-performance chemical compounds for specialized industrial sectors.",
    },
    {
      icon: <RiLightbulbFlashFill />,
      title: "Green Synthesis",
      desc: "Integrating sustainable chemical processing to ensure all industrial outputs are environmentally responsible.",
    },
  ];

  return (
    <section className="ml-mr ">
      <section id="molecular-integrity" className="ml-mr mt-16 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--button-bg-color)] to-blue-500 rounded-[60px] blur-2xl opacity-20"></div>
            <div className="relative rounded-[30px] sm:rounded-[60px] overflow-hidden border border-white/10">
              <img
                src={AboutImg}
                alt="Sustainability"
                className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060918] via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
                <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.4em] text-xs">
                  Molecular Integrity
                </h4>
              </div>
              <h2 className="text-center lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight">
                Industrial Synthesis, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                  Powered by Research.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 text-center lg:text-left mx-auto lg:mx-0 text-sm md:text-base xl:text-lg lg:text-base leading-relaxed max-w-xl px-4 md:px-0">
              <p>
                Our sustainability framework is dedicated to reducing the environmental 
                footprint of chemical manufacturing. We leverage green engineering 
                principles to create molecular solutions that are both high-performing 
                and eco-concious.
              </p>
              <p>
                By integrating circular economy models with rigorous analytical quality control, 
                Sadashiv Chemical drives the future of responsible industrial innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="responsible-practices" className="ml-mr py-12 md:py-20 bg-[#0a0d1d]/50 rounded-[30px] md:rounded-[80px] my-12 border border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
              <div className="w-8 h-1 md:w-12 bg-[var(--button-bg-color)]"></div>
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[var(--button-bg-color)] opacity-80 text-center">
                Strategic Stewardship
              </span>
              <div className="w-8 h-1 md:w-12 bg-[var(--button-bg-color)]"></div>
            </div>

            <h2 className="text-center text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold font-extrabold uppercase text-transparent leading-[1.15] tracking-tight mb-6"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              Responsible Practices
            </h2>

            <p className="max-w-3xl mx-auto text-sm md:text-base xl:text-lg text-gray-400 font-light px-2 lg:px-4">
              At Sadashiv Chemical, we combine technical excellence with environmental 
              integrity to establish new benchmarks in sustainable industrial processing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {practices.map((item, index) => (
              <div
                key={index}
                className="group p-8 md:p-12 bg-[#060918] rounded-[30px] md:rounded-[40px] border border-white/5 hover:border-[var(--button-bg-color)]/30 transition-all duration-500 hover:transform hover:-translate-y-2 shadow-2xl"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl md:rounded-3xl bg-white/5 flex items-center justify-center text-[var(--button-bg-color)] group-hover:bg-[var(--button-bg-color)] group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="scientific-foundation" className="mt-24 md:mt-32">
        <div className="space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
            <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.4em] text-xs">
              Scientific Foundation
            </h4>
          </div>
          <h2 className="text-center lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight">
            Advanced Formulations, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              Validated by Analytics.
            </span>
          </h2>
          <div className="mt-8 flex flex-col items-center lg:flex-row justify-between gap-6 px-4 md:px-0">
            <p className="text-gray-400 text-sm md:text-base xl:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
              Technical chemical solutions tailored to minimize resource waste and optimize 
              industrial productivity across the global value chain.
            </p>

          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-0   ">
          {businessPractices.map((practice, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 rounded-[30px] md:rounded-[40px] bg-white/5 border border-white/5 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2"
            >
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

      <div id="health-safety" className="ml-mr mt-24 md:mt-32 pb-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <h2
              className="text-4xl md:text-7xl lg:text-8xl font-extrabold uppercase text-transparent leading-tight text-center lg:text-left"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.28)" }}
            >
              HEALTH &amp;
              <br />
              SAFETY
            </h2>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative max-w-xl w-full group overflow-hidden rounded-3xl md:rounded-[40px]">
              <img
                src={AboutHero01}
                alt="safety"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 md:p-10">
                <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-[32px] border border-white/10 shadow-2xl">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
                    TECHNICAL HEALTH <span className="block sm:inline text-[var(--button-bg-color)]">&amp; SAFETY</span>
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed font-light">
                    Industrial partners are the cornerstone of our enterprise, and 
                    operational safety is our primary metric. We are committed to 
                    stringent health and safety analytical reviews, ensuring that 
                    every molecular derivative reflects the highest standard of 
                    protection for personnel and global ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityInfoSection;
