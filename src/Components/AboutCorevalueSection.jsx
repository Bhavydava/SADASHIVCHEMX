import React from "react";
import { RiFocus2Line, RiTeamLine, RiEarthLine, RiFlashlightLine, RiLeafLine, RiHandHeartLine } from "react-icons/ri";
import bgimg from '../assets/Contact_Hero.jpg';

const AboutCorevalueSection = () => {
  const values = [
    {
      icon: <RiFocus2Line className="w-8 h-8" />,
      title: "Molecular Precision",
      desc: "Meticulous analytical control over chemical composition, batch purity, and reactive consistency in every formulation."
    },
    {
      icon: <RiTeamLine className="w-8 h-8" />,
      title: "Commercial Integrity",
      desc: "Establishing robust industrial partnerships through transparent trade frameworks and technical accountability."
    },
    {
      icon: <RiEarthLine className="w-8 h-8" />,
      title: "Strategic Reach",
      desc: "Optimizing global supply chains while maintaining decentralized quality control across diverse international markets."
    },
    {
      icon: <RiFlashlightLine className="w-8 h-8" />,
      title: "Process Innovation",
      desc: "Empowering industrial sectors with advanced chemical derivatives and optimized reactive engineering processes."
    },
    {
      icon: <RiLeafLine className="w-8 h-8" />,
      title: "Eco-Compliance",
      desc: "Strict adherence to green chemistry principles and ISO-certified sustainable industrial waste management protocols."
    },
    {
      icon: <RiHandHeartLine className="w-8 h-8" />,
      title: "Supply Reliability",
      desc: "A committed partner for high-frequency shipments and consistent technical chemical performance across global nodes."
    }
  ];

  return (
    <section
      className="relative overflow-hidden mt-24 py-24"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true"></div>

      <div className="relative z-10 ml-mr">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-[var(--button-bg-color)] opacity-50" />
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--button-bg-color)]">Industrial Values</span>
            <div className="w-12 h-1 bg-[var(--button-bg-color)] opacity-50" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-3xl xl:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
            Technical Excellence &amp; Analytical Trust<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.6)" }}>Engineered for Global Industry</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
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

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wide">
                {item.title}
              </h3>

              <p className="text-gray-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCorevalueSection;
