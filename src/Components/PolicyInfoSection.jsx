import React from "react";

const PolicyInfoSection = () => {
  return (
    <section className="ml-mr pt-40 md:pt-48 pb-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
            <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.4em] text-xs">
              Legal Compliance
            </h4>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Policy.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            At Sadashiv Chemical Industries, we are committed to protecting your organizational data 
            and ensuring absolute transparency in our information handling protocols.
          </p>
        </div>

        <div className="grid gap-8 text-gray-300">
          <div className="bg-white/5 p-8 rounded-[30px] border border-white/5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="text-[var(--button-bg-color)]">01.</span> Information Collection
            </h3>
            <p className="text-sm md:text-base leading-relaxed opacity-80">
              We collect essential technical and corporate information necessary for industrial procurement, 
              including contact details, chemical specifications, and logistical requirements to facilitate 
              seamless global trade operations.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-[30px] border border-white/5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="text-[var(--button-bg-color)]">02.</span> Use of Data
            </h3>
            <p className="text-sm md:text-base leading-relaxed opacity-80">
              All acquired data is strictly utilized for supply chain optimization, analytical validation, 
              and improving our molecular formulation services. We ensure your data is processed with 
              the highest level of industrial confidentiality.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-[30px] border border-white/5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="text-[var(--button-bg-color)]">03.</span> Security Protocols
            </h3>
            <p className="text-sm md:text-base leading-relaxed opacity-80">
              Sadashiv Chemical employs advanced encryption and secure technical frameworks to protect 
              sensitive industrial information from unauthorized access, ensuring the integrity of 
              your corporate data within our systems.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-[30px] border border-white/5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="text-[var(--button-bg-color)]">04.</span> Quality & Compliance
            </h3>
            <p className="text-sm md:text-base leading-relaxed opacity-80">
              Our data management practices are aligned with ISO standards and global chemical 
              governance frameworks, reflecting our commitment to technical precision and 
              ethical business conduct.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyInfoSection;
