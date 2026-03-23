import React from "react";
import { motion } from "framer-motion";
import { Search, FlaskConical, TestTube2, Factory } from "lucide-react";

const InnovationProcess = () => {
    const steps = [
        {
            icon: <Search className="w-10 h-10" />,
            title: "Concept & Market Analysis",
            description: "We start by identifying industry gaps and emerging global trends to define our research objectives.",
            color: "from-blue-500 to-cyan-400"
        },
        {
            icon: <FlaskConical className="w-10 h-10" />,
            title: "Synthesis & Formulation",
            description: "Our molecular engineers develop custom chemical structures designed for specific performance metrics.",
            color: "from-emerald-500 to-teal-400"
        },
        {
            icon: <TestTube2 className="w-10 h-10" />,
            title: "Hyper-Analytical Testing",
            description: "Every compound undergoes multi-stage validation using HPLC and mass spectrometry for absolute purity.",
            color: "from-purple-500 to-pink-400"
        },
        {
            icon: <Factory className="w-10 h-10" />,
            title: "Sustainable Scaling",
            description: "Once validated, we transition to energy-efficient manufacturing processes for commercial delivery.",
            color: "from-orange-500 to-yellow-400"
        }
    ];

    return (
        <section className="ml-mr py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="text-center mb-20 relative z-10">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                >
                    Our Methodology
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-4xl lg:text-5xl font-black text-white"
                >
                    The Lifecycle of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Innovation</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        className="group"
                    >
                        <div className="relative p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col items-center text-center h-full">
                            {/* Step Number */}
                            <div className="absolute top-6 right-8 text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                                0{index + 1}
                            </div>

                            {/* Icon Container */}
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} p-5 text-white shadow-xl mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                {step.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-white/10 to-transparent"></div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default InnovationProcess;
