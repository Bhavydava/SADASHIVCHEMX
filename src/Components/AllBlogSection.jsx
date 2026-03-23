import React from "react";

import blogs from "../allconst/blogs";
import Card from "./Product and Blogs Card/Card";

const AllBlogSection = () => {
  return (
    <section className="ml-mr">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-10 mt-10 px-4 md:px-0 ">
        {blogs.map((b) => (
          <Card key={b.id} item={b} ctaText="Read More" imageRatio="landscape" />
        ))}
      </div>
    </section>
  );
};

export default AllBlogSection;
