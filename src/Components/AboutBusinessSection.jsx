import React from "react";
import { RiLightbulbFlashFill, RiShieldCheckFill, RiFlaskFill } from "react-icons/ri";
import { RiFocus2Line, RiTeamLine, RiEarthLine, RiFlashlightLine, RiLeafLine, RiHandHeartLine } from "react-icons/ri";
import bgimg from '../assets/aboutGroup.jpg';

const AboutBusinessSection = ({ sectionId }) => {
  const practices = [
    {
      icon: <RiFlaskFill className="w-10 h-10" />,
      title: "Technical R&D",
      desc: "Investing in molecular research to develop next-generation chemical compounds that optimize industrial efficiency and performance."
    },
    {
      icon: <RiShieldCheckFill className="w-10 h-10" />,
      title: "Quality Benchmarks",
      desc: "Every industrial batch undergoes multi-stage analytical verification to ensure absolute adherence to purity specifications."
    },
    {
      icon: <RiLightbulbFlashFill className="w-10 h-10" />,
      title: "Global Distribution",
      desc: "Engineered logistics and regulatory compliance management for seamless international chemical trade and delivery."
    }
  ];

  const values = [
    {
      icon: <RiFocus2Line className="w-8 h-8" />,
      title: "Molecular Precision",
      desc: "Meticulous focus on chemical consistency and analytical purity in every manufactured industrial grade."
    },
    {
      icon: <RiTeamLine className="w-8 h-8" />,
      title: "Commercial Integrity",
      desc: "Establishing industrial reliability through transparent trade frameworks and technical accountability."
    },
    {
      icon: <RiEarthLine className="w-8 h-8" />,
      title: "Strategic Reach",
      desc: "Optimizing global supply chains while maintaining decentralized quality control across international markets."
    },
    {
      icon: <RiFlashlightLine className="w-8 h-8" />,
      title: "Innovation Hub",
      desc: "Empowering sectors with technical chemical derivatives and optimized reactionary processes."
    },
    {
      icon: <RiLeafLine className="w-8 h-8" />,
      title: "Eco-Compliance",
      desc: "Strict adherence to green chemistry principles and sustainable industrial waste management protocols."
    },
    {
      icon: <RiHandHeartLine className="w-8 h-8" />,
      title: "Supply Reliability",
      desc: "A committed partner for high-frequency shipments and consistent technical chemical performance."
    }
  ];

  return (
    <section id={sectionId}>
      <div className="ml-mr pt-8 pb-8 md:pt-10 md:pb-10 bg-[#0a0d1d]/50 rounded-[40px] md:rounded-[80px] mt-6 md:mt-6 mb-6 md:mb-6 border border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-12 pt-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-1 bg-[var(--button-bg-color)]"></div>
              <span className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--button-bg-color)]">
                How We Work
              </span>
              <div className="w-8 h-1 bg-[var(--button-bg-color)]"></div>
            </div>

            <h2 className="text-center text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold font-extrabold uppercase text-transparent leading-[1.15] tracking-tight mb-6 px-4 md:px-0"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              Our Business Practices
            </h2>

            <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-400 font-light px-4 md:px-0">
              At Sadashiv Chemical, we combine industrial expertise with ethical practices to set
              new benchmarks in chemical manufacturing and trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((item, index) => (
              <div
                key={index}
                className="group p-8 md:p-12 bg-[#060918] rounded-[40px] border border-white/5 hover:border-[var(--button-bg-color)]/30 transition-all duration-500 hover:transform hover:-translate-y-2 shadow-2xl"
              >
                <div className="w-20 h-20 mb-8 rounded-3xl bg-white/5 flex items-center justify-center text-[var(--button-bg-color)] group-hover:bg-[var(--button-bg-color)] group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-4 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <section
        className="relative overflow-hidden mt-10 py-14"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true"></div>

        <div className="relative z-10 ml-mr">
          <div className="space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
                <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.4em] text-xs">
                  Operational Framework
                </h4>
              </div>
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between px-4 md:px-0">
                <h2 className="text-center lg:text-left lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight mx-auto lg:mx-0">
                  Technical Synergy, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                    Driven by Analytics.
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-4 sm:px-0">
            {values.map((item, i) => (
              <div
                key={i}
                className="group relative p-8 bg-white/5 border border-white/10 rounded-[30px] backdrop-blur-md hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Decorative background glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--button-bg-color)] opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500"></div>

                <div className="mb-6 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[var(--button-bg-color)] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {item.icon}
                </div>

                <h3 className="text-lg md:text-2xl font-bold text-white mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </section>


  );
};

export default AboutBusinessSection;
