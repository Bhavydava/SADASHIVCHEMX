import React from 'react'
import { RiLightbulbFlashFill } from "react-icons/ri";
import handleScrollTop from "../allconst/ScrollTop";
import { Link } from "react-router-dom";


const RequestSection = ({ sectionId }) => {
  return (
    <section id={sectionId} className="ml-mr py-10 md:py-14 px-4 md:px-0" >
      <div className="group relative overflow-hidden rounded-[30px] md:rounded-[50px] border border-white/10 bg-linear-to-br from-[#0d1127] via-[#090d1f] to-[#060918] px-5  py-8 sm:px-8 md:px-10 md:py-10 lg:px-12 px-4 md:px-0">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-(--button-bg-color) opacity-[0.07] blur-3xl transition-all duration-700 group-hover:opacity-[0.14]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500 opacity-[0.06] blur-3xl" />

        <div className="relative z-10 grid items-center gap-7 lg:gap-10 lg:grid-cols-[auto_1fr_auto]">
          <div className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-(--button-bg-color) p-3 text-(--button-text-color) shadow-xl shadow-(--button-bg-color)/20 transition-transform duration-500 group-hover:rotate-6 lg:mx-0 lg:h-20 lg:w-20">
            <RiLightbulbFlashFill className="h-full w-full" />
          </div>

          <div className="text-center lg:text-left">
            <p className="mb-3 inline-flex rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-300">
              Technical Specification Samples
            </p>
            <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
              Validate <span className="text-(--button-bg-color)">Analytical Quality</span> Standards
            </h2>
            <p className="mt-4 max-w-2xl text-sm md:text-base xl:text-lg leading-relaxed text-gray-300">
              Request a specialized chemical sample for technical evaluation—verify 
              molecular purity, batch consistency, and industrial performance before 
              full-scale procurement integration.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Link
              to="/RequestpageLink"
              onClick={handleScrollTop}
              className="inline-flex items-center gap-4 rounded-full border border-white/20 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-all duration-500 hover:bg-white hover:text-[#060918] hover:border-white shadow-2xl group/btn relative overflow-hidden"
            >
              <span className="relative z-10">Request Now</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-500"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestSection