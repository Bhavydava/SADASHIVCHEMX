import React from "react";
import { Link } from "react-router-dom";
import blogs from "../allconst/blogs";
import Card from "./Product and Blogs Card/Card";
import handleScrollTop from "../allconst/ScrollTop";

const RelatedBlogsSection = ({ currentId }) => {
  // Filter out the current blog and take 2-3 others
  const related = blogs
    .filter((blog) => blog.id !== currentId)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="ml-mr py-16 md:py-24 border-t border-white/5">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-[var(--button-bg-color)]"></div>
              <span className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
                Continue Reading
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Related <span className="text-gray-500">Posts</span>
            </h2>
          </div>
          
          <Link 
            to="/BlogPageLink" 
            onClick={handleScrollTop}
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            View All Blogs
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((blog) => (
            <Card 
              key={blog.id} 
              item={blog} 
              ctaText="Read More" 
              imageRatio="landscape" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogsSection;
