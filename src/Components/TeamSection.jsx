import React from "react";
import TeamsImg01 from "../assets/Teams/Team_01.jpg";
import TeamsImg02 from "../assets/Teams/Team_02.jpg";
import TeamsImg03 from "../assets/Teams/Team_03.jpg";

const TeamSection = ({ sectionId }) => {
  const teamMembers = [
    {
      name: "Adv.Gaurang Patel",
      role: "Managing Director",
      image: TeamsImg01,
    },
    {
      name: "Jaydeep Patel",
      role: "Director ",
      image: TeamsImg02,
    },
  ];

  return (
    <section id={sectionId} className="ml-mr py-20 md:py-27">
      <div className="space-y-10">
        <div className="space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
            <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
              Technical Leadership
            </h4>
          </div>
          <h2 className="lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-center lg:text-left">
            Expert Team, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Driven by Science.
            </span>
          </h2>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-[40px] h-[340px] sm:h-[400px] lg:h-[400px] xl:h-[480px] border border-white/5 shadow-xl transition-all duration-700 hover:-translate-y-2"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

            <div className="absolute bottom-10 left-8 md:bottom-10 md:left-10 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 md:mb-3 uppercase tracking-wider drop-shadow-lg">
                {member.name}
              </h3>
              <p className="text-[11px] md:text-xs tracking-[0.3em] font-semibold text-gray-300 uppercase leading-loose max-w-[200px]">
                {member.role}
              </p>
            </div>

            {/* Secondary Decorator */}
            <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
