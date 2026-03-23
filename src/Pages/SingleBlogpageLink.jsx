import React from 'react';
import { useLocation } from 'react-router-dom';
import SingleBlogHero from './../Components/SingleBlogHero';
import ContactSection from './../Components/ContactSection';
import RelatedBlogsSection from './../Components/RelatedBlogsSection';
import blogs from '../allconst/blogs';

const SingleBlogpageLink = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const blogId = Number(queryParams.get("blog"));

  const selectedData =
    (blogId ? blogs.find((b) => b.id === blogId) : null) ||
    location.state?.blog ||
    blogs[0];

  return (
    <>
      <SingleBlogHero 
        product={selectedData} 
      />
      {blogId ? <RelatedBlogsSection currentId={blogId} /> : null}
      <ContactSection />
    </>
  )
}

export default SingleBlogpageLink