import React from "react";
import Hero from "./../Components/Hero Card/Hero";
import AllBlogSection from "../Components/AllBlogSection";
import ContactSection from "./../Components/ContactSection";
import { BlogheroSlides } from "../allconst/heroimg";

const BlogPageLink = () => {
  return (
    <>
      <Hero slides={BlogheroSlides} />
      <AllBlogSection />
      <ContactSection />
    </>
  );
};

export default BlogPageLink;







