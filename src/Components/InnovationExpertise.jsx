import React from "react";
import { motion } from "framer-motion";
import QualityImg from "../assets/Innovation/quality.png";
import { CheckCircle2 } from "lucide-react";

const InnovationExpertise = () => {
    const certifications = [
        "ISO 9001:2015 Quality Management",
        "GMP (Good Manufacturing Practices)",
        "REACH Compliant Formulations",
        "IIP Packaging Standards"
    ];

    return (
        <section className="ml-mr py-24">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-[60px] p-12 md:p-24 border border-white/5 relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-6">Technical Expertise</h4>
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-10 leading-tight">
                            Global Standards, <br />
                            <span className="text-emerald-400">Local Precision.</span>
                        </h2>

                        <p className="text-gray-400 text-xl leading-relaxed mb-12">
                            Our Maharashtra-based facility serves as the nexus of our global operations. We bridge the gap between Indian manufacturing excellence and European quality expectations.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {certifications.map((cert, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-medium text-lg">{cert}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 flex flex-wrap gap-12">
                            <div>
                                <span className="text-5xl font-black text-white block mb-2">150+</span>
                                <span className="text-gray-500 uppercase font-bold tracking-tighter text-sm">Industrial Compounds</span>
                            </div>
                            <div>
                                <span className="text-5xl font-black text-white block mb-2">24/7</span>
                                <span className="text-gray-500 uppercase font-bold tracking-tighter text-sm">Automated QC</span>
                            </div>
                            <div>
                                <span className="text-5xl font-black text-white block mb-2">99.9%</span>
                                <span className="text-gray-500 uppercase font-bold tracking-tighter text-sm">Client Satisfaction</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full"></div>
                        <img
                            src={QualityImg}
                            alt="Quality Analysis"
                            className="relative z-10 rounded-[40px] shadow-2xl border border-white/10 w-full object-cover"
                        />
                        {/* Floating Badge */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[30px] shadow-2xl z-20 hidden md:block group hover:-translate-y-2 transition-transform">
                            <span className="text-black font-black text-3xl block mb-2">Zero-Error</span>
                            <span className="text-gray-500 font-bold uppercase text-xs">Policy Framework</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InnovationExpertise;
