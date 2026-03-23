import React from "react";

const BentoStats = () => {
    const stats = [
        {
            id: 1,
            number: "250+",
            title: "Industrial Formulations",
            desc: "A vast portfolio of high-purity chemical compounds engineered for technical applications.",
            className: "md:col-span-2 lg:row-span-1",
        },
        {
            id: 2,
            number: "30+",
            title: "Global Supply Nodes",
            desc: "Strategic international presence facilitating seamless cross-border logistics and trade.",
            className: "md:col-span-1 lg:row-span-2 flex flex-col justify-center",
        },
        {
            id: 3,
            number: "100%",
            title: "Analytical Purity",
            desc: "Stringent quality control protocols ensuring batch-to-batch consistency and technical precision.",
            className: "md:col-span-1 lg:row-span-1",
        },
        {
            id: 4,
            number: "15+",
            title: "Technical Expertise",
            desc: "Decades of specialized experience in chemical engineering and industrial manufacturing.",
            className: "md:col-span-1 lg:row-span-1",
        },
        {
            id: 5,
            number: "500+",
            title: "Strategic Industrial Partners",
            desc: "Cultivating long-term reliability through uncompromising quality and technical collaborative support.",
            className: "md:col-span-2 lg:col-span-3 lg:row-span-1",
        },
    ];

    return (
        <section className="ml-mr py-12 md:py-20 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className={`${stat.className} bg-[#0a0f26]/50 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden`}
                    >
                        {/* Subtle Gradient Glow */}
                        <div className="absolute -inset-24 bg-purple-600/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 md:mb-4 bg-gradient-to-br from-purple-400 to-blue-500 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-500 origin-left">
                            {stat.number}
                        </h2>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
                            {stat.title}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                            {stat.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BentoStats;
