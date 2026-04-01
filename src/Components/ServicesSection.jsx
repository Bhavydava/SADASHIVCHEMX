import React from "react";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoGlobeOutline } from "react-icons/io5";

import { TbBuildingFactory } from "react-icons/tb";
import CountUp from "./../UI/CountUp";

import { GoDotFill } from "react-icons/go";
import MapImg from "../assets/map.png";
import "swiper/css";
import { Link } from "react-router-dom";
import handleScrollTop from "../allconst/ScrollTop";

import { RiCustomerService2Fill } from "react-icons/ri";

const ServicesSection = () => {
  const services = [
    {
      icon: <TbBuildingFactory />,
      title: "Specialty Manufacturing",
      desc: "Precision synthesis of high-purity chemical intermediates, such as Aluminium Hydroxide, for diverse industrial applications.",
    },
    {
      icon: <IoGlobeOutline />,
      title: "Water Purification Solutions",
      desc: "Deploying high-efficiency coagulants for municipal drinking water and industrial usage, ensuring optimal purity and safety.",
    },
    {
      icon: <RiLightbulbFlashFill />,
      title: "Customized Formulations",
      desc: "Developing specialized liquid and powder chemical solutions, including various PAC grades, tailored to specific industrial needs.",
    },
    {
      icon: <BsGlobeAsiaAustralia />,
      title: "Effluent Management",
      desc: "Providing advanced chemical additives to streamline industrial wastewater treatment, sludge dewatering, and environmental compliance.",
    },
  ];

  const stats = [
    { value: 100, label: "Global Enterprise Clients", suffix: "+" },
    { value: 30, label: "Strategic Export Nodes", suffix: "+" },
    { value: 10, label: "Specialized Laboratory Hubs", suffix: "+" },
  ];

  const pillars = [
    {
      icon: <RiLightbulbFlashFill />,
      title: "HSE Compliance",
      desc: "Strict adherence to Health, Safety, and Environment protocols, ensuring zero-harm operations within complex chemical environments.",
    },
    {
      icon: <RiCustomerService2Fill />,
      title: "Quality Assurance",
      desc: "Uncompromising rigorous testing and ISO-certified quality control mechanisms to maintain absolute purity and consistency.",
    },
    {
      icon: <IoGlobeOutline />,
      title: "Process Optimization",
      desc: "Engineered solutions focused on enhancing industrial yields and operational efficiencies through innovative chemical catalysis.",
    },
  ];

  return (
    <section className="ml-mr py-12 md:py-20 lg:py-24">
      <div className="space-y-6 md:space-y-10">
        <div className="space-y-3 md:space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
            <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
              Our Core Services
            </h4>
          </div>
          <h2 className="lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
            Specialized Formulation, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Water Treatment Solutions.
            </span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16 px-2 sm:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-6 sm:p-8 md:p-10 rounded-[30px] md:rounded-[40px] bg-white/5 border border-white/5 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 mb-6 md:mb-8 rounded-2xl bg-[var(--button-bg-color)] text-[var(--button-text-color)] flex items-center justify-center text-xl md:text-3xl shadow-lg shadow-[var(--button-bg-color)]/20 group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {service.desc}
            </p>
            <div className="absolute top-4 right-6 md:top-6 md:right-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-6xl md:text-7xl font-black">0{index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-10 md:mt-12 px-2 sm:px-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative p-6 sm:p-8 md:p-10 rounded-[30px] md:rounded-[40px] bg-[#0d1127]/50 border border-white/5 hover:border-white/10 transition-all duration-700 flex flex-col items-center justify-center group overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--button-bg-color)] rounded-full opacity-[0.03] group-hover:scale-150 transition-transform duration-1000"></div>

            <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 flex items-baseline gap-1 group-hover:text-[var(--button-bg-color)] transition-colors duration-500">
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                duration={1.5}
                className="count-up-text"
              />
              <span className="text-xl md:text-2xl text-[var(--button-bg-color)]">
                {stat.suffix}
              </span>
            </div>

            <div className="w-10 h-0.5 bg-white/10 mb-4 group-hover:w-20 group-hover:bg-[var(--button-bg-color)] transition-all duration-500"></div>

            <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-500 text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 md:mt-32">
        <div className="space-y-6 md:space-y-10">
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
              <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                Supply Network
              </h4>
            </div>
            <h2 className="lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              Global Sourcing, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Validated Logistics.
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex justify-center px-4 sm:px-0">
          <div className="relative w-full max-w-full">
            <img src={MapImg} alt="Global Map" className="w-full h-auto opacity-30 sm:opacity-50 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]" />
          </div>
        </div>
      </div>

      <div className="mt-24 md:mt-20">
        <div className="space-y-6 md:space-y-10">
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
              <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                Quality & Compliance
              </h4>
            </div>
            <h2 className="lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              AEC Governance, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Technical Mastery.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-16 px-2 sm:px-0">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 rounded-[30px] md:rounded-[40px] bg-white/5 border border-white/5 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 mb-6 md:mb-8 rounded-2xl bg-[var(--button-bg-color)] text-[var(--button-text-color)] flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-[var(--button-bg-color)]/20 group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {pillar.desc}
              </p>
              <div className="absolute top-4 right-6 md:top-6 md:right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-6xl md:text-7xl font-black">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-15 max-w-full mx-auto p-8 md:p-16 rounded-[40px] md:rounded-[60px] bg-[#0d1127]/50 border border-white/5 text-center relative overflow-hidden group shadow-2xl transition-all duration-500 hover:border-white/10">
          <div className="absolute top-0 right-0 p-8 transform translate-x-1/2 -translate-y-1/2 opacity-50 text-white/15">
            <BsGlobeAsiaAustralia className="text-[120px] md:text-[200px]" />
          </div>
          <p className="text-xs sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed z-10 relative text-gray-400">
            "By integrating advanced chemical engineering with stringent ISO-certified quality
            assurance, we deliver technical excellence in every formulation. Sadashiv Chemical 
            is your strategic partner for high-purity industrial solutions sourced 
            through a verified global supply network."
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-1 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
