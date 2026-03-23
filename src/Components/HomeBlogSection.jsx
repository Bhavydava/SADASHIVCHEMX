import React from "react";
import blogs from "../allconst/blogs";
import { Link } from "react-router-dom";
import handleScrollTop from "../allconst/ScrollTop";
import Card from "./Product and Blogs Card/Card";

const HomeBlogSection = () => {
  // Take only the first 3 blogs
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="ml-mr py-12 md:py-20">
      <div className="space-y-10">
        <div className="space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
            <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.4em] text-xs">
              Technical Expertise
            </h4>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-center lg:text-left lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight">
            Industrial Chemistry, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              Driven by Molecular Precision.
            </span>
          </h2>

            <div className="flex justify-center lg:justify-end">
              <Link
                to="/BlogPageLink"
                onClick={handleScrollTop}
                className="inline-flex w-fit items-center gap-4 font-bold text-base lg:text-lg hover:gap-6 transition-all duration-500 group border-b-2 border-white/10 pb-2 hover:border-[var(--button-bg-color)]"
              >
                Read More
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform duration-500">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 2xl:gap-16 px-4 sm:px-0">
        {featuredBlogs.map((blog) => (
          <div key={blog.id} className="w-full">
            <Card item={blog} ctaText="Read More" imageRatio="landscape" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBlogSection;
